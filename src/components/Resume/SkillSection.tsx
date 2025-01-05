import React from 'react';
import { Terminal } from 'lucide-react';
import { skills } from '../../data/experienceData';

export default function SkillSection() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Terminal className="text-[#00ff41] mr-3" />
        <h3 className="text-2xl font-bold text-white font-mono">Skills</h3>
      </div>
      
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-lg font-semibold text-[#00ff41] mb-3 font-mono">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-[#1a1f2c] p-3 rounded-lg text-center border border-[#00ff41]/20 hover:border-[#00ff41] transition-colors duration-300"
                >
                  <span className="text-white font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}