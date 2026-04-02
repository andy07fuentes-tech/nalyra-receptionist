/**
 * LEGACY - "Rainbow" Expandable Gallery Component
 * 
 * Featured in early versions of the Anvela website, this component displays 4 primary 
 * cards in a fanned-out (rainbow) stack. When clicked, it expands to show all 9 
 * pain point cards in a grid.
 * 
 * To use this version in PainPoints.tsx, simply update the import to:
 * import { ExpandableGallery } from '../components/ui/expandable-gallery-classic';
 */
"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useId, useRef, useEffect } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";

import { Button } from "@/components/ui/button";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../../contexts/LanguageContext";

const PHOTO_CONFIG = [
  {
    id: "photo-1",
    src: "/images/features/phone-reception.jpg",
    rotation: -20,
    x: -140,
    y: 25,
    zIndex: 10,
    key: "photo1"
  },
  {
    id: "photo-2",
    src: "/images/features/tablet-booking.jpg",
    rotation: -8,
    x: -50,
    y: -15,
    zIndex: 20,
    key: "photo2"
  },
  {
    id: "photo-3",
    src: "/images/feature-support.jpg",
    rotation: 6,
    x: 50,
    y: -5,
    zIndex: 30,
    key: "photo3"
  },
  {
    id: "photo-4",
    src: "/images/features/automation-icons.jpg",
    rotation: 18,
    x: 140,
    y: 30,
    zIndex: 40,
    key: "photo4"
  },
  {
    id: "photo-5",
    src: "/images/step-setup.jpg",
    key: "photo5"
  },
  {
    id: "photo-6",
    src: "/images/step-integrate.jpg",
    key: "photo6"
  },
  {
    id: "photo-7",
    src: "/images/tech-nlp.jpg",
    key: "photo7"
  },
  {
    id: "photo-8",
    src: "/images/tech-ml.jpg",
    key: "photo8"
  },
  {
    id: "photo-9",
    src: "/images/hero-banner.jpg",
    key: "photo9"
  },
];

const transition = {
  type: "spring",
  stiffness: 160,
  damping: 18,
  mass: 1,
} as const;

export function ExpandableGallery() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const layoutGroupId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mobile detection reactively
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mql.matches);
    setIsMobile(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useOutsideClick(containerRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  return (
    <section className="relative w-full px-4 md:px-8 bg-transparent flex flex-col items-center justify-start min-h-[700px] overflow-hidden">
      <LayoutGroup id={layoutGroupId}>
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="w-full h-12 flex items-center justify-center md:justify-between px-4 mb-2">
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  key="back-button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all group z-50 text-dark-theme"
                >
                  <div className="p-2 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors text-dark-theme">
                    <HugeiconsIcon
                      icon={ArrowLeft01Icon}
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="font-medium">{t('painPoints.gallery.back')}</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            ref={containerRef}
            layout
            className={cn(
              "relative w-full",
              isExpanded
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
                : "flex flex-col items-center justify-start pt-4"
            )}
            transition={transition}
          >
            <div
              className={cn(
                "relative",
                isExpanded
                  ? "contents"
                  : "h-[450px] w-full flex items-center justify-center mb-8"
              )}
            >
              {PHOTO_CONFIG.map((photo, index) => {
                const isPrimary = index < 4;
                if (!isPrimary && !isExpanded) return null;

                const photoData = {
                  alt: t(`painPoints.gallery.photos.${photo.key}.alt`),
                  title: t(`painPoints.gallery.photos.${photo.key}.title`),
                  logic: t(`painPoints.gallery.photos.${photo.key}.logic`),
                  benefit: t(`painPoints.gallery.photos.${photo.key}.benefit`),
                };

                return (
                  <motion.div
                    key={`card-${photo.id}`}
                    layoutId={`card-container-${photo.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: !isExpanded ? (isMobile ? (photo.rotation || 0) * 0.5 : photo.rotation || 0) : 0,
                      x: !isExpanded ? (isMobile ? (photo.x || 0) * 0.45 : photo.x || 0) : 0,
                      y: !isExpanded ? (isMobile ? (photo.y || 0) * 0.5 : photo.y || 0) : 0,
                      zIndex: isExpanded ? 50 : (photo.zIndex || (index + 1) * 10),
                    }}
                    transition={{
                      ...transition,
                      zIndex: { duration: 0 }
                    }}
                    whileHover={
                      !isExpanded
                        ? {
                            scale: 1.05,
                            y: (isMobile ? (photo.y || 0) * 0.5 : photo.y || 0) - (isMobile ? 10 : 15),
                            rotate: (isMobile ? (photo.rotation || 0) * 0.5 : photo.rotation || 0) * 0.8,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            },
                          }
                        : { scale: 1.02 }
                    }
                    className={cn(
                      "cursor-pointer overflow-hidden bg-muted group",
                      isExpanded
                        ? "relative aspect-square rounded-[2rem] md:rounded-[3rem] border-4 md:border-[6px] border-background shadow-lg"
                        : "absolute w-44 h-44 md:w-60 md:h-60 rounded-[2.5rem] md:rounded-[3rem] border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                    )}
                    onClick={() => !isExpanded && setIsExpanded(true)}
                  >
                    <motion.div
                      layoutId={`image-inner-${photo.id}`}
                      layout="position"
                      className="w-full h-full relative"
                      transition={transition}
                    >
                      <img
                        src={photo.src}
                        alt={photoData.alt}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                      {isExpanded && (
                        <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 md:bg-black/40 backdrop-blur-xl md:backdrop-blur-sm rounded-[2rem] md:rounded-[3rem] overflow-hidden">
                          <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out h-full">
                            <h3 className="font-serif text-lg md:text-2xl font-bold mb-3 md:mb-4 text-blue-300 drop-shadow-sm">{photoData.title}</h3>
                            
                            <div className="space-y-4 md:space-y-5">
                              <div className="flex flex-col md:flex-row gap-1 md:gap-3">
                                <span className="text-[10px] md:text-[11px] font-bold text-blue-300 uppercase tracking-widest bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/20 w-fit">{t('painPoints.gallery.labels.logic')}</span>
                                <p className="text-sm md:text-xs leading-relaxed text-slate-100 font-medium md:font-light">
                                  {photoData.logic}
                                </p>
                              </div>
                              
                              <div className="flex flex-col md:flex-row gap-1 md:gap-3">
                                <span className="text-[10px] md:text-[11px] font-bold text-emerald-300 uppercase tracking-widest bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/20 w-fit">{t('painPoints.gallery.labels.benefit')}</span>
                                <p className="text-sm md:text-xs leading-relaxed text-emerald-50/90 font-medium md:font-light italic">
                                  {photoData.benefit}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  key="stack-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text-center max-w-2xl space-y-8 pb-12"
                >
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-dark-theme leading-tight font-serif">
                    {t('painPoints.gallery.ctaTitle').split('\n').map((line: string, i: number) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br className="hidden md:block" />}
                      </span>
                    ))}
                  </h2>

                  <div className="flex justify-center">
                    <Button
                      variant="default"
                      onClick={() => setIsExpanded(true)}
                      className="rounded-full cursor-pointer py-6 px-8 border-border/40 font-normal group bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {t('painPoints.gallery.ctaButton')}
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="transition-transform group-hover:translate-x-1"
                        width={20}
                        height={20}
                      />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </section>
  );
}

export default ExpandableGallery;
