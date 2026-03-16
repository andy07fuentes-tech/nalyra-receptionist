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
        title: "Get Started - It only takes 10 minutes",
        description: "Please keep these documents and details ready for a smooth sign-up",
        items: [
            { id: 1, text: "PAN card" },
            { id: 2, text: "GST number, if applicable" },
            {
                id: 3,
                text: "FSSAI license",
                helperText: "Don't have a FSSAI license?",
                helperLink: { href: "#", text: "Apply here" },
            },
            {
                id: 4,
                text: "Menu & profile food image",
                helperText: "What is profile food image?",
                helperLink: { href: "#", text: "Refer here" },
            },
            { id: 5, text: "Bank account details" },
        ],
        videoThumbnailUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/3yBgLxgwS1U?si=_MZFE2nm9fevcj76&t=30",
    };

    return (
        <section
            id="video-promo"
            ref={sectionRef}
            className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] py-24 md:py-32 overflow-hidden"
        >
            {/* Cinematic Background */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a2e]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.15)_0%,_transparent_60%)]" />
            </div>

            <div className="container-custom relative z-10 w-full flex justify-center">
                <div ref={contentRef} className="w-full max-w-7xl">
                    <div className="inline-flex items-center gap-2 mb-12 justify-center w-full">
                        <span className="w-8 h-px bg-blue-500" />
                        <span className="text-blue-400 font-bold text-sm uppercase tracking-[0.4em]">
                            {t('videoPromo.subtitle') || "DEMO"}
                        </span>
                        <span className="w-8 h-px bg-blue-500" />
                    </div>
                    <OnboardingChecklist
                        title={t('featureShowcase.step1.title') || "Discover IA in Action"}
                        description={t('featureShowcase.step1.description') || "Watch our demonstration to understand how our virtual receptionist can transform your business."}
                        items={checklistData.items}
                        videoThumbnailUrl={checklistData.videoThumbnailUrl}
                        videoUrl={checklistData.videoUrl}
                        className="bg-[#121212]/90 backdrop-blur-3xl border-white/10 text-white shadow-2xl mx-auto w-full p-10 md:p-14 lg:p-16 mb-10 rounded-3xl"
                    />
                </div>
            </div>

            {/* Cinematic Gradient Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20" />
        </section>
    );
}
