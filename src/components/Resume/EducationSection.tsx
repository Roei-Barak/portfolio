import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data/experienceData';

export default function EducationSection() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <GraduationCap className="text-[#00ff41] mr-3" />
        <h3 className="text-2xl font-bold text-white font-mono">Education</h3>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ff41] via-[#00ff41]/50 to-transparent" />
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-7 top-5 w-3 h-3 bg-[#00ff41] rounded-full transform -translate-x-1/2 shadow-[0_0_8px_rgba(0,255,65,0.6)]" />
              
              <div className="bg-[#1a1f2c] p-6 rounded-lg border border-[#00ff41]/20 hover:border-[#00ff41] transition-all duration-300 group">
                <div className="absolute left-[72px] top-6 w-4 h-0.5 bg-[#00ff41]/50" />
                <h4 className="text-xl font-bold text-[#00ff41] mb-2 font-mono">{edu.degree}</h4>
                <p className="text-gray-400 mb-2 font-mono">
                  {edu.institution} • <span className="text-[#00ff41]/70">{edu.period}</span>
                </p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}