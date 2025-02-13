import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Introduction() {
  const aboutPoints = personalInfo.about.split('. ').filter(point => point.length > 0);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center sticky top-0">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 glitch-text">
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#003B00]">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#00ff41] mb-8 max-w-2xl mx-auto font-mono">
            {personalInfo.title}
          </p>
        </div>
      </section>

      {/* About Points with Parallax */}
      {aboutPoints.map((point, index) => {
        const { elementRef, isVisible } = useScrollAnimation();
        return (
          <section 
            key={index}
            ref={elementRef}
            className="min-h-screen flex items-center justify-center sticky top-0"
            style={{
              zIndex: index + 1,
              backgroundColor: `rgba(10, 15, 24, ${0.95 - index * 0.1})`
            }}
          >
            <div className={`max-w-2xl mx-auto p-8 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              <div className="bg-[#1a1f2c]/50 p-8 rounded-lg border border-[#00ff41]/20 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <span className="text-[#00ff41] text-2xl mt-1">⚡</span>
                  <p className="text-gray-300 text-xl">{point}.</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center sticky top-0 bg-[#0a0f18]">
        <div className="text-center px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
                className="group transform transition-transform duration-300 hover:scale-105"
              >
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-[#00ff41] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00ff41]/10">
                  <Icon 
                    size={36} 
                    className="text-[#00ff41] transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                <span className="mt-4 block text-lg text-gray-400 group-hover:text-[#00ff41] transition-colors duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}