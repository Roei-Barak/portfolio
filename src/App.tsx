import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Resume from './components/Resume';
import AudioPlayer from './components/AudioPlayer';
import MatrixBackground from './components/MatrixBackground';
import WelcomeScreen from './components/WelcomeScreen';

const App: React.FC = () => {
  return (
    <>
      <WelcomeScreen />
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <Introduction />
        <Projects />
        <Resume />
        <AudioPlayer />
      </div>
    </>
  );
};

export default App;