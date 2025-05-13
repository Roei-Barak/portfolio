import React from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import DarkPortfolio from './PortfolioDark'
import LightPortfolio from './PortfolioLight'
import WelcomeScreen from './components/WelcomeScreen';


const AppContent: React.FC = () => {
  const { theme } = useTheme();
  console.log(`The theme is ${theme}`)
  return theme === 'light' ? <LightPortfolio /> : <DarkPortfolio />;

  
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <WelcomeScreen />
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
