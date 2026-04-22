# Hero Video Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Spline 3D sphere in the Hero section with a looping cinematic AI robot video background, plus film grain overlay and a breathing blue glow effect.

**Architecture:** All changes are confined to `src/sections/Hero.tsx`. The Spline scene, its lazy-load `inView` guard, and `Suspense` fallback are removed and replaced with a `<video>` element. Two new visual layers are added inline: an SVG film grain filter and a CSS-animated blue radial glow. Desktop text alignment shifts right so it floats over the dark space beside the robot.

**Tech Stack:** React, Tailwind CSS, Framer Motion (already installed), GSAP (existing scroll behavior untouched), inline SVG filter for grain, CSS keyframe animation for glow pulse.

---

## Files

| File | Action |
|------|--------|
| `src/sections/Hero.tsx` | Modify — remove Spline, add video + grain + glow + text shift |
| `public/images/hero-robot.mp4` | Already in place (3.2MB, copied from Downloads) |

---

### Task 1: Remove Spline and replace with video background

**Files:**
- Modify: `src/sections/Hero.tsx`

- [ ] **Step 1: Remove Spline imports and the `useInView` hook**

In `src/sections/Hero.tsx`, delete these import lines:

```tsx
import Spline from '@splinetool/react-spline';
import { useInView } from '../hooks/useInView';
```

Also remove the `inView` usage from the component body:
```tsx
// DELETE this line:
const [inViewRef, inView] = useInView({ threshold: 0.05 });
```

And remove the `inViewRef` assignment from the section ref callback (the section only needs `sectionRef` now):
```tsx
// BEFORE:
ref={(el) => {
  if (sectionRef.current !== el) {
    (sectionRef as any).current = el;
  }
  if (inViewRef.current !== el) {
    (inViewRef as any).current = el;
  }
}}

// AFTER:
ref={sectionRef}
```

- [ ] **Step 2: Replace the Spline background div with a video element**

Find the block that starts with `{/* Background: Spline 3D Scene */}` and replace the entire inner content:

```tsx
{/* Background: AI Robot Video */}
<div className="absolute inset-0 z-0 overflow-hidden bg-black">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover object-left"
    src="/images/hero-robot.mp4"
  />

  {/* Cinematic Overlays */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-10" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_50%)] pointer-events-none z-10" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.15)_0%,_transparent_50%)] pointer-events-none z-10" />
</div>
```

Note: `object-left` anchors the video so the robot (left side of frame) stays in view on any screen size. The mobile edge-fade radial gradient is removed — not needed with a video.

- [ ] **Step 3: Verify dev server compiles with no errors**

Run: `npm run dev`

Expected: No TypeScript errors, no console errors. The hero should show the video playing on a dark background with gradient overlays.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Hero.tsx
git commit -m "feat: replace Spline hero background with AI robot video"
```

---

### Task 2: Add film grain overlay

**Files:**
- Modify: `src/sections/Hero.tsx`

- [ ] **Step 1: Add the SVG grain filter and overlay div**

Inside the `<section>` element, directly after the closing `</div>` of the video background block (before the content div), add:

```tsx
{/* Film grain */}
<svg className="absolute w-0 h-0">
  <filter id="hero-grain">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.65"
      numOctaves="3"
      stitchTiles="stitch"
    />
    <feColorMatrix type="saturate" values="0" />
  </filter>
</svg>
<div
  className="absolute inset-0 pointer-events-none z-[15]"
  style={{ filter: 'url(#hero-grain)', opacity: 0.12 }}
/>
```

- [ ] **Step 2: Verify grain is visible**

Check localhost in browser. The hero should have a subtle film noise texture over the video. If it's too strong, lower opacity to `0.08`. If invisible, raise to `0.15`.

- [ ] **Step 3: Commit**

```bash
git add src/sections/Hero.tsx
git commit -m "feat: add film grain overlay to hero"
```

---

### Task 3: Add breathing blue glow behind robot

**Files:**
- Modify: `src/sections/Hero.tsx`

- [ ] **Step 1: Add the glow keyframe animation to `src/index.css`**

Open `src/index.css` and add this at the bottom:

```css
@keyframes hero-glow-pulse {
  0%, 100% { opacity: 0.10; }
  50%       { opacity: 0.28; }
}

