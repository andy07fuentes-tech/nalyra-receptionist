// Intro film shown after the preloader click (see components/IntroFilm.tsx).

export const INTRO_LENGTH = 23.8;

// The film's music is the site's own track (/audio/ambient.mp3) from this point on,
// so the site music can pick up exactly where the film leaves off.
export const INTRO_MUSIC_OFFSET = 80.557;

// Plays on every visit after « Découvrir Anvela »; « Passer » is always there to skip it.
export function shouldPlayIntro(): boolean {
  return typeof window !== 'undefined';
}
