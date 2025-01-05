import { useState, useEffect, useCallback } from 'react';

export function useAudio(url: string) {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    audio.volume = 0.5; // Set initial volume to 50%
    
    const handleEnded = () => {
      audio.currentTime = 0; // Reset to beginning
      audio.play(); // Auto replay
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [audio]);

  useEffect(() => {
    if (playing) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [playing, audio]);

  return [playing, toggle] as const;
}