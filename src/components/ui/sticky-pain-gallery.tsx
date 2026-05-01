import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const PHOTO_CONFIG = [
  { id: "photo-1", src: "/images/features/phone-reception.jpg", key: "photo1" },
  { id: "photo-2", src: "/images/features/tablet-booking.jpg", key: "photo2" },
  { id: "photo-3", src: "/images/feature-support.jpg", key: "photo3" },
  { id: "photo-4", src: "/images/features/automation-icons.jpg", key: "photo4" },
  { id: "photo-7", src: "/images/tech-voice-realism.jpg", key: "photo7" },
  { id: "photo-8", src: "/images/apprentissage-continu.jpg", key: "photo8" },
  { id: "photo-9", src: "/images/hero-banner.jpg", key: "photo9" },
];

const CENTER_PHOTO = PHOTO_CONFIG[0];
const LEFT_PHOTOS  = PHOTO_CONFIG.slice(1, 4);
const RIGHT_PHOTOS = PHOTO_CONFIG.slice(4);

interface CardData {
  title: string;
  logic: string;
  benefit: string;
}

interface PainCardProps extends CardData {
  src: string;
  alt: string;
  logicLabel: string;
  benefitLabel: string;
  index: number;
  total: number;
  featured?: boolean;
}

function PainCard({
  src, alt, title, logic, benefit,
  logicLabel, benefitLabel,
  index, total,
  featured,
}: PainCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl group w-full h-full cursor-default">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/15" />

      {/* Corner crosshairs */}
      <div className="absolute top-5 left-5 w-4 h-4 border-t border-l border-white/25 transition-all duration-500 group-hover:border-white/70 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
      <div className="absolute top-5 right-5 w-4 h-4 border-t border-r border-white/25 transition-all duration-500 group-hover:border-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/25 text-[9px] font-mono tracking-[0.35em]">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
        <h3 className={`font-serif text-white leading-tight mb-3 ${featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
          {title}
        </h3>
        <div className="space-y-2">
          <div className="flex gap-2 items-start">
            <span className="shrink-0 mt-0.5 text-[8px] font-bold text-blue-300 uppercase tracking-widest bg-blue-500/20 px-1.5 py-0.5 rounded border border-blue-500/30">
              {logicLabel}
            </span>
            <p className={`text-white/95 leading-relaxed font-medium ${featured ? 'text-sm' : 'text-xs'}`}>{logic}</p>
          </div>
          <div className="flex gap-2 items-start">
            <span className="shrink-0 mt-0.5 text-[8px] font-bold text-emerald-300 uppercase tracking-widest bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/30">
              {benefitLabel}
            </span>
            <p className={`text-emerald-100 leading-relaxed italic font-medium ${featured ? 'text-sm' : 'text-xs'}`}>{benefit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StickyPainGallery() {
  const { t } = useLanguage();
  const [sideHovered, setSideHovered] = useState(false);

  const logicLabel   = t('painPoints.gallery.labels.logic') as string;
  const benefitLabel = t('painPoints.gallery.labels.benefit') as string;

  const getData = (photo: typeof PHOTO_CONFIG[0]): CardData => ({
    title:   t(`painPoints.gallery.photos.${photo.key}.title`) as string,
    logic:   t(`painPoints.gallery.photos.${photo.key}.logic`) as string,
    benefit: t(`painPoints.gallery.photos.${photo.key}.benefit`) as string,
  });

  const centerData = getData(CENTER_PHOTO);
  const leftData   = LEFT_PHOTOS.map(getData);
  const rightData  = RIGHT_PHOTOS.map(getData);

  const mobileContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileContainerRef.current) return;
    
    // Only run on mobile
    if (window.innerWidth >= 768) return;

    const cards = gsap.utils.toArray('.mobile-card') as HTMLElement[];
    if (cards.length === 0) return;

    // Set initial states
    gsap.set(cards, {
      y: ((i: number) => i === 0 ? 0 : window.innerHeight) as any,
      opacity: (i: number) => i === 0 ? 1 : 0,
      scale: 1,
      rotateZ: 0
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mobileContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    cards.forEach((card, i) => {
      if (i === 0) return; // First card is already visible

      // Determine rotation based on index (even indices rotate right, odd left)
      const rotate = i % 2 === 0 ? 4 + i : -(4 + i);
      const xOffset = i % 2 === 0 ? 10 + (i*2) : -(10 + (i*2));

      // As card i comes in, previous cards push back and fade slightly
      const previousCards = cards.slice(0, i);
      
      tl.to(card, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      }, `label${i}`)
      .to(previousCards, {
        scale: '-=0.04',
        y: '-=15',
        opacity: '-=0.15',
        duration: 1,
        ease: 'power2.out',
      }, `label${i}`)
      .to(card, {
        rotateZ: rotate,
        x: xOffset,
        duration: 0.5,
        ease: 'power1.inOut'
      }, `label${i}+=0.5`);
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === mobileContainerRef.current) st.kill();
      });
    };
  }, []);

  return (
    <div className="w-full">
      {/* Mobile: Stacked Fanning Animation */}
      <div ref={mobileContainerRef} className="relative h-[400vh] md:hidden">
        <div className="sticky top-20 h-[80vh] w-full flex items-center justify-center overflow-hidden perspective-1000">
          {PHOTO_CONFIG.map((photo, i) => {
            const d = getData(photo);
            return (
              <div 
                key={photo.id} 
                className="mobile-card absolute w-full max-w-sm px-4"
                style={{ zIndex: PHOTO_CONFIG.length - i }}
              >
                <div className="h-[450px] shadow-2xl rounded-2xl">
                  <PainCard
                    src={photo.src} alt={d.title}
                    {...d}
                    logicLabel={logicLabel} benefitLabel={benefitLabel}
                    index={i} total={PHOTO_CONFIG.length}
                    featured={i === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop: 3-column sticky layout */}
      <div className="hidden md:grid grid-cols-12 gap-4">

        {/* Left: 3 scrolling cards — offset down for editorial asymmetry */}
        <div className="col-span-4 flex flex-col gap-4 pt-16">
          {LEFT_PHOTOS.map((photo, i) => (
            <div
              key={photo.id}
              className="h-[520px]"
              onMouseEnter={() => setSideHovered(true)}
              onMouseLeave={() => setSideHovered(false)}
            >
              <PainCard
                src={photo.src} alt={leftData[i].title}
                {...leftData[i]}
                logicLabel={logicLabel} benefitLabel={benefitLabel}
                index={i + 1} total={PHOTO_CONFIG.length}
              />
            </div>
          ))}
        </div>

        {/* Center: sticky hero card — dims when a side card is hovered, breathes glow */}
        <div className="col-span-4">
          <motion.div
            className="sticky top-24 rounded-2xl"
            style={{ height: 'calc(100vh - 7rem)' }}
            animate={{
              opacity: sideHovered ? 0.65 : 1,
              boxShadow: sideHovered
                ? '0 0 30px rgba(59,130,246,0.1)'
                : [
                    '0 0 40px rgba(59,130,246,0.18)',
                    '0 0 70px rgba(59,130,246,0.35)',
                    '0 0 40px rgba(59,130,246,0.18)',
                  ],
            }}
            transition={{
              opacity: { duration: 0.3 },
              boxShadow: sideHovered
                ? { duration: 0.3 }
                : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <PainCard
              src={CENTER_PHOTO.src} alt={centerData.title}
              {...centerData}
              logicLabel={logicLabel} benefitLabel={benefitLabel}
              index={0} total={PHOTO_CONFIG.length}
              featured
            />
          </motion.div>
        </div>

        {/* Right: 3 scrolling cards — offset down more for asymmetry */}
        <div className="col-span-4 flex flex-col gap-4 pt-32">
          {RIGHT_PHOTOS.map((photo, i) => (
            <div
              key={photo.id}
              className="h-[520px]"
              onMouseEnter={() => setSideHovered(true)}
              onMouseLeave={() => setSideHovered(false)}
            >
              <PainCard
                src={photo.src} alt={rightData[i].title}
                {...rightData[i]}
                logicLabel={logicLabel} benefitLabel={benefitLabel}
                index={i + 4} total={PHOTO_CONFIG.length}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default StickyPainGallery;
