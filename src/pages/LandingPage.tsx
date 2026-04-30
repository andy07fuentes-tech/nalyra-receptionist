import { useState, useCallback, useEffect } from 'react';
import { Navigation } from '../sections/Navigation';
import { Hero } from '../sections/Hero';
import { HeroSplit } from '../sections/HeroSplit';
import { MissedCalls } from '../sections/MissedCalls';
import { PainPoints } from '../sections/PainPoints';
import { VideoDemo } from '../sections/VideoDemo';
import { FeatureShowcase } from '../sections/FeatureShowcase';
import { HorizontalGallery } from '../sections/HorizontalGallery';
import { AnvelaAdvantage } from '../sections/AnvelaAdvantage';
import { AlbumCube } from '../sections/AlbumCube';
import { SolutionShowcase } from '../sections/SolutionShowcase';
import { CinematicShowcase } from '../sections/CinematicShowcase';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
import { Founder } from '../sections/Founder';
import { ContactForm } from '../sections/ContactForm';
import { Footer } from '../sections/Footer';
import { Preloader } from '../components/Preloader';
import { ScrollToTop } from '../components/ScrollToTop';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [heroLayout, setHeroLayout] = useState<'fullscreen' | 'split'>('fullscreen');

    const handlePreloaderComplete = useCallback(() => {
        setIsLoading(false);
    }, []);

    // Initialize smooth scroll transitions
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        if (isLoading) return;

        // Force scroll to top on load completion
        window.scrollTo(0, 0);

        // Wait for DOM to be ready
        const timer = setTimeout(() => {
            // Animate sections on scroll (exclude hero which handles its own entrance)
            // Exclude #hero (own animation) and #pain-points (contains sticky children — GSAP transform breaks CSS sticky)
            const sections = document.querySelectorAll('section:not(#hero):not(#pain-points)');

            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 88%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            });

            // Refresh ScrollTrigger
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, [isLoading]);

    return (
        <>
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

            <div className={`min-h-screen bg-slate-50 ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
                <Navigation />

                <main>
                    {/* Layout Toggle (Dev Only) */}
                    <div className="absolute top-24 right-4 z-50 flex gap-2 bg-black/50 p-1.5 rounded-lg backdrop-blur-md border border-white/10">
                        <button 
                            onClick={() => setHeroLayout('fullscreen')} 
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${heroLayout === 'fullscreen' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
                        >
                            Fullscreen Video
                        </button>
                        <button 
                            onClick={() => setHeroLayout('split')} 
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${heroLayout === 'split' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
                        >
                            Split Layout
                        </button>
                    </div>

                    {heroLayout === 'fullscreen' ? (
                        <Hero isReady={!isLoading} />
                    ) : (
                        <HeroSplit isReady={!isLoading} />
                    )}
                    

                    <MissedCalls />
                    <CinematicShowcase />
                    <PainPoints />
                    <VideoDemo />
                    <FeatureShowcase />
                    <HorizontalGallery />
                    <AnvelaAdvantage />
                    <AlbumCube />
                    <SolutionShowcase />
                    <Pricing />
                    <FAQ />
                    <Founder />
                    <ContactForm />
                </main>

                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}
