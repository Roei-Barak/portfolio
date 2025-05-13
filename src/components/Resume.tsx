import React from 'react';
import ExperienceSection from './Resume/ExperienceSection';
import EducationSection from './Resume/EducationSection';
import SkillSection from './Resume/SkillSection';

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-[#1a1f2c]/80 p-8 rounded-lg backdrop-blur-sm border border-[#00ff41]/20">
          <h2 className="text-4xl font-bold text-[#00ff41] mb-12 text-center font-mono">
            Resume
          </h2>
          <div className="space-y-16">
            <ExperienceSection />
            <EducationSection />
            <SkillSection />
          </div>
        </div>
        
        {/* Circuit Background Effect */}
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
    </section>
  );
}