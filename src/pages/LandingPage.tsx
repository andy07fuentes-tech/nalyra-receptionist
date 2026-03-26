import { useState, useCallback, useEffect } from 'react';
import { Navigation } from '../sections/Navigation';
import { Hero } from '../sections/Hero';
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
            // Animate sections on scroll
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0.9, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                            end: 'top 20%',
                            toggleActions: 'play none none reverse',
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

                <main className="bg-slate-50">
                    <Hero isReady={!isLoading} />
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
