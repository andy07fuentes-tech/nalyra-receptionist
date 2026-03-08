import { useState, useCallback, useEffect } from 'react';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { FeatureShowcase } from './sections/FeatureShowcase';
import { AlbumCube } from './sections/AlbumCube';
import { VideoPromo } from './sections/VideoPromo';
import { WineShowcase } from './sections/WineShowcase';
import { Pricing } from './sections/Pricing';
import { Footer } from './sections/Footer';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
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

      <div className={`min-h-screen bg-[#141414] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Navigation />

        <main>
          <Hero isReady={!isLoading} />
          <FeatureShowcase />
          <AlbumCube />
          <WineShowcase />
          <VideoPromo />
          <Pricing />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
