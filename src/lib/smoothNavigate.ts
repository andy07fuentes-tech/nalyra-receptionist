/**
 * ANVELA — smooth section navigation (2026-11-25)
 *
 * Ported from studio.anvela.ca (client/src/lib/smoothNavigate.ts), adapted to
 * this site's Lenis smooth scroll.
 *
 * Why: the browser's native smooth scroll crosses the whole page in about a
 * second, so the pinned / scroll-driven sections (Cinematic, Pain Points…)
 * flash past and it reads as a jump.
 *
 * Two modes, picked by distance:
 *  - "glide"   short hops (< ~1.6 screens): eased scroll, ~0.7–1.1 s.
 *  - "curtain" long hops: a dark panel wipes up over the page with the
 *              destination's name, the page moves underneath while covered,
 *              then the panel wipes away revealing the section.
 * Reduced motion → instant jump.
 */
import type Lenis from 'lenis';
import { sectionLabel } from './sectionLabels';

type Target = string | number | HTMLElement;

interface NavigateOptions {
  mode?: 'auto' | 'glide' | 'curtain';
  label?: string;
}

const GLIDE_MAX_SCREENS = 1.6;
const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)';
const COVER_MS = 560;
const HOLD_MS = 220;
const REVEAL_MS = 640;

let lenis: Lenis | null = null;
let busy = false;

/** SmoothScroll registers its Lenis instance so jumps and glides go through it. */
export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function find(target: Target): HTMLElement | null {
  if (typeof target !== 'string') return typeof target === 'number' ? null : target;
  try { return document.querySelector<HTMLElement>(target); } catch { return null; }
}

/**
 * Where a section starts. A GSAP-pinned section (e.g. the hero) is shifted by
 * its pin, so measure its .pin-spacer wrapper instead — that never moves.
 */
const yOf = (el: HTMLElement) => {
  const spacer = el.parentElement?.classList.contains('pin-spacer') ? el.parentElement : null;
  return (spacer ?? el).getBoundingClientRect().top + window.scrollY;
};

function clampY(y: number) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return Math.max(0, Math.min(max, Math.round(y)));
}

/** Instant move, without CSS smooth scrolling or Lenis turning it into another animation. */
function jump(y: number) {
  if (lenis) {
    lenis.scrollTo(y, { immediate: true, force: true });
    return;
  }
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  window.scrollTo(0, y);
  html.style.scrollBehavior = prev;
}

function focusTarget(el: HTMLElement | null) {
  if (!el) return;
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

let glideRaf = 0;
function glide(toY: number, el: HTMLElement | null) {
  const dist = toY - window.scrollY;
  if (Math.abs(dist) < 2) { focusTarget(el); return; }
  const duration = Math.min(1100, Math.max(650, Math.abs(dist) * 0.55));

  if (lenis) {
    // Lenis already stops the glide when the visitor scrolls or swipes.
    lenis.scrollTo(toY, {
      duration: duration / 1000,
      easing: easeInOutCubic,
      force: true,
      onComplete: () => focusTarget(el),
    });
    return;
  }

  cancelAnimationFrame(glideRaf);
  const fromY = window.scrollY;
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  const t0 = performance.now();
  const stop = () => { cancelAnimationFrame(glideRaf); cleanup(); };
  const cleanup = () => {
    html.style.scrollBehavior = prev;
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
    window.removeEventListener('keydown', stop);
  };
  window.addEventListener('wheel', stop, { passive: true });
  window.addEventListener('touchstart', stop, { passive: true });
  window.addEventListener('keydown', stop);
  const tick = (now: number) => {
    const t = Math.min(1, (now - t0) / duration);
    window.scrollTo(0, fromY + dist * easeInOutCubic(t));
    if (t < 1) glideRaf = requestAnimationFrame(tick);
    else { cleanup(); focusTarget(el); }
  };
  glideRaf = requestAnimationFrame(tick);
}

function buildCurtain(label: string) {
  const root = document.createElement('div');
  root.className = 'page-curtain';
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = `
    <div class="page-curtain-inner">
      <span class="page-curtain-kicker">Anvela</span>
      <span class="page-curtain-label"></span>
      <span class="page-curtain-line"></span>
    </div>`;
  (root.querySelector('.page-curtain-label') as HTMLElement).textContent = label;
  document.body.appendChild(root);
  return root;
}

const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));
const wait = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));

async function curtain(toY: number, el: HTMLElement | null, label: string) {
  busy = true;
  const root = buildCurtain(label);
  lenis?.stop(); // no wheel/touch scrolling while covered
  try {
    // 1. Wipe up from the bottom until the page is covered.
    await nextFrame();
    const cover = root.animate(
      [{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)' }],
      { duration: COVER_MS, easing: EASE, fill: 'forwards' },
    );
    root.querySelector('.page-curtain-inner')?.animate(
      [{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 520, delay: 200, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'both' },
    );
    root.querySelector('.page-curtain-line')?.animate(
      [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
      { duration: 700, delay: 260, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'both' },
    );
    await cover.finished;

    // 2. Move the page while nobody can see it, let pinned sections settle.
    lenis?.start();
    jump(toY);
    await nextFrame();
    await nextFrame();
    await wait(HOLD_MS);
    // Pinned sections and lazy media can shift the target a little — correct until it holds.
    if (el) {
      for (let i = 0; i < 4; i++) {
        const fixed = clampY(yOf(el));
        if (Math.abs(fixed - window.scrollY) <= 2) break;
        jump(fixed);
        await wait(80);
      }
    }
    focusTarget(el);

    // 3. Wipe away upward, revealing the section.
    root.querySelector('.page-curtain-inner')?.animate(
      [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-36px)' }],
      { duration: 360, easing: 'cubic-bezier(0.7, 0, 0.84, 0)', fill: 'forwards' },
    );
    const reveal = root.animate(
      [{ clipPath: 'inset(0 0 0% 0)' }, { clipPath: 'inset(0 0 100% 0)' }],
      { duration: REVEAL_MS, delay: 120, easing: EASE, fill: 'forwards' },
    );
    await reveal.finished;
  } finally {
    root.remove();
    lenis?.start();
    busy = false;
  }
}

/**
 * Smoothly take the visitor to a section (selector, element or a Y position).
 * Returns false when the target doesn't exist.
 */
export function navigateTo(target: Target, opts: NavigateOptions = {}): boolean {
  if (busy) return true;
  const el = find(target);
  if (typeof target !== 'number' && !el) return false;
  const toY = clampY(typeof target === 'number' ? target : yOf(el!));

  if (prefersReducedMotion()) {
    jump(toY);
    focusTarget(el);
    return true;
  }

  const distance = Math.abs(toY - window.scrollY);
  const mode = opts.mode && opts.mode !== 'auto'
    ? opts.mode
    : distance <= window.innerHeight * GLIDE_MAX_SCREENS ? 'glide' : 'curtain';

  if (mode === 'glide') {
    glide(toY, el);
    return true;
  }

  const label = opts.label ?? sectionLabel(el?.id ?? '', document.documentElement.lang) ?? 'Anvela';
  void curtain(toY, el, label);
  return true;
}

/**
 * Catch plain same-page anchors (<a href="#pricing">) anywhere on the site so
 * links without their own handler get the same transition. Install once.
 */
export function installAnchorInterceptor() {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
    if (!a) return;
    const href = a.getAttribute('href') ?? '';
    if (href.length < 2) return;
    const el = find(href);
    if (!el) return;
    e.preventDefault();
    navigateTo(el);
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}
