import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, Sparkles, Zap } from 'lucide-react';
import gsap from 'gsap';

export function VideoPromo() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate text elements
            gsap.from('.promo-text-child', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }
            });

            // Animate video container
            gsap.from(videoContainerRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="video-promo"
            ref={sectionRef}
            className="relative py-24 md:py-40 bg-[#0a0a0a] overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div ref={textRef} className="space-y-8 order-2 lg:order-1">
                        <div className="promo-text-child">
                            <span className="font-script text-3xl md:text-4xl text-blue-400 block mb-2">
                                {t('videoPromo.scriptText') || 'Experience the Change'}
                            </span>
                            <h2 className="text-xs tracking-[0.2em] text-white/40 uppercase mb-4">
                                {t('videoPromo.subtitle') || 'Vigilox In Action'}
                            </h2>
                            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                                {t('videoPromo.titleMain') || 'From Overwhelmed'}<br />
                                <span className="text-blue-500 italic">{t('videoPromo.titleAccent') || 'To Unstoppable'}</span>
                            </h3>
                        </div>

                        <p className="promo-text-child text-lg text-white/60 max-w-xl leading-relaxed">
                            {t('videoPromo.description') || "Watch how Vigilox transforms a chaotic front desk into a hub of calm efficiency. Never miss a call, never lose a lead, and let your team focus on what truly matters."}
                        </p>

                        <div className="promo-text-child flex flex-col sm:flex-row gap-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-black transition-colors">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">{t('videoPromo.feat1.title') || 'AI Precision'}</h4>
                                    <p className="text-xs text-white/40">{t('videoPromo.feat1.desc') || 'Handles complex inquiries instantly'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-black transition-colors">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">{t('videoPromo.feat2.title') || 'Instant Setup'}</h4>
                                    <p className="text-xs text-white/40">{t('videoPromo.feat2.desc') || 'Zero friction integration'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Loop Container */}
                    <div
                        ref={videoContainerRef}
                        className="relative order-1 lg:order-2 group"
                    >
                        {/* Frame Wrapper */}
                        <div className="relative z-10 p-2 md:p-3 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden aspect-video">
                            {/* Video Placeholder Background */}
                            <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden rounded-xl">
                                {/* Video Element (Hidden if URL empty) */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                    poster="/images/video-poster.jpg"
                                >
                                    <source src="/videos/vigilox-demo.mp4" type="video/mp4" />
                                    {/* Fallback color/message */}
                                    Your browser does not support the video tag.
                                </video>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                {/* Center Play Hint (Visual Only) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                                        <Play className="fill-white w-6 h-6 ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background shape */}
                        <div className="absolute -top-6 -right-6 w-full h-full bg-blue-500/5 rounded-2xl border border-blue-500/10 -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
