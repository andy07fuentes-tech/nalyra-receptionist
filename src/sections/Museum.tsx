import { useState, useEffect, useRef } from 'react';
import { History, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  History, Award, BookOpen,
};

export function Museum() {
  const { t } = useLanguage();

  // Define tabs from translations
  const tabs = [
    {
      id: 'nlp',
      name: t('technology.tabs.nlp.name'),
      icon: 'History',
      image: '/images/tech-nlp.jpg',
      content: {
        title: t('technology.tabs.nlp.title'),
        description: t('technology.tabs.nlp.description'),
        highlight: t('technology.tabs.nlp.highlight'),
      },
    },
    {
      id: 'ml',
      name: t('technology.tabs.ml.name'),
      icon: 'BookOpen',
      image: '/images/tech-ml.jpg',
      content: {
        title: t('technology.tabs.ml.title'),
        description: t('technology.tabs.ml.description'),
        highlight: t('technology.tabs.ml.highlight'),
      },
    },
    {
      id: 'security',
      name: t('technology.tabs.security.name'),
      icon: 'Award',
      image: '/images/tech-security.jpg',
      content: {
        title: t('technology.tabs.security.title'),
        description: t('technology.tabs.security.description'),
        highlight: t('technology.tabs.security.highlight'),
      },
    },
  ];

  // Timeline data
  const timeline = [
    { year: '2020', event: t('technology.timeline.2020') },
    { year: '2022', event: t('technology.timeline.2022') },
    { year: '2023', event: t('technology.timeline.2023') },
    { year: '', event: t('technology.timeline.2024') },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
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

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <div className="slide-in-left mb-10">
              <span className="font-script text-3xl text-blue-600 block mb-2">{t('technology.scriptText')}</span>
              <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                {t('technology.subtitle')}
              </span>
              <h2 className="font-serif text-h1 text-dark-theme has-bar">
                {t('technology.mainTitle')}
              </h2>
            </div>

            {/* Introduction */}
            <p className="fade-up text-slate-600 leading-relaxed mb-10" style={{ transitionDelay: '0.1s' }}>
              {t('technology.introText')}
            </p>

            {/* Tabs */}
            <div className="fade-up flex flex-wrap gap-2 mb-8" style={{ transitionDelay: '0.15s' }}>
              {tabs.map((tab) => {
                const IconComponent = iconMap[tab.icon];
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={activeTab === tab.id}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm transition-all duration-300 ${activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'
                      }`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {tab.name}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              {activeTabData && (
                <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 transition-all duration-300">
                  <h3 className="font-serif text-h5 text-dark-theme mb-4">
                    {activeTabData.content.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {activeTabData.content.description}
                  </p>
                  <div className="flex items-center gap-3 text-blue-600">
                    <div className="w-8 h-px bg-blue-600" />
                    <span className="text-sm font-medium">
                      {activeTabData.content.highlight}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Horizontal Timeline */}
            <div className="fade-up mt-8" style={{ transitionDelay: '0.25s' }}>
              <div className="relative">
                {/* Horizontal line */}
                <div className="absolute top-3 left-0 right-0 h-px bg-slate-200" />
                {/* Timeline points */}
                <div className="flex justify-between overflow-x-auto gap-2">
                  {timeline.map((event) => (
                    <div key={event.year} className="relative flex flex-col items-center flex-shrink-0 min-w-[70px]">
                      <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-blue-500 z-10" />
                      <span className="font-serif text-sm text-blue-600 mt-2">{event.year}</span>
                      <span className="text-[11px] text-slate-400 mt-0.5 text-center whitespace-nowrap">{event.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founder Photo & Quote */}
            <div className="fade-up mt-8 flex items-center gap-6" style={{ transitionDelay: '0.3s' }}>
              <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-blue-100 shadow-md flex-shrink-0">
                <img
                  src="/images/tech-visual.jpg"
                  alt="AI Technology"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-script text-2xl text-blue-600 mb-1">
                  &ldquo;{t('technology.quote.prefix')}&rdquo;
                </p>
                <p className="text-slate-500 text-sm italic">
                  "{t('technology.quote.text')}"
                </p>
                <p className="text-blue-600 text-xs mt-2 font-medium">
                  — {t('technology.quote.attribution')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="slide-in-right relative" style={{ transitionDelay: '0.15s' }}>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`absolute inset-0 transition-all duration-500 ${activeTab === tab.id
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                    }`}
                >
                  <img
                    src={tab.image}
                    alt={`${tab.name} - ${t('technology.mainTitle')}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>
              ))}

              {/* Year Badge */}
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm border border-blue-200 shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-2xl text-blue-600">{t('technology.yearBadge')}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">{t('technology.yearBadgeLabel')}</div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-400 text-sm">{t('technology.openingHoursLabel')}</p>
                    <p className="text-white text-lg">{t('technology.openingHours')}</p>
                  </div>
                  <button
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-primary rounded-sm text-sm px-6 bg-blue-600 hover:bg-blue-500 border-none shadow-lg text-white"
                    aria-label={t('technology.ctaButton') as string}
                  >
                    {t('technology.ctaButton')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
