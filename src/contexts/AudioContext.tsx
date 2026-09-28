import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AudioContextType {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  play: () => void;
  prime: () => void;
  playFrom: (seconds: number, fadeIn?: number) => void;
  pause: () => void;
  isPlaying: boolean;
  isDimmed: boolean;
  setIsDimmed: (dimmed: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDimmed, setIsDimmed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const NORMAL_VOLUME = 0.4;
  const DIMMED_VOLUME = 0.02;

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/audio/ambient.mp3');
    audio.loop = false;
    audio.volume = NORMAL_VOLUME; // Subtle background volume

    const handleEnded = () => {
      setIsPlaying(false);
    };
    audio.addEventListener('ended', handleEnded);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (!isMuted && isPlaying) {
        audioRef.current.play().catch(err => console.log("Autoplay prevented:", err));
      }
    }
  }, [isMuted, isPlaying]);

  // Volume Dimming effect
  useEffect(() => {
    if (audioRef.current) {
      const targetVolume = isDimmed ? DIMMED_VOLUME : NORMAL_VOLUME;
      gsap.to(audioRef.current, {
        volume: targetVolume,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }
  }, [isDimmed]);

  const play = () => {
    setIsPlaying(true);
    audioRef.current?.play().catch(err => console.log("Playback failed:", err));
  };

  // iOS only lets an audio element start later if it was started once inside a tap.
  // Starting and stopping in the same tick unlocks it without making a sound.
  const prime = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const attempt = audio.play();
    audio.pause();
    attempt?.catch(() => {});
  };

  // Continue the track from a given point (the intro film ends on this same music).
  const playFrom = (seconds: number, fadeIn = 1.5) => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.currentTime = seconds;
    } catch {
      // not seekable yet: start from the top instead
    }
    audio.volume = 0;
    setIsPlaying(true);
    audio.play().catch(err => console.log("Playback failed:", err));
    gsap.to(audio, {
      volume: isDimmed ? DIMMED_VOLUME : NORMAL_VOLUME,
      duration: fadeIn,
      ease: "power1.out"
    });
  };

  const pause = () => {
    setIsPlaying(false);
    audioRef.current?.pause();
  };

  return (
    <AudioContext.Provider value={{
      isMuted,
      setIsMuted,
      play,
      prime,
      playFrom,
      pause,
      isPlaying,
      isDimmed,
      setIsDimmed
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

