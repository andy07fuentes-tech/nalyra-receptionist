import { useEffect, useRef, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { OptimizedVideo } from '../components/OptimizedVideo';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function MissedCalls() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    const titleText = t('missedCalls.title');
    
    // Split text into words and characters for animation
    const splitTitle = useMemo(() => {
        return titleText.split(' ').map((word: string, wordIndex: number) => ({
            word,
            characters: Array.from(word),
            id: wordIndex
        }));
    }, [titleText]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Hero section scroll reveal (Sequel style)
            const chars = titleRef.current?.querySelectorAll('.char-span');
            if (chars && chars.length > 0) {
                gsap.fromTo(
                    chars,
                    { 
                        opacity: 0.15,
                        color: 'rgb(148, 163, 184)', // slate-400
                    },
                    {
                        opacity: 1,
                        color: 'rgb(15, 23, 42)', // slate-900
                        stagger: 0.1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: 'top 80%',
                            end: 'top 20%',
                            scrub: 0.5,
                        },
                    }
                );
            }

            // Subtitle and Button entry animation
            gsap.fromTo(
                '.content-entry',
                { 
                    opacity: 0, 
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 85%',
                    },
                }
            );

            // Video container animation
            gsap.fromTo(
                videoContainerRef.current,
                { 
                    opacity: 0, 
                    scale: 0.9,
                    y: 30
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.8,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: videoContainerRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Ringing pulse effect
            gsap.to('.ringing-pulse', {
                scale: 1.4,
                opacity: 0,
                duration: 2.5,
                repeat: -1,
                ease: 'sine.out',
                stagger: 1.2
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [splitTitle]);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-40 bg-white overflow-hidden"
            id="missed-calls"
        >
            {/* Background subtle elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Left Side: Content */}
                    <div ref={textRef} className="max-w-xl">
                        <span className="content-entry inline-block text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-6">
                            {t('missedCalls.subtitle')}
                        </span>
                        
                        <h2 
                            ref={titleRef}
                            className="font-serif text-4xl md:text-6xl lg:text-7xl text-slate-900 mb-8 leading-[1.1] tracking-tight"
                        >
                            {splitTitle.map((item: any, wordIdx: number) => (
                                <span key={wordIdx} className="inline-block mr-[0.2em] whitespace-nowrap">
                                    {item.characters.map((char: string, charIdx: number) => (
                                        <span key={charIdx} className="char-span inline-block">
                                            {char}
                                        </span>
                                    ))}
                                </span>
                            ))}
                        </h2>
                        
                        <p className="content-entry text-xl md:text-2xl font-medium mb-12 text-blue-700 max-w-lg">
                            {t('missedCalls.vision')}
                        </p>
                        
                        <a 
                            href="#pricing"
                            className="content-entry btn-premium-fill inline-flex items-center gap-4 px-8 py-4 rounded-full group shadow-lg shadow-blue-500/10"
                        >
                            {t('missedCalls.cta')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Right Side: Circular Video */}
                    <div className="flex justify-center md:justify-end">
                        <div ref={videoContainerRef} className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                            {/* Ringing pulse rings */}
                            <div className="ringing-pulse absolute inset-0 rounded-full border-2 border-blue-500/40 z-0" />
                            <div className="ringing-pulse absolute inset-0 rounded-full border-2 border-blue-400/20 z-0" />
                            
                            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[8px] border-slate-50 shadow-2xl">
                                <OptimizedVideo
                                    src="/videos/phone-ringing.mp4"
                                    preload="none"
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
