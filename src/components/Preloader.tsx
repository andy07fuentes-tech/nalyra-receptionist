import { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAudio } from '../contexts/AudioContext';
import { GradientButton } from './ui/gradient-button';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Simplified Background Fog Layer
function FogLayer({ phase }: { phase: 'loading' | 'ready' | 'fading' }) {
  const fogRef1 = useRef<HTMLDivElement>(null);
  const fogRef2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const refs = [fogRef1, fogRef2];
    refs.forEach((ref, i) => {
      if (ref.current) {
        gsap.to(ref.current, {
          x: '+=120',
          y: '+=60',
          duration: 25 + i * 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    });
    
    // Mouse parallax for fog
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.04;
      const y = (e.clientY - window.innerHeight / 2) * 0.04;
      gsap.to(fogRef1.current, { x: x * 0.5, y: y * 0.5, duration: 1.5 });
      gsap.to(fogRef2.current, { x: x * 0.8, y: y * 0.8, duration: 2 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-2000 ${phase === 'ready' ? 'opacity-100' : 'opacity-40'}`}>
      <div ref={fogRef1} className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,transparent_60%)] blur-[120px] opacity-20" />
      <div ref={fogRef2} className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[100%] bg-[radial-gradient(circle,rgba(230,240,255,0.2)_0%,transparent_50%)] blur-[180px] opacity-30" />
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
  const brandNameRef = useRef<HTMLHeadingElement>(null);
  const subnameRef = useRef<HTMLParagraphElement>(null);
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lightRayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (phase === 'loading') {
      const tl = gsap.timeline({
        onComplete: () => setPhase('ready')
      });

      // Show container immediately
      tl.set(brandRef.current, { opacity: 1 });

      // Luminous character blur reveal — "ANVELA" letter by letter
      const chars = brandNameRef.current?.querySelectorAll('.brand-char');
      if (chars?.length) {
        tl.fromTo(chars,
          { opacity: 0, filter: 'blur(20px)' },
          { opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power2.out', stagger: 0.08 },
          0
        );
      }

      // Subname bloom (whole element — gradient-clip breaks if split into spans)
      tl.fromTo(subnameRef.current,
        { opacity: 0, filter: 'blur(12px)', y: 4 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power2.out' },
        0.35
      );

      // Line container fade-in + fill
      tl.fromTo(lineContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        0.2
      );
      tl.fromTo(lineRef.current,
        { width: '0%' },
        { width: '100%', duration: 1.8, ease: 'none' },
        0.2
      );

      // Fade out both at 2.4s
      tl.to([brandRef.current, lineContainerRef.current],
        { opacity: 0, y: -10, duration: 0.6, ease: 'power2.in' },
        2.4
      );
    }
  }, [phase]);

  // Breathing Motion & Cinematic Background
  useGSAP(() => {
    if (phase === 'ready' && containerRef.current && buttonContainerRef.current) {
      // Cinematic background shift - Deep Black
      gsap.to(containerRef.current, {
        backgroundColor: '#000000',
        duration: 3,
        ease: 'power2.out'
      });

      // Subtle Ray of Light Reveal
      gsap.fromTo(lightRayRef.current,
        { opacity: 0, scaleY: 0, transformOrigin: 'top' },
        { opacity: 0.3, scaleY: 1.5, duration: 3, ease: 'power2.out', delay: 0.2 }
      );

      // Smooth Focus Reveal for the Button - No Bounce
      gsap.fromTo(buttonContainerRef.current,
        { 
          opacity: 0, 
          scale: 0.9,
          filter: 'blur(20px)',
          y: 20
        },
        { 
          opacity: 1, 
          scale: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 2,
          ease: 'power3.out',
          delay: 0.5
        }
      );

      // Brand Name floating reveal
      if (brandRef.current) {
        gsap.to(brandRef.current, {
          y: -120,
          opacity: 0.9,
          color: '#ffffff',
          duration: 1.5,
          ease: 'power3.out'
        });

        gsap.fromTo(brandRef.current, 
          { filter: 'brightness(0.8)' },
          { 
            filter: 'brightness(1.5)', 
            duration: 3, 
            repeat: -1, 
            yoyo: true, 
            ease: 'sine.inOut' 
          }
        );
      }

      // Continuous "Breathing" Motion
      const breatheTimeline = gsap.timeline({ repeat: -1, yoyo: true });
      breatheTimeline.to(buttonContainerRef.current, {
        scale: 1.03,
        duration: 3,
        ease: 'sine.inOut'
      });

      const handleMouseMove = (e: MouseEvent) => {
        const btn = buttonContainerRef.current;
        if (!btn) return;

        const rect = btn.getBoundingClientRect();
        const btnX = rect.left + rect.width / 2;
        const btnY = rect.top + rect.height / 2;

        const distanceX = (e.clientX - btnX) * 0.1;
        const distanceY = (e.clientY - btnY) * 0.1;
        
        gsap.to(btn, {
          x: distanceX,
          y: distanceY,
          duration: 1,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        breatheTimeline.kill();
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
      <FogLayer phase={phase} />

      {/* Ray of Light Beam */}
      <div 
        ref={lightRayRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-3xl pointer-events-none z-10"
      />

      {/* Brand Name */}
      <div 
        ref={brandRef}
        className="text-center px-6 z-20 opacity-0" 
      >
        <h1 ref={brandNameRef} className="font-serif text-2xl md:text-4xl text-dark-theme tracking-[0.1em] mb-1 uppercase">
          {t('preloader.brandName').split('').map((char: string, i: number) => (
            <span key={i} className="brand-char inline-block">{char === ' ' ? ' ' : char}</span>
          ))}
        </h1>
        <p ref={subnameRef} className="font-script text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
          {t('preloader.brandSubname')}
        </p>
      </div>

      {/* Loading Line */}
      <div 
        ref={lineContainerRef}
        className={`mt-8 w-32 h-[1px] bg-slate-100/20 overflow-hidden opacity-0 ${phase === 'ready' ? 'hidden' : ''}`}
      >
        <div 
          ref={lineRef}
          className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" 
        />
      </div>

      {/* Action Button - Refined & Centered Container */}
      <div 
        ref={buttonContainerRef}
        className={`absolute inset-0 flex flex-col items-center justify-center gap-5 transition-opacity duration-1000 z-30 ${phase === 'ready' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="relative group">
          {/* Subtle Energy Aura */}
          <div className="absolute inset-0 bg-blue-300/20 blur-[80px] rounded-full animate-pulse transition-opacity duration-1000 group-hover:opacity-60" />
          
          <GradientButton 
            variant="variant" 
            onClick={handleStart}
            className="group px-7 py-3.5 rounded-full shadow-2xl active:scale-95 border-0 relative overflow-hidden transition-all duration-700"
          >
            {/* Inner focus highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            
            <span className="flex items-center gap-3.5 text-white font-serif text-base md:text-lg tracking-[0.2em] relative z-10 uppercase">
              <Play className="w-4 h-4 fill-current" />
              {t('preloader.enterButton')}
            </span>
          </GradientButton>
        </div>
        <p className="text-[9px] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-[0.6em] animate-pulse font-bold">
          {t('preloader.tagline')}
        </p>
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_80%)] pointer-events-none z-0" />
    </div>
  );
}
