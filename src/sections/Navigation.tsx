import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { Link } from 'react-router-dom';

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
        ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-100'
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
            <span className={`font-script text-2xl md:text-4xl lg:text-5xl transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`}>
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
            <span className={`font-serif text-lg md:text-xl lg:text-2xl transition-colors duration-300 ${isScrolled ? 'text-dark-theme' : 'text-white'} tracking-wide`}>
              {t('nav.brandName')}
            </span>
          </button>

          <span className={`text-[9px] md:text-[10px] transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-blue-400'} tracking-widest uppercase mt-0.5`}>
            {t('nav.tagline')}
          </span>
        </div>

        {/* Right: Actions & Toggle */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <Link
            to="/onboarding"
            className={`hidden sm:block text-[11px] font-bold uppercase tracking-widest transition-all px-4 py-2 rounded-full border
              ${isScrolled
                ? 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                : 'text-blue-500 border-blue-500/30 hover:bg-blue-500/5'}`}
          >
            Free Trial
          </Link>
          <LanguageToggle />
        </div>

      </div>
    </nav>
  );
}
