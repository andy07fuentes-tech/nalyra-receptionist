import { useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExpandableGallery } from '../components/ui/expandable-gallery';

gsap.registerPlugin(ScrollTrigger);

export function PainPoints() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-white overflow-hidden"
            id="pain-points"
        >
            {/* Subtle Patterns */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10" ref={containerRef}>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                        <AlertCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                            {t('painPoints.subtitle')}
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-dark-theme mb-6 leading-tight">
                        {t('painPoints.mainTitle')}
                    </h2>

                    <p className="text-slate-500 text-base md:text-lg lg:text-xl font-light">
                        {t('painPoints.description')}
                    </p>
                </div>
                {/* Changed the bottom layout mapping of the items to use the ExpandableGallery instead*/}
                <ExpandableGallery />
            </div>
        </section>
    );
}
