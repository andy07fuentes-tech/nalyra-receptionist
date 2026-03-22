"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useId, useRef, useEffect } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";

import { Button } from "@/components/ui/button";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

// Change Here
const PHOTOS = [
  {
    id: "photo-1",
    src: "/images/features/phone-reception.jpg",
    alt: "Réception IA - Bureau noir avec téléphone",
    title: "Filet de Sécurité 'Zéro Opportunité'",
    logic: "L'IA agit comme un relais intelligent. Elle ne décroche que si la ligne principale est occupée ou après trois sonneries sans réponse.",
    benefit: "Chaque prospect est capturé et réservé sans que votre équipe ne se sente pressée par le téléphone alors qu'un patient est devant elle.",
    rotation: -20,
    x: -140,
    y: 25,
    zIndex: 10,
  },
  {
    id: "photo-2",
    src: "/images/features/tablet-booking.jpg",
    alt: "Planification intelligente sur tablette",
    title: "Relais 'Prospects Chauds' Après-Heures",
    logic: "Pendant que votre équipe se repose, Anvela prend l'appel, planifie le rendez-vous dans votre agenda et enregistre le résumé complet.",
    benefit: "À 8h00, pas de piles de messages vocaux vagues. Juste une liste de clients déjà réservés à confirmer et à accueillir.",
    rotation: -8,
    x: -50,
    y: -15,
    zIndex: 20,
  },
  {
    id: "photo-3",
    src: "/images/feature-support.jpg",
    alt: "Support client et interaction",
    title: "Élimination de la 'Corvée Administrative'",
    logic: "L'IA gère les appels FAQ à haut volume et faible valeur (horaires, adresse, assurances, tarifs de base).",
    benefit: "Votre personnel peut se concentrer sur des tâches à haute valeur ajoutée, comme rassurer un patient anxieux.",
    rotation: 6,
    x: 50,
    y: -5,
    zIndex: 30,
  },
  {
    id: "photo-4",
    src: "/images/features/automation-icons.jpg",
    alt: "Automatisation et flux CRM",
    title: "Synchronisation CRM Directe",
    logic: "Chaque interaction est synchronisée avec votre CRM ou Google Sheets, déclenchant des suivis automatiques.",
    benefit: "Plus de saisie manuelle erronée. Toutes les infos sont traçables, propres et prêtes pour la conversion finale.",
    rotation: 18,
    x: 140,
    y: 30,
    zIndex: 40,
  },
  {
    id: "photo-5",
    src: "/images/step-setup.jpg",
    alt: "Configuration rapide Anvela",
    title: "Configuration Éclair",
    logic: "Mise en place de votre profil IA en moins de 10 minutes avec vos préférences métier.",
    benefit: "Gagnez du temps dès la première heure.",
  },
  {
    id: "photo-6",
    src: "/images/step-integrate.jpg",
    alt: "Intégration transparente",
    title: "Intégration Transparente",
    logic: "Compatible avec 99% des systèmes téléphoniques et calendriers actuels.",
    benefit: "Aucun changement d'infrastructure requis.",
  },
  {
    id: "photo-7",
    src: "/images/tech-nlp.jpg",
    alt: "Technologie NLP Avancée",
    title: "Voix Ultra-Réaliste",
    logic: "Une technologie de synthèse vocale qui imite parfaitement le ton et l'empathie humaine.",
    benefit: "Vos clients ne devinent jamais qu'ils parlent à une IA.",
  },
  {
    id: "photo-8",
    src: "/images/tech-ml.jpg",
    alt: "Apprentissage automatique",
    title: "Apprentissage Continu",
    logic: "L'IA apprend de chaque interaction pour devenir plus précise chaque jour.",
    benefit: "Un employé qui ne cesse de s'améliorer.",
  },
  {
    id: "photo-9",
    src: "/images/hero-banner.jpg",
    alt: "Anvela Vision",
    title: "Vision Anvela",
    logic: "Redéfinir le futur du service client par l'intelligence conversationnelle.",
    benefit: "Positionnez votre entreprise comme leader technologique.",
  },
];

const transition = {
  type: "spring",
  stiffness: 160,
  damping: 18,
  mass: 1,
} as const;

export function ExpandableGallery() {
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
                  <span className="font-medium">Retour</span>
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
              {PHOTOS.map((photo, index) => {
                const isPrimary = index < 4;
                if (!isPrimary && !isExpanded) return null;

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
                        alt={photo.alt}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                      {isExpanded && (
                        <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 md:bg-black/40 backdrop-blur-xl md:backdrop-blur-sm rounded-[2rem] md:rounded-[3rem] overflow-hidden">
                          <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out h-full">
                            <h3 className="font-serif text-lg md:text-2xl font-bold mb-3 md:mb-4 text-blue-300 drop-shadow-sm">{photo.title}</h3>
                            
                            <div className="space-y-4 md:space-y-5">
                              <div className="flex flex-col md:flex-row gap-1 md:gap-3">
                                <span className="text-[10px] md:text-[11px] font-bold text-blue-300 uppercase tracking-widest bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/20 w-fit">Logique</span>
                                <p className="text-sm md:text-xs leading-relaxed text-slate-100 font-medium md:font-light">
                                  {photo.logic}
                                </p>
                              </div>
                              
                              <div className="flex flex-col md:flex-row gap-1 md:gap-3">
                                <span className="text-[10px] md:text-[11px] font-bold text-emerald-300 uppercase tracking-widest bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/20 w-fit">Bénéfice</span>
                                <p className="text-sm md:text-xs leading-relaxed text-emerald-50/90 font-medium md:font-light italic">
                                  {photo.benefit}
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
                    Vos clients détestent attendre au téléphone.{" "}
                    <br className="hidden md:block" />
                    Ne laissez plus aucun appel sans réponse.
                  </h2>

                  <div className="flex justify-center">
                    <Button
                      variant="default"
                      onClick={() => setIsExpanded(true)}
                      className="rounded-full cursor-pointer py-6 px-8 border-border/40 font-normal group bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Découvrir les points de friction
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
