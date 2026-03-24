import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface AudioContextType {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('https://cdn.pixabay.com/audio/2023/06/12/audio_4e260265ef.mp3');
    audio.loop = true;
    audio.volume = 0.4; // Subtle background volume
    audioRef.current = audio;

    return () => {
      audio.pause();
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

  const play = () => {
    setIsPlaying(true);
    audioRef.current?.play().catch(err => console.log("Playback failed:", err));
  };

  const pause = () => {
    setIsPlaying(false);
    audioRef.current?.pause();
  };

  return (
    <AudioContext.Provider value={{ isMuted, setIsMuted, play, pause, isPlaying }}>
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
