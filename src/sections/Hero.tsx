import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GradientButton } from '../components/ui/gradient-button';
import { useAudio } from '../contexts/AudioContext';

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
  const { play } = useAudio();
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);

  const stats = [
    { value: 100, suffix: "%", label: t('hero.stats.calls.label') },
    { value: 24, suffix: "/7", label: t('hero.stats.availability.label') },
    { value: 50, suffix: "%", label: t('hero.stats.savings.label') },
  ];

  const count0 = useCountUp(stats[0]?.value ?? 0, 2000, phase >= 4);
  const count1 = useCountUp(stats[1]?.value ?? 0, 2200, phase >= 4);
  const count2 = useCountUp(stats[2]?.value ?? 0, 1800, phase >= 4);
  const counts = [count0, count1, count2];

  // GSAP ScrollTrigger — Cinematic Fly-Through
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        scale: 1.4,
        filter: 'blur(40px)',
        opacity: 0,
        yPercent: -10,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
          anticipatePin: 1
        },
      });

      const wrapper = sectionRef.current;
      if (!wrapper) return;
      const bgWrapper = wrapper.querySelector('.z-0');
      if (bgWrapper) {
        gsap.to(bgWrapper, {
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const GARAGE_VIDEOS = [
    '/videos/anvela-answers.mp4',
    '/videos/garage-workshop.mp4',
    '/videos/garage-night.mp4',
    '/videos/garage-luxury.mp4',
  ];
  const [videoIndex, setVideoIndex] = useState(0);

  // 3-video sequence with crossfade (desktop only)
  useEffect(() => {
    const video = videoRef.current;
    const overlay = videoOverlayRef.current;
    if (!video || !overlay) return;

    video.playbackRate = 0.7;

    const FADE = 1.5;
    let fadingOut = false;

    const handleTimeUpdate = () => {
      if (!video.duration || fadingOut) return;
      const realSecsLeft = (video.duration - video.currentTime) / (video.playbackRate || 1);
      if (realSecsLeft < FADE) {
        fadingOut = true;
        overlay.style.transition = `opacity ${FADE}s linear`;
        overlay.style.opacity = '1';
      }
    };

    const handleEnded = () => {
      setVideoIndex(prev => (prev + 1) % GARAGE_VIDEOS.length);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoIndex]);

  useEffect(() => {
    const video = videoRef.current;
    const overlay = videoOverlayRef.current;
    if (!video || !overlay) return;
    video.load();
    video.play().then(() => {
      overlay.style.transition = `opacity 1.5s ease-in`;
      overlay.style.opacity = '0';
    }).catch(() => {});
  }, [videoIndex]);

  useEffect(() => {
    if (!isReady) return;
    play();
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
      {/* Hero video — all screen sizes */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <video
            muted
            playsInline
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={GARAGE_VIDEOS[videoIndex]}
          />
          <div
            ref={videoOverlayRef}
            className="absolute inset-0 bg-black z-[2] pointer-events-none"
            style={{ opacity: 1 }}
          />
          <div
            className="hero-glow absolute inset-0 pointer-events-none z-[5]"
            style={{
              background: 'radial-gradient(ellipse 55% 70% at 30% 55%, rgba(245,158,11,0.18) 0%, transparent 70%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_50%)] pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.15)_0%,_transparent_50%)] pointer-events-none z-10" />
        </div>

      {/* Film grain — both breakpoints */}
      <svg className="absolute w-0 h-0">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="absolute inset-0 pointer-events-none z-[15]"
        style={{ filter: 'url(#hero-grain)', opacity: 0.12 }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-20 flex flex-col items-center justify-center h-full pt-16 md:pt-10 pb-32 md:pb-20 px-4 w-full text-center">
        <div className="w-full max-w-lg">
          {/* Script accent */}
          <div className={`transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} mb-2 mt-4`}>
            <span className="font-script text-2xl md:text-3xl lg:text-5xl text-blue-400">
              {t('hero.scriptText')}
            </span>
          </div>

          {/* Divider line */}
          <div className={`my-4 md:my-8 h-px bg-blue-500/50 transition-all duration-1000 ease-out ${phase >= 2 ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.2s', margin: '0 auto' }} />

          {/* Main Title */}
          <h1 className={`font-serif text-[1.6rem] md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] md:leading-[1.1] tracking-wide transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
            {titleLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          {/* Main CTA */}
          <div className={`mt-6 md:mt-8 transition-all duration-1000 ease-out ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.4s' }}>
            <GradientButton variant="variant" asChild className="group h-auto rounded-xl shadow-[0_0_20px_rgba(201,98,135,0.2)] active:scale-95 border-0">
              <Link
                to="/onboarding"
                className="inline-flex items-center gap-3 px-8 py-4 w-full h-full"
              >
                <div className="flex flex-col items-center leading-none relative z-10 w-full text-center">
                  <span className="text-[9px] tracking-[0.2em] text-white/50 mb-1 uppercase font-[Poppins]">{t('hero.ctaSubtitle')}</span>
                  <span className="font-serif text-lg md:text-xl text-white font-normal">{t('hero.ctaMain')}</span>
                </div>
                <div className="p-1.5 bg-white/10 rounded-lg transition-colors z-10 relative">
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </GradientButton>
          </div>

          {/* Secondary CTAs */}
          <div className={`mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.6s' }}>
            <GradientButton
              variant="variant"
              onClick={() => scrollToSection('#video-demo')}
              className="min-w-[180px] border-0 !rounded-full py-3"
              aria-label={t('hero.videoDemo') as string}
            >
              <span className="font-serif text-lg text-white flex items-center justify-center gap-2 font-normal hover:scale-105 transition-transform">
                {t('hero.videoDemo')}
              </span>
            </GradientButton>

            <GradientButton
              variant="variant"
              onClick={() => scrollToSection('#pricing')}
              className="min-w-[180px] border-0 !rounded-full py-3"
              aria-label={t('hero.prices') as string}
            >
              <span className="font-serif text-lg text-white flex items-center justify-center gap-2 font-normal hover:scale-105 transition-transform">
                {t('hero.prices')}
              </span>
            </GradientButton>
          </div>

          {/* Stats */}
          <div className={`mt-10 transition-all duration-1000 ease-out ${phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="font-serif text-4xl md:text-5xl text-blue-500 mb-2 tabular-nums">
                    {counts[index]}{stat.suffix}
                  </div>
                  <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-[0.2em] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-30 pointer-events-none" />

      {/* Side decorative (desktop only) */}
      <div className={`absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 transition-opacity duration-1000 z-30 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        <span className="text-blue-500 text-xs tracking-widest" style={{ writingMode: 'vertical-lr' }}>{t('hero.decorativeText')}</span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
      </div>
    </section>
  );
}
