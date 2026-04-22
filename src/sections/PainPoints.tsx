import { useEffect, useRef, useMemo } from 'react';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StickyPainGallery } from '../components/ui/sticky-pain-gallery';

gsap.registerPlugin(ScrollTrigger);

export function PainPoints() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    const titleText = t('painPoints.mainTitle');

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
            // Character reveal (Sequel style)
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

            // Subtitle and Description entry animation
            gsap.fromTo(
                '.pain-points-entry',
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
                        trigger: containerRef.current,
                        start: 'top 85%',
                    },
                }
            );

            // Container reveal
            gsap.fromTo(
                containerRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [splitTitle]);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-white"
            id="pain-points"
        >
            {/* Subtle Patterns */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10" ref={containerRef}>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="pain-points-entry inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                        <AlertCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                            {t('painPoints.subtitle')}
                        </span>
                    </div>

                    <h2 
                        ref={titleRef}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-dark-theme mb-6 leading-[0.95] tracking-tight"
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

                    <p className="pain-points-entry text-slate-500 text-base md:text-lg lg:text-xl font-light">
                        {t('painPoints.description')}
                    </p>
                </div>
                <StickyPainGallery />
            </div>
        </section>
    );
}
