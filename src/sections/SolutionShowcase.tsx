import { useState, useEffect, useRef } from 'react';
import { Smartphone, Sparkles, Zap, Clock, ArrowRight, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone, Sparkles, Zap, Clock, CheckCircle
};

export function SolutionShowcase() {
  const { t } = useLanguage();

  const features = [
    { icon: 'Sparkles', title: t('features.featureCards.aiPowered.title'), description: t('features.featureCards.aiPowered.description') },
    { icon: 'CheckCircle', title: t('features.featureCards.alwaysOn.title'), description: t('features.featureCards.alwaysOn.description') },
    { icon: 'Zap', title: t('features.featureCards.instant.title'), description: t('features.featureCards.instant.description') },
    { icon: 'Smartphone', title: t('features.featureCards.customizable.title'), description: t('features.featureCards.customizable.description') },
  ];

  const solutions = [
    {
      id: 'call-handling',
      name: t('features.solutions.callHandling.name'),
      subtitle: t('features.solutions.callHandling.subtitle'),
      image: '/images/feature-call.jpg',
      filter: 'brightness(1.1) contrast(1.1)',
      glowColor: 'bg-blue-500/20',
      description: t('features.solutions.callHandling.description'),
      techNotes: t('features.solutions.callHandling.tastingNotes'),
      accuracy: t('features.solutions.callHandling.accuracy'),
      speed: t('features.solutions.callHandling.speed'),
      uptime: t('features.solutions.callHandling.uptime'),
    },
    {
      id: 'scheduling',
      name: t('features.solutions.scheduling.name'),
      subtitle: t('features.solutions.scheduling.subtitle'),
      image: '/images/feature-scheduling.jpg',
      filter: 'brightness(1.1) saturate(1.2)',
      glowColor: 'bg-indigo-500/20',
      description: t('features.solutions.scheduling.description'),
      techNotes: t('features.solutions.scheduling.tastingNotes'),
      accuracy: t('features.solutions.scheduling.accuracy'),
      speed: t('features.solutions.scheduling.speed'),
      uptime: t('features.solutions.scheduling.uptime'),
    },
    {
      id: 'support',
      name: t('features.solutions.support.name'),
      subtitle: t('features.solutions.support.subtitle'),
      image: '/images/feature-support.jpg',
      filter: 'brightness(1.2) hue-rotate(10deg)',
      glowColor: 'bg-cyan-500/20',
      description: t('features.solutions.support.description'),
      techNotes: t('features.solutions.support.tastingNotes'),
      accuracy: t('features.solutions.support.accuracy'),
      speed: t('features.solutions.support.speed'),
      uptime: t('features.solutions.support.uptime'),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextItem = () => setActiveIndex((p) => (p + 1) % solutions.length);
  const prevItem = () => setActiveIndex((p) => (p - 1 + solutions.length) % solutions.length);

  useEffect(() => {
    const timer = setInterval(nextItem, 5000);
    return () => clearInterval(timer);
  }, []);

  const solution = solutions[activeIndex];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-light-section"
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-script text-3xl text-blue-600 block mb-2">{t('features.scriptText')}</span>
          <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {t('features.subtitle')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-dark-theme">{t('features.mainTitle')}</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20">
          {solutions.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveIndex(i)}
              className={`px-6 py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-500 border ${i === activeIndex
                ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-blue-600'
                }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="mb-10">
              <span className="text-blue-500 font-script text-2xl mb-2 block">{solution.subtitle}</span>
              <h3 className="font-serif text-4xl md:text-5xl text-dark-theme mb-6 leading-tight">{solution.name}</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-transparent mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">{solution.description}</p>
              <p className="text-slate-400 text-sm italic">{solution.techNotes}</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-y border-slate-200">
              <div>
                <div className="font-serif text-2xl text-blue-600">{solution.accuracy}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Accuracy</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-blue-600">{solution.speed}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Speed</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-blue-600">{solution.uptime}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Uptime</div>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 text-dark-theme font-medium tracking-wide uppercase text-sm hover:text-blue-600 transition-colors"
            >
              {t('features.mainTitle')}
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center transition-all duration-500 group-hover:w-12 group-hover:bg-blue-500">
                <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </div>

          {/* Device Visualization side (The "Bottle" replacement) */}
          <div className="lg:col-span-3 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full aspect-[3/4] max-w-[300px]">
              {/* Glow Background */}
              <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${solution.glowColor} blur-[120px] rounded-full`} />

              {/* Image Stack */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {solutions.map((s, i) => (
                  <div
                    key={s.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center ${i === activeIndex
                      ? 'opacity-100 scale-100 translate-y-0 rotate-0'
                      : 'opacity-0 scale-90 translate-y-12 rotate-6 pointer-events-none'
                      }`}
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl"
                      style={{ filter: s.filter }}
                    />
                    {/* Glass Reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6">
                <button onClick={prevItem} className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-blue-600 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-white/40 text-xs font-medium tabular-nums">{activeIndex + 1} / {solutions.length}</span>
                <button onClick={nextItem} className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-blue-600 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Cards side */}
          <div className="lg:col-span-4 order-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {features.map((feature, i) => {
                const IconComponent = iconMap[feature.icon] || Sparkles;
                return (
                  <div
                    key={i}
                    className="flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-dark-theme font-serif text-lg mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-wider">{feature.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
