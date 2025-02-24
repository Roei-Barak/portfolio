import React, { useState, useEffect } from 'react';
import { useAudio } from '../hooks/useAudio';
import { ChevronRight } from 'lucide-react';

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const fullText = '> Hello everyone,\n> And welcome to my dark web site...';
  const [cursorVisible, setCursorVisible] = useState(true);
  const [, toggleAudio] = useAudio(); // Shared audio hook

  useEffect(() => {
    const typingSpeed = 75;
    let currentChar = 0;

    const typingInterval = setInterval(() => {
      if (currentChar < fullText.length) {
        setText(fullText.slice(0, currentChar + 1));
        currentChar++;
      } else {
        clearInterval(typingInterval);
        setShowButton(true);
      }
    }, typingSpeed);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleNext = () => {
    toggleAudio(); // Start the music when entering the site
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#0a0f18] z-50 flex items-center justify-center">
      <div className="font-mono text-[#00ff41] text-2xl p-8 border border-[#00ff41] bg-[#0a0f18]/90 rounded-lg">
        <pre className="whitespace-pre-line mb-6">
          {text}
          {cursorVisible && <span className="animate-pulse">█</span>}
        </pre>
        
        {showButton && (
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-full px-4 py-2 mt-4 border border-[#00ff41] rounded-lg hover:bg-[#00ff41]/10 transition-colors duration-300 group"
          >
            <span className="mr-2">Enter Site</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        )}
      </div>
    </div>
  );
}
