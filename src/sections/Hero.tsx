import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useInView } from '../hooks/useInView';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Spline = lazy(() => import('@splinetool/react-spline'));

gsap.registerPlugin(ScrollTrigger);

// High-performance custom energy sphere for PC/Desktop
const EnergySphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      // Subtle organic pulsing
      const pulse = 1 + Math.sin(time * 1.5) * 0.03;
      meshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#2563eb"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.6}
          roughness={0.2}
          emissive="#06b6d4"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Outer Glow Layer */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>
    </Float>
  );
};

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
  const [inViewRef, inView] = useInView({ threshold: 0.05 });
  const contentRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect device for adaptive background
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Tablets and Phones get Spline
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      ref={(el) => {
        //@ts-ignore
        sectionRef.current = el;
        //@ts-ignore
        inViewRef.current = el;
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1a1a2e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.15)_0%,_transparent_50%)]" />
      </div>

      {/* Adaptive Background: New Spline on Mobile/Tablet, EnergySphere on Desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black flex justify-center items-center pointer-events-none">
        {inView && (
          isMobile ? (
            <div className="w-full h-full animate-heartbeat-scale flex items-center justify-center">
              <Suspense fallback={null}>
                <Spline scene="https://prod.spline.design/wdNxe8e0kiiEIC3T/scene.splinecode" />
              </Suspense>
            </div>
          ) : (
            <Canvas
              camera={{ position: [0, 0, 4.5], fov: 45 }}
              gl={{ antialias: true, powerPreference: 'high-performance' }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#60a5fa" />
                <spotLight position={[-10, 5, 5]} intensity={1.5} angle={0.3} color="#ffffff" />
                <EnergySphere />
                <Environment preset="night" />
              </Suspense>
            </Canvas>
          )
        )}

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-blue-900/5 to-black/80 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-color pointer-events-none z-10 animate-heartbeat-glow" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 flex flex-col items-center justify-center h-full pb-16 md:pb-20 px-4 w-full text-center">
        {/* Script accent */}
        <div className={`transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} mb-2 mt-4`}>
          <span className="font-script text-3xl md:text-4xl lg:text-5xl text-blue-400">
            {t('hero.scriptText')}
          </span>
        </div>

        {/* Divider line */}
        <div className={`my-8 h-px bg-blue-500/50 transition-all duration-1000 ease-out ${phase >= 2 ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.2s' }} />

        {/* Main Title */}
        <h1 className={`font-serif text-[1.6rem] md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] md:leading-[1.1] tracking-wide transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
          {titleLines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>

        {/* Main CTA: Start Onboarding */}
        <div className={`mt-10 transition-all duration-1000 ease-out ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.4s' }}>
          <Link
            to="/onboarding"
            className="group relative inline-flex items-center gap-4 bg-blue-600 px-10 py-5 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-500 hover:bg-blue-500 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] tracking-[0.3em] text-white/60 mb-1 uppercase font-bold">Start 14-Day Trial</span>
              <span className="font-serif text-xl md:text-2xl text-white">Get Started with Nalyra</span>
            </div>
            <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
              <ArrowRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
          <p className="text-white/30 text-[10px] uppercase tracking-widest mt-4">No credit card required • Setup in 60 seconds</p>
        </div>

        {/* Secondary CTAs */}
        <div className={`mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.6s' }}>
          <button
            onClick={() => scrollToSection('#video-promo')}
            className="group relative py-3 px-8 overflow-hidden border border-white/10 transition-all duration-500 hover:border-blue-400/50 min-w-[180px] bg-white/5"
            aria-label={t('hero.videoDemo') as string}
          >
            <span className="font-serif text-lg text-white flex items-center justify-center gap-2">
              {t('hero.videoDemo')}
            </span>
          </button>

          <button
            onClick={() => scrollToSection('#pricing')}
            className="group relative py-3 px-8 overflow-hidden border border-white/10 transition-all duration-500 hover:border-cyan-400/50 min-w-[180px] bg-white/5"
            aria-label={t('hero.prices') as string}
          >
            <span className="font-serif text-lg text-white flex items-center justify-center gap-2">
              {t('hero.prices')}
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className={`mt-10 transition-all duration-1000 ease-out ${phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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
