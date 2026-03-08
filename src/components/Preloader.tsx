import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();

  const [phase, setPhase] = useState<'loading' | 'fading'>('loading');

  useEffect(() => {
    // Elegant timing to match the CSS keyframe animations (preloader-fade and preloader-line)
    const fadeTimer = setTimeout(() => setPhase('fading'), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-600 ${phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      {/* Brand Name - Using the original 'preloader-text' animation from index.css */}
      <div className="preloader-text text-center px-6" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-serif text-4xl md:text-5xl text-white tracking-[0.1em] mb-2 uppercase">
          {t('preloader.brandName')}
        </h1>
        <p className="font-script text-3xl text-blue-400 italic">
          {t('preloader.brandSubname')}
        </p>
      </div>

      {/* Loading Line - The elegant drawing line effect */}
      <div className="mt-10 w-64 h-[1px] bg-white/10 overflow-hidden">
        <div className="preloader-line h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Footer text */}
      <p
        className="preloader-text mt-6 text-[10px] text-white/30 uppercase tracking-[0.4em] font-sans"
        style={{ animationDelay: '0.5s' }}
      >
        {t('preloader.yearText')}
      </p>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,168,85,0.05)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
}
