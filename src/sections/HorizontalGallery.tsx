import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: number;
  video: string;
  titleKey: string;
  subtitleKey: string;
  size: 'small' | 'medium' | 'large';
  offset: string; // Vertical offset for staggered look
}

const galleryItems: GalleryItem[] = [
  ...[1, 2, 3, 4, 5, 7, 8, 9, 10, 11].map(i => ({
    id: i,
    video: `/videos/showcase-${i}.mp4`,
    titleKey: `gallery.item${i}.title`,
    subtitleKey: `gallery.item${i}.subtitle`,
    size: (i % 3 === 0 ? 'small' : i % 3 === 1 ? 'medium' : 'large') as any,
    offset: (i % 4 === 1 ? 'mt-0' : i % 4 === 2 ? 'mt-8' : i % 4 === 3 ? 'mt-4' : 'mt-14')
  }))
];

export function HorizontalGallery() {
  const { t } = useLanguage();
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sliderEl = slider.current;
      if (!sliderEl) return;

      // Calculate the total width of one set of items
      const totalWidth = sliderEl.scrollWidth / 2;

      // Infinite Marquee Animation
      gsap.to(sliderEl, {
        x: -totalWidth,
        duration: 40, // Adjust speed here
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });
      
      // Hover effect to pause/slow down
      sliderEl.addEventListener('mouseenter', () => gsap.to(gsap.getTweensOf(sliderEl), { timeScale: 0.2, duration: 0.5 }));
      sliderEl.addEventListener('mouseleave', () => gsap.to(gsap.getTweensOf(sliderEl), { timeScale: 1, duration: 0.5 }));
    }, component);

    return () => ctx.revert();
  }, []);

  // Duplicate items for seamless loop
  const duplicatedItems = [...galleryItems, ...galleryItems];

  // Split advantages text to bold the first sentence
  const advantagesText = t('gallery.clientsList');
  const firstPeriodIndex = advantagesText.indexOf('.');
  const firstSentence = firstPeriodIndex !== -1 ? advantagesText.substring(0, firstPeriodIndex + 1) : '';
  const restOfText = firstPeriodIndex !== -1 ? advantagesText.substring(firstPeriodIndex + 1) : advantagesText;

  return (
    <div ref={component} className="overflow-hidden bg-white py-16 md:py-24 border-y border-neutral-100">
      <div className="container-custom mb-12 px-4 text-center md:text-left">
        <span className="font-script text-2xl md:text-3xl text-blue-600 block mb-2 opacity-80 decoration-blue-200 decoration-wavy underline underline-offset-8">
          {t('gallery.scriptText')}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-neutral-900 max-w-3xl leading-[1.05] tracking-tight mx-auto md:mx-0">
          {t('gallery.mainTitle')}
        </h2>
      </div>

      <div 
        ref={slider} 
        className="flex gap-2 md:gap-3 px-4 w-fit items-start will-change-transform"
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={`${item.id}-${index}`}
            className={`gallery-item flex-shrink-0 relative group transition-all duration-500 hover:z-20 ${
              item.offset
            } ${
              item.size === 'small' ? 'w-[135px] md:w-[189px]' : 
              item.size === 'medium' ? 'w-[162px] md:w-[216px]' : 
              'w-[189px] md:w-[256px]'
            }`}
          >
            {/* Video Frame */}
            <div className={`relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl border border-neutral-100 bg-neutral-50 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2`}>
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Labels Below Frame */}
            <div className="mt-4 transform transition-transform duration-500 group-hover:translate-x-1">
              <p className="text-neutral-400 text-[10px] md:text-xs font-mono tracking-widest uppercase mb-1">
                {t(item.subtitleKey)}
              </p>
              <h3 className="text-neutral-900 font-serif text-lg md:text-xl leading-tight">
                {t(item.titleKey)}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Anvela Advantage Section */}
      <div className="container-custom mt-24 md:mt-32 px-4">
        <div className="max-w-5xl">
          <p className="text-neutral-900 font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
            <span className="font-bold italic mr-4 block mb-4 text-xl md:text-2xl uppercase tracking-widest text-blue-600 font-sans not-italic">
              {t('gallery.selectClients')}
            </span>
            {firstSentence && <span className="font-bold">{firstSentence}</span>}
            <span className="text-neutral-800 opacity-90"> {restOfText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
