import React from 'react';
import { Terminal } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { skills } from '../../data/experienceData';

const hexagonStyle = {
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
};

export default function SkillSection() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Terminal className="text-[#00ff41] mr-3" />
        <h3 className="text-2xl font-bold text-white font-mono">Skills</h3>
      </div>
      
      <div className="relative py-12">
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <div 
            key={category}
            className="mb-24 last:mb-0"
          >
            {/* Category Title */}
            <h4 className="text-lg font-semibold text-[#00ff41] mb-12 font-mono text-center relative">
              <span className="relative inline-block">
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent" />
              </span>
            </h4>

            {/* Hexagonal Skills Layout */}
            <div className="flex flex-wrap justify-center gap-6 relative">
              {items.map((skill, index) => {
                // Get the icon component
                const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons];
                
                // Calculate position offset for hexagonal layout
                const row = Math.floor(index / 3);
                const offsetX = row % 2 ? '3rem' : '0';
                
                return (
                  <div 
                    key={index}
                    className="group"
                    style={{ marginLeft: offsetX }}
                  >
                    {/* Hexagonal Shape */}
                    <div className="relative w-32 h-36">
                      {/* Main Hexagon */}
                      <div className="absolute inset-0 transform hover:scale-105 transition-transform duration-300">
                        <div 
                          className="absolute inset-0 bg-[#1a1f2c] border border-[#00ff41]/20 group-hover:border-[#00ff41] transition-colors duration-300"
                          style={hexagonStyle}
                        />
                        
                        {/* Inner Glow Effect */}
                        <div 
                          className="absolute inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={hexagonStyle}
                        >
                          <div className="absolute inset-0 bg-gradient-to-b from-[#00ff41]/10 to-transparent" />
                        </div>
                        
                        {/* Skill Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                          {IconComponent && (
                            <IconComponent 
                              className="w-6 h-6 mb-2 text-[#00ff41]/70 group-hover:text-[#00ff41] transition-colors duration-300"
                            />
                          )}
                          <span className="text-white font-mono text-center text-sm relative z-10 group-hover:text-[#00ff41] transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>

                        {/* Connection Points */}
                        <div className="absolute top-0 left-1/2 w-1 h-1 bg-[#00ff41] rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#00ff41] rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Circuit Background Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
    </div>
  );
}