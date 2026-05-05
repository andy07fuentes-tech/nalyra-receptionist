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

        let timer: ReturnType<typeof setTimeout>;
        let ctx = gsap.context(() => {
            // Wait for DOM to be ready
            timer = setTimeout(() => {
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

                // Smooth white → dark background transition as CinematicShowcase enters
                const cinematic = document.querySelector('#cinematic-showcase');
                const pageBg = document.querySelector<HTMLElement>('.page-bg-root');
                if (cinematic && pageBg) {
                    gsap.to(pageBg, {
                        backgroundColor: '#020202',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: cinematic,
                            start: 'top 100%',
                            end: 'top 30%',
                            scrub: true,
                        }
                    });
                }

                // Refresh ScrollTrigger
                ScrollTrigger.refresh();
            }, 100);
        });

        return () => {
            clearTimeout(timer);
            ctx.revert(); // Only revert triggers created in this context, instead of killing everything
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, [isLoading]);

    return (
        <>
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

            <div className={`page-bg-root min-h-screen bg-slate-50 ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
                <Navigation />

                <main>
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
