import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Riddles from './components/Riddles';
import AudioPlayer from './components/AudioPlayer';
import MatrixBackground from './components/MatrixBackground';
import WelcomeScreen from './components/WelcomeScreen';

const App = () => {
  return (
    <>
      <WelcomeScreen />
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <Introduction />
        <Timeline />
        <Projects />
        <Riddles />
        <Resume />
        <AudioPlayer />
      </div>
    </>
  );
};

export default App;