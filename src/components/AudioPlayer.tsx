import React from 'react';
import { Music2, Music } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

export default function AudioPlayer() {
  const [playing, toggle] = useAudio(); // Uses shared audio instance

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 bg-[#1a1f2c] p-3 rounded-full border border-[#00ff41]/20 hover:border-[#00ff41] transition-colors duration-300 group"
      aria-label={playing ? 'Pause music' : 'Play music'}
    >
      {playing ? (
        <Music2 className="text-[#00ff41] w-6 h-6 animate-pulse group-hover:scale-110 transition-transform" />
      ) : (
        <Music className="text-[#00ff41] w-6 h-6 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}
