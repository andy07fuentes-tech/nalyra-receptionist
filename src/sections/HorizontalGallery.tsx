import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { OptimizedVideo } from '../components/OptimizedVideo';

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
  {
    id: 0,
    video: '/videos/anvela-showcase.mp4',
    titleKey: 'gallery.special.anvelaTitle',
    subtitleKey: 'gallery.special.anvelaSubtitle',
    size: 'large',
    offset: 'mt-0'
  },
  ...[1, 2, 3, 4, 5, 7, 8, 10, 11].map(i => ({
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
      const compEl = component.current;
      if (!sliderEl || !compEl) return;

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


  return (
    <div 
      ref={component} 
      className="overflow-hidden py-16 md:pt-24 md:pb-32 border-y"
      style={{ backgroundColor: 'transparent', borderTopColor: '#f5f5f5', borderBottomColor: '#f5f5f5' }}
    >
      <div className="container-custom mb-12 px-4 text-center md:text-left">
        <span 
          className="gallery-script font-script text-2xl md:text-3xl text-blue-600 block mb-2 opacity-80"
          style={{ textDecoration: 'none' }}
        >
          {t('gallery.scriptText')}
        </span>
        <h2 className="gallery-title font-serif text-2xl md:text-4xl lg:text-5xl text-neutral-900 max-w-3xl leading-[1.05] tracking-tight mx-auto md:mx-0">
          {t('gallery.mainTitle')}
        </h2>
      </div>

      <div 
        ref={slider} 
        className="flex gap-1 md:gap-2 px-4 w-fit items-start will-change-transform"
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={`${item.id}-${index}`}
            className={`gallery-item flex-shrink-0 relative group hover:z-20 ${
              item.offset
            } ${
              item.size === 'small' ? 'w-[108px] md:w-[151px]' : 
              item.size === 'medium' ? 'w-[130px] md:w-[173px]' : 
              'w-[151px] md:w-[205px]'
            }`}
          >
            {/* Video Frame */}
            <div className={`gallery-card-bg relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl border border-neutral-100 bg-neutral-50 shadow-sm transition-[transform,box-shadow] duration-500 group-hover:shadow-xl group-hover:-translate-y-2`}>
              <OptimizedVideo
                src={item.video}
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Labels Below Frame */}
            <div className="mt-4 transform transition-transform duration-500 group-hover:translate-x-1">
              <p className={`text-[9px] md:text-[10px] font-mono tracking-widest uppercase mb-1 ${
                item.id === 0 ? 'text-blue-600 font-bold' : 'text-neutral-400'
              }`}>
                {t(item.subtitleKey)}
              </p>
              <h3 className="text-neutral-800 font-serif text-sm md:text-base leading-tight">
                {t(item.titleKey)}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
