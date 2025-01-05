import React, { useState, useEffect } from 'react';

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('');
  const fullText = '> Hello everyone,\n> And welcome to my dark web site...';
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typingSpeed = 100;
    let currentChar = 0;

    const typingInterval = setInterval(() => {
      if (currentChar < fullText.length) {
        setText(fullText.slice(0, currentChar + 1));
        currentChar++;
      } else {
        setTimeout(() => {
          setIsVisible(false);
        }, 1000);
        clearInterval(typingInterval);
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

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#0a0f18] z-50 flex items-center justify-center">
      <div className="font-mono text-[#00ff41] text-2xl p-8 border border-[#00ff41] bg-[#0a0f18]/90 rounded-lg">
        <pre className="whitespace-pre-line">
          {text}
          {cursorVisible && <span className="animate-pulse">█</span>}
        </pre>
      </div>
    </div>
  );
}