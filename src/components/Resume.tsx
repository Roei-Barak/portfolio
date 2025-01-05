import React from 'react';
import ExperienceSection from './Resume/ExperienceSection';
import EducationSection from './Resume/EducationSection';
import SkillSection from './Resume/SkillSection';

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10 bg-[#1a1f2c]/80 p-8 rounded-lg backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-[#00ff41] mb-12 text-center font-mono">
          Resume
        </h2>
        <div className="space-y-16">
          <ExperienceSection />
          <EducationSection />
          <SkillSection />
        </div>
      </div>
    </section>
  );
}