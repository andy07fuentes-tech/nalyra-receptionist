import { useEffect, useRef } from 'react';
import {
    PhoneMissed,
    TrendingUp,
    Clock,
    Zap,
    RefreshCw,
    ClipboardList,
    AlertCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, any> = {
    PhoneMissed,
    TrendingUp,
    Clock,
    Zap,
    RefreshCw,
    ClipboardList
};

export function PainPoints() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Animate cards on scroll
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const items = (t('painPoints.items') as unknown as any[]) || [];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-[#141414] overflow-hidden"
            id="pain-points"
        >
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <AlertCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
                            {t('painPoints.subtitle')}
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                        {t('painPoints.mainTitle')}
                    </h2>

                    <p className="text-white/60 text-base md:text-lg lg:text-xl font-light">
                        {t('painPoints.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Zap;
                        return (
                            <div
                                key={index}
                                ref={(el) => { cardsRef.current[index] = el; }}
                                className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-blue-500/30 overflow-hidden"
                            >
                                {/* Background Glow */}
                                <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />

                                <div className="mb-6 relative">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-serif text-white mb-4 transition-colors group-hover:text-blue-400">
                                    {item.title}
                                </h3>

                                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                                    {item.description}
                                </p>

                                {/* Animated Corner accent */}
                                <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-4 right-4 w-4 h-px bg-blue-500" />
                                    <div className="absolute bottom-4 right-4 h-4 w-px bg-blue-500" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
