import { useState, useEffect } from 'react';
import { Search, MapPin, Clock, ArrowRight, CheckCircle2, Building2, Globe2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

export default function OnboardingPage() {
    const [step, setStep] = useState(1);
    const [selectedBusiness, setSelectedBusiness] = useState<any>(null);

    // GOOGLE PLACES LOGIC
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here if needed, e.g., location: new google.maps.LatLng(45.5017, -73.5673), radius: 200 * 1000 */
        },
        debounce: 300,
    });

    // Mock Business Search Results - FALLBACK when no API key is active
    const mockBusinesses = [
        {
            id: 'm1',
            name: "Nalyra Tech Solutions",
            address: "123 Innovation Dr, Montreal, QC",
            hours: "9:00 AM - 5:00 PM",
            phone: "+1 (514) 555-0199"
        },
        {
            id: 'm2',
            name: "The Digital Creative Agency",
            address: "456 Creative Way, Toronto, ON",
            hours: "10:00 AM - 6:00 PM",
            phone: "+1 (416) 555-0288"
        }
    ].filter(b => b.name.toLowerCase().includes(value.toLowerCase()));

    useEffect(() => {
        // Animation for step enter
        gsap.fromTo('.step-content',
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
        );
    }, [step]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleBusinessSelect = async (place: any) => {
        // If it's a mock business
        if (place.id && place.id.toString().startsWith('m')) {
            setSelectedBusiness(place);
            setValue(place.name, false);
            clearSuggestions();
            return;
        }

        // Real Google Places Logic
        setValue(place.description, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address: place.description });
            const { lat, lng } = getLatLng(results[0]);

            setSelectedBusiness({
                name: place.structured_formatting.main_text,
                address: place.structured_formatting.secondary_text,
                hours: "Auto-synced from Google",
                phone: "Syncing...",
                lat,
                lng
            });
        } catch (error) {
            console.error("Error fetching geocode:", error);
        }
    };

    const handleNext = () => {
        if (step < 5) setStep(step + 1);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
            {/* Navigation / Progress Bar */}
            <nav className="fixed top-0 inset-x-0 p-6 z-50 flex items-center justify-between border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-serif text-xl tracking-tight">Nalyra</span>
                </Link>

                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <div
                                key={s}
                                className={`h-1.5 w-12 rounded-full transition-all duration-500 ${s <= step ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-white/10'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-medium">Step {step} of 5</span>
                </div>

                <div className="w-24 flex justify-end">
                    <button className="text-white/40 hover:text-white transition-colors text-xs font-medium underline underline-offset-4">
                        Save & Exit
                    </button>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 min-h-[calc(100vh-80px)] items-center">

                {/* Left Side: Value Proposition */}
                <div className="lg:col-span-5 space-y-8 step-content">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-medium animate-pulse">
                        <Sparkles className="w-3 h-3" />
                        AI Setup in Progress
                    </div>

                    <div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-3xl leading-tight mb-4">
                            Let's connect your <br />
                            <span className="text-blue-500 italic">Business Identity.</span>
                        </h1>
                        <p className="text-white/50 text-base leading-relaxed max-w-md">
                            We'll pull your location, hours, and contact details automatically to train your receptionist instantly.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-blue-500">
                                <Search className="w-4 h-4" />
                            </div>
                            <p className="text-sm text-white/70 leading-relaxed font-light">
                                <strong className="text-white font-medium block mb-0.5">Automated Sync</strong>
                                Pulling your business data from Google ensures 100% accuracy in AI responses.
                            </p>
                        </div>
                        <div className="flex items-start gap-4 text-white/70">
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-blue-500">
                                <Clock className="w-4 h-4" />
                            </div>
                            <p className="text-sm text-white/70 leading-relaxed font-light">
                                <strong className="text-white font-medium block mb-0.5">30-Second Setup</strong>
                                The faster we find you, the sooner Nalyra starts answering your calls.
                            </p>
                        </div>
                    </div>

                    <div className="pt-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs text-white/50">Free 14-day trial included. No card required.</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Interactive Search Card */}
                <div className="lg:col-span-1" /> {/* Spacer */}

                <div className="lg:col-span-6 relative step-content">
                    {/* Background Glow */}
                    <div className="absolute -inset-20 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl">
                        <h2 className="text-xl font-medium mb-8 flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-blue-500" />
                            Find Your Business
                        </h2>

                        <div className="space-y-6">
                            {/* Search Input */}
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-500 transition-colors">
                                    <Search className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your business name..."
                                    value={value}
                                    onChange={handleSearchChange}
                                    className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/20 text-white"
                                />
                                {(status === "OK" || value.length > 2) && !selectedBusiness && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                                    </div>
                                )}
                            </div>

                            {/* Results Dropdown (Real Google Data + Mocks) */}
                            {value.length > 2 && !selectedBusiness && (
                                <div className="absolute left-8 right-8 top-full mt-2 bg-[#121212] border border-white/10 rounded-2xl shadow-2xl z-20 overflow-hidden divide-y divide-white/5">
                                    {/* Real Google Results */}
                                    {status === "OK" && data.map((suggestion) => (
                                        <button
                                            key={suggestion.place_id}
                                            onClick={() => handleBusinessSelect(suggestion)}
                                            className="w-full p-4 flex items-start gap-4 hover:bg-white/5 transition-colors text-left"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-4 h-4 text-blue-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">{suggestion.structured_formatting.main_text}</div>
                                                <div className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">{suggestion.structured_formatting.secondary_text}</div>
                                            </div>
                                        </button>
                                    ))}

                                    {/* Mock Fallbacks (Only if Google status is not OK, e.g. no key) */}
                                    {status !== "OK" && mockBusinesses.map((b) => (
                                        <button
                                            key={b.id}
                                            onClick={() => handleBusinessSelect(b)}
                                            className="w-full p-4 flex items-start gap-4 hover:bg-white/5 transition-colors text-left"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-4 h-4 text-blue-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">{b.name}</div>
                                                <div className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">{b.address}</div>
                                            </div>
                                        </button>
                                    ))}

                                    {status !== "OK" && mockBusinesses.length === 0 && (
                                        <div className="p-8 text-center text-white/30 text-xs">
                                            No businesses found. Try a different name?
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Selected Business Card */}
                            {selectedBusiness && (
                                <div className="p-6 rounded-2xl bg-blue-600/5 border border-blue-500/20 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                                <CheckCircle2 className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium">{selectedBusiness.name}</h3>
                                                <p className="text-xs text-white/40 flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" /> {selectedBusiness.address}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedBusiness(null)}
                                            className="text-[10px] text-blue-400 hover:underline uppercase tracking-widest font-bold"
                                        >
                                            Change
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                        <div className="space-y-1">
                                            <span className="text-[10px] text-white/20 uppercase tracking-widest">Business Hours</span>
                                            <p className="text-xs text-white/70 flex items-center gap-2">
                                                <Clock className="w-3 h-3 text-blue-500" /> {selectedBusiness.hours}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] text-white/20 uppercase tracking-widest">Global Reach</span>
                                            <p className="text-xs text-white/70 flex items-center gap-2">
                                                <Globe2 className="w-3 h-3 text-blue-500" /> Worldwide
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Next Button */}
                            <button
                                disabled={!selectedBusiness}
                                onClick={handleNext}
                                className={`w-full h-14 rounded-xl flex items-center justify-center gap-3 font-medium transition-all duration-500 ${selectedBusiness
                                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] translate-y-0'
                                    : 'bg-white/5 text-white/20 border border-white/10 cursor-not-allowed opacity-50'
                                    }`}
                            >
                                Continue to AI Model Setup
                                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${selectedBusiness ? 'translate-x-0 group-hover:translate-x-1' : ''}`} />
                            </button>

                            <p className="text-center text-[10px] text-white/20 uppercase tracking-wider font-medium">
                                Can't find your business? <button className="text-blue-500 hover:underline">Manual Setup</button>
                            </p>
                        </div>
                    </div>

                    {/* Footer HUD info */}
                    <div className="mt-8 flex items-center justify-between px-4">
                        <div className="flex items-center gap-4 text-[9px] text-white/20 uppercase tracking-[0.2em] font-medium">
                            <span>Secured AES-256</span>
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <span>Privacy Compliant</span>
                        </div>
                        <span className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-medium">Auto-Save Enabled</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
