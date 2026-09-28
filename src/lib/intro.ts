// Intro film shown after the preloader click (see components/IntroFilm.tsx).

export const INTRO_SEEN_KEY = 'anvela-intro-seen';
export const INTRO_LENGTH = 23.8;

// The film's music is the site's own track (/audio/ambient.mp3) from this point on,
// so the site music can pick up exactly where the film leaves off.
export const INTRO_MUSIC_OFFSET = 80.557;

// First visit only. `?intro` in the URL replays it (handy for demos).
export function shouldPlayIntro(): boolean {
  if (typeof window === 'undefined') return false;
  if (new URLSearchParams(window.location.search).has('intro')) return true;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (connection?.saveData) return false;
  try {
    return !window.localStorage.getItem(INTRO_SEEN_KEY);
  } catch {
    return true;
  }
}
