import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Clock, Baby, GraduationCap, Briefcase, Code, Shield } from 'lucide-react';

const timelineEvents = [
  {
    year: 1997,
    title: "Born in Israel",
    description: "The journey begins",
    icon: Baby
  },
  {
    year: 2015,
    title: "High School Graduation",
    description: "Started exploring technology and computers",
    icon: GraduationCap
  },
  {
    year: 2019,
    title: "Started IT Career",
    description: "IT Help-Desk at Ophir Optronics",
    icon: Briefcase
  },
  {
    year: 2020,
    title: "Career Growth",
    description: "IT Technical Support at Kramer Electronics",
    icon: Code
  },
  {
    year: 2022,
    title: "Debug Engineer",
    description: "Joined Intel as Debug Engineer",
    icon: Shield
  },
  {
    year: 2024,
    title: "Present Day",
    description: "Computer Science Student & Cybersecurity Specialist",
    icon: Clock
  }
];

export default function Timeline() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div 
        ref={elementRef}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <h2 className="text-3xl font-bold text-[#00ff41] mb-12 text-center font-mono">
          Timeline_
        </h2>

        <div className="relative">
          {/* Horizontal timeline line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent" />

          <div className="flex justify-between relative">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className="relative px-2 flex-1"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.2}s backwards`
                  }}
                >
                  {/* Timeline node and icon */}
                  <div className="absolute left-1/2 top-24 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-[#1a1f2c] rounded-full border-2 border-[#00ff41] flex items-center justify-center shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                      <Icon className="text-[#00ff41] w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div 
                    className={`mt-32 transform transition-all duration-300 hover:scale-105 ${
                      isEven ? 'translate-y-0' : '-translate-y-16'
                    }`}
                  >
                    <div className="bg-[#1a1f2c] p-4 rounded-lg border border-[#00ff41]/20 hover:border-[#00ff41] transition-all duration-300">
                      <div className="text-center mb-2">
                        <span className="text-[#00ff41]/70 font-mono text-sm">{event.year}</span>
                        <h3 className="text-lg font-bold text-[#00ff41] truncate">{event.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm text-center">{event.description}</p>

                      {/* Connecting line */}
                      <div className="absolute left-1/2 top-12 w-0.5 h-12 bg-gradient-to-b from-[#00ff41]/50 to-transparent transform -translate-x-1/2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Matrix-style background effect */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[#00ff41]/5 mix-blend-overlay" />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, transparent 20%, #00ff41 21%, transparent 22%)`,
              backgroundSize: '60px 60px',
              opacity: 0.05
            }}
          />
        </div>
      </div>
    </section>
  );
}