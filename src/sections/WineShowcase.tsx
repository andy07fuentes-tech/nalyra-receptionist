import { useState, useEffect, useRef } from 'react';
import { Wine, Sparkles, Thermometer, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wine, Sparkles, Thermometer, Clock,
};

export function WineShowcase() {
  const { t } = useLanguage();

  // Define features with icons
  const features = [
    { icon: 'Sparkles', title: t('features.featureCards.aiPowered.title'), description: t('features.featureCards.aiPowered.description') },
    { icon: 'Thermometer', title: t('features.featureCards.alwaysOn.title'), description: t('features.featureCards.alwaysOn.description') },
    { icon: 'Clock', title: t('features.featureCards.instant.title'), description: t('features.featureCards.instant.description') },
    { icon: 'Wine', title: t('features.featureCards.customizable.title'), description: t('features.featureCards.customizable.description') },
  ];

  // Define wines/features data
  const wines = [
    {
      id: 'call-handling',
      name: t('features.wines.callHandling.name'),
      subtitle: t('features.wines.callHandling.subtitle'),
      year: '',
      image: '/images/feature-call.jpg',
      filter: '',
      glowColor: 'bg-blue-500/20',
      description: t('features.wines.callHandling.description'),
      tastingNotes: t('features.wines.callHandling.tastingNotes'),
      alcohol: t('features.wines.callHandling.alcohol'),
      temperature: t('features.wines.callHandling.temperature'),
      aging: t('features.wines.callHandling.aging'),
    },
    {
      id: 'scheduling',
      name: t('features.wines.scheduling.name'),
      subtitle: t('features.wines.scheduling.subtitle'),
      year: '',
      image: '/images/feature-scheduling.jpg',
      filter: 'brightness(1.15) sepia(0.3) hue-rotate(-20deg) saturate(1.3)',
      glowColor: 'bg-emerald-500/20',
      description: t('features.wines.scheduling.description'),
      tastingNotes: t('features.wines.scheduling.tastingNotes'),
      alcohol: t('features.wines.scheduling.alcohol'),
      temperature: t('features.wines.scheduling.temperature'),
      aging: t('features.wines.scheduling.aging'),
    },
    {
      id: 'support',
      name: t('features.wines.support.name'),
      subtitle: t('features.wines.support.subtitle'),
      year: '',
      image: '/images/feature-support.jpg',
      filter: 'brightness(1.3) sepia(0.4) hue-rotate(30deg) saturate(0.6)',
      glowColor: 'bg-amber-500/20',
      description: t('features.wines.support.description'),
      tastingNotes: t('features.wines.support.tastingNotes'),
      alcohol: t('features.wines.support.alcohol'),
      temperature: t('features.wines.support.temperature'),
      aging: t('features.wines.support.aging'),
    },
  ];

  const [activeWine, setActiveWine] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const wine = wines[activeWine];

  const nextWine = () => setActiveWine((prev) => (prev + 1) % wines.length);
  const prevWine = () => setActiveWine((prev) => (prev - 1 + wines.length) % wines.length);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d2a855 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Title */}
        <div className="fade-up text-center mb-16">
          <span className="font-script text-3xl text-blue-400 block mb-2">{t('features.scriptText')}</span>
          <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {t('features.subtitle')}
          </span>
          <h2 className="font-serif text-h1 text-white">{t('features.mainTitle')}</h2>
        </div>

        {/* Tabs */}
        <div className="fade-up flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16" style={{ transitionDelay: '0.1s' }}>
          {wines.map((w, i) => (
            <button
              key={w.id}
              onClick={() => setActiveWine(i)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-sm text-xs md:text-sm transition-all duration-300 ${i === activeWine
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
            >
              {w.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Wine Info */}
          <div className="slide-in-left lg:col-span-2 order-2 lg:order-1">
            {/* Year + Name */}
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif text-6xl lg:text-7xl text-blue-500/30 leading-none">{wine.year}</span>
                <div>
                  <h2 className="font-serif text-h3 text-white leading-tight">{wine.name}</h2>
                  <span className="font-script text-xl text-blue-400">{wine.subtitle}</span>
                </div>
              </div>
              <div className="w-16 h-px bg-blue-500 mt-4" />
            </div>

            {/* Description */}
            <p className="text-white/85 leading-relaxed mb-4">{wine.description}</p>
            <p className="text-white/65 leading-relaxed text-sm mb-8">{wine.tastingNotes}</p>

            {/* Tasting Notes */}
            <div className="flex gap-6 mb-8">
              <div>
                <div className="font-serif text-2xl text-blue-500">{wine.alcohol}</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider mt-1">Lang</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-serif text-2xl text-blue-500">{wine.temperature}</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider mt-1">Speed</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-serif text-2xl text-blue-500">{wine.aging}</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider mt-1">Uptime</div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary rounded-sm flex items-center gap-2 group"
              aria-label={t('features.mainTitle') as string}
            >
              {t('features.mainTitle')}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Center: Interactive Image */}
          <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center mb-20 md:mb-0">
            <div className="relative" style={{ width: '220px', height: '480px' }}>
              {/* Glow */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none`}>
                <div className={`w-48 h-48 ${wine.glowColor} rounded-full blur-3xl transition-colors duration-700`} />
              </div>

              {/* Bottles */}
              {wines.map((w, i) => (
                <img
                  key={w.id}
                  src={w.image}
                  alt={`${w.name} - ${w.subtitle} ${w.year}`}
                  loading={i === 0 ? undefined : 'lazy'}
                  style={w.filter ? { filter: w.filter } : undefined}
                  className={`absolute inset-0 w-full h-full object-contain z-10 drop-shadow-2xl transition-all duration-700 ${i === activeWine
                      ? 'opacity-100 scale-100 translate-y-0'
                      : i < activeWine
                        ? 'opacity-0 scale-90 -translate-y-6 pointer-events-none'
                        : 'opacity-0 scale-90 translate-y-6 pointer-events-none'
                    }`}
                />
              ))}

              {/* Switcher Arrows */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
                <button
                  onClick={prevWine}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm font-serif text-white/80 tabular-nums whitespace-nowrap min-w-[40px] text-center">
                  {activeWine + 1} / {wines.length}
                </span>
                <button
                  onClick={nextWine}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
                  aria-label="Next feature"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Features + Quote */}
          <div className="slide-in-right lg:col-span-2 order-3">
            <div className="space-y-6">
              {features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || Wine;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/65 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            <div className="mt-10 p-6 bg-white/[0.03] rounded-lg border-l-2 border-blue-500/50">
              <p className="font-script text-2xl text-blue-400 mb-2">{t('features.quote.prefix')}</p>
              <p className="text-white/70 text-sm italic leading-relaxed">
                "{t('features.quote.text')}"
              </p>
              <p className="text-blue-500 text-xs mt-3">— {t('features.quote.attribution')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
