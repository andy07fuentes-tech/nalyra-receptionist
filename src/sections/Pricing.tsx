import { useRef, useEffect, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Star, PhoneMissed, TrendingUp, BadgeCheck, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// ── ROI stat helpers ──────────────────────────────────────────────────────────

function useCountUp(target: number, duration: number, started: boolean): number {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let startTime: number | null = null;
        let raf: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [started, target, duration]);
    return count;
}

interface RoiCardProps {
    animateTo: number;
    prefix?: string;
    suffix?: string;
    Icon: LucideIcon;
    accentColor: string;
    glowColor: string;
    titleKey: string;
    descKey: string;
    delay: number;
}

function RoiStatCard({ animateTo, prefix = '', suffix = '', Icon, accentColor, glowColor, titleKey, descKey, delay }: RoiCardProps & { Icon: LucideIcon }) {
    const { t } = useLanguage();
    const cardRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const count = useCountUp(animateTo, 1600, inView);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative rounded-2xl bg-slate-900 overflow-hidden transition-all duration-700"
            style={{
                borderTop: `2px solid ${accentColor}`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(22px)',
                transitionDelay: `${delay}ms`,
            }}
        >
            <div
                className="absolute -top-6 -left-6 w-28 h-28 rounded-full blur-2xl opacity-20 pointer-events-none"
                style={{ background: glowColor }}
            />
            <div
                className="btn-shimmer pointer-events-none absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                style={{ animationDelay: `${delay * 1.5}ms` }}
            />
            <div className="relative p-5 md:p-6">
                <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}40` }}
                >
                    <Icon size={18} color={accentColor} strokeWidth={2} />
                </div>
                <div
                    className="font-serif text-4xl md:text-5xl font-bold mb-2 tabular-nums leading-none"
                    style={{ color: accentColor }}
                >
                    {prefix}{count.toLocaleString()}{suffix}
                </div>
                <p className="text-slate-300 font-semibold text-[11px] md:text-xs leading-tight mb-1.5">
                    {t(`pricing.${titleKey}`) as string}
                </p>
                <p className="text-slate-500 text-[10px] leading-snug">
                    {t(`pricing.${descKey}`) as string}
                </p>
            </div>
        </div>
    );
}

const ROI_STATS: RoiCardProps[] = [
    { animateTo: 5, prefix: '', suffix: '+', Icon: PhoneMissed, accentColor: '#f87171', glowColor: '#ef4444', titleKey: 'roiStat1Title', descKey: 'roiStat1Desc', delay: 0 },
    { animateTo: 150, prefix: '$', suffix: '+', Icon: TrendingUp, accentColor: '#34d399', glowColor: '#10b981', titleKey: 'roiStat2Title', descKey: 'roiStat2Desc', delay: 150 },
    { animateTo: 199, prefix: '$', suffix: '/mo', Icon: BadgeCheck, accentColor: '#60a5fa', glowColor: '#3b82f6', titleKey: 'roiStat3Title', descKey: 'roiStat3Desc', delay: 300 },
];

// ─────────────────────────────────────────────────────────────────────────────

export function Pricing() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const sectionRef = useRef<HTMLDivElement>(null);
    const [isYearly, setIsYearly] = useState(false);

    const handleSubscribe = (planName: string) => {
        navigate('/onboarding', {
            state: {
                plan: planName,
                billing: isYearly ? 'yearly' : 'monthly'
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        const elements = sectionRef.current?.querySelectorAll('.fade-up');
        elements?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const tiers: any[] = t('pricing.tiers') as any;
    const pricingTiers = Array.isArray(tiers) && tiers.length === 3 ? tiers : [];

    const getGlowColors = (i: number) => {
        const isElite = i === 2;
        const isPopular = i === 1;
        return isElite
            ? { border: 'var(--gold-500)', glow: 'var(--gold-300)', shadow: 'rgba(210, 168, 85, 0.65)' }
            : isPopular
                ? { border: '#00d2ff', glow: '#33dbff', shadow: 'rgba(0, 210, 255, 0.4)' }
                : { border: '#007e99', glow: '#00a8cc', shadow: 'rgba(0, 126, 153, 0.2)' };
    };

    // Shared inner card content — used in both mobile and desktop renders
    const renderCardInner = (tier: any, i: number) => {
        const isPopular = tier.isPopular === true || tier.isPopular === 'true' || i === 1;
        const isElite = i === 2;
        const isStandard = i === 0;
        const baseMonthlyPrice = parseInt(tier.price) || 0;
        const discountedMonthly = Math.round(baseMonthlyPrice * 0.9);
        const annualTotal = discountedMonthly * 10;

        return (
            <>
                {/* Animated border */}
                <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                    <div className="premium-border-animate" />
                </div>

                {/* Badges */}
                {isStandard && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="bg-slate-700 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded-full shadow-[0_4px_25px_rgba(71,85,105,0.4)] whitespace-nowrap border border-slate-500/30">
                            {t('pricing.essentiel')}
                        </div>
                    </div>
                )}
                {isPopular && !isElite && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-10 rounded-full shadow-[0_4px_25px_rgba(0,210,255,0.6)] whitespace-nowrap border border-blue-400/30">
                            {t('pricing.bestValue')}
                        </div>
                    </div>
                )}
                {isElite && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="bg-gradient-to-r from-gold-600 to-gold-500 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-10 rounded-full shadow-[0_4px_30px_rgba(210,168,85,0.75)] whitespace-nowrap border border-gold-400/50">
                            {t('pricing.recommended')}
                        </div>
                    </div>
                )}

                <div className={`relative z-10 flex flex-col flex-grow h-full m-[2px] bg-white rounded-[22px] overflow-hidden`}>
                    {isPopular && <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none z-0" />}
                    {isElite && <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none z-0" />}
                    {isStandard && <div className="absolute inset-0 bg-gradient-to-b from-slate-500/5 to-transparent pointer-events-none z-0" />}

                    <div className={`p-7 md:p-10 pb-10 md:pb-12 relative overflow-hidden ${isElite ? 'bg-white/40 backdrop-blur-xl' : ''}`}>
                        {isElite && (
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,rgba(210,168,85,0.3),transparent)] animate-[spin_10s_linear_infinite]" />
                            </div>
                        )}
                        <h4 className={`text-xl md:text-2xl font-bold mb-1 ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>{tier.name}</h4>
                        {tier.tagline && (
                            <p className={`text-xs font-medium italic mb-2 ${isElite ? 'text-gold-500' : 'text-slate-400'}`}>{tier.tagline}</p>
                        )}
                        <div className="flex items-baseline mb-1">
                            <span className={`text-4xl md:text-5xl font-serif transition-colors duration-300 ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>${isYearly && tier.price ? discountedMonthly : tier.price}</span>
                            <span className="text-slate-900 ml-2 font-bold italic">{t('pricing.cadMonth')}</span>
                        </div>
                        {isYearly && tier.price ? (
                            <div className={`text-[12px] font-bold mb-4 italic pl-1 lowercase ${isElite ? 'text-gold-600' : 'text-slate-600'}`}>
                                {t('pricing.annualBillingNotice', { price: annualTotal })}
                            </div>
                        ) : tier.weeklyNote ? (
                            <div className={`text-[12px] font-bold mb-4 italic pl-1 lowercase ${isElite ? 'text-gold-600' : 'text-slate-600'}`}>
                                ({tier.weeklyNote})
                            </div>
                        ) : (
                            <div className="mb-4 h-[18px]" />
                        )}
                        <div className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-widest mb-3 inline-block px-4 py-1.5 rounded-full ${isElite ? 'bg-gold-50/50 text-gold-700 border border-gold-500/30' : 'bg-blue-50 text-blue-600 border border-blue-500/10'}`}>
                            {t('pricing.setupFeeLabel')}: ${tier.setupFee}
                        </div>
                        {tier.setupFeeNote && !isYearly && (
                            <div className={`text-[11px] font-medium italic pl-2 leading-none block ${isElite ? 'text-gold-700' : 'text-slate-500'}`}>
                                *{tier.setupFeeNote}
                            </div>
                        )}
                    </div>

                    <div className="bg-slate-900 p-7 md:p-10 flex-grow flex flex-col h-full">
                        <p className={`text-sm text-slate-400 leading-relaxed mb-6 md:mb-8 min-h-[48px] border-l-2 pl-4 ${isElite ? 'border-gold-500/40' : 'border-blue-500/30'}`}>{tier.description}</p>
                        <div className="flex-grow space-y-3 md:space-y-4 mb-8 md:mb-10">
                            {tier.features?.map((feature: any, j: number) => (
                                <div key={j}>
                                    <span className="text-sm text-slate-200 font-medium block">{typeof feature === 'string' ? feature : feature.label}</span>
                                    {typeof feature === 'object' && feature.detail && (
                                        <span className="text-xs text-slate-500 leading-snug block mt-0.5">{feature.detail}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleSubscribe(tier.name)}
                            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg mt-auto
                                ${isElite
                                    ? 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white hover:brightness-110 shadow-gold-500/30'
                                    : isPopular
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/30'
                                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                                }`}
                        >
                            {isElite
                            ? (t('pricing.ctaButtonElite') !== 'pricing.ctaButtonElite' ? t('pricing.ctaButtonElite') : 'Activate My System')
                            : (t('pricing.ctaButton') !== 'pricing.ctaButton' ? t('pricing.ctaButton') : 'Start Trial')
                        }
                        </button>
                    </div>
                </div>
            </>
        );
    };

    return (
        <section id="pricing" ref={sectionRef} className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
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

                    <div className="inline-flex items-center justify-center p-[1px] rounded-full bg-blue-500/20 mb-8">
                        <div className="px-6 py-2 rounded-full bg-white text-blue-600 text-sm md:text-base font-medium shadow-sm">
                            <Star className="inline-block w-4 h-4 mr-2 mb-1" />
                            {isYearly
                                ? (t('pricing.promoTextYearly') !== 'pricing.promoTextYearly' ? t('pricing.promoTextYearly') : "Annual plan: 2 months free + 10% off.")
                                : (t('pricing.promoText') !== 'pricing.promoText' ? t('pricing.promoText') : "Launch offer: first month at 50% off.")
                            }
                        </div>
                    </div>

                    <div className="flex justify-center mt-4 fade-up">
                        <div className="relative flex items-center p-1 bg-white/40 backdrop-blur-md rounded-2xl border border-slate-200/50 shadow-sm w-full max-w-[420px]">
                            <div
                                className={`absolute h-[calc(100%-8px)] transition-all duration-500 ease-out bg-slate-900 rounded-xl shadow-lg z-0 ${isYearly ? 'left-1/2 w-[calc(50%-4px)]' : 'left-1 w-[calc(50%-4px)]'}`}
                            />
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`relative z-10 flex-1 px-4 sm:px-8 py-2.5 text-xs sm:text-sm uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 ${!isYearly ? 'text-white' : 'text-slate-500 hover:text-slate-800'}`}
                            >
                                {t('pricing.monthly')}
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`relative z-10 flex-1 px-4 sm:px-8 py-2.5 text-xs sm:text-sm uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${isYearly ? 'text-white' : 'text-slate-500 hover:text-slate-800'}`}
                            >
                                {t('pricing.yearly')}
                                <span className={`flex items-center px-1.5 py-0.5 rounded-md text-[8px] sm:text-[9px] border transition-all duration-500 ${isYearly ? 'bg-blue-600 text-white border-transparent' : 'bg-slate-800 text-white border-white/10'}`}>
                                    {t('pricing.yearlyBonus')}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Employee vs Anvela Comparison */}
                <div className="max-w-2xl mx-auto mb-12 fade-up">
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 text-center">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                {t('pricing.vsLabel') as string}
                            </span>
                        </div>
                        <div className="divide-y divide-slate-100">
                            <div className="flex items-center justify-between px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">👤</span>
                                    <span className="text-sm text-slate-500">{t('pricing.vsEmployee') as string}</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-400 line-through">{t('pricing.vsEmployeePrice') as string}</span>
                            </div>
                            <div className="flex items-center justify-between px-6 py-4 bg-blue-50/40">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">⚡</span>
                                    <span className="text-sm font-semibold text-slate-800">{t('pricing.vsAnvela') as string}</span>
                                </div>
                                <span className="text-sm font-bold text-blue-600">{t('pricing.vsAnvelaPrice') as string}</span>
                            </div>
                        </div>
                        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-center">
                            <span className="text-[11px] text-slate-500 italic">{t('pricing.vsTagline') as string}</span>
                        </div>
                    </div>
                </div>

                {/* ROI Block */}
                <div className="max-w-2xl mx-auto mb-12 fade-up">
                    <div className="relative mb-7 overflow-hidden rounded-2xl border border-blue-500/20 bg-white/80 px-5 py-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-md">
                        <div className="absolute inset-x-8 -top-10 h-20 bg-gradient-to-r from-transparent via-blue-400/20 to-gold-400/20 blur-2xl pointer-events-none" />
                        <div className="btn-shimmer pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                        <div className="relative flex items-center gap-4 text-left">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-gradient-to-br from-gold-50 to-blue-50 text-gold-600 shadow-[0_0_24px_rgba(210,168,85,0.28)]">
                                <Lightbulb className="h-5 w-5" strokeWidth={2.2} />
                            </div>
                            <p className="font-serif text-base md:text-xl font-bold leading-snug text-slate-900">
                                {t('pricing.roiTagline') as string}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {ROI_STATS.map((stat, i) => (
                            <RoiStatCard key={i} {...stat} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── MOBILE: vertical stack — all features visible, compact padding ── */}
            <div className="md:hidden mt-16 px-4 space-y-8">
                {pricingTiers.map((tier: any, i: number) => {
                    const isPopular = i === 1;
                    const isElite = i === 2;
                    const isStandard = i === 0;
                    const gc = getGlowColors(i);
                    const basePrice = parseInt(tier.price) || 0;
                    const disc = Math.round(basePrice * 0.9);
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative rounded-3xl solar-aura-glow border-transparent shadow-2xl"
                            style={{
                                // @ts-ignore
                                '--border-color': gc.border, '--border-glow': gc.glow, '--glow-color': gc.shadow,
                            }}
                        >
                            {/* Badge */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                {isStandard && (
                                    <div className="bg-slate-700 text-white text-[10px] font-bold uppercase tracking-widest py-2 px-7 rounded-full whitespace-nowrap border border-slate-500/30">
                                        {t('pricing.essentiel')}
                                    </div>
                                )}
                                {isPopular && (
                                    <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-2 px-7 rounded-full shadow-[0_4px_25px_rgba(0,210,255,0.6)] whitespace-nowrap border border-blue-400/30">
                                        {t('pricing.bestValue')}
                                    </div>
                                )}
                                {isElite && (
                                    <div className="bg-gradient-to-r from-gold-600 to-gold-500 text-white text-[10px] font-bold uppercase tracking-widest py-2 px-7 rounded-full shadow-[0_4px_30px_rgba(210,168,85,0.75)] whitespace-nowrap border border-gold-400/50">
                                        {t('pricing.recommended')}
                                    </div>
                                )}
                            </div>

                            {/* Animated border */}
                            <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                                <div className="premium-border-animate" />
                            </div>

                            <div className="relative z-10 m-[2px] bg-white rounded-[22px] overflow-hidden flex flex-col">
                                {isPopular && <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none z-0" />}
                                {isElite && <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none z-0" />}
                                {isStandard && <div className="absolute inset-0 bg-gradient-to-b from-slate-500/5 to-transparent pointer-events-none z-0" />}

                                {/* Header — name + price */}
                                <div className={`relative p-5 pb-4 ${isElite ? 'bg-white/40 backdrop-blur-xl' : ''}`}>
                                    <h4 className={`text-xl font-bold mb-0.5 ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>{tier.name}</h4>
                                    {tier.tagline && (
                                        <p className={`text-[11px] font-medium italic mb-1.5 ${isElite ? 'text-gold-500' : 'text-slate-400'}`}>{tier.tagline}</p>
                                    )}
                                    <div className="flex items-baseline mb-1">
                                        <span className={`text-4xl font-serif ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>${isYearly ? disc : tier.price}</span>
                                        <span className="text-slate-900 ml-2 font-bold italic text-sm">{t('pricing.cadMonth')}</span>
                                    </div>
                                    {isYearly && basePrice ? (
                                        <div className={`text-[11px] font-bold italic ${isElite ? 'text-gold-600' : 'text-slate-500'}`}>
                                            {t('pricing.annualBillingNotice', { price: disc * 10 })}
                                        </div>
                                    ) : tier.weeklyNote ? (
                                        <div className={`text-[11px] font-bold italic ${isElite ? 'text-gold-600' : 'text-slate-500'}`}>({tier.weeklyNote})</div>
                                    ) : null}
                                    <div className={`mt-3 text-[10px] font-bold uppercase tracking-widest inline-block px-3 py-1 rounded-full ${isElite ? 'bg-gold-50/50 text-gold-700 border border-gold-500/30' : 'bg-blue-50 text-blue-600 border border-blue-500/10'}`}>
                                        {t('pricing.setupFeeLabel')}: ${tier.setupFee}
                                    </div>
                                </div>

                                {/* Features + CTA */}
                                <div className="bg-slate-900 p-5 flex-grow flex flex-col">
                                    <p className={`text-xs text-slate-400 leading-relaxed mb-4 border-l-2 pl-3 ${isElite ? 'border-gold-500/40' : 'border-blue-500/30'}`}>{tier.description}</p>
                                    <div className="space-y-2.5 mb-5">
                                        {tier.features?.map((feature: any, j: number) => (
                                            <div key={j}>
                                                <span className="text-xs text-slate-200 font-medium leading-snug block">{typeof feature === 'string' ? feature : feature.label}</span>
                                                {typeof feature === 'object' && feature.detail && (
                                                    <span className="text-[10px] text-slate-500 leading-snug block mt-0.5">{feature.detail}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => handleSubscribe(tier.name)}
                                        className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all mt-auto
                                            ${isElite
                                                ? 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white shadow-md shadow-gold-500/30'
                                                : isPopular
                                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/30'
                                                    : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
                                            }`}
                                    >
                                        {isElite
                                            ? (t('pricing.ctaButtonElite') !== 'pricing.ctaButtonElite' ? t('pricing.ctaButtonElite') : 'Activate My System')
                                            : (t('pricing.ctaButton') !== 'pricing.ctaButton' ? t('pricing.ctaButton') : 'Start Trial')
                                        }
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* ── DESKTOP: existing grid ── */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-16 items-stretch">
                    {pricingTiers.map((tier: any, i: number) => {
                        const isPopular = tier.isPopular === true || tier.isPopular === 'true' || i === 1;
                        const isElite = i === 2;
                        const glowColors = getGlowColors(i);
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 70 }}
                                whileInView={{ opacity: 1, y: isElite ? -24 : isPopular ? -16 : 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: isElite ? -32 : isPopular ? -24 : -8, transition: { duration: 0.3, ease: 'easeOut' } }}
                                className={`relative rounded-3xl flex flex-col group h-full border-transparent shadow-2xl z-10 solar-aura-glow ${isElite ? 'scale-105' : ''}`}
                                style={{
                                    // @ts-ignore
                                    '--border-color': glowColors.border,
                                    '--border-glow': glowColors.glow,
                                    '--glow-color': glowColors.shadow,
                                }}
                            >
                                {renderCardInner(tier, i)}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
