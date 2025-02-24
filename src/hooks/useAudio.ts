import { useState, useEffect, useCallback } from 'react';

const audio = new Audio('/audioFile.mp3'); // Shared audio instance

export function useAudio() {
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    if (!playing) {
      audio.currentTime = 55; // Always start at 55 seconds
      audio.play();
    } else {
      audio.pause();
    }
    setPlaying(prev => !prev);
  }, [playing]);

  useEffect(() => {
    audio.volume = 0.5; // Set volume to 50%

    const stopAt = 70; // 1 minute 10 seconds
    const checkTime = () => {
      if (audio.currentTime >= stopAt) {
        audio.pause();
        setPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', checkTime);

    return () => {
      audio.removeEventListener('timeupdate', checkTime);
      audio.pause();
    };
  }, []);

  return [playing, toggle] as const;
}
