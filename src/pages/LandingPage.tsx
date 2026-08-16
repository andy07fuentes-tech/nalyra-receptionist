import { useState, useCallback, useEffect } from 'react';
import { Navigation } from '../sections/Navigation';
import { Hero } from '../sections/Hero';
import { MissedCalls } from '../sections/MissedCalls';
import { PainPoints } from '../sections/PainPoints';
import { DemoShowcase } from '../sections/DemoShowcase';
import { FeatureShowcase } from '../sections/FeatureShowcase';
import { AlbumCube } from '../sections/AlbumCube';
import { CinematicShowcase } from '../sections/CinematicShowcase';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
import { Founder } from '../sections/Founder';
import { ContactForm } from '../sections/ContactForm';
import { Footer } from '../sections/Footer';
import { Preloader } from '../components/Preloader';
import { usePageMeta } from '../hooks/usePageMeta';
import { ScrollToTop } from '../components/ScrollToTop';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
    usePageMeta({
        title: 'Réceptionniste IA pour garages à Montréal | Anvela',
        description: 'Anvela offre une réceptionniste IA 24/7 pour garages à Montréal : réponses aux appels, prise de rendez-vous et suivi des clients.',
        path: '/',
    });
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
                // Exclude #album-cube (contains a GSAP pin — animating transform breaks the pin spacer)
                const sections = document.querySelectorAll('section:not(#hero):not(#pain-points):not(#album-cube)');

                sections.forEach((section) => {
                    gsap.fromTo(
                        section,
                        { opacity: 0, y: 80 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: 'power3.out',
                            // Remove leftover transform after entrance — a lingering transform
                            // makes position:fixed children (video modals) position relative to
                            // the section instead of the viewport
                            clearProps: 'transform',
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
                    {!isLoading && <DemoShowcase />}
                    <Founder />
                    <FeatureShowcase />
                    <AlbumCube />
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
