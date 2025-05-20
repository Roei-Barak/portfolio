import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Riddles from './components/Riddles';
import AudioPlayer from './components/AudioPlayer';
import MatrixBackground from './components/MatrixBackground';
import WelcomeScreen from './components/WelcomeScreen';

const AUDIO_URL = 'audio/audioFile.mp3';

const App: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(new Audio(AUDIO_URL));

  useEffect(() => {
    const audio = audioRef.current;

    if (playing) {
      if (!hasStarted) {
        audio.currentTime = 63;  // התחלת ניגון משניה 63 רק פעם ראשונה
        setHasStarted(true);
      }
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing, hasStarted]);

  const toggle = () => setPlaying(p => !p);

  return (
    <>
      <WelcomeScreen toggleAudio={toggle} />
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <Introduction />
        <Timeline />
        <Projects />
        <Riddles />
        <Resume />
        <AudioPlayer playing={playing} toggle={toggle} />
      </div>
    </>
  );
};

export default App;
