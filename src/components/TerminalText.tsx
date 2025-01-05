import React, { useEffect, useState } from 'react';

interface TerminalTextProps {
  lines: string[];
  typingSpeed?: number;
  className?: string;
}

export default function TerminalText({ lines, typingSpeed = 50, className = '' }: TerminalTextProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const timer = setTimeout(() => {
      if (currentChar < lines[currentLine].length) {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (!newLines[currentLine]) newLines[currentLine] = '';
          newLines[currentLine] = lines[currentLine].slice(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      } else {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, lines, typingSpeed]);

  return (
    <div className={`font-mono text-[#00ff41] ${className}`}>
      {displayedLines.map((line, index) => (
        <div key={index} className="flex">
          <span className="mr-2">$</span>
          <span>{line}</span>
          {index === currentLine && <span className="animate-pulse">_</span>}
        </div>
      ))}
    </div>
  );
}