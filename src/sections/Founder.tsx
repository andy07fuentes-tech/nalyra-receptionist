import { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Founder() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white border-y border-neutral-100">
      <div className="container-custom">
        <div className="fade-up text-center mb-14">
          <span className="font-script text-3xl text-blue-600 block mb-2">
            {t('founder.scriptText') as string}
          </span>
          <h2 className="font-serif text-h1 text-dark-theme max-w-2xl mx-auto leading-tight">
            {t('founder.mainTitle') as string}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="slide-in-left bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
            {/* Quote */}
            <blockquote className="font-serif text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-8 text-center">
              "{t('founder.quote') as string}"
            </blockquote>

            <hr className="border-slate-200 mb-8" />

            {/* Profile */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold tracking-tight shadow-lg">
                PF
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-3">
                  <h3 className="font-serif text-xl text-slate-900">Pablo Fuentes</h3>
                  <span className="hidden md:inline text-slate-300">·</span>
                  <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
                    {t('founder.title') as string}
                  </span>
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
                  {t('founder.bio') as string}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{t('founder.location') as string}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
