import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function CinematicShowcase() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Entrance Animation (Dimming the background as we approach)
    const { scrollYProgress: entranceProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    const backdropOpacity = useTransform(entranceProgress, [0.3, 0.8], [0, 1]);
    const lensFocusScale = useTransform(entranceProgress, [0.5, 1], [1.1, 1]);
    const lensFocusBlur = useTransform(entranceProgress, [0.5, 1], ["8px", "0px"]);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section 
            ref={containerRef} 
            className="relative bg-[#020202] text-white overflow-hidden"
            data-custom-reveal
        >
            {/* Cinema Dimming Overlay - Smoothly transitions from the previous section */}
            <motion.div 
                style={{ opacity: backdropOpacity }}
                className="absolute inset-0 bg-[#020202] pointer-events-none z-0"
            />
            {/* Desktop Scrollytelling (hidden on small screens initially, or simplified) */}
            <div className="hidden lg:block">
                <div className="flex min-h-screen">
                    {/* Left Column - Scrollable Content */}
                    <div className="w-1/2 flex flex-col items-center">
                        {steps.map((step, index) => (
                            <CinematicCard 
                                key={step.id} 
                                step={step} 
                                index={index} 
                                progress={smoothProgress}
                                entranceProgress={entranceProgress}
                            />
                        ))}
                    </div>

                    {/* Right Column - Sticky Media Container */}
                    <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center p-12 overflow-hidden">
                        <div className="relative w-full h-[70vh] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl bg-black">
                            {steps.map((step, index) => (
                                <MediaLayer 
                                    key={step.id} 
                                    src={step.video} 
                                    index={index} 
                                    total={steps.length} 
                                    progress={smoothProgress}
                                    style={index === 0 ? { scale: lensFocusScale, filter: `blur(${lensFocusBlur})` } : {}}
                                />
                            ))}
                            {/* Subtle Glass Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Alternative */}
            <div className="lg:hidden py-20 px-6 space-y-20">
                {steps.map((step) => (
                    <div key={step.id} className="space-y-8">
                        <div className="aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-xl bg-black">
                            <video 
                                src={step.video} 
                                autoPlay 
                                muted 
                                loop 
                                playsInline 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="space-y-4">
                            <span className="text-blue-500 font-script text-3xl">{step.subtitle}</span>
                            <h3 className="font-serif text-4xl">{step.title}</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CinematicCard({ step, index, progress, entranceProgress }: { step: any, index: number, progress: any, entranceProgress: any }) {
    const start = index / 4;
    const end = (index + 1) / 4;
    
    // Scale and opacity based on scroll
    const opacity = useTransform(progress, [start - 0.1, start, end - 0.05, end], [0.3, 1, 1, 0.3]);
    const scale = useTransform(progress, [start - 0.1, start, end - 0.05, end], [0.9, 1, 1, 0.9]);

    // Entrance reveal for the first card
    const yOffset = useTransform(entranceProgress, [0.7, 1], [40, 0]);
    const entranceOpacity = useTransform(entranceProgress, [0.7, 1], [0, 1]);

    return (
        <motion.div 
            style={{ 
                opacity: index === 0 ? entranceOpacity : opacity, 
                scale: index === 0 ? 1 : scale,
                y: index === 0 ? yOffset : 0
            }}
            className="min-h-screen flex flex-col justify-center px-16 max-w-xl self-center"
        >
            <div className="relative">
                {/* Step Number Background */}
                <div className="absolute -left-12 -top-12 text-9xl font-serif text-white/5 font-bold pointer-events-none select-none">
                    0{step.id}
                </div>
                
                <span className="text-blue-500 font-script text-4xl mb-4 block relative z-10">
                    {step.subtitle}
                </span>
                <h3 className="font-serif text-5xl xl:text-6xl mb-8 leading-tight relative z-10">
                    {step.title}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent mb-8" />
                <p className="text-slate-400 text-xl leading-relaxed max-w-sm relative z-10">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}

function MediaLayer({ src, index, total, progress, style = {} }: { src: string, index: number, total: number, progress: any, style?: any }) {
    
    // Tighten the transition window to prevent ghosting
    const fadeInStart = index / total;
    const fadeOutEnd = (index + 1) / total;
    
    // Quick fade in-out at the boundaries
    const opacity = useTransform(progress, 
        [fadeInStart - 0.05, fadeInStart, fadeOutEnd - 0.05, fadeOutEnd], 
        [0, 1, 1, 0]
    );

    const baseScale = useTransform(progress, 
        [fadeInStart - 0.05, fadeInStart, fadeOutEnd - 0.05, fadeOutEnd], 
        [1.05, 1, 1, 1.05]
    );

    return (
        <motion.div
            style={{ 
                opacity, 
                scale: index === 0 ? (style.scale || baseScale) : baseScale,
                filter: style.filter || "none"
            }}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black"
        >
            <video 
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-center"
            />
        </motion.div>
    );
}
