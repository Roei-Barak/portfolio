import Header from './components/Header';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Riddles from './components/Riddles';
import AudioPlayer from './components/AudioPlayer';
import MatrixBackground from './components/MatrixBackground';
import ThemeToggle from './components/ThemeToggle';


export default function PortfolioDark() {
  return ( <>
          <MatrixBackground />
          <div className="relative z-10">
            <Header />
            <ThemeToggle />
            <Introduction />
            <Timeline />
            <Projects />
            <Riddles />
            <Resume />
            <AudioPlayer />
          </div>
          </>
  );
}