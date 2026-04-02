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
  { id: "photo-7", src: "/images/tech-nlp.jpg", key: "photo7" },
  { id: "photo-8", src: "/images/tech-ml.jpg", key: "photo8" },
  { id: "photo-9", src: "/images/hero-banner.jpg", key: "photo9" },
];

export function ExpandableGallery() {
  const { t } = useLanguage();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        // Clip-path wipe-up reveal tied directly to scroll position
        gsap.fromTo(
          card,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );

        // Parallax on the inner image
        const img = card.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12, y: "8%" },
            {
              scale: 1,
              y: "0%",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col w-full">
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
            className="relative w-full overflow-hidden rounded-2xl group"
            style={{
              height: "55vh",
              marginTop: index === 0 ? 0 : "-48px",
              zIndex: index + 1,
            }}
          >
            {/* Background image with parallax */}
            <img
              src={photo.src}
              alt={photoData.title}
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

            {/* Corner crosshairs */}
            <div className="absolute top-6 left-6 w-5 h-5 border-t-[1.5px] border-l-[1.5px] border-white/35 transition-all duration-500 group-hover:border-white/80 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute top-6 right-6 w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-white/35 transition-all duration-500 group-hover:border-white/80 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute bottom-6 left-6 w-5 h-5 border-b-[1.5px] border-l-[1.5px] border-white/35 transition-all duration-500 group-hover:border-white/80 group-hover:-translate-x-1 group-hover:translate-y-1" />
            <div className="absolute bottom-6 right-6 w-5 h-5 border-b-[1.5px] border-r-[1.5px] border-white/35 transition-all duration-500 group-hover:border-white/80 group-hover:translate-x-1 group-hover:translate-y-1" />

            {/* Card counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/25 text-[10px] font-mono tracking-[0.35em]">
              {String(index + 1).padStart(2, "0")} / {String(PHOTO_CONFIG.length).padStart(2, "0")}
            </div>

            {/* Bottom content */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <h3 className="font-serif text-2xl md:text-4xl text-white leading-snug mb-2 transition-transform duration-500 ease-[cubic-bezier(0.62,0.05,0.01,0.99)] group-hover:-translate-y-28">
                {photoData.title}
              </h3>

              {/* Hover reveal */}
              <div className="overflow-hidden">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.62,0.05,0.01,0.99)] space-y-3">
                  <div className="flex gap-2 items-start">
                    <span className="shrink-0 mt-0.5 text-[9px] font-bold text-blue-300 uppercase tracking-widest bg-blue-500/20 px-1.5 py-0.5 rounded border border-blue-500/20">
                      {t("painPoints.gallery.labels.logic")}
                    </span>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">{photoData.logic}</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="shrink-0 mt-0.5 text-[9px] font-bold text-emerald-300 uppercase tracking-widest bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      {t("painPoints.gallery.labels.benefit")}
                    </span>
                    <p className="text-sm md:text-base text-emerald-100/80 leading-relaxed italic">{photoData.benefit}</p>
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
