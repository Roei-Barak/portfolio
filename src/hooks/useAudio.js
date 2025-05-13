import { useState, useEffect, useCallback } from 'react';

export function useAudio(url, startTime = 0) {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    if (!playing) {
      audio.currentTime = startTime;
    }
    setPlaying(prev => !prev);
  }, [audio, startTime, playing]);

  useEffect(() => {
    audio.volume = 0.5; // Set initial volume to 50%
    
    const handleEnded = () => {
      audio.currentTime = startTime; // Reset to specified start time
      audio.play(); // Auto replay
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [audio, startTime]);

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

  return [playing, toggle];
}