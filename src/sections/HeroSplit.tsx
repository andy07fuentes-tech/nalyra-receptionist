import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GradientButton } from '../components/ui/gradient-button';
import { useAudio } from '../contexts/AudioContext';

gsap.registerPlugin(ScrollTrigger);

export function HeroSplit({ isReady }: { isReady: boolean }) {
  const { play } = useAudio();
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isReady) return;
    play();
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 400);
    const t3 = setTimeout(() => setPhase(3), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [isReady]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const mainTitle = t('hero.mainTitle') as string;
  const titleLines = mainTitle.split('\n');

  return (
    <section
      id="hero-split"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-[#0B0F19] overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 relative z-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <div className={`transition-all duration-1000 ease-out ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} mb-6`}>
            <span className="font-script text-2xl md:text-3xl lg:text-4xl text-blue-400">
              {t('hero.scriptText')}
            </span>
          </div>

          <h1 className={`font-serif text-[2.5rem] md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-wide transition-all duration-1000 ease-out ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            {titleLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          
          <p className={`mt-6 text-slate-300 text-lg max-w-xl transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.3s' }}>
             Ne manquez plus jamais un appel. Révolutionnez votre service client avec notre réceptionniste IA holographique, disponible 24/7.
          </p>

          <div className={`mt-10 flex flex-wrap items-center gap-6 transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.4s' }}>
            <GradientButton variant="variant" asChild className="group h-auto rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-95 border-0">
              <Link to="/onboarding" className="inline-flex items-center gap-3 px-8 py-4">
                <span className="font-serif text-lg md:text-xl text-white font-normal">{t('hero.ctaMain')}</span>
                <div className="p-1.5 bg-white/10 rounded-lg transition-colors">
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </GradientButton>

            <button
              onClick={() => scrollToSection('#video-demo')}
              className="group flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-400/50 transition-colors bg-white/5">
                <Play className="w-4 h-4 fill-current ml-1" />
              </div>
              <span className="font-medium tracking-wide uppercase text-sm">Voir la démo</span>
            </button>
          </div>
        </div>

        {/* Right Video / Mockup */}
        <div className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${phase >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10 bg-slate-900 aspect-video flex items-center justify-center">
             {/* Mockup Placeholder using an image from Unsplash to simulate the cinematic video */}
             <img 
               src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=2000&q=80" 
               alt="Cinematic Garage Night" 
               className="absolute inset-0 w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent mix-blend-multiply" />
             
             {/* Hologram Overlay Mockup */}
             <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 mx-auto mb-4 flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full border border-blue-400 animate-ping opacity-50" />
                   <div className="w-10 h-10 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
                </div>
                <div className="text-center">
                   <div className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-1">IA Active</div>
                   <div className="text-white text-sm">"Bonjour, comment puis-je vous aider ?"</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
