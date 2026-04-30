import { useState, useEffect } from 'react';
import { Search, MapPin, ArrowRight, CheckCircle2, Building2, Sparkles, Check, ChevronDown, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import usePlacesAutocomplete from "use-places-autocomplete";
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';

export default function OnboardingPage() {
    const { t } = useLanguage();
    const location = useLocation();
    const [step, setStep] = useState(1);
    const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(location.state?.plan || null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // GOOGLE PLACES LOGIC
    const {
        value,
        suggestions: { data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            componentRestrictions: { country: "ca" },
            locationBias: { radius: 100000, center: { lat: 45.5017, lng: -73.5673 } },
            types: ['establishment'],
        },
        debounce: 300,
        initOnMount: true,
    });

    const filteredData = data.filter(item => {
        const desc = item.description.toLowerCase();
        return desc.includes('canada') || desc.includes(', ca') || desc.includes('montreal') || desc.includes('québec') || desc.includes('quebec') || desc.includes(', qc');
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.fromTo('.step-content',
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );
    }, [step]);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        if (!phoneNumber || isSubmitting) return;
        setIsSubmitting(true);
        try {
            await fetch('https://n8n.srv1401769.hstgr.cloud/webhook/anvela/new-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    businessName: selectedBusiness?.structured_formatting?.main_text || selectedBusiness?.description,
                    businessAddress: selectedBusiness?.description,
                    plan: selectedPlan,
                    phone: phoneNumber,
                }),
            });
        } catch (e) {
            // fire and forget — still advance to confirmation
        }
        setStep(4);
        setIsSubmitting(false);
    };

    const tiers = (t('pricing.tiers') as any) || [];

    // Helper to interpolate {{variable}} in translation strings
    const ti = (key: string, vars: Record<string, string> = {}) => {
        let str = t(key) as string;
        Object.entries(vars).forEach(([k, v]) => { str = str.replace(`{{${k}}}`, v); });
        return str;
    };

    return (
        <div className="min-h-[100dvh] w-full max-w-full overflow-x-clip bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 inset-x-0 p-4 sm:p-6 z-50 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <Link to="/" className="flex items-center gap-2 group z-10">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors shrink-0">
                        <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-serif text-xl tracking-tight text-slate-900">Anvela</span>
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 w-max">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={`h-1.5 w-6 sm:w-16 rounded-full transition-all duration-500 ${s <= step ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.2)]' : 'bg-slate-200'}`} />
                        ))}
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
                        {ti('onboarding.stepCounter', { step: String(step) })}
                    </span>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 z-10">
                    <LanguageToggle isScrolled={true} />
                    <button className="hidden sm:block text-slate-400 hover:text-slate-900 transition-colors text-xs font-medium underline underline-offset-4">
                        {t('onboarding.saveExit') as string}
                    </button>
                </div>
            </nav>

            <main className="pt-24 pb-32 sm:pt-32 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto min-h-[100dvh] flex items-start md:items-center justify-center">

                {step === 1 && (
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full step-content">
                        <div className="lg:col-span-5 space-y-5 lg:space-y-8 px-2 lg:px-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 text-xs font-medium">
                                <Search className="w-3 h-3" />
                                {t('onboarding.step1.badge') as string}
                            </div>
                            <div>
                                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 text-slate-900">
                                    {t('onboarding.step1.title') as string} <br className="hidden sm:block" />
                                    <span className="text-blue-600 italic">{t('onboarding.step1.titleHighlight') as string}</span>
                                </h1>
                                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md">
                                    {t('onboarding.step1.description') as string}
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="relative p-5 sm:p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
                                <div className="space-y-6">
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder={t('onboarding.step1.searchPlaceholder') as string}
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            className="w-full h-14 pl-12 pr-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-slate-900 transition-all text-slate-900 placeholder:text-slate-500 font-medium"
                                        />
                                        {value.length > 0 && !selectedBusiness && (
                                            <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-xl z-20 overflow-hidden shadow-2xl">
                                                {filteredData.map((s) => (
                                                    <button
                                                        key={s.place_id}
                                                        onClick={() => { setSelectedBusiness(s); setValue(s.description, false); clearSuggestions(); }}
                                                        className="w-full p-4 flex items-start gap-3 hover:bg-slate-50 text-left border-b border-slate-100"
                                                    >
                                                        <MapPin className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                                                        <span className="text-sm text-slate-700 break-words flex-1 overflow-hidden">{s.description}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {selectedBusiness && (
                                        <div className="p-4 sm:p-6 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                                            <div className="flex items-center gap-3 sm:gap-4 overflow-hidden w-full sm:w-auto">
                                                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                                </div>
                                                <span className="font-medium text-slate-900 break-words line-clamp-2">{selectedBusiness.structured_formatting?.main_text || selectedBusiness.description}</span>
                                            </div>
                                            <button onClick={() => setSelectedBusiness(null)} className="text-xs text-blue-600 font-bold uppercase tracking-widest shrink-0 self-end sm:self-auto">
                                                {t('onboarding.step1.changeButton') as string}
                                            </button>
                                        </div>
                                    )}
                                    <button
                                        disabled={!selectedBusiness}
                                        onClick={handleNext}
                                        className={`w-full h-14 rounded-xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-all ${selectedBusiness ? 'bg-slate-900 hover:bg-wine-900 text-white shadow-xl shadow-slate-900/10' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}
                                    >
                                        {t('onboarding.step1.continueButton') as string}
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="w-full step-content space-y-6 md:space-y-12">
                        <div className="text-center max-w-2xl mx-auto px-4 sm:px-0">
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-slate-900">
                                {t('onboarding.step2.title') as string} <span className="text-blue-600 italic">{t('onboarding.step2.titleHighlight') as string}</span>
                            </h2>
                            <p className="text-slate-500 text-sm sm:text-base">{t('onboarding.step2.description') as string}</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto items-start md:items-stretch px-0 sm:px-4 md:px-0">
                            {tiers.map((tier: any, i: number) => {
                                const isSelected = selectedPlan === tier.name;
                                const isPopular = tier.isPopular === true || tier.isPopular === 'true' || i === 1;
                                const isElite = i === 2;
                                const isStandard = i === 0;

                                const glowColors = isElite
                                    ? { border: 'var(--gold-500)', glow: 'var(--gold-300)', shadow: 'rgba(210, 168, 85, 0.4)' }
                                    : isPopular
                                        ? { border: '#00d2ff', glow: '#33dbff', shadow: 'rgba(0, 210, 255, 0.4)' }
                                        : { border: '#007e99', glow: '#00a8cc', shadow: 'rgba(0, 126, 153, 0.2)' };

                                return (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedPlan(tier.name)}
                                        className={`relative rounded-3xl overflow-hidden border transition-all duration-500 text-left flex flex-col group h-full
                                            ${isSelected ? 'ring-2 ring-blue-600 ring-offset-4' : ''}
                                            solar-aura-glow
                                            ${isPopular ? 'md:-translate-y-2 md:scale-[1.03] z-10' : ''}
                                            ${isElite ? 'md:scale-[1.03] z-10' : ''}`}
                                        style={{
                                            // @ts-ignore
                                            '--border-color': glowColors.border,
                                            '--border-glow': glowColors.glow,
                                            '--glow-color': glowColors.shadow,
                                            transitionDelay: `${i * 0.1}s`
                                        }}
                                    >
                                        <div className="absolute inset-0 z-0">
                                            <div className="premium-border-animate" />
                                        </div>

                                        <div className="relative z-10 flex flex-col flex-grow m-[2px] bg-white rounded-[22px] overflow-hidden h-full">
                                            <div className={`p-4 sm:p-5 pb-3 md:p-8 md:pb-4 relative overflow-hidden ${isElite ? 'bg-white/40 backdrop-blur-xl' : 'bg-white'}`}>
                                                {isPopular && (
                                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
                                                )}
                                                {isElite && (
                                                    <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none" />
                                                )}
                                                {isElite && (
                                                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                                                        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,rgba(210,168,85,0.3),transparent)] animate-[spin_10s_linear_infinite]" />
                                                    </div>
                                                )}

                                                {isStandard && (
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-[7px] sm:text-[8px] font-bold uppercase tracking-widest py-1.5 px-3 sm:px-4 rounded-b-xl shadow-[0_4px_15px_rgba(71,85,105,0.4)] whitespace-nowrap w-max">
                                                        {t('pricing.essentiel') as string}
                                                    </div>
                                                )}
                                                {isPopular && !isElite && (
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[7px] sm:text-[8px] font-bold uppercase tracking-widest py-1.5 px-3 sm:px-4 rounded-b-xl shadow-[0_4px_15px_rgba(0,210,255,0.4)] whitespace-nowrap w-max">
                                                        {t('pricing.bestValue') as string}
                                                    </div>
                                                )}
                                                {isElite && (
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-900 text-gold-200 text-[7px] sm:text-[8px] font-bold uppercase tracking-widest py-1.5 px-3 sm:px-4 rounded-b-xl shadow-[0_4px_15px_rgba(210,168,85,0.4)] border-x border-b border-gold-500/30 whitespace-nowrap w-max">
                                                        {t('pricing.completeSolution') as string}
                                                    </div>
                                                )}

                                                {isSelected && (
                                                    <div className="absolute top-4 right-4 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                                                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                                                    </div>
                                                )}

                                                <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>{tier.name}</h3>
                                                <div className="flex items-baseline gap-1 mb-1">
                                                    <span className={`text-3xl sm:text-4xl font-serif ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>${tier.price}</span>
                                                    <span className="text-slate-900 text-[9px] sm:text-[10px] font-bold uppercase tracking-tight">{t('onboarding.step2.cadMonth') as string}</span>
                                                </div>
                                                {tier.weeklyNote && (
                                                    <div className={`text-[10px] font-bold mb-2 italic lowercase mb-4 ${isElite ? 'text-gold-600' : 'text-slate-600'}`}>
                                                        ({tier.weeklyNote})
                                                    </div>
                                                )}
                                                <div className={`text-[9px] font-bold uppercase tracking-widest bg-blue-50 inline-block px-3 py-1.5 rounded-full border ${isElite ? 'bg-gold-50 text-gold-700 border-gold-500/20' : 'text-blue-600 border-blue-500/10'}`}>
                                                    {t('pricing.setupFeeLabel')}: ${tier.setupFee}
                                                </div>
                                                {tier.setupFeeNote && (
                                                    <div className={`text-[9px] font-bold mt-2 italic pl-1 leading-tight ${isElite ? 'text-gold-700' : 'text-slate-500'}`}>
                                                        *{tier.setupFeeNote}
                                                    </div>
                                                )}

                                                <div className="md:hidden flex justify-center mt-4">
                                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                                                </div>
                                            </div>

                                            <div className={`bg-slate-900 p-4 sm:p-5 md:p-8 flex-grow flex-col h-full ${isSelected ? 'flex' : 'hidden md:flex'}`}>
                                                <p className={`text-xs text-slate-400 mb-6 sm:mb-8 leading-relaxed border-l-2 pl-4 ${isElite ? 'border-gold-500/40' : 'border-blue-500/30'}`}>{tier.description}</p>
                                                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                                                    {tier.features?.map((f: string, j: number) => (
                                                        <div key={j} className="flex items-start gap-3">
                                                            <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0 border ${isElite ? 'bg-slate-800 border-slate-700' : isPopular ? 'bg-blue-600/50 border-blue-500' : 'bg-slate-800 border-slate-700'}`}>
                                                                <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" strokeWidth={4} />
                                                            </div>
                                                            <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium leading-tight break-words flex-1">{f}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={`w-full py-4 rounded-xl text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md mt-auto
                                                    ${isSelected
                                                        ? (isElite ? 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white shadow-gold-500/20' : 'bg-blue-600 text-white shadow-blue-500/20')
                                                        : 'bg-white/10 text-white border border-white/10 group-hover:bg-white group-hover:text-slate-900 group-hover:shadow-lg'
                                                    }`}
                                                >
                                                    {isSelected ? t('onboarding.step2.selectedLabel') as string : t('onboarding.step2.selectLabel') as string}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="flex flex-col-reverse sm:flex-row justify-center gap-4 sm:gap-6 mt-8 md:mt-12 px-4 sm:px-0">
                            <button onClick={handleBack} className="w-full sm:w-auto px-8 py-4 sm:py-3 text-slate-500 hover:text-slate-900 transition-colors uppercase text-xs font-bold tracking-widest bg-slate-100 sm:bg-transparent rounded-xl sm:rounded-none">
                                {t('onboarding.step2.backButton') as string}
                            </button>
                            <button
                                disabled={!selectedPlan}
                                onClick={handleNext}
                                className={`w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-3 rounded-xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-all ${selectedPlan ? 'bg-slate-900 hover:bg-wine-900 text-white shadow-xl shadow-slate-900/10' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}
                            >
                                {t('onboarding.step2.continueButton') as string}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="max-w-2xl w-full step-content">
                        <div className="relative p-6 sm:p-10 md:p-16 rounded-3xl bg-white border border-slate-200 shadow-xl text-center space-y-6 sm:space-y-8">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-sm">
                                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                            </div>
                            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">
                                {t('onboarding.step3.title') as string} <br className="sm:hidden" /> <span className="text-blue-600 italic">{t('onboarding.step3.titleHighlight') as string}</span>
                            </h2>
                            <p className="text-slate-500 leading-relaxed text-base sm:text-lg">
                                {ti('onboarding.step3.description', {
                                    business: selectedBusiness?.description || '',
                                    plan: selectedPlan || '',
                                })}
                            </p>
                            <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-4">
                                <p className="text-sm text-slate-600">{t('onboarding.step3.inputDescription') as string}</p>
                                <input
                                    type="tel"
                                    placeholder={t('onboarding.step3.phonePlaceholder') as string}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full h-14 px-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all text-slate-900 text-base sm:text-lg tracking-widest shadow-inner placeholder:text-slate-300"
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                disabled={!phoneNumber || isSubmitting}
                                className={`w-full h-14 sm:h-16 rounded-xl font-bold uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-4 ${!phoneNumber || isSubmitting ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-slate-900 hover:bg-wine-900 text-white shadow-slate-900/20'}`}
                            >
                                {isSubmitting ? t('onboarding.step3.submittingButton') as string : t('onboarding.step3.submitButton') as string}
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-px bg-slate-200" />
                                <span className="text-xs text-slate-400 font-medium">{t('onboarding.step4.calendarOr') as string}</span>
                                <div className="flex-1 h-px bg-slate-200" />
                            </div>

                            <a
                                href="https://calendly.com/pablo-anvela/appel-decouverte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-14 sm:h-16 rounded-xl font-bold uppercase tracking-widest border-2 border-slate-900 text-slate-900 hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center gap-4"
                            >
                                <Phone className="w-5 h-5" />
                                {t('onboarding.step4.calendarButton') as string}
                            </a>

                            <div className="flex justify-center">
                                <button onClick={handleBack} className="text-slate-400 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-widest py-2">
                                    {t('onboarding.step3.backButton') as string}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="max-w-xl w-full step-content text-center px-4 sm:px-0">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-6 sm:mb-8 animate-pulse shadow-sm">
                            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                        </div>
                        <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-4 sm:mb-6">
                            {t('onboarding.step4.title') as string} <br className="sm:hidden" /> <span className="text-green-600 italic">{t('onboarding.step4.titleHighlight') as string}</span>
                        </h2>
                        <p className="text-slate-500 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10">
                            {ti('onboarding.step4.description', { plan: selectedPlan || '' })}
                        </p>
                        <div className="p-6 sm:p-8 rounded-3xl bg-blue-50 border border-blue-100 text-center space-y-3 sm:space-y-4 shadow-sm">
                            <h3 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">{t('onboarding.step4.nextStepsTitle') as string}</h3>
                            <p className="text-slate-800 font-serif text-xl sm:text-2xl">{t('onboarding.step4.nextStepsText') as string}</p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="font-serif text-xl text-slate-900 mb-2">
                                {t('onboarding.step4.calendarTitle') as string}
                            </p>
                            <p className="text-sm text-slate-500 mb-6">
                                {t('onboarding.step4.calendarSubtitle') as string}
                            </p>
                            <a
                                href="https://calendly.com/pablo-anvela/appel-decouverte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-blue-700 active:scale-95 transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                {t('onboarding.step4.calendarButton') as string}
                            </a>
                        </div>
                        <Link to="/" className="inline-flex items-center gap-3 mt-8 sm:mt-12 text-slate-400 hover:text-slate-900 transition-colors font-medium">
                            {t('onboarding.step4.returnLink') as string}
                        </Link>
                    </div>
                )}

            </main>
        </div>
    );
}
