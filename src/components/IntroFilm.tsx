import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { INTRO_LENGTH, INTRO_MUSIC_OFFSET } from '../lib/intro';

const FADE_MS = 900;
const START_TIMEOUT_MS = 8000;

export interface IntroFilmHandle {
  /** Call synchronously inside the click that dismisses the preloader (unlocks sound on iOS). */
  start: () => boolean;
}

interface IntroFilmProps {
  /** Fired when the film ends or is skipped, with the matching point in /audio/ambient.mp3. */
  onFinish: (musicAt: number) => void;
}

export const IntroFilm = forwardRef<IntroFilmHandle, IntroFilmProps>(function IntroFilm({ onFinish }, ref) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<'idle' | 'playing' | 'leaving' | 'gone'>('idle');
  const finishedRef = useRef(false);
  const failedRef = useRef(false);
  const startedRef = useRef(false);
  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  });
  // Fill the screen on common laptop/desktop shapes (16:10 to ~2:1); anything else is letterboxed
  // so nothing in the frame (captions, the "real test call" tag) is ever cropped.
  const [{ format, fit }] = useState(() => {
    const ratio = window.innerWidth / window.innerHeight;
    return { format: ratio < 1 ? '9x16' : '16x9', fit: ratio >= 1.55 && ratio <= 1.95 ? 'object-cover' : 'object-contain' };
  });

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const video = videoRef.current;
    const at = Math.min(video?.currentTime ?? 0, INTRO_LENGTH);
    onFinishRef.current(INTRO_MUSIC_OFFSET + at);
    setState('leaving');

    // Quick audio fade so the hand-off to the site music is not a hard cut
    if (video && !video.paused) {
      const from = video.volume;
      const t0 = performance.now();
      const step = (now: number) => {
        const k = Math.min((now - t0) / 400, 1);
        video.volume = from * (1 - k);
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    window.setTimeout(() => {
      video?.pause();
      setState('gone');
    }, FADE_MS);
  }, []);

  useImperativeHandle(ref, () => ({
    start: () => {
      const video = videoRef.current;
      if (!video || failedRef.current) return false;
      video.muted = false;
      setState('playing');
      video.play().catch(() => finish());
      return true;
    },
  }), [finish]);

  // Never let a stalled download hold the page hostage
  useEffect(() => {
    if (state !== 'playing') return;
    const timer = window.setTimeout(() => { if (!startedRef.current) finish(); }, START_TIMEOUT_MS);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') finish(); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
    };
  }, [state, finish]);

  // A film that can't load steps aside: mid-play it hands over like a skip,
  // before the click it disappears and the site behaves as if there were no intro.
  const handleError = () => {
    failedRef.current = true;
    if (state === 'playing') finish();
    else if (state === 'idle') setState('gone');
  };

  if (state === 'gone') return null;

  return (
    <div
      className={`fixed inset-0 z-[9998] bg-[#05070a] transition-opacity ease-out ${state === 'leaving' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
      aria-hidden={state === 'idle'}
    >
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full ${fit}`}
        src={`/videos/intro/anvela-intro-${format}.mp4`}
        poster={`/videos/intro/anvela-intro-${format}-poster.jpg`}
        preload="auto"
        playsInline
        disablePictureInPicture
        aria-label={t('intro.ariaLabel')}
        onPlaying={() => { startedRef.current = true; }}
        onEnded={finish}
        onError={handleError}
      />
      {state === 'playing' && (
        <button
          type="button"
          onClick={finish}
          autoFocus
          className="absolute top-5 right-5 md:top-8 md:right-8 z-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm px-5 py-2 font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-white hover:border-blue-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
        >
          {t('intro.skip')}
        </button>
      )}
    </div>
  );
});
