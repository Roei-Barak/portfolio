import { useState, useEffect, useCallback } from 'react';

export function useAudio(url: string, startTime: number = 0) {
  const [audio] = useState(() => new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    if (!playing) {
      audio.currentTime = startTime;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlaying(true);
          })
          .catch((error) => {
            console.error("Audio playback failed:", error);
            setPlaying(false);
          });
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, [audio, playing, startTime]);

  useEffect(() => {
    audio.volume = 0.5;
    audio.loop = true;

    const handleEnded = () => {
      if (playing) {
        audio.currentTime = startTime;
        audio.play().catch(() => setPlaying(false));
      }
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      setPlaying(false);
    };
  }, [audio, playing, startTime]);

  return [playing, toggle] as const;
}