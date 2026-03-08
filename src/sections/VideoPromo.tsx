import { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Zap, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function VideoPromo() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const textSectionsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !videoRef.current || !textSectionsRef.current) return;

        const video = videoRef.current;
        const textElements = textSectionsRef.current.querySelectorAll('.scrub-element');

        const handleLoadedMetadata = () => {
            const duration = video.duration || 5;

            // Pinning and Video Scrubbing
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=300%', // 300% scroll distance
                pin: true,
                scrub: 0.5,
                onUpdate: (self) => {
                    if (video.readyState >= 2) {
                        video.currentTime = self.progress * duration;
                    }
                },
            });

            // Text Animations using scroll-linked timelines
            textElements.forEach((el, i) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 50, filter: 'blur(10px)' },
                    {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: `${10 + (i * 20)}% top`,
                            end: `${30 + (i * 20)}% top`,
                            scrub: true,
                        }
                    }
                );
            });
        };

        if (video.readyState >= 1) {
            handleLoadedMetadata();
        } else {
            video.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, { scope: sectionRef });

    return (
        <section
            id="video-promo"
            ref={sectionRef}
            className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col md:flex-row items-center"
        >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[150px]" />
            </div>

            {/* Video Layer */}
            <div className="relative z-10 w-full md:w-[60%] h-[50vh] md:h-screen flex items-center justify-center p-6 md:p-12">
                <div className="relative w-full h-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover grayscale-[0.2] brightness-90"
                        muted
                        playsInline
                        preload="auto"
                        src="/videos/vigilox-demo.mp4"
                    />

                    {/* Cinematic letterbox look */}
                    <div className="absolute inset-x-0 top-0 h-10 bg-black/40 backdrop-blur-sm pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-black/40 backdrop-blur-sm pointer-events-none" />

                    {/* Play hint overlay - visual only */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
                            <Play className="fill-white w-5 h-5 ml-1" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-20 w-full md:w-[40%] px-8 md:px-16 py-12 flex flex-col justify-center">
                <div ref={textSectionsRef} className="max-w-md space-y-10">
                    <div className="scrub-element">
                        <span className="font-script text-3xl md:text-5xl text-blue-400 block mb-3">
                            {t('videoPromo.scriptText') || 'Experience the Change'}
                        </span>
                        <h2 className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4 font-sans">
                            {t('videoPromo.subtitle') || 'VIGILOX CORE ENGINE'}
                        </h2>
                        <h3 className="font-serif text-4xl md:text-6xl text-white leading-tight">
                            {t('videoPromo.titleMain') || 'From Chaos'}<br />
                            <span className="text-blue-500 italic">{t('videoPromo.titleAccent') || 'To Clarity'}</span>
                        </h3>
                    </div>

                    <p className="scrub-element text-base md:text-lg text-white/50 leading-relaxed font-sans font-light">
                        {t('videoPromo.description') || "Witness the precision of our AI engine. As you scroll, watch how Vigilox materializes chaotic data into seamless client interactions."}
                    </p>

                    <div className="scrub-element grid gap-8">
                        <div className="flex items-start gap-4 group">
                            <div className="mt-1 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-colors">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-xl">{t('videoPromo.feat1.title') || 'Synaptic Speed'}</h4>
                                <p className="text-xs text-white/30 uppercase tracking-widest mt-1">{t('videoPromo.feat1.desc') || 'Instant Response'}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="mt-1 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-colors">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-xl">{t('videoPromo.feat2.title') || 'Perfect Continuity'}</h4>
                                <p className="text-xs text-white/30 uppercase tracking-widest mt-1">{t('videoPromo.feat2.desc') || 'Never miss a detail'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical HUD detail */}
                    <div className="scrub-element pt-12">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] uppercase tracking-widest text-white/40">SYSTEM_SCRUB_ACTIVE</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-white/20 opacity-40">
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                <span className="text-[8px] uppercase tracking-[0.5em]">Scroll to interact</span>
            </div>
        </section>
    );
}
