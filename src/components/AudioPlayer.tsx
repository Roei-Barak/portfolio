import React from 'react';
import { Music2, Music } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

const AUDIO_URL = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Leonard_Cohen/Im_Your_Man/Leonard_Cohen_-_Im_Your_Man.mp3';

export default function AudioPlayer() {
  const [playing, toggle] = useAudio(AUDIO_URL);

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