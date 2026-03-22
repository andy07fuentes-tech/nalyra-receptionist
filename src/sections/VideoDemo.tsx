import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { OnboardingChecklist } from '../components/ui/onboarding-checklist';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function VideoDemo() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (!sectionRef.current || !contentRef.current) return;

        // Animate the main content to pop up when scrolling into view
        gsap.fromTo(
            contentRef.current,
            { 
                y: 100, 
                opacity: 0, 
                scale: 0.95 
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%", // Triggers when the top of the section hits 75% down the viewport
                    once: true
                }
            }
        );
        
        // Trigger background fade
        const ob = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPhase(1);
                ob.disconnect();
            }
        }, { threshold: 0.1 });
        ob.observe(sectionRef.current);
        
        return () => ob.disconnect();
    }, []);

    const checklistData = {
        title: t('videoDemo.title'),
        description: t('videoDemo.description'),
        items: [
            { id: 1, text: t('videoDemo.step1.text'), helperText: t('videoDemo.step1.helper') },
            { id: 2, text: t('videoDemo.step2.text'), helperText: t('videoDemo.step2.helper') },
            { id: 3, text: t('videoDemo.step3.text'), helperText: t('videoDemo.step3.helper') },
            { id: 4, text: t('videoDemo.step4.text'), helperText: t('videoDemo.step4.helper') },
            { id: 5, text: t('videoDemo.step5.text'), helperText: t('videoDemo.step5.helper') },
        ],
        videoThumbnailUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/3yBgLxgwS1U?si=_MZFE2nm9fevcj76&t=30",
    };

    return (
        <section
            id="video-promo"
            ref={sectionRef}
            className="relative min-h-screen flex items-center bg-[#0a0a0a] py-32 md:py-48 overflow-hidden"
        >
            {/* Smooth Top Transition */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />

            {/* Cinematic Background */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a2e]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.15)_0%,_transparent_60%)]" />
            </div>

            <div className="container-custom relative z-10 w-full flex justify-center">
                <div ref={contentRef} className="w-full max-w-screen-2xl">
                    <div className="inline-flex items-center gap-2 mb-16 justify-center w-full">
                        <span className="w-12 h-px bg-blue-500" />
                        <span className="text-blue-400 font-bold text-sm uppercase tracking-[0.4em]">
                            {t('videoPromo.subtitle') || "DEMO"}
                        </span>
                        <span className="w-12 h-px bg-blue-500" />
                    </div>
                    <OnboardingChecklist
                        title={t('featureShowcase.step1.title') || "Découvrez l'IA en Action"}
                        description={t('featureShowcase.step1.description') || "Regardez notre démonstration pour comprendre comment notre réceptionniste virtuelle transforme votre accueil client."}
                        items={checklistData.items}
                        videoThumbnailUrl={checklistData.videoThumbnailUrl}
                        videoUrl={checklistData.videoUrl}
                        className="bg-[#121212]/95 backdrop-blur-3xl border border-white/10 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] mx-auto w-full p-12 md:p-16 lg:p-20 mb-10 rounded-3xl"
                    />
                </div>
            </div>

            {/* Cinematic Gradient Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20" />
        </section>
    );
}
