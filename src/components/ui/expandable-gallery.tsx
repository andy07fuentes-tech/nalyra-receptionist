"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHOTO_CONFIG = [
  { id: "photo-1", src: "/images/features/phone-reception.jpg", key: "photo1" },
  { id: "photo-2", src: "/images/features/tablet-booking.jpg", key: "photo2" },
  { id: "photo-3", src: "/images/feature-support.jpg", key: "photo3" },
  { id: "photo-4", src: "/images/features/automation-icons.jpg", key: "photo4" },
  { id: "photo-5", src: "/images/step-setup.jpg", key: "photo5" },
  { id: "photo-6", src: "/images/step-integrate.jpg", key: "photo6" },
  { id: "photo-7", src: "/images/tech-nlp.jpg", key: "photo7" },
  { id: "photo-8", src: "/images/tech-ml.jpg", key: "photo8" },
  { id: "photo-9", src: "/images/hero-banner.jpg", key: "photo9" },
];

export function ExpandableGallery() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0 || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial State Setup
      gsap.set(cards, { 
        opacity: 0, 
        scale: 0.8, 
        y: "110%",
        willChange: "transform, opacity" 
      });
      
      // First card starts active
      gsap.set(cards[0], { opacity: 1, scale: 1, y: "0%" });

      // Title/Content initial state
      const allContent = cards.map(c => c.querySelector(".max-w-3xl"));
      gsap.set(allContent, { y: 30, opacity: 0 });
      gsap.to(allContent[0], { y: 0, opacity: 1, duration: 0.8, delay: 0.4 });

      // 2. Master Timeline (Pinning the container)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${(cards.length - 1) * 100}%`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      });

      // 3. Simple Flower Stacking Sequence
      cards.forEach((card, i) => {
        if (i === 0) return;

        const currentContent = allContent[i];
        const label = `step-${i}`;
        tl.add(label);

        // ENTRY: The Growing Animation (No blur, just growing and sliding)
        tl.to(card, {
          y: "0%",
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "none"
        }, label);

        if (currentContent) {
          tl.to(currentContent, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out"
          }, `${label}+=0.3`);
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white">
      {PHOTO_CONFIG.map((photo, index) => {
        const photoData = {
          title: t(`painPoints.gallery.photos.${photo.key}.title`),
          logic: t(`painPoints.gallery.photos.${photo.key}.logic`),
          benefit: t(`painPoints.gallery.photos.${photo.key}.benefit`),
        };

        return (
          <div
            key={photo.id}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="absolute inset-0 w-full h-full overflow-hidden group flex items-center justify-center p-4 md:p-10"
            style={{ 
              zIndex: index + 10,
              // Initial state for JS-based animation to take over
              transform: index === 0 ? "none" : "translateY(100%)"
            }}
          >
            {/* Card Content Wrapper: Rounded and Cinematic */}
            <div className="relative w-full h-full max-w-7xl rounded-[40px] overflow-hidden shadow-2xl border border-white/10 bg-black">
              {/* Background image */}
              <img
                src={photo.src}
                alt={photoData.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              />

              {/* Dark overlay with dynamic gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

              {/* Technical HUD Overlay (Haven-2 Inspired) */}
              <div className="absolute inset-0 pointer-events-none border-[1.5px] border-white/5 m-6 rounded-[32px] overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-[1.5px] bg-white/20" />
                <div className="absolute top-0 left-0 w-[1.5px] h-8 bg-white/20" />
                <div className="absolute top-0 right-0 w-8 h-[1.5px] bg-white/20" />
                <div className="absolute top-0 right-0 w-[1.5px] h-8 bg-white/20" />
                <div className="absolute bottom-0 left-0 w-8 h-[1.5px] bg-white/20" />
                <div className="absolute bottom-0 left-0 w-[1.5px] h-8 bg-white/20" />
                <div className="absolute bottom-0 right-0 w-8 h-[1.5px] bg-white/20" />
                <div className="absolute bottom-0 right-0 w-[1.5px] h-8 bg-white/20" />
              </div>

              {/* Card counter */}
              <div className="absolute top-10 left-10 text-white/30 text-[10px] md:text-xs font-mono tracking-[0.5em] flex items-center gap-4">
                <div className="w-8 h-px bg-white/20" />
                CARD_{String(index + 1).padStart(2, "0")} / {String(PHOTO_CONFIG.length).padStart(2, "0")}
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-10 md:p-16">
                <div className="max-w-3xl">
                  <h3 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white leading-[1.1] mb-6 md:mb-10 tracking-tight">
                    {photoData.title}
                  </h3>

                  {/* Feature Grid */}
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        <span className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.3em]">
                          {t("painPoints.gallery.labels.logic")}
                        </span>
                      </div>
                      <p className="text-base md:text-xl text-white/70 leading-relaxed font-light">
                        {photoData.logic}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        <span className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.3em]">
                          {t("painPoints.gallery.labels.benefit")}
                        </span>
                      </div>
                      <p className="text-base md:text-xl text-emerald-100/90 leading-relaxed italic font-light">
                        {photoData.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExpandableGallery;

