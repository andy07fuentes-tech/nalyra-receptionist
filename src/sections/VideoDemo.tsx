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
        videoThumbnailUrl: "/images/ai-receptionist-woman.jpg",
        videoUrl: "/videos/anvela-demo.mp4",
    };

    return (
        <section
            id="video-demo"
            ref={sectionRef}
            className="relative min-h-screen flex items-center bg-[#0a0a0a] py-32 md:py-48 overflow-hidden"
        >
            {/* Smooth Top Transition */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white to-[#0a0a0a] opacity-10 pointer-events-none z-20" />

            {/* Cinematic Background */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d12] to-[#1a1a2e]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.2)_0%,_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.15)_0%,_transparent_60%)]" />
                
                {/* Animated Grid lines for tech feel */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            </div>

            <div className="container-custom relative z-10 w-full flex justify-center">
                <div ref={contentRef} className="w-full max-w-screen-2xl">
                    <div className="inline-flex items-center gap-2 mb-12 justify-center w-full">
                        <span className="w-12 h-px bg-blue-500/50" />
                        <span className="text-blue-400 font-bold text-sm uppercase tracking-[0.5em]">
                            {t('videoPromo.subtitle') || "SPOTLIGHT"}
                        </span>
                        <span className="w-12 h-px bg-blue-500/50" />
                    </div>
                    
                    <OnboardingChecklist
                        title={t('videoDemo.title')}
                        description={t('videoDemo.description')}
                        items={checklistData.items}
                        videoThumbnailUrl={checklistData.videoThumbnailUrl}
                        videoUrl={checklistData.videoUrl}
                        isTransparent={true}
                        className="text-white mx-auto w-full mb-10"
                    />
                </div>
            </div>

            {/* Cinematic Gradient Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20 opacity-40" />
        </section>
    );
}
