import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Introduction() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center px-6">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 glitch-text">
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#003B00]">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#00ff41] mb-8 max-w-2xl mx-auto font-mono">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {personalInfo.about}
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-16">
          {[
            { href: personalInfo.github, icon: Github, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: personalInfo.email },
            { href: `tel:${personalInfo.phone}`, icon: Phone, label: personalInfo.phone }
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ff41] hover:text-white transition-colors duration-300 flex items-center group"
            >
              <Icon size={24} className="mr-2 group-hover:animate-pulse" />
              <span className="hidden md:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}