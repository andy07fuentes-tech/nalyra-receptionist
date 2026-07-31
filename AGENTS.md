# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, localhost:5173)
npm run build      # Type-check + production build → dist/
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test suite exists. Verify UI changes by running `npm run dev` and checking in a browser.

## Architecture

**Single-page app** — React 19 + TypeScript + Vite. Three routes: `/` (LandingPage), `/onboarding` (OnboardingPage), `/privacy` (PrivacyPage).

### Content / i18n

All visible text lives in `src/i18n/translations.ts`. The app supports `fr | en | es | it` via `LanguageContext`. Default language is French (`fr`). The `t('some.key')` function falls back to `fr` if a key is missing in the active language. When adding new copy, add it to all four language objects in `translations.ts`.

`src/config.ts` is a legacy config file from the original "Villa" template — it still contains English placeholder data that has largely been superseded by `translations.ts`. Sections that have been migrated use `useLanguage()` + `t()`; those that haven't still read from `config.ts` directly.

### Section layout

`LandingPage.tsx` composes all sections in order: Navigation → Hero → MissedCalls → CinematicShowcase → PainPoints → VideoDemo → FeatureShowcase → HorizontalGallery → AnvelaAdvantage → AlbumCube → SolutionShowcase → Pricing → FAQ → Founder → ContactForm → Footer.

Each section is a self-contained file in `src/sections/`. They read translations with `useLanguage()` and animate themselves — do not add global scroll triggers for sections that manage their own animations.

### Animation rules

Two animation systems coexist — do not mix them within the same element:

- **GSAP + ScrollTrigger**: used for section-level entrance animations in `LandingPage.tsx` and complex motion (Hero, CinematicShowcase, PainPoints). GSAP is registered once in `App.tsx` and again at the top of `LandingPage.tsx`.
- **Framer Motion**: used inside individual sections (Pricing, some cards). Import from `framer-motion`.
- **IntersectionObserver** (`useInView` hook): lightweight scroll trigger for simple fade/slide-in within sections.

`#pain-points` is explicitly excluded from GSAP section-level transitions because CSS `sticky` breaks under GSAP `transform`. Keep this exclusion.

### Contexts

- `LanguageContext` — active language + `t()` resolver. Wraps the entire app in `main.tsx`.
- `AudioContext` — background ambient audio (`/audio/ambient.mp3`). Provides `play/pause`, `isMuted`, and `isDimmed` (volume duck). Used by Navigation for the mute toggle and by VideoDemo/Retell call sections to duck audio during calls.

### Retell AI (live demo call)

`Navigation.tsx` integrates `RetellWebClient` from `retell-client-js-sdk`. The "Parler à Anvela" button starts a web call to the Retell agent. The agent ID is hardcoded in Navigation — update it there when switching agents.

### Design tokens

Defined in `tailwind.config.js`:
- **Fonts**: `font-serif` = Cormorant Garamond, `font-sans` = Poppins, `font-script` = Qwitcher Grypen
- **Brand palette**: `gold-{300-700}`, `wine-{100-900}` (near-blacks), `blue-{100-900}` (custom cyan-blue scale, not Tailwind default)
- **Page background**: `bg-slate-50` (LandingPage main), dark sections use `bg-wine-900` / `bg-wine-800`

### Deployment

Deployed on Vercel. `vercel.json` rewrites all routes to `index.html` for client-side routing. Build output goes to `dist/`.
