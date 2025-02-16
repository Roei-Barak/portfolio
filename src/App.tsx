import React, { useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Resume from './components/Resume';
import AudioPlayer from './components/AudioPlayer';
import MatrixBackground from './components/MatrixBackground';
import WelcomeScreen from './components/WelcomeScreen';
const { exec } = require('child_process');

const App: React.FC = () => {
  useEffect(() => {
    exec('/var/www/portfolio/scripts/log_ips.sh', (error: any, stdout: string, stderr: string) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }, []);

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
