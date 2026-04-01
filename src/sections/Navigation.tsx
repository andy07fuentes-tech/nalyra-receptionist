import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { Volume2, VolumeX, Phone, PhoneOff, Loader2 } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';
import { RetellWebClient } from 'retell-client-js-sdk';

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
        ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-slate-100'
        : 'bg-transparent py-5'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom relative flex items-center justify-between px-4 md:px-8">
        
        {/* Left: Logo (Anvela) */}
        <div className="flex-1 flex justify-start">
          <button
            onClick={() => scrollToSection('#hero')}
            className="group"
            aria-label="Anvela"
          >
            <img 
              src="/anvela-logo.jpg" 
              alt="Anvela" 
              className={`h-8 md:h-10 lg:h-12 w-auto transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`} 
            />
          </button>
        </div>

        {/* Center: Main Titles (Hidden on mobile) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center text-center">
          <button
            onClick={() => scrollToSection('#hero')}
            className="group"
            aria-label={t('nav.brandName') as string}
          >
            <span className={`font-serif text-lg md:text-xl lg:text-2xl transition-colors duration-300 ${isScrolled ? 'text-dark-theme' : 'text-white'} tracking-wide`}>
              {t('nav.brandName')}
            </span>
          </button>

          <span 
                className="font-script text-xl text-blue-600"
                style={{ backgroundImage: 'none', textDecoration: 'none' }}
              >
                {t('nav.tagline')}
              </span>
        </div>

        {/* Right: Actions & Toggle */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-4">
          <DemoCallButton isScrolled={isScrolled} />
          <Link
            to="/onboarding"
            className={`inline-flex items-center text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 ${
              isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
            }`}
          >
            {t('nav.ctaButton') as string}
          </Link>
          <SoundToggle isScrolled={isScrolled} />
          <LanguageToggle isScrolled={isScrolled} />
        </div>

      </div>
    </nav>
  );
}

const retellClient = new RetellWebClient();

function DemoCallButton({ isScrolled }: { isScrolled: boolean }) {
  const { t } = useLanguage();
  const { setIsMuted } = useAudio();
  const [status, setStatus] = useState<'idle' | 'connecting' | 'active'>('idle');

  const startCall = async () => {
    setStatus('connecting');
    setIsMuted(true);
    try {
      const res = await fetch('https://n8n.srv1401769.hstgr.cloud/webhook/anvela/create-web-call', { method: 'POST' });
      const { access_token, sample_rate } = await res.json();
      await retellClient.startCall({ accessToken: access_token, sampleRate: sample_rate });
      setStatus('active');
    } catch {
      setIsMuted(false);
      setStatus('idle');
    }
  };

  const endCall = () => {
    retellClient.stopCall();
    setIsMuted(false);
    setStatus('idle');
  };

  useEffect(() => {
    const onEnded = () => { setIsMuted(false); setStatus('idle'); };
    retellClient.on('call_ended', onEnded);
    return () => { retellClient.off('call_ended', onEnded); };
  }, [setIsMuted]);

  if (status === 'active') {
    return (
      <button
        onClick={endCall}
        className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all animate-pulse"
      >
        <PhoneOff className="w-3 h-3" />
        {t('nav.endCall') as string}
      </button>
    );
  }

  if (status === 'connecting') {
    return (
      <button disabled className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-blue-400 text-blue-400 opacity-70">
        <Loader2 className="w-3 h-3 animate-spin" />
        {t('nav.connecting') as string}
      </button>
    );
  }

  return (
    <button
      onClick={startCall}
      className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest transition-all px-3 py-1.5 rounded-full border
        ${isScrolled
          ? 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
          : 'text-blue-500 border-blue-500/30 hover:bg-blue-500/5 hover:text-white'}`}
    >
      <Phone className="w-3.5 h-3.5" />
      {t('nav.freeTrial')}
    </button>
  );
}

function SoundToggle({ isScrolled }: { isScrolled: boolean }) {
  const { isMuted, setIsMuted, isPlaying, play } = useAudio();

  const handleToggle = () => {
    if (isMuted) {
      setIsMuted(false);
      if (!isPlaying) play();
    } else {
      setIsMuted(true);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full transition-all duration-300 ${isScrolled ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-white/10 text-white'}`}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 opacity-60" />
      ) : (
        <Volume2 className="w-5 h-5 text-blue-500 animate-pulse" />
      )}
    </button>
  );
}
