import { useRef, useEffect, useState } from 'react';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Pricing() {
    const { t } = useLanguage();

    const sectionRef = useRef<HTMLDivElement>(null);
    const [isYearly, setIsYearly] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.fade-up');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Explicit type for tiers parsing to ensure array mapping works correctly
    const tiers: any[] = t('pricing.tiers') as any;
    const pricingTiers = Array.isArray(tiers) && tiers.length === 3 ? tiers : [];

    return (
        <section id="pricing" ref={sectionRef} className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 fade-up">
                    <span className="font-script text-3xl md:text-4xl text-blue-600 block mb-4">
                        {t('pricing.scriptText') !== 'pricing.scriptText' ? t('pricing.scriptText') : 'A Profitable Investment'}
                    </span>
                    <h2 className="text-xs tracking-[0.2em] text-slate-400 uppercase mb-4">
                        {t('pricing.subtitle') !== 'pricing.subtitle' ? t('pricing.subtitle') : 'OUR PRICING'}
                    </h2>
                    <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-dark-theme mb-6">
                        {t('pricing.mainTitle') !== 'pricing.mainTitle' ? t('pricing.mainTitle') : 'Plans tailored to your needs'}
                    </h3>

                    {/* Promo Highlight */}
                    <div className="inline-flex items-center justify-center p-[1px] rounded-full bg-blue-500/20 mb-8">
                        <div className="px-6 py-2 rounded-full bg-white text-blue-600 text-sm md:text-base font-medium shadow-sm">
                            <Star className="inline-block w-4 h-4 mr-2 mb-1" />
                            {t('pricing.promoText') !== 'pricing.promoText' ? t('pricing.promoText') : "Enjoy a 14-day free trial on all our plans."}
                        </div>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex justify-center mt-2 fade-up">
                        <div className="relative flex items-stretch p-1.5 bg-slate-200/50 rounded-full border border-slate-200 w-auto shadow-inner">
                            <div className={`absolute left-0 top-0 bottom-0 w-1/2 p-1.5 transition-transform duration-300 ease-in-out ${isYearly ? 'translate-x-full' : 'translate-x-0'}`}>
                                <div className="w-full h-full bg-white rounded-full shadow-sm border border-slate-100 pb-1"></div>
                            </div>
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`relative z-10 px-6 sm:px-8 py-2.5 text-sm md:text-base font-bold tracking-wide transition-colors ${!isYearly ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                {t('pricing.monthly') !== 'pricing.monthly' ? t('pricing.monthly') : 'Mensuel'}
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`relative z-10 px-6 sm:px-8 py-2.5 text-sm md:text-base font-bold tracking-wide transition-colors flex items-center ${isYearly ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                {t('pricing.yearly') !== 'pricing.yearly' ? t('pricing.yearly') : 'Annuel'}
                                <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${isYearly ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-slate-200 text-slate-500'} transition-colors`}>
                                    -2 mois & -10%
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-16 items-stretch">
                    {pricingTiers.map((tier: any, i: number) => {
                        const isPopular = tier.isPopular === true || tier.isPopular === 'true' || i === 1;
                        const isElite = i === 2;
                        const isStandard = i === 0;
                        const hasGlow = true;

                        const baseMonthlyPrice = parseInt(tier.price) || 0;
                        const annualTotal = Math.round(baseMonthlyPrice * 10 * 0.9);
                        const discountedMonthly = Math.round(annualTotal / 12);

                        const glowColors = isElite 
                            ? { border: 'var(--gold-500)', glow: 'var(--gold-300)', shadow: 'rgba(210, 168, 85, 0.4)' }
                            : isPopular
                                ? { border: '#00d2ff', glow: '#33dbff', shadow: 'rgba(0, 210, 255, 0.4)' }
                                : { border: '#007e99', glow: '#00a8cc', shadow: 'rgba(0, 126, 153, 0.2)' };

                        return (
                            <div
                                key={i}
                                className={`fade-up relative rounded-3xl flex flex-col transition-all duration-500 hover:-translate-y-2 group h-full
                  ${hasGlow 
                                        ? 'border-transparent shadow-2xl z-10 solar-aura-glow' 
                                        : 'bg-white border-slate-200 shadow-lg hover:border-blue-500/20'
                                    }
                  ${isPopular ? 'md:-translate-y-4 md:hover:-translate-y-6 scale-105' : ''}
                  ${isElite ? 'scale-105' : ''}`}
                                style={{ 
                                    transitionDelay: `${i * 0.1}s`,
                                    // @ts-ignore
                                    '--border-color': glowColors.border,
                                    '--border-glow': glowColors.glow,
                                    '--glow-color': glowColors.shadow
                                }}
                            >
                                {hasGlow && (
                                    <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                                        <div className="premium-border-animate" />
                                    </div>
                                )}

                                {/* Badges */}
                                {isStandard && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                        <div className="bg-slate-700 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded-full shadow-[0_4px_25px_rgba(71,85,105,0.4)] whitespace-nowrap border border-slate-500/30">
                                            ESSENTIEL
                                        </div>
                                    </div>
                                )}

                                {isPopular && !isElite && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                        <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-10 rounded-full shadow-[0_4px_25px_rgba(0,210,255,0.6)] whitespace-nowrap border border-blue-400/30">
                                            MEILLEURE VALEUR
                                        </div>
                                    </div>
                                )}

                                {isElite && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                        <div className="bg-slate-900 text-gold-200 text-[10px] font-bold uppercase tracking-widest py-2.5 px-10 rounded-full shadow-[0_4px_25px_rgba(210,168,85,0.4)] whitespace-nowrap border border-gold-500/40">
                                            SOLUTION COMPLÈTE
                                        </div>
                                    </div>
                                )}

                                <div className={`relative z-10 flex flex-col flex-grow h-full ${hasGlow ? 'm-[2px] bg-white rounded-[22px] overflow-hidden' : 'rounded-3xl overflow-hidden'}`}>
                                    {isPopular && (
                                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none z-0" />
                                    )}
                                    {isElite && (
                                        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none z-0" />
                                    )}
                                    {isStandard && (
                                        <div className="absolute inset-0 bg-gradient-to-b from-slate-500/5 to-transparent pointer-events-none z-0" />
                                    )}

                                    <div className={`p-10 pb-12 relative overflow-hidden ${isElite ? 'bg-white/40 backdrop-blur-xl' : ''}`}>
                                        {isElite && (
                                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,rgba(210,168,85,0.3),transparent)] animate-[spin_10s_linear_infinite]" />
                                            </div>
                                        )}
                                        <h4 className={`text-2xl font-bold mb-2 ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>{tier.name}</h4>
                                        <div className="flex items-baseline mb-1">
                                            <span className={`text-5xl font-serif transition-colors duration-300 ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>${isYearly && tier.price ? discountedMonthly : tier.price}</span>
                                            <span className="text-slate-900 ml-2 font-bold italic">CAD / mois</span>
                                        </div>
                                        {isYearly && tier.price ? (
                                            <div className={`text-[12px] font-bold mb-4 italic pl-1 lowercase ${isElite ? 'text-gold-600' : 'text-slate-600'}`}>
                                                (facturé {annualTotal}$ annuellement)
                                            </div>
                                        ) : tier.weeklyNote ? (
                                            <div className={`text-[12px] font-bold mb-4 italic pl-1 lowercase ${isElite ? 'text-gold-600' : 'text-slate-600'}`}>
                                                ({tier.weeklyNote})
                                            </div>
                                        ) : (
                                            <div className="mb-4 h-[18px]"></div> // padding placeholder
                                        )}
                                        <div className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-widest mb-3 inline-block px-4 py-1.5 rounded-full ${isElite ? 'bg-gold-50/50 text-gold-700 border border-gold-500/30' : 'bg-blue-50 text-blue-600 border border-blue-500/10'}`}>
                                            {t('pricing.setupFeeLabel')}: ${tier.setupFee}
                                        </div>
                                        {tier.setupFeeNote && (
                                            <div className={`text-[11px] font-medium italic pl-2 leading-none block ${isElite ? 'text-gold-700' : 'text-slate-500'}`}>
                                                *{tier.setupFeeNote}
                                            </div>
                                        )}
                                    </div>

                                    <div className="bg-slate-900 p-10 flex-grow flex flex-col h-full">
                                        <p className={`text-sm text-slate-400 leading-relaxed mb-8 min-h-[48px] border-l-2 pl-4 ${isElite ? 'border-gold-500/40' : 'border-blue-500/30'}`}>{tier.description}</p>

                                        <div className="flex-grow space-y-4 mb-10">
                                            {tier.features?.map((feature: string, j: number) => (
                                                <div key={j} className="flex items-start">
                                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 shrink-0 border ${isElite ? 'bg-slate-800 border-slate-700' : isPopular ? 'bg-blue-600/50 border-blue-500' : 'bg-slate-800 border-slate-700'}`}>
                                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                                                    </div>
                                                    <span className="text-sm text-slate-300 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg mt-auto
                                   ${isElite
                                                    ? 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white hover:brightness-110 shadow-gold-500/30'
                                                    : isPopular
                                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/30'
                                                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                                                }`}
                                        >
                                            {t('pricing.ctaButton') !== 'pricing.ctaButton' ? t('pricing.ctaButton') : 'Start Trial'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
