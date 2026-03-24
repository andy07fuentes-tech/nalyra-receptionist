import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAudio } from '../contexts/AudioContext';
import { GradientButton } from './ui/gradient-button';
import { Play } from 'lucide-react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const { play, setIsMuted } = useAudio();

  const [phase, setPhase] = useState<'loading' | 'ready' | 'fading'>('loading');

  useEffect(() => {
    // Show the "Ready" button after the initial animation
    const readyTimer = setTimeout(() => setPhase('ready'), 2200);
    return () => clearTimeout(readyTimer);
  }, []);

  const handleStart = () => {
    setIsMuted(false);
    play();
    setPhase('fading');
    setTimeout(() => onComplete(), 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-all duration-1000 ${phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      {/* Brand Name - Using the original 'preloader-text' animation from index.css */}
      <div className={`preloader-text text-center px-6 transition-all duration-1000 ${phase === 'ready' ? 'translate-y-[-20px]' : ''}`} style={{ animationDelay: '0.2s' }}>
        <h1 className="font-serif text-3xl md:text-5xl text-dark-theme tracking-[0.1em] mb-2 uppercase">
          {t('preloader.brandName')}
        </h1>
        <p className="font-script text-3xl text-blue-600 italic">
          {t('preloader.brandSubname')}
        </p>
      </div>

      {/* Loading Line - The elegant drawing line effect */}
      <div className={`mt-10 w-64 h-[1px] bg-slate-100 overflow-hidden transition-all duration-1000 ${phase === 'ready' ? 'opacity-0 scale-x-0' : 'opacity-100'}`}>
        <div className="preloader-line h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Action Button - Appears when ready */}
      <div className={`absolute bottom-[25%] transition-all duration-1000 flex flex-col items-center gap-4 ${phase === 'ready' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <GradientButton 
          variant="variant" 
          onClick={handleStart}
          className="group px-8 py-4 rounded-full shadow-xl hover:scale-105 active:scale-95 border-0"
        >
          <span className="flex items-center gap-3 text-white font-serif text-xl tracking-wide">
            <Play className="w-5 h-5 fill-current" />
            {t('preloader.enterButton')}
          </span>
        </GradientButton>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] animate-pulse">
          Experience Ambient Audio
        </p>
      </div>

      {/* Footer text */}
      <p
        className={`preloader-text mt-6 text-[10px] text-slate-400 uppercase tracking-[0.4em] font-sans transition-all duration-1000 ${phase === 'ready' ? 'opacity-0' : ''}`}
        style={{ animationDelay: '0.5s' }}
      >
        {t('preloader.yearText')}
      </p>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
}
