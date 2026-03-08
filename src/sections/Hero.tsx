import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Suspense, lazy } from 'react';
import gsap from 'gsap';

const Spline = lazy(() => import('@splinetool/react-spline'));
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

export function Hero({ isReady }: { isReady: boolean }) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);

  // Build count-up hooks from stats config
  const stats = [
    { value: 100, suffix: "%", label: t('hero.stats.calls.label') },
    { value: 24, suffix: "/7", label: t('hero.stats.availability.label') },
    { value: 50, suffix: "%", label: t('hero.stats.savings.label') },
  ];

  const count0 = useCountUp(stats[0]?.value ?? 0, 2000, phase >= 4);
  const count1 = useCountUp(stats[1]?.value ?? 0, 2200, phase >= 4);
  const count2 = useCountUp(stats[2]?.value ?? 0, 1800, phase >= 4);
  const counts = [count0, count1, count2];

  // GSAP ScrollTrigger animation
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 600);
    const t3 = setTimeout(() => setPhase(3), 1200);
    const t4 = setTimeout(() => setPhase(4), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [isReady]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const mainTitle = t('hero.mainTitle') as string;
  const titleLines = mainTitle.split('\n');

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1a1a2e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.15)_0%,_transparent_50%)]" />
      </div>

      {/* Background 3D Spline Integration */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black flex justify-center items-center">
        <div className="w-full h-full animate-heartbeat-scale flex items-center justify-center">
          <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">Loading 3D...</div>}>
            <Spline scene="https://prod.spline.design/LtzKN5G7iNd46w9T/scene.splinecode" />
          </Suspense>
        </div>
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-blue-900/5 to-black/80 pointer-events-none z-10" />

        {/* Blue Aura: This creates the heartbeat pulse effect */}
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-color pointer-events-none z-10 animate-heartbeat-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.2)_0%,_transparent_65%)] mix-blend-screen pointer-events-none z-10 animate-heartbeat-glow" />
      </div>

      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-float shadow-[0_0_8px_rgba(96,165,250,0.8)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 flex flex-col items-center justify-center h-full pb-16 md:pb-20 px-4 w-full text-center">
        {/* Script accent */}
        <div className={`transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-script text-4xl md:text-5xl lg:text-6xl text-blue-400">
            {t('hero.scriptText')}
          </span>
        </div>

        {/* Divider line */}
        <div className={`my-6 h-px bg-blue-500/50 transition-all duration-1000 ease-out ${phase >= 2 ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.2s' }} />

        {/* Main Title */}
        <h1 className={`font-serif text-[2.4rem] md:text-5xl lg:text-7xl xl:text-8xl text-white leading-tight md:leading-[1.05] tracking-wide transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
          {titleLines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>

        {/* CTA */}
        <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button
            onClick={() => scrollToSection('#video-promo')}
            className="group relative py-3 px-8 overflow-hidden border border-white/10 transition-all duration-500 hover:border-blue-400/50 min-w-[200px]"
            aria-label={t('hero.videoDemo') as string}
          >
            {/* Background Fill on Hover */}
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

            <div className="relative z-10 flex flex-col items-start gap-0.5">
              <span className="text-[7px] md:text-[8px] tracking-[0.4em] text-blue-400 group-hover:text-white/60 transition-colors uppercase font-sans">01 // DEMO</span>
              <span className="font-serif text-lg md:text-2xl text-white flex items-center gap-3">
                {t('hero.videoDemo')}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-white transition-colors" />
          </button>

          <button
            onClick={() => scrollToSection('#pricing')}
            className="group relative py-3 px-8 overflow-hidden border border-white/10 transition-all duration-500 hover:border-cyan-400/50 min-w-[200px]"
            aria-label={t('hero.prices') as string}
          >
            {/* Background Fill on Hover - Different Color */}
            <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

            <div className="relative z-10 flex flex-col items-start gap-0.5">
              <span className="text-[7px] md:text-[8px] tracking-[0.4em] text-cyan-400 group-hover:text-white/60 transition-colors uppercase font-sans">02 // PLANS</span>
              <span className="font-serif text-lg md:text-2xl text-white flex items-center gap-3">
                {t('hero.prices')}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-white transition-colors" />
          </button>
        </div>

        {/* Stats */}
        <div className={`mt-12 transition-all duration-1000 ease-out ${phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-2xl md:text-5xl text-blue-500 mb-1 tabular-nums">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent z-30 pointer-events-none" />

      {/* Side decorative */}
      <div className={`absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 transition-opacity duration-1000 z-30 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        <span className="text-blue-500 text-xs tracking-widest" style={{ writingMode: 'vertical-lr' }}>{t('hero.decorativeText')}</span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
      </div>
    </section>
  );
}
