import { Check, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Pricing() {
    const { t } = useLanguage();

    // Explicit type for tiers parsing to ensure array mapping works correctly
    const tiers: any[] = t('pricing.tiers') as any;
    const pricingTiers = Array.isArray(tiers) && tiers.length === 3 ? tiers : [];

    return (
        <section id="pricing" className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
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
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier: any, i: number) => {
                        const isPopular = tier.isPopular === true || tier.isPopular === 'true' || i === 1; // Fallback to middle if undefined

                        return (
                            <div
                                key={i}
                                className={`fade-up relative rounded-2xl bg-white border p-8 flex flex-col transition-all duration-300 hover:-translate-y-2
                  ${isPopular
                                        ? 'border-blue-500/30 shadow-2xl md:-translate-y-4 md:hover:-translate-y-6'
                                        : 'border-slate-100 shadow-lg hover:border-blue-200'
                                    }`}
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                {isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                        <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                                            Populaire
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h4 className="text-xl font-medium text-dark-theme mb-2">{tier.name}</h4>
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-blue-600 text-3xl font-serif mr-1">€</span>
                                        <span className="text-5xl font-serif text-dark-theme">{tier.price}</span>
                                        <span className="text-slate-400 ml-2">/ mois</span>
                                    </div>
                                    <p className="text-sm text-slate-500 min-h-[40px]">{tier.description}</p>
                                </div>

                                <div className="flex-grow space-y-4 mb-8">
                                    {tier.features?.map((feature: string, j: number) => (
                                        <div key={j} className="flex items-start">
                                            <Check className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                                            <span className="text-sm text-slate-600 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg
                    ${isPopular
                                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20'
                                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                                        }`}
                                >
                                    {t('pricing.ctaButton') !== 'pricing.ctaButton' ? t('pricing.ctaButton') : 'Start Trial'}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
