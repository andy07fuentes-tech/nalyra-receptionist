import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function MissedCalls() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Text animation
            gsap.fromTo(
                textRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Video container animation
            gsap.fromTo(
                videoContainerRef.current,
                { opacity: 0, scale: 0.8, rotate: -5 },
                {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1.2,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: videoContainerRef.current,
                        start: 'top 75%',
                    },
                }
            );

            // Ringing pulse effect
            gsap.to('.ringing-pulse', {
                scale: 1.5,
                opacity: 0,
                duration: 2,
                repeat: -1,
                ease: 'power1.out',
                stagger: 1
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-40 bg-[#0a0a0a] overflow-hidden"
            id="missed-calls"
        >
            {/* Background cinematic elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Left Side: Content */}
                    <div ref={textRef} className="max-w-xl">
                        <span className="inline-block text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">
                            {t('missedCalls.subtitle') || "IMPACT FINANCIER"}
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-10 leading-[1.1] tracking-tight">
                            {t('missedCalls.title') || "Chaque appel manqué est une opportunité perdue."}
                        </h2>
                        
                        <a 
                            href="#pricing"
                            className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-xl shadow-white/5"
                        >
                            {t('missedCalls.cta') || "Ne perdez plus d'argent"}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Right Side: Circular Video */}
                    <div className="flex justify-center md:justify-end">
                        <div ref={videoContainerRef} className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                            {/* Ringing pulse rings */}
                            <div className="ringing-pulse absolute inset-0 rounded-full border-2 border-blue-500/40 z-0" />
                            <div className="ringing-pulse absolute inset-0 rounded-full border-2 border-blue-400/20 z-0" />
                            
                            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[8px] border-white/10 shadow-2xl">
                                <video 
                                    className="w-full h-full object-cover"
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline
                                >
                                    <source src="/videos/phone-ringing.mp4" type="video/mp4" />
                                </video>
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block animate-bounce-slow">
                                <p className="text-xl font-serif font-bold italic">$ ––</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
