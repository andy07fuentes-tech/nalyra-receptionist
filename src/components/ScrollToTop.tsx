import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ScrollToTop() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label={t('footer.backToTopText') as string}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-blue-500/90 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500 hover:scale-110 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
