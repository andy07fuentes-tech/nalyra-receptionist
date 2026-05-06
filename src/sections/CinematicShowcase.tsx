import { useRef, useLayoutEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { OptimizedVideo } from '../components/OptimizedVideo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CinematicShowcase() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // White to Black transition for the section
            gsap.fromTo(
                sectionRef.current,
                { 
                    backgroundColor: "#ffffff",
                    color: "#0f172a" // slate-900
                },
                {
                    backgroundColor: "#020202",
                    color: "#ffffff",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 50%",
                        end: "top 20%",
                        scrub: 1,
                    }
                }
            );

            // Transition descriptions from dark gray to light gray
            gsap.fromTo(
                ".cinematic-desc",
                { color: "#475569" }, // slate-600
                {
                    color: "#94a3b8", // slate-400
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 50%",
                        end: "top 20%",
                        scrub: 1,
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const steps = [
        {
            id: 1,
            subtitle: t('cinematic.step1.subtitle'),
            title: t('cinematic.step1.title'),
            description: t('cinematic.step1.description'),
            video: '/videos/Happy_Receptionist_Working_Late.mp4'
        },
        {
            id: 2,
            subtitle: t('cinematic.step2.subtitle'),
            title: t('cinematic.step2.title'),
            description: t('cinematic.step2.description'),
            video: '/videos/grok-video-8fc70472-35f5-43b1-9bb5-08f13a925240.mp4'
        },
        {
            id: 3,
            subtitle: t('cinematic.step3.subtitle'),
            title: t('cinematic.step3.title'),
            description: t('cinematic.step3.description'),
            video: '/videos/grok-video-d83d8f4f-54b9-4ce1-bd54-45d3139fc69c.mp4'
        },
        {
            id: 4,
            subtitle: t('cinematic.step4.subtitle'),
            title: t('cinematic.step4.title'),
            description: t('cinematic.step4.description'),
            video: '/videos/grok-video-ffaf98bf-cac3-4884-891d-7a5a4d05776a.mp4'
        }
    ];

    return (
        <section ref={sectionRef} id="cinematic-showcase" className="py-24 md:py-32 relative overflow-hidden">
            {/* Soft fade from white page above - removed to allow full section color transition */}
            
            {/* Background: floating orbs + dot grid */}
            <div className="cin-orb cin-orb-1" />
            <div className="cin-orb cin-orb-2" />
            <div className="cin-orb cin-orb-3" />
            <div className="cin-orb cin-orb-4" />
            <div className="cin-dot-grid" />

            <div className="container-custom max-w-6xl relative z-20">
                <div className="space-y-32">
                    {steps.map((step) => (
                        <div key={step.id} className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                            <div className={`${step.id % 2 === 0 ? 'md:order-2' : ''} space-y-6`}>
                                <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                    <span className="text-blue-500 font-script text-2xl">{step.subtitle}</span>
                                </div>
                                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                                    <span className="text-blue-500/50 mr-4">0{step.id}</span>
                                    {step.title}
                                </h3>
                                <p className="cinematic-desc text-lg md:text-xl leading-relaxed max-w-lg">
                                    {step.description}
                                </p>
                            </div>
                            
                            <div className={`${step.id % 2 === 0 ? 'md:order-1' : ''} relative group`}>
                                <div className="absolute -inset-4 bg-blue-500/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-wine-900">
                                    <OptimizedVideo 
                                        src={step.video} 
                                        preload="auto"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
