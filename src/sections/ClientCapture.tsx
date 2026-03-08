import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export function ClientCapture() {
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
            id="client-capture"
            ref={sectionRef}
            className="bg-white py-24 relative overflow-hidden"
        >
            <div className="container-custom relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Image Placeholder */}
                    <div className="slide-in-left order-2 lg:order-1 relative">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <img
                                src="/images/features/client-capture.jpg"
                                alt="Client Capture Display"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="slide-in-right order-1 lg:order-2 space-y-8">
                        <div>
                            <span className="text-blue-500 font-medium text-xs uppercase tracking-[0.2em] mb-4 block">
                                {t('clientCapture.subtitle') || 'RÉCEPTION IA'}
                            </span>
                            <h2 className="font-serif text-3xl md:text-h2 text-slate-900 leading-tight mb-6">
                                {t('clientCapture.title') || 'Ne ratez plus un seul client'}
                            </h2>
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
                                {t('clientCapture.description') || "Chaque appel manqué, c'est un client perdu. Nalyra répond en moins d'une seconde, comprend la demande et collecte les infos utiles."}
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                const element = document.querySelector('#contact');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-blue-500 hover:text-blue-600 font-medium transition-colors uppercase tracking-widest text-sm flex items-center gap-2 group"
                        >
                            {t('clientCapture.cta') || 'DÉCOUVRIR LA RÉCEPTION IA'}
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        {/* Background "01" Accent */}
                        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none overflow-hidden">
                            <span className="font-serif text-[240px] text-slate-900 leading-none">01</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
