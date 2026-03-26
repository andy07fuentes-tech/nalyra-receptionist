import { useState, useEffect } from 'react';
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
      <div className="container-custom flex items-center justify-between px-4 md:px-8">

        {/* Left: Brand Name (Anvela) */}
        <div className="flex-1 flex justify-start">
          <button
            onClick={() => scrollToSection('#hero')}
            className="group"
            aria-label="Anvela"
          >
            <span className={`font-script text-2xl md:text-4xl lg:text-5xl transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`}>
              Anvela
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

          <span 
                className="font-script text-xl text-blue-600"
                style={{ backgroundImage: 'none', textDecoration: 'none' }}
              >
                {t('nav.tagline')}
              </span>
        </div>

        {/* Right: Actions & Toggle */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <DemoCallButton isScrolled={isScrolled} />
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
        Terminer
      </button>
    );
  }

  if (status === 'connecting') {
    return (
      <button disabled className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-blue-400 text-blue-400 opacity-70">
        <Loader2 className="w-3 h-3 animate-spin" />
        Connexion...
      </button>
    );
  }

  return (
    <button
      onClick={startCall}
      className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all px-4 py-2 rounded-full border
        ${isScrolled
          ? 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
          : 'text-blue-500 border-blue-500/30 hover:bg-blue-500/5 hover:text-white'}`}
    >
      <Phone className="w-3 h-3" />
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
