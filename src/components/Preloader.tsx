import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAudio } from '../contexts/AudioContext';
import { GradientButton } from './ui/gradient-button';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const { play, setIsMuted } = useAudio();

  const [phase, setPhase] = useState<'loading' | 'ready' | 'fading'>('loading');
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show the "Ready" button after the initial animation
    const readyTimer = setTimeout(() => setPhase('ready'), 2200);
    return () => clearTimeout(readyTimer);
  }, []);

  // Magnetic Button Effect & Cinematic Background
  useGSAP(() => {
    if (phase === 'ready' && containerRef.current && buttonContainerRef.current) {
      // Cinematic background shift
      gsap.to(containerRef.current, {
        backgroundColor: '#f8faff',
        duration: 2,
        ease: 'power2.out'
      });

      // Focus Reveal Animation for the Button
      gsap.fromTo(buttonContainerRef.current,
        { 
          opacity: 0, 
          scale: 0.8,
          filter: 'blur(15px)',
          y: 20
        },
        { 
          opacity: 1, 
          scale: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          delay: 0.2
        }
      );

      // Light sweep on brand name
      if (brandRef.current) {
        gsap.to(brandRef.current, {
          y: -100, // Move up more to make room for centered button
          duration: 1,
          ease: 'power3.out'
        });

        gsap.fromTo(brandRef.current, 
          { filter: 'brightness(1)' },
          { 
            filter: 'brightness(1.5)', 
            duration: 1.5, 
            repeat: -1, 
            yoyo: true, 
            ease: 'sine.inOut' 
          }
        );
      }

      // Continuous Floating Animation
      const floatTimeline = gsap.timeline({ repeat: -1, yoyo: true });
      floatTimeline.to(buttonContainerRef.current, {
        y: -10,
        duration: 2,
        ease: 'sine.inOut'
      });

      const handleMouseMove = (e: MouseEvent) => {
        const btn = buttonContainerRef.current;
        if (!btn) return;

        const rect = btn.getBoundingClientRect();
        const btnX = rect.left + rect.width / 2;
        const btnY = rect.top + rect.height / 2;

        const distanceX = e.clientX - btnX;
        const distanceY = e.clientY - btnY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 150) {
          gsap.to(btn, {
            x: distanceX * 0.15,
            y: distanceY * 0.15,
            duration: 0.3,
            ease: 'power2.out'
          });
        } else {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        floatTimeline.kill();
      };
    }
  }, [phase]);

  const handleStart = () => {
    setIsMuted(false);
    play();
    setPhase('fading');
    setTimeout(() => onComplete(), 600);
  };

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-all duration-1000 ${phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      {/* Brand Name */}
      <div 
        ref={brandRef}
        className={`preloader-text text-center px-6 transition-all duration-1000 ${phase === 'ready' ? '' : ''}`} 
        style={{ animationDelay: '0.2s' }}
      >
        <h1 className="font-serif text-3xl md:text-5xl text-dark-theme tracking-[0.1em] mb-2 uppercase">
          {t('preloader.brandName')}
        </h1>
        <p className="font-script text-3xl text-blue-600 italic">
          {t('preloader.brandSubname')}
        </p>
      </div>

      {/* Loading Line */}
      <div className={`mt-10 w-64 h-[1px] bg-slate-100 overflow-hidden transition-all duration-1000 ${phase === 'ready' ? 'opacity-0 scale-x-0' : 'opacity-100'}`}>
        <div className="preloader-line h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Action Button - Centered Container */}
      <div 
        ref={buttonContainerRef}
        className={`absolute inset-0 flex flex-col items-center justify-center gap-6 transition-opacity duration-500 ${phase === 'ready' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="relative group">
          {/* Energy Pulse Aura */}
          <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full animate-pulse scale-150 transition-opacity duration-1000 group-hover:opacity-60" />
          
          <GradientButton 
            variant="variant" 
            onClick={handleStart}
            className="group px-12 py-6 rounded-full shadow-2xl hover:scale-110 active:scale-95 border-0 relative overflow-hidden transition-transform duration-300"
          >
            {/* Inner button sweep effect */}
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            
            <span className="flex items-center gap-4 text-white font-serif text-2xl tracking-widest relative z-10 uppercase">
              <Play className="w-6 h-6 fill-current" />
              {t('preloader.enterButton')}
            </span>
          </GradientButton>
        </div>
        <p className="text-[11px] text-slate-400 uppercase tracking-[0.4em] animate-pulse">
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
}
