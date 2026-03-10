import { useState, useEffect } from 'react';
import { Search, MapPin, ArrowRight, CheckCircle2, Building2, Sparkles, Loader2 } from 'lucide-react';
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
        value,
        suggestions: { status, data, loading },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            // HARDWARE LOCK TO CANADA - Ensure results are in CA
            componentRestrictions: { country: "ca" },
            // PRIORITIZE MONTREAL - Weight results within 100km of city center
            locationBias: { radius: 100000, center: { lat: 45.5017, lng: -73.5673 } },
            types: ['establishment'],
        },
        debounce: 300,
        // We initialize when the component mounts to catch the script if it was late
        initOnMount: true,
    });

    // FILTER: Final gatekeeper - only show results that are definitely in our target region
    const filteredData = data.filter(item => {
        const desc = item.description.toLowerCase();
        // Strict safety check for Canada/Local identifiers
        return desc.includes('canada') ||
            desc.includes(', ca') ||
            desc.includes('montreal') ||
            desc.includes('québec') || // Handle both accent and non-accent
            desc.includes('quebec') ||
            desc.includes(', qc');
    });

    // Mock Business Search Results - Only as fallback for offline or zero results
    const mockBusinesses = [
        {
            id: 'm1',
            name: "Nalyra Tech Solutions",
            address: "123 Innovation Dr, Montreal, QC (HQ)",
            hours: "9:00 AM - 5:00 PM",
            phone: "+1 (514) 555-0199"
        }
    ].filter(b => b.name.toLowerCase().includes(value.toLowerCase()));

    useEffect(() => {
        gsap.fromTo('.step-content',
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
        );
    }, [step]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleBusinessSelect = async (place: any) => {
        if (place.id && place.id.toString().startsWith('m')) {
            setSelectedBusiness(place);
            setValue(place.name, false);
            clearSuggestions();
            return;
        }

        setValue(place.description, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address: place.description });
            const { lat, lng } = getLatLng(results[0]);

            setSelectedBusiness({
                name: place.structured_formatting?.main_text || place.description,
                address: place.structured_formatting?.secondary_text || "",
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
            {/* Navigation */}
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
                            <div key={s} className={`h-1.5 w-12 rounded-full transition-all duration-500 ${s <= step ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-white/10'}`} />
                        ))}
                    </div>
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-medium">Step {step} of 5</span>
                </div>

                <div className="w-24 flex justify-end">
                    <button className="text-white/40 hover:text-white transition-colors text-xs font-medium underline underline-offset-4">Save & Exit</button>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 min-h-[calc(100vh-80px)] items-center">

                {/* Left Side */}
                <div className="lg:col-span-5 space-y-8 step-content">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-medium animate-pulse">
                        <Sparkles className="w-3 h-3" />
                        v1.5 (Local Lock Active)
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
                                <strong className="text-white font-medium block mb-0.5">Montreal Priority</strong>
                                Search is strictly locked to Canadian businesses for 100% accuracy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Interactive Search Card */}
                <div className="lg:col-span-1" />

                <div className="lg:col-span-6 relative step-content">
                    <div className="absolute -inset-20 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl">
                        <h2 className="text-xl font-medium mb-8 flex items-center gap-3 text-blue-400">
                            <Building2 className="w-5 h-5" />
                            Canada Business Search
                        </h2>

                        <div className="space-y-6">
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-500 transition-colors">
                                    <Search className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search Montreal businesses..."
                                    value={value}
                                    onChange={handleSearchChange}
                                    className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/20 text-white"
                                />
                                {loading && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                                    </div>
                                )}
                            </div>

                            {/* Results Dropdown */}
                            {value.length > 0 && !selectedBusiness && (
                                <div className="absolute left-8 right-8 top-full mt-2 bg-[#121212] border border-white/10 rounded-2xl shadow-2xl z-20 overflow-hidden divide-y divide-white/5">
                                    {status === "OK" && filteredData.map((suggestion) => (
                                        <button
                                            key={suggestion.place_id}
                                            onClick={() => handleBusinessSelect(suggestion)}
                                            className="w-full p-4 flex items-start gap-4 hover:bg-blue-600/10 transition-colors text-left"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-4 h-4 text-blue-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">{suggestion.structured_formatting?.main_text || suggestion.description}</div>
                                                <div className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">{suggestion.structured_formatting?.secondary_text || "Montreal, QC"}</div>
                                            </div>
                                        </button>
                                    ))}

                                    {(status !== "OK" || filteredData.length === 0) && value.length > 2 && mockBusinesses.map((b) => (
                                        <button
                                            key={b.id}
                                            onClick={() => handleBusinessSelect(b)}
                                            className="w-full p-4 flex items-start gap-4 hover:bg-white/5 transition-colors text-left"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-4 h-4 text-blue-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">{b.name} (Montreal)</div>
                                                <div className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">{b.address}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {selectedBusiness && (
                                <div className="p-6 rounded-2xl bg-blue-600/5 border border-blue-500/20 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                                <CheckCircle2 className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium">{selectedBusiness.name}</h3>
                                                <p className="text-xs text-white/40 flex items-center gap-1"><MapPin className="w-3 h-3" /> {selectedBusiness.address}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => setSelectedBusiness(null)} className="text-[10px] text-blue-400 hover:underline uppercase tracking-widest font-bold">Change</button>
                                    </div>
                                </div>
                            )}

                            <button
                                disabled={!selectedBusiness}
                                onClick={handleNext}
                                className={`w-full h-14 rounded-xl flex items-center justify-center gap-3 font-medium transition-all duration-500 ${selectedBusiness ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg' : 'bg-white/5 text-white/20 border border-white/10 cursor-not-allowed'}`}
                            >
                                Continue to AI Model Setup
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
