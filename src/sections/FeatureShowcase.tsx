import { useEffect, useRef } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FeatureShowcase() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Consider unobserving after it becomes visible so it stays visible
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: '50px 0px -50px 0px' }
        );

        const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
        elements?.forEach((el) => {
            observer.observe(el);
            // Fallback: If it's already high up on the page, just make it visible
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            id: 'video-demo',
            subtitle: t('featureShowcase.step1.subtitle') || 'DÉMONSTRATION',
            title: t('featureShowcase.step1.title') || "Découvrez l'IA en action",
            description: t('featureShowcase.step1.description') || 'Visionnez notre démonstration pour comprendre comment notre réceptionniste virtuelle peut transformer votre entreprise.',
            cta: t('featureShowcase.step1.cta') || 'LANCER LA VIDÉO',
            image: '', // Will add video thumbnail later
            number: '01',
            isVideo: true,
            reversed: false,
        },
        {
            id: 'capture',
            subtitle: t('featureShowcase.step2.subtitle') || 'RÉCEPTION IA',
            title: t('featureShowcase.step2.title') || 'Ne ratez plus un seul client',
            description: t('featureShowcase.step2.description') || "Chaque appel manqué, c'est un client perdu. Lumina prend l'appel, comprend la demande et collecte les infos utiles.",
            cta: t('featureShowcase.step2.cta') || 'DÉCOUVRIR LA RÉCEPTION IA',
            image: '/images/features/phone-reception.jpg',
            number: '02',
            isVideo: false,
            reversed: true,
        },
        {
            id: 'scheduling',
            subtitle: t('featureShowcase.step3.subtitle') || 'RENDEZ-VOUS & AGENDA',
            title: t('featureShowcase.step3.title') || 'Planification instantanée, sans friction',
            description: t('featureShowcase.step3.description') || 'Vérifie les disponibilités, propose des créneaux, confirme par SMS/email, et réduit les no-shows.',
            cta: t('featureShowcase.step3.cta') || 'VOIR COMMENT ÇA MARCHE',
            image: '/images/features/tablet-booking.jpg',
            number: '03',
            isVideo: false,
            reversed: false,
            bleedOut: true, // Custom flag to make the image bleed off the right side
        },
        {
            id: 'automation',
            subtitle: t('featureShowcase.step4.subtitle') || 'AUTOMATISATION & SUIVI',
            title: t('featureShowcase.step4.title') || 'Du contact à la conversion',
            description: t('featureShowcase.step4.description') || 'Crée automatiquement une fiche client, envoie un suivi, et alimente votre CRM/Google Sheets. Tout est traçable.',
            cta: t('featureShowcase.step4.cta') || 'EXPLORER L\'AUTOMATISATION',
            image: '/images/features/automation-icons.jpg',
            number: '04',
            isVideo: false,
            reversed: true,
        }
    ];

    return (
        <section
            id="feature-showcase"
            ref={sectionRef}
            className="bg-[#0a0a0a] py-32 relative overflow-hidden"
        >
            <div className="container-custom relative space-y-40">
                {features.map((feature, index) => {
                    // For section 1 (index 0), standard 5/7 split
                    // For sections 2, 3, 4 (index 1+), make image columns wider (e.g. 4/8 split)
                    const textColSpan = index === 0 ? "lg:col-span-5" : "lg:col-span-4";
                    const imgColSpan = index === 0 ? "lg:col-span-7" : "lg:col-span-8";

                    // Increased scale sizes via width overflow for 2-4 to make them pop huge
                    const bleedClass = index > 0 && !feature.reversed ? "lg:w-[115%] lg:max-w-none" : "";
                    const bleedReverseClass = index > 0 && feature.reversed ? "lg:w-[115%] lg:max-w-none lg:-ml-[15%]" : "";

                    return (
                        <div key={feature.id} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            {/* Text Content */}
                            <div className={`${textColSpan} ${feature.reversed ? 'lg:order-2 slide-in-right lg:pl-16' : 'order-2 lg:order-1 slide-in-left'} space-y-8 relative z-10`}>
                                <div>
                                    <span className="text-blue-500 font-medium text-xs uppercase tracking-[0.2em] mb-4 block">
                                        {feature.subtitle}
                                    </span>
                                    <h2 className="font-serif text-h2 text-white leading-tight mb-6">
                                        {feature.title}
                                    </h2>
                                    <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                                        {feature.description}
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        const element = document.querySelector('#contact');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="text-blue-500 hover:text-blue-400 font-medium transition-colors uppercase tracking-widest text-sm flex items-center gap-2 group"
                                >
                                    {feature.cta}
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>

                                {/* Background Accent Number */}
                                <div className={`absolute top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none overflow-hidden ${feature.reversed ? '-left-8 lg:-left-24' : '-right-8 lg:-right-32'}`}>
                                    <span className="font-serif text-[280px] text-white leading-none">{feature.number}</span>
                                </div>
                            </div>

                            {/* Image/Video Content */}
                            <div className={`${imgColSpan} ${feature.reversed ? 'lg:order-1 slide-in-left' : 'order-1 lg:order-2 slide-in-right'} relative`}>
                                <div className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 group z-10 aspect-[4/3] ${bleedClass} ${bleedReverseClass}`}>
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {feature.isVideo && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                                    <Play className="w-8 h-8 text-blue-400 fill-current translate-x-0.5" />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
