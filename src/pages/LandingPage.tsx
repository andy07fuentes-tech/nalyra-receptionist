import { useState, useCallback, useEffect } from 'react';
import { Navigation } from '../sections/Navigation';
import { Hero } from '../sections/Hero';
import { PainPoints } from '../sections/PainPoints';
import { VideoDemo } from '../sections/VideoDemo';
import { FeatureShowcase } from '../sections/FeatureShowcase';
import { AlbumCube } from '../sections/AlbumCube';
import { SolutionShowcase } from '../sections/SolutionShowcase';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
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
        if (isLoading) return;

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
        };
    }, [isLoading]);

    return (
        <>
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

            <div className={`min-h-screen bg-slate-50 ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
                <Navigation />

                <main className="bg-slate-50">
                    <Hero isReady={!isLoading} />
                    <PainPoints />
                    <VideoDemo />
                    <FeatureShowcase />
                    <AlbumCube />
                    <SolutionShowcase />
                    <Pricing />
                    <FAQ />
                    <ContactForm />
                </main>

                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}
