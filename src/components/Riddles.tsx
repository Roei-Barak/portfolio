import React, { useState } from 'react';
import { Terminal, Lock, Database, Shield, Phone } from 'lucide-react';

interface Riddle {
  id: number;
  title: string;
  description: string;
  hint: string;
  answer: string;
  icon: React.ElementType;
  type: string;
}

const riddles: Riddle[] = [
  {
    id: 1,
    title: "SQL Injection Challenge",
    description: "Find the phone number by exploiting this login query:\nSELECT * FROM users WHERE username = '[INPUT]' AND password = '[INPUT]';",
    hint: "Think about how to make the WHERE clause always true...",
    answer: "' OR '1'='1",
    icon: Database,
    type: "sql"
  },
  {
    id: 2,
    title: "Brute Force Protection",
    description: "Decrypt this hash to get the next clue:\n4d1cf71aec011c7c6c3a2e69224f0e93\nIt's a common 4-digit number...",
    hint: "Think about common PIN patterns",
    answer: "1337",
    icon: Lock,
    type: "hash"
  }
];

export default function Riddles() {
  const [attempts, setAttempts] = useState<{[key: number]: string}>({});
  const [solvedRiddles, setSolvedRiddles] = useState<number[]>([]);
  const [showHint, setShowHint] = useState<{[key: number]: boolean}>({});
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const phoneNumber = "050-5854505";

  const addToTerminal = (text: string) => {
    setTerminalOutput(prev => [...prev, `> ${text}`]);
  };

  const handleSubmit = (riddle: Riddle) => {
    const attempt = attempts[riddle.id] || '';
    
    if (attempt.toLowerCase() === riddle.answer.toLowerCase()) {
      if (!solvedRiddles.includes(riddle.id)) {
        setSolvedRiddles(prev => [...prev, riddle.id]);
        addToTerminal(`Access granted for ${riddle.title}!`);
        
        if (solvedRiddles.length + 1 === riddles.length) {
          addToTerminal('Congratulations! You\'ve solved all riddles!');
          addToTerminal(`Here's my phone number: ${phoneNumber}`);
        }
      }
    } else {
      addToTerminal(`Access denied for ${riddle.title}. Try again.`);
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Shield className="text-[#00ff41] w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-[#00ff41] text-center font-mono">
            Security Challenges_
          </h2>
        </div>

        {/* Terminal Output */}
        <div className="bg-[#1a1f2c] border border-[#00ff41]/20 rounded-lg p-4 mb-8 font-mono">
          <div className="flex items-center mb-2">
            <Terminal className="text-[#00ff41] w-4 h-4 mr-2" />
            <span className="text-[#00ff41]">Terminal Output</span>
          </div>
          <div className="h-32 overflow-y-auto">
            {terminalOutput.map((line, index) => (
              <div key={index} className="text-[#00ff41] text-sm">{line}</div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {riddles.map(riddle => (
            <div 
              key={riddle.id}
              className="bg-[#1a1f2c] rounded-lg border border-[#00ff41]/20 p-6 transition-all duration-300 hover:border-[#00ff41]"
            >
              <div className="flex items-center mb-4">
                <riddle.icon className="text-[#00ff41] w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold text-[#00ff41] font-mono">
                  {riddle.title}
                </h3>
              </div>

              <pre className="bg-black/30 p-4 rounded mb-4 font-mono text-gray-300 whitespace-pre-wrap">
                {riddle.description}
              </pre>

              <div className="mb-4">
                <button
                  onClick={() => setShowHint(prev => ({ ...prev, [riddle.id]: !prev[riddle.id] }))}
                  className="text-[#00ff41]/70 hover:text-[#00ff41] text-sm font-mono transition-colors"
                >
                  {showHint[riddle.id] ? '[-] Hide Hint' : '[+] Show Hint'}
                </button>
                {showHint[riddle.id] && (
                  <div className="mt-2 text-gray-400 text-sm font-mono">
                    {riddle.hint}
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                <input
                  type="text"
                  value={attempts[riddle.id] || ''}
                  onChange={(e) => setAttempts(prev => ({ ...prev, [riddle.id]: e.target.value }))}
                  placeholder="Enter your solution"
                  className="flex-1 bg-black/30 border border-[#00ff41]/20 rounded px-4 py-2 text-[#00ff41] font-mono focus:outline-none focus:border-[#00ff41]"
                />
                <button
                  onClick={() => handleSubmit(riddle)}
                  className="px-6 py-2 bg-[#00ff41]/10 border border-[#00ff41]/20 rounded font-mono text-[#00ff41] hover:bg-[#00ff41]/20 hover:border-[#00ff41] transition-all duration-300"
                >
                  Submit
                </button>
              </div>

              {solvedRiddles.includes(riddle.id) && (
                <div className="mt-4 text-[#00ff41] font-mono flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Challenge Completed!
                </div>
              )}
            </div>
          ))}
        </div>

        {solvedRiddles.length === riddles.length && (
          <div className="mt-8 p-6 bg-[#1a1f2c] rounded-lg border border-[#00ff41] text-center">
            <h3 className="text-2xl font-bold text-[#00ff41] mb-4 font-mono">
              Congratulations, Hacker!
            </h3>
            <div className="flex items-center justify-center space-x-2 text-[#00ff41] font-mono">
              <Phone className="w-5 h-5" />
              <span>{phoneNumber}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}