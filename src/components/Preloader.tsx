import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAudio } from '../contexts/AudioContext';
import { GradientButton } from './ui/gradient-button';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Fog Layer Component
function FogLayer({ phase, type }: { phase: 'loading' | 'ready' | 'fading', type: 'bg' | 'fg' }) {
  const fogRef1 = useRef<HTMLDivElement>(null);
  const fogRef2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const refs = [fogRef1, fogRef2];
    refs.forEach((ref, i) => {
      if (ref.current) {
        gsap.to(ref.current, {
          x: type === 'bg' ? '+=100' : '+=150',
          y: type === 'bg' ? '+=50' : '+=80',
          duration: type === 'bg' ? (20 + i * 5) : (15 + i * 3),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    });
    
    // Mouse parallax for fog
    const handleMouseMove = (e: MouseEvent) => {
      const factor = type === 'bg' ? 0.03 : 0.08;
      const x = (e.clientX - window.innerWidth / 2) * factor;
      const y = (e.clientY - window.innerHeight / 2) * factor;
      
      gsap.to(fogRef1.current, { x: x * 0.5, y: y * 0.5, duration: 1 });
      gsap.to(fogRef2.current, { x: x * 0.8, y: y * 1.2, duration: 1.2 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [type]);

  if (type === 'bg') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-2000 ${phase === 'ready' ? 'opacity-100' : 'opacity-40'}`}>
        <div ref={fogRef1} className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)] blur-[100px] opacity-20" />
        <div ref={fogRef2} className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[100%] bg-[radial-gradient(circle,rgba(230,240,255,0.3)_0%,transparent_50%)] blur-[150px] opacity-30" />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-[100] transition-opacity duration-2000 ${phase === 'ready' ? 'opacity-100' : 'opacity-0'}`}>
      <div ref={fogRef1} className="absolute top-[30%] left-[-20%] w-[150%] h-[60%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.7)_0%,transparent_70%)] blur-[80px] opacity-50" />
      <div ref={fogRef2} className="absolute bottom-[20%] right-[-20%] w-[140%] h-[50%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.6)_0%,transparent_75%)] blur-[100px] opacity-40" />
    </div>
  );
}

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const { play, setIsMuted } = useAudio();

  const [phase, setPhase] = useState<'loading' | 'ready' | 'fading'>('loading');
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const lightRayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show the "Ready" button after the initial animation
    const readyTimer = setTimeout(() => setPhase('ready'), 2200);
    return () => clearTimeout(readyTimer);
  }, []);

  // Magnetic Button Effect & Cinematic Background
  useGSAP(() => {
    if (phase === 'ready' && containerRef.current && buttonContainerRef.current) {
      // Cinematic background shift - Deep Black
      gsap.to(containerRef.current, {
        backgroundColor: '#000000',
        duration: 3,
        ease: 'power2.out'
      });

      // Ray of Light Reveal - Brighter
      gsap.fromTo(lightRayRef.current,
        { opacity: 0, scaleY: 0, scaleX: 0.5, transformOrigin: 'top' },
        { opacity: 0.5, scaleY: 2, scaleX: 1.5, duration: 2.5, ease: 'power4.out', delay: 0.1 }
      );

      // Focus Reveal Animation for the Button
      gsap.fromTo(buttonContainerRef.current,
        { 
          opacity: 0, 
          scale: 0.6, 
          filter: 'blur(30px)', 
          y: 60 
        },
        { 
          opacity: 1, 
          scale: 1, 
          filter: 'blur(0px)', 
          y: 0, 
          duration: 2, 
          ease: 'back.out(1.2)', 
          delay: 0.5 
        }
      );

      // Brand Name floating reveal
      if (brandRef.current) {
        gsap.to(brandRef.current, {
          y: -140,
          opacity: 1,
          color: '#ffffff',
          duration: 1.5,
          ease: 'power3.out'
        });

        gsap.fromTo(brandRef.current, 
          { filter: 'brightness(0.8)' },
          { 
            filter: 'brightness(1.5)', 
            duration: 2.5, 
            repeat: -1, 
            yoyo: true, 
            ease: 'sine.inOut' 
          }
        );
      }

      // Continuous Floating Animation
      const floatTimeline = gsap.timeline({ repeat: -1, yoyo: true });
      floatTimeline.to(buttonContainerRef.current, {
        y: -12,
        rotation: 1,
        duration: 2.5,
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

        if (distance < 250) {
          gsap.to(btn, {
            x: distanceX * 0.12,
            y: distanceY * 0.12,
            duration: 0.4,
            ease: 'power2.out'
          });
        } else {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
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
      {/* Background Fog */}
      <FogLayer phase={phase} type="bg" />

      {/* Ray of Light Beam */}
      <div 
        ref={lightRayRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-[120px] pointer-events-none z-10"
      />

      {/* Brand Name */}
      <div 
        ref={brandRef}
        className={`preloader-text text-center px-6 transition-all duration-1000 z-20 ${phase === 'ready' ? '' : ''}`} 
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
        className={`absolute inset-0 flex flex-col items-center justify-center gap-8 transition-opacity duration-1000 z-30 ${phase === 'ready' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="relative group">
          {/* Energy Pulse Aura */}
          <div className="absolute inset-0 bg-blue-300/40 blur-[120px] rounded-full animate-pulse scale-150 transition-opacity duration-1000 group-hover:opacity-80" />
          
          <GradientButton 
            variant="variant" 
            onClick={handleStart}
            className="group px-14 py-7 rounded-full shadow-2xl hover:scale-110 active:scale-95 border-0 relative overflow-hidden transition-all duration-500"
          >
            {/* Inner button focus sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
            
            <span className="flex items-center gap-5 text-white font-serif text-3xl tracking-[0.15em] relative z-10 uppercase">
              <Play className="w-7 h-7 fill-current" />
              {t('preloader.enterButton')}
            </span>
          </GradientButton>
        </div>
        <p className="text-[12px] text-slate-400 uppercase tracking-[0.5em] animate-pulse">
          Experience Ambient Audio
        </p>
      </div>

      {/* Foreground Fog - Passes in front of everything */}
      <FogLayer phase={phase} type="fg" />

      {/* Subtle background glow override */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_80%)] pointer-events-none z-0" />
    </div>
  );
}
