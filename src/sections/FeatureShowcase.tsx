import { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function FeatureShowcase() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const titleText = t('featureShowcase.mainTitle') || "How Anvela Powers Your Growth";

    const splitTitle = useMemo(() => titleText.split(' '), [titleText]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.fade-up');
        elements?.forEach((el) => observer.observe(el));

        // GSAP Animations
        const ctx = gsap.context(() => {
            // Data Packets Flowing
            const paths = [".path-1", ".path-2", ".path-3"];
            paths.forEach((pathSelector, i) => {
                // Create multiple packets per path
                [0, 1].forEach((delay) => {
                    const packet = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    packet.setAttribute("r", "3");
                    packet.setAttribute("fill", "#60a5fa");
                    packet.classList.add("filter", "blur-[1px]");
                    
                    const svg = sectionRef.current?.querySelector("svg");
                    if (svg) {
                        svg.appendChild(packet);
                        gsap.to(packet, {
                            motionPath: {
                                path: pathSelector,
                                align: pathSelector,
                                alignOrigin: [0.5, 0.5]
                            },
                            duration: 4,
                            repeat: -1,
                            delay: i * 0.5 + delay * 2,
                            ease: "none"
                        });
                    }
                });
            });

            // Header elements entry animation
            gsap.fromTo(
                '.showcase-header-entry',
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
                        trigger: headerRef.current,
                        start: 'top 90%',
                    },
                }
            );
        }, sectionRef);

        return () => {
            observer.disconnect();
            ctx.revert();
        };
    }, []);

    const features = [
        {
            id: 'capture',
            title: t('featureShowcase.step2.title'),
            description: t('featureShowcase.step2.description'),
            image: '/images/features/phone-reception.jpg',
            icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
            color: "blue"
        },
        {
            id: 'scheduling',
            title: t('featureShowcase.step3.title'),
            description: t('featureShowcase.step3.description'),
            image: '/images/features/tablet-booking.jpg',
            icon: <Calendar className="w-5 h-5 text-blue-500" />,
            color: "indigo"
        },
        {
            id: 'automation',
            title: t('featureShowcase.step4.title'),
            description: t('featureShowcase.step4.description'),
            image: '/images/features/automation-icons.jpg',
            icon: <Zap className="w-5 h-5 text-blue-500" />,
            color: "cyan"
        }
    ];

    return (
        <section
            id="capabilities"
            ref={sectionRef}
            className="bg-slate-50 py-24 md:py-32 relative overflow-hidden"
        >
            {/* Background Animated SVG Connections */}
            <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
                viewBox="0 0 1200 600"
                preserveAspectRatio="none"
            >
                {/* Connection Paths - Horizontal flow between 3 columns */}
                <path 
                    d="M 100,300 Q 300,250 500,300" 
                    className="path-1 stroke-blue-400/30 stroke-2 fill-none" 
                    strokeDasharray="8 12"
                    style={{ animation: 'flow 2s linear infinite' }}
                />
                <path 
                    d="M 500,300 Q 700,350 900,300" 
                    className="path-2 stroke-blue-400/30 stroke-2 fill-none" 
                    strokeDasharray="8 12"
                    style={{ animation: 'flow 2.5s linear infinite' }}
                />
                <path 
                    d="M 200,450 Q 600,550 1000,450" 
                    className="path-3 stroke-blue-400/30 stroke-2 fill-none" 
                    strokeDasharray="8 12"
                    style={{ animation: 'flow 3s linear infinite' }}
                />

                <style>{`
                    @keyframes pulse-ping {
                        0% { transform: scale(1); opacity: 0.6; }
                        50% { transform: scale(1.8); opacity: 0; }
                        100% { transform: scale(1.8); opacity: 0; }
                    }
                    .animate-pulse-ping {
                        animation: pulse-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                        will-change: transform, opacity;
                    }
                    @keyframes flow {
                        from { stroke-dashoffset: 20; }
                        to { stroke-dashoffset: 0; }
                    }
                    .fade-up {
                        opacity: 0;
                        transform: translateY(30px);
                        transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
                    }
                    .fade-up.visible {
                        opacity: 1;
                        transform: translateY(0);
                    }
                `}</style>
            </svg>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <span className="showcase-header-entry text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                        {t('featureShowcase.processSubtitle')}
                    </span>
                    <h2
                        ref={titleRef}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-theme mb-6 leading-[1.1]"
                    >
                        {splitTitle.map((word: string, wordIdx: number) => (
                            <motion.span
                                key={wordIdx}
                                className="inline-block mr-[0.25em] whitespace-nowrap"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-10%' }}
                                transition={{ duration: 0.7, delay: wordIdx * 0.07, ease: [0.2, 1, 0.3, 1] }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>
                </div>

                {/* Grid Layout - 3 Equal Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={feature.id}
                            className="group relative bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl fade-up"
                            style={{ transitionDelay: `${idx * 0.1}s` }}
                        >
                            <div className="relative w-20 h-20 mb-10 flex items-center justify-center">
                                <div className="animate-pulse-ping absolute inset-0 bg-blue-500/20 rounded-full" />
                                <div className="animate-pulse-ping absolute inset-0 bg-blue-500/10 rounded-full" style={{ animationDelay: '1.5s' }} />
                                
                                <div className="relative w-20 h-20 rounded-[28px] bg-blue-50 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                    {/* Responsive Icon sizing */}
                                    {window.innerWidth > 768 ? (
                                        <div className="transform scale-150">{feature.icon}</div>
                                    ) : (
                                        feature.icon
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-serif text-dark-theme mb-6">{feature.title}</h3>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Number Indicator */}
                            <div className="absolute top-8 left-10 text-7xl font-serif text-slate-100 font-bold opacity-50 pointer-events-none -z-10 group-hover:text-blue-50 transition-colors">
                                0{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
