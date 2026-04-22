# Hero Redesign — Cinematic AI Robot Background

**Date:** 2026-04-22  
**Status:** Approved  
**Scope:** Replace Spline 3D sphere in Hero section with a cinematic AI robot still image + premium visual effects layer

---

## Goal

Replace the current Spline 3D background in `src/sections/Hero.tsx` with a high-quality AI robot image. Add a film grain overlay and a breathing blue glow to create a cinematic, premium feel inspired by raviklaassens.com — adapted to Anvela's brand (dark, professional, AI-forward).

---

## Asset

- **File:** User-provided AI robot image (dark humanoid robot, side profile, facing right, deep dark background)
- **Save to:** `public/images/hero-robot.jpg` (or `.png` depending on format Pablo drops in)
- **Composition:** Robot on the left half of the frame, dark empty space on the right — text overlays the right dark space on desktop

---

## Visual Layers (back to front)

1. **Base image** — `<img>` or `<div>` with `background-image`, `object-fit: cover`, `object-position: left center`. Full viewport.
2. **Existing gradient overlays** — keep as-is (`from-black/40 via-transparent to-black/80` top-to-bottom, radial blue/cyan accents). Already work perfectly with a dark image.
3. **Blue breathing glow** — CSS animated `radial-gradient` in Anvela blue (`rgba(59,130,246,0.18)`) centered on the left half (behind the robot). Uses the same keyframe pattern as the sticky gallery glow: slow 4s ease-in-out infinite pulse between 0.10 and 0.25 opacity.
4. **Film grain overlay** — SVG `feTurbulence` filter or CSS `url(#grain)` at ~12-15% opacity, animated at 8fps to simulate film noise. Covers the full viewport. `pointer-events: none`.
5. **Content layer** — all existing text, CTAs, stats unchanged. On desktop (`lg:`), text container shifts to `items-start text-left` with `max-w-xl pl-8` so it sits over the dark left space. On mobile, stays centered.

---

## Text Layout Change (desktop only)

Current: `items-center text-center`  
New (lg breakpoint): `lg:items-end lg:text-right lg:pr-16` — text floats over the dark right space, away from the robot

Stats row stays centered on both breakpoints (it spans the full width naturally).

---

## What Stays Unchanged

- GSAP pin + fly-through scroll effect (`scale → blur → opacity 0`) — no changes
- Phase-based entrance animation (4 phases, same timing)
- All text content: script accent, divider line, serif title, CTAs (primary + 2 secondary), stats
- Bottom fade gradient (white fade for transition to next section)
- Side decorative element (vertical blue line + text)
- Audio context (`play()` on hero ready)

---

## What Is Removed

- Spline 3D scene (`<Spline>` component + `inView` check + Suspense fallback)
- Spline import (`import Spline from '@splinetool/react-spline'`)
- The `useInView` hook import (only used for Spline lazy-load guard)
- Mobile edge-fade radial gradient (was Spline-specific, no longer needed)

---

## Film Grain Implementation

Inline SVG filter in the JSX:

```tsx
<svg className="absolute inset-0 w-0 h-0">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
    <feColorMatrix type="saturate" values="0" />
  </filter>
</svg>
<div
  className="absolute inset-0 pointer-events-none z-10"
  style={{ filter: 'url(#grain)', opacity: 0.13 }}
/>
```

Grain animation (random `baseFrequency` shift via a CSS animation on the `feTurbulence` seed — or simpler: a CSS `@keyframes` that shifts `opacity` between 0.10–0.15 at 8fps to simulate film flicker).

---

## Option B (follow-up, if Pablo wants more drama)

After Option A is live and reviewed, add a periodic blue glitch effect:
- A duplicate of the robot image clipped to a thin horizontal strip
- CSS `@keyframes` that occasionally shifts the clip horizontally by 8–15px for 80ms, then snaps back
- Blue `mix-blend-mode: screen` tint on the glitch layer
- Fires every ~4 seconds, lasts ~200ms total — subtle, not jarring

Option B is NOT part of this implementation. It's a separate pass if Pablo approves after seeing Option A live.

---

## Reversibility

All changes are in `src/sections/Hero.tsx` only. Git history preserves the current state. To revert: `git checkout HEAD~1 -- src/sections/Hero.tsx`.

---

## Files Modified

| File | Change |
|------|--------|
| `src/sections/Hero.tsx` | Remove Spline, add image + effects |
| `public/images/hero-robot.jpg` | New asset (Pablo provides) |
