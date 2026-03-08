import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function News() {
  const { t } = useLanguage();
  
  // Define articles
  const articles = [
    {
      id: 1,
      image: '/images/news-ai-trends.jpg',
      title: t('news.articles.trends.title'),
      excerpt: t('news.articles.trends.excerpt'),
      date: '1 Mars',
      category: t('news.articles.trends.category'),
    },
    {
      id: 2,
      image: '/images/news-integration.jpg',
      title: t('news.articles.integration.title'),
      excerpt: t('news.articles.integration.excerpt'),
      date: '28 Février',
      category: t('news.articles.integration.category'),
    },
    {
      id: 3,
      image: '/images/news-security.jpg',
      title: t('news.articles.security.title'),
      excerpt: t('news.articles.security.excerpt'),
      date: '20 Février',
      category: t('news.articles.security.category'),
    },
    {
      id: 4,
      image: '/images/news-awards.jpg',
      title: t('news.articles.awards.title'),
      excerpt: t('news.articles.awards.excerpt'),
      date: '15 Février',
      category: t('news.articles.awards.category'),
    },
  ];
  
  // Define testimonials
  const testimonials = [
    {
      name: t('news.testimonials.1.name'),
      role: t('news.testimonials.1.role'),
      text: t('news.testimonials.1.text'),
      rating: 5,
    },
    {
      name: t('news.testimonials.2.name'),
      role: t('news.testimonials.2.role'),
      text: t('news.testimonials.2.text'),
      rating: 5,
    },
    {
      name: t('news.testimonials.3.name'),
      role: t('news.testimonials.3.role'),
      text: t('news.testimonials.3.text'),
      rating: 5,
    },
  ];

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

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-script text-3xl text-blue-400 block mb-2">{t('news.scriptText')}</span>
            <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              {t('news.subtitle')}
            </span>
            <h2 className="font-serif text-h1 text-white has-bar">
              {t('news.mainTitle')}
            </h2>
          </div>
          <button className="btn-dark rounded-sm flex items-center gap-2 group w-fit" aria-label={t('news.viewAllText') as string}>
            {t('news.viewAllText')}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {articles.map((item, index) => (
            <article
              key={item.id}
              className="fade-up group cursor-pointer"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.category}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/90 text-white text-xs rounded-sm">
                    {item.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Date */}
                <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-h5 text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <span className="inline-flex items-center gap-2 text-blue-500 text-sm group-hover:gap-3 transition-all duration-300">
                  {t('news.readMoreText')}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <div className="fade-up text-center mb-12">
            <span className="font-script text-3xl text-blue-400 block mb-2">{t('news.testimonialsScriptText')}</span>
            <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              {t('news.testimonialsSubtitle')}
            </span>
            <h2 className="font-serif text-h2 text-white">
              {t('news.testimonialsMainTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="scale-in p-8 bg-white/5 rounded-lg border border-white/10 relative"
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <Quote className="w-8 h-8 text-blue-500/30 absolute top-6 right-6" />
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-blue-500 fill-blue-500" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-white/50 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div id="story" className="fade-up mt-24 pt-20 border-t border-white/10" style={{ transitionDelay: '0.1s' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="slide-in-left">
              <span className="font-script text-3xl text-blue-400 block mb-2">{t('news.storyScriptText')}</span>
              <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                {t('news.storySubtitle')}
              </span>
              <h2 className="font-serif text-h2 text-white mb-6">
                {t('news.storyTitle')}
              </h2>
              <div className="space-y-4 text-white/75 leading-relaxed">
                <p>{t('news.storyParagraphs.1')}</p>
                <p>{t('news.storyParagraphs.2')}</p>
              </div>

              {/* Timeline Highlights */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="font-serif text-2xl text-blue-500 mb-1">{t('news.storyTimeline.users.value')}</div>
                  <div className="text-xs text-white/60">{t('news.storyTimeline.users.label')}</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="font-serif text-2xl text-blue-500 mb-1">{t('news.storyTimeline.calls.value')}</div>
                  <div className="text-xs text-white/60">{t('news.storyTimeline.calls.label')}</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="font-serif text-2xl text-blue-500 mb-1">{t('news.storyTimeline.satisfaction.value')}</div>
                  <div className="text-xs text-white/60">{t('news.storyTimeline.satisfaction.label')}</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="slide-in-right relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="/images/our-story.jpg"
                  alt="AI Receptionist Team"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-sm rounded-lg">
                <p className="font-script text-2xl text-blue-400 mb-1">{t('news.storyQuote.prefix')}</p>
                <p className="text-white italic text-sm leading-relaxed mb-2">
                  "{t('news.storyQuote.text')}"
                </p>
                <p className="text-blue-400 text-xs">— {t('news.storyQuote.attribution')}</p>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-blue-500/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