.hero-glow {
  animation: hero-glow-pulse 4s ease-in-out infinite;
}
```

- [ ] **Step 2: Add the glow div inside the video background block**

Inside the video background `<div>`, after the `<video>` element and before the cinematic overlay divs, add:

```tsx
{/* Blue breathing glow — sits behind robot on left */}
<div
  className="hero-glow absolute inset-0 pointer-events-none z-[5]"
  style={{
    background: 'radial-gradient(ellipse 55% 70% at 30% 55%, rgba(59,130,246,0.22) 0%, transparent 70%)',
  }}
/>
```

The gradient is centered at `30% 55%` — left-center of the frame, where the robot sits.

- [ ] **Step 3: Verify glow is visible**

Check localhost. You should see a soft blue pulse emanating from the robot's area, cycling slowly. It should be subtle — atmospheric, not neon.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Hero.tsx src/index.css
git commit -m "feat: add breathing blue glow to hero robot"
```

---

### Task 4: Shift desktop text layout to the right

**Files:**
- Modify: `src/sections/Hero.tsx`

- [ ] **Step 1: Update the content wrapper alignment**

Find the content wrapper div (has `ref={contentRef}`):

```tsx
// BEFORE:
<div ref={contentRef} className="relative z-20 flex flex-col items-center justify-center h-full pt-16 md:pt-10 pb-32 md:pb-20 px-4 w-full text-center">
```

Replace with:

```tsx
// AFTER:
<div ref={contentRef} className="relative z-20 flex flex-col items-center lg:items-end justify-center h-full pt-16 md:pt-10 pb-32 md:pb-20 px-4 lg:pr-16 w-full text-center lg:text-right">
```

This shifts content to the right on `lg` screens (1024px+), floating text over the dark empty right side of the video. Mobile and tablet remain centered.

- [ ] **Step 2: Constrain text width on desktop so it doesn't stretch too wide**

Wrap the text group (script accent + divider + title + CTAs + stats) in a max-width container. The inner content of each element stays exactly as-is in the current file — only the wrapper div is new:

```tsx
{/* Text group — constrained on desktop */}
<div className="w-full lg:max-w-lg">
  {/* Script accent */}
  <div className={`transition-all ...`}>
    ...
  </div>

  {/* Divider line */}
  <div className={`my-4 ...`} />

  {/* Main Title */}
  <h1 ...>...</h1>

  {/* Main CTA */}
  <div className={`mt-6 ...`}>...</div>

  {/* Secondary CTAs */}
  <div className={`mt-6 flex ...`}>...</div>

  {/* Stats */}
  <div className={`mt-10 ...`}>...</div>
</div>
```

- [ ] **Step 3: Check layout on desktop and mobile**

On desktop (≥1024px): text should sit on the right half, robot visible on the left.
On mobile: text centered, robot fills background naturally.

Resize the browser window to verify both breakpoints look correct.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Hero.tsx
git commit -m "feat: shift hero text right on desktop to reveal robot"
```

---

### Task 5: Final visual polish and push

**Files:**
- Modify: `src/sections/Hero.tsx` (minor tweaks if needed)

- [ ] **Step 1: Remove the animated gradient background divs**

The existing animated gradient background (lines with `from-[#0a0a0a] via-[#141414]`) is no longer needed — the video provides the dark background. Find and remove this block:

```tsx
{/* DELETE — video replaces this */}
<div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1a1a2e]" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.15)_0%,_transparent_50%)]" />
</div>
```

- [ ] **Step 2: Full visual check**

Open localhost, check:
- Video plays and loops seamlessly
- Film grain is visible but subtle
- Blue glow pulses slowly behind the robot
- Desktop: text on the right, robot on the left
- Mobile: text centered, dark video fills screen
- Scroll: GSAP fly-through still works (content scales + blurs out as you scroll)
- Phase entrance animations still fire correctly (script accent, title, CTAs, stats all fade in)

- [ ] **Step 3: Push to production**

```bash
git add -A
git push
```

Expected: Vercel deploys within ~60 seconds. Check anvela.ca on phone and desktop.
