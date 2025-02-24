import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Introduction() {
  const aboutPoints = personalInfo.about.split('. ').filter(point => point.length > 0);
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 matrix-bg">
      {/* Enhanced Hero Section */}
      <div className="text-center mb-16 matrix-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 neon-text">
          Hello, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#003B00]">
            {personalInfo.name}
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-[#00ff41] mb-8 max-w-3xl mx-auto font-mono">
          {personalInfo.title}
        </p>
      </div>

      {/* Improved About Section */}
      <div 
        ref={elementRef}
        className={`max-w-4xl w-full mx-auto mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {aboutPoints.map((point, index) => (
            <div
              key={index}
              className="cyber-card p-6 section-transition"
              style={{
                animation: `matrixFade 0.5s ease-out ${index * 0.2}s backwards`
              }}
            >
              <div className="flex items-start space-x-4">
                <span className="text-[#00ff41] text-2xl mt-1 group-hover:animate-pulse">⚡</span>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {point}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { href: personalInfo.github, icon: Github, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
            { href: `tel:${personalInfo.phone}`, icon: Phone, label: 'Phone' }
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 mx-auto rounded-full cyber-card flex items-center justify-center">
                <Icon 
                  size={32} 
                  className="text-[#00ff41]/70 transition-all duration-300 group-hover:text-[#00ff41] group-hover:scale-110" 
                />
              </div>
              <span className="mt-4 block text-sm text-center text-gray-400 group-hover:text-[#00ff41] transition-colors duration-300 font-mono neon-text">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#00ff41]/5 mix-blend-overlay" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, transparent 20%, #00ff41 21%, transparent 22%, transparent 30%, #00ff41 31%, transparent 32%)`,
            backgroundSize: '60px 60px',
            opacity: 0.05
          }}
        />
      </div>
    </div>
  );
}