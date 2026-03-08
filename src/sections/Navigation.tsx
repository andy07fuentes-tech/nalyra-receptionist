import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';

export function Navigation() {
  const { t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-3'
        : 'bg-transparent py-5'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">

        {/* Left: Brand Name (Nalyra) */}
        <div className="flex-1 flex justify-start">
          <button
            onClick={() => scrollToSection('#hero')}
            className="group"
            aria-label="Nalyra"
          >
            <span className="font-script text-2xl md:text-4xl lg:text-5xl text-blue-400">
              Nalyra
            </span>
          </button>
        </div>

        {/* Center: Main Titles (Hidden on mobile) */}
        <div className="hidden md:flex flex-[2] flex-col items-center justify-center text-center">
          <button
            onClick={() => scrollToSection('#hero')}
            className="group"
            aria-label={t('nav.brandName') as string}
          >
            <span className="font-serif text-lg md:text-xl lg:text-2xl text-white tracking-wide">
              {t('nav.brandName')}
            </span>
          </button>

          <span className="text-[9px] md:text-[10px] text-blue-400 tracking-widest uppercase mt-0.5">
            {t('nav.tagline')}
          </span>
        </div>

        {/* Right: Language Toggle */}
        <div className="flex-1 flex justify-end">
          <LanguageToggle />
        </div>

      </div>
    </nav>
  );
}
