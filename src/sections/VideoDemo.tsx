import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function VideoDemo() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
        );

        const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="video-demo"
            ref={sectionRef}
            className="section-padding relative overflow-hidden bg-[#0d0d0d]"
        >
            <div className="container-custom relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <div className="slide-in-left order-2 lg:order-1 space-y-8">
                        <div>
                            <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                                {t('videoDemo.subtitle') || 'Rendez-vous & Agenda'}
                            </span>
                            <h2 className="font-serif text-h2 text-white leading-tight mb-6">
                                {t('videoDemo.title') || 'Planification instantanée, sans friction'}
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                                {t('videoDemo.description') || 'Vérifie les disponibilités, propose des créneaux, confirme par SMS/email, et réduit les no-shows.'}
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                const element = document.querySelector('#contact');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest text-sm flex items-center gap-2 group"
                        >
                            {t('videoDemo.cta') || 'Voir Comment Ça Marche'}
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Right: Video/Image Placeholder */}
                    <div className="slide-in-right order-1 lg:order-2">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] group shadow-2xl shadow-blue-900/10">

                            {/* Background Image (Tablet Booking Placeholder) */}
                            <img
                                src="/images/features/tablet-booking.jpg"
                                alt="Demo Placeholder"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <Play className="w-8 h-8 text-blue-400 fill-current translate-x-0.5" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
