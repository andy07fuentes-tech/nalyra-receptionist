import { useState, useEffect } from 'react';
import { Search, MapPin, ArrowRight, CheckCircle2, Building2, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import usePlacesAutocomplete from "use-places-autocomplete";
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';

export default function OnboardingPage() {
    const { t, language } = useLanguage();
    const [step, setStep] = useState(1);
    const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

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
        gsap.fromTo('.step-content',
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
        );
    }, [step]);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const tiers = (t('pricing.tiers') as any) || [];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 inset-x-0 p-6 z-50 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-serif text-xl tracking-tight text-slate-900">Anvela</span>
                </Link>

                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={`h-1.5 w-16 rounded-full transition-all duration-500 ${s <= step ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.2)]' : 'bg-slate-200'}`} />
                        ))}
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-medium">Step {step} of 3</span>
                </div>

                <div className="flex items-center gap-6">
                    <LanguageToggle isScrolled={true} />
                    <button className="text-slate-400 hover:text-slate-900 transition-colors text-xs font-medium underline underline-offset-4">Save & Exit</button>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex items-center justify-center">

                {step === 1 && (
                    <div className="grid lg:grid-cols-12 gap-16 items-center w-full step-content">
                        <div className="lg:col-span-5 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 text-xs font-medium">
                                <Search className="w-3 h-3" />
                                Identify Your Business
                            </div>
                            <div>
                                <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4 text-slate-900">
                                    Let's connect your <br />
                                    <span className="text-blue-600 italic">Business Identity.</span>
                                </h1>
                                <p className="text-slate-500 text-base leading-relaxed max-w-md">
                                    Locate your office in Montreal. We'll pull your location and hours to start building your custom AI profile.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="relative p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
                                <div className="space-y-6">
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="Search Montreal businesses..."
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            className="w-full h-14 pl-12 pr-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-slate-900 transition-all text-slate-900 placeholder:text-slate-500 font-medium"
                                        />
                                    </div>
                                    {value.length > 0 && !selectedBusiness && (
                                        <div className="absolute left-12 right-12 mt-2 bg-white border border-slate-200 rounded-xl z-20 overflow-hidden shadow-2xl">
                                            {filteredData.map((s) => (
                                                <button
                                                    key={s.place_id}
                                                    onClick={() => { setSelectedBusiness(s); setValue(s.description, false); clearSuggestions(); }}
                                                    className="w-full p-4 flex items-start gap-3 hover:bg-slate-50 text-left border-b border-slate-100"
                                                >
                                                    <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                                                    <span className="text-sm text-slate-700">{s.description}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    {selectedBusiness && (
                                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between shadow-sm">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                                </div>
                                                <span className="font-medium text-slate-900">{selectedBusiness.structured_formatting?.main_text || selectedBusiness.description}</span>
                                            </div>
                                            <button onClick={() => setSelectedBusiness(null)} className="text-xs text-blue-600 font-bold uppercase tracking-widest">Change</button>
                                        </div>
                                    )}
                                    <button
                                        disabled={!selectedBusiness}
                                        onClick={handleNext}
                                        className={`w-full h-14 rounded-xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-all ${selectedBusiness ? 'bg-slate-900 hover:bg-black text-white shadow-xl shadow-slate-900/10' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}
                                    >
                                        Continue to Plans
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="w-full step-content space-y-12">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-slate-900">Choose Your <span className="text-blue-600 italic">Anvela Plan.</span></h2>
                            <p className="text-slate-500">Select the tier that best fits your business volume. Pricing includes automated call handling, scheduling, and bilingual support.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
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
                                            ${isSelected 
                                                ? 'ring-2 ring-blue-600 ring-offset-4' 
                                                : ''
                                            }
                                            solar-aura-glow
                                            ${isPopular ? 'md:-translate-y-2 scale-[1.03] z-10' : ''}
                                            ${isElite ? 'scale-[1.03] z-10' : ''}`}
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

                                        <div className={`relative z-10 flex flex-col flex-grow m-[2px] bg-white rounded-[22px] overflow-hidden h-full`}>
                                            <div className={`p-8 pb-4 relative overflow-hidden ${isElite ? 'bg-white/40 backdrop-blur-xl' : 'bg-white'}`}>
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

                                                {/* Unique Badges */}
                                                {isStandard && (
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-[8px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-b-xl shadow-[0_4px_15px_rgba(71,85,105,0.4)]">
                                                        ESSENTIEL
                                                    </div>
                                                )}
                                                {isPopular && !isElite && (
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[8px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-b-xl shadow-[0_4px_15px_rgba(0,210,255,0.4)]">
                                                        MEILLEURE VALEUR
                                                    </div>
                                                )}
                                                {isElite && (
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-900 text-gold-200 text-[8px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-b-xl shadow-[0_4px_15px_rgba(210,168,85,0.4)] border-x border-b border-gold-500/30">
                                                        SOLUTION COMPLÈTE
                                                    </div>
                                                )}
                                                
                                                {isSelected && (
                                                    <div className="absolute top-4 right-4 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                                    </div>
                                                )}

                                                <h3 className={`text-xl font-bold mb-2 ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>{tier.name}</h3>
                                                <div className="flex items-baseline gap-1 mb-1">
                                                    <span className={`text-4xl font-serif ${isElite ? 'text-gradient-gold' : 'text-slate-900'}`}>${tier.price}</span>
                                                    <span className="text-slate-900 text-[10px] font-bold uppercase tracking-tight">CAD / mois</span>
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
                                            </div>

                                            <div className="bg-slate-900 p-8 flex-grow flex flex-col h-full">
                                                <p className={`text-xs text-slate-400 mb-8 leading-relaxed border-l-2 pl-4 ${isElite ? 'border-gold-500/40' : 'border-blue-500/30'}`}>{tier.description}</p>
                                                <div className="space-y-4 mb-8 flex-grow">
                                                    {tier.features?.map((f: string, j: number) => (
                                                        <div key={j} className="flex items-start gap-3">
                                                            <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0 border ${isElite ? 'bg-slate-800 border-slate-700' : isPopular ? 'bg-blue-600/50 border-blue-500' : 'bg-slate-800 border-slate-700'}`}>
                                                                <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                                            </div>
                                                            <span className="text-[10px] text-slate-300 font-medium leading-tight">{f}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={`w-full py-4 rounded-xl text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md mt-auto
                                                    ${isSelected 
                                                        ? (isElite ? 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white shadow-gold-500/20' : 'bg-blue-600 text-white shadow-blue-500/20') 
                                                        : 'bg-white/10 text-white border border-white/10 group-hover:bg-white group-hover:text-slate-900 group-hover:shadow-lg'
                                                    }`}
                                                >
                                                    {isSelected ? (language === 'fr' ? 'SÉLECTIONNÉ' : 'SELECTED') : (language === 'fr' ? 'CHOISIR CE FORFAIT' : 'SELECT PLAN')}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="flex justify-center gap-6 mt-12">
                            <button
                                onClick={handleBack}
                                className="px-8 py-3 text-slate-500 hover:text-slate-900 transition-colors uppercase text-xs font-bold tracking-widest"
                            >
                                Back
                            </button>
                            <button
                                disabled={!selectedPlan}
                                onClick={handleNext}
                                className={`px-12 py-3 rounded-xl flex items-center gap-3 font-bold uppercase tracking-widest transition-all ${selectedPlan ? 'bg-slate-900 hover:bg-black text-white shadow-xl shadow-slate-900/10' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}
                            >
                                Continue to Confirmation
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="max-w-2xl w-full step-content">
                        <div className="relative p-10 md:p-16 rounded-3xl bg-white border border-slate-200 shadow-2xl text-center space-y-8">
                            <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <Sparkles className="w-10 h-10 text-blue-600" />
                            </div>
                            <h2 className="font-serif text-4xl text-slate-900">Final Step: <span className="text-blue-600 italic">Call Verification.</span></h2>
                            <p className="text-slate-500 leading-relaxed text-lg">
                                We've captured your business profile for <span className="text-slate-900 font-medium">{selectedBusiness?.description}</span> and your interest in the <span className="text-blue-600 font-medium">{selectedPlan}</span> tier.
                            </p>
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-4">
                                <p className="text-sm text-slate-600">To finalize your subscription and schedule your configuration call, please enter your direct phone number below.</p>
                                <input
                                    type="tel"
                                    placeholder="+1 (514) 000-0000"
                                    className="w-full h-14 px-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all text-slate-900 text-lg tracking-widest shadow-inner placeholder:text-slate-300"
                                />
                            </div>
                            <button
                                onClick={() => setStep(4)}
                                className="w-full h-16 bg-slate-900 hover:bg-black text-white rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-slate-900/20 transition-all flex items-center justify-center gap-4"
                            >
                                Request Integration Call
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <div className="flex justify-center">
                                <button onClick={handleBack} className="text-slate-400 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-widest">Back</button>
                            </div>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="max-w-xl w-full step-content text-center">
                        <div className="w-24 h-24 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-8 animate-bounce shadow-sm">
                            <CheckCircle2 className="w-12 h-12 text-green-600" />
                        </div>
                        <h2 className="font-serif text-5xl text-slate-900 mb-6">Request <span className="text-green-600 italic">Confirmed.</span></h2>
                        <p className="text-slate-500 text-xl leading-relaxed mb-10">
                            Excellent choice. We've received your request for the <span className="text-slate-900 font-medium">{selectedPlan}</span> plan.
                        </p>
                        <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 text-center space-y-4 shadow-sm">
                            <h3 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">What happens next?</h3>
                            <p className="text-slate-800 font-serif text-2xl">A Anvela expert will call you within <br /> <span className="text-blue-600 italic">24 hours</span> to finalize your setup.</p>
                        </div>
                        <Link to="/" className="inline-flex items-center gap-3 mt-12 text-slate-400 hover:text-slate-900 transition-colors font-medium">
                            Return to Dashboard
                        </Link>
                    </div>
                )}

            </main>
        </div>
    );
}
