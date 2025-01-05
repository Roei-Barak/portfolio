import React from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ProjectSectionProps {
  project: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
    tags: string[];
    features?: string[];
  };
  index: number;
}

export default function ProjectSection({ project, index }: ProjectSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <section 
      ref={elementRef}
      className="min-h-screen flex items-center justify-center p-6 relative terminal-bg"
    >
      <div 
        className={`max-w-4xl w-full transform transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="bg-[#1a1f2c] rounded-lg overflow-hidden shadow-xl border border-[#00ff41]/20">
          <div className="relative group h-64">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition duration-300 group-hover:opacity-75" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/90 to-transparent" />
          </div>
          
          <div className="p-8">
            <h3 className="text-3xl font-bold text-[#00ff41] mb-4 font-mono">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-[#00ff41]/10 text-[#00ff41] text-sm rounded-full border border-[#00ff41]/30 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.features && (
              <>
                <button
                  onClick={() => setShowFeatures(!showFeatures)}
                  className="flex items-center text-[#00ff41] hover:text-white transition-colors mb-4"
                >
                  {showFeatures ? (
                    <>
                      <ChevronUp size={20} className="mr-1" /> Hide Features
                    </>
                  ) : (
                    <>
                      <ChevronDown size={20} className="mr-1" /> Show Features
                    </>
                  )}
                </button>

                {showFeatures && (
                  <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2 pl-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
            
            <div className="flex space-x-6 pt-4 border-t border-[#00ff41]/20">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00ff41] hover:text-white transition-colors flex items-center group"
              >
                <Github size={20} className="mr-2 group-hover:animate-pulse" /> 
                View Code
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00ff41] hover:text-white transition-colors flex items-center group"
                >
                  <ExternalLink size={20} className="mr-2 group-hover:animate-pulse" /> 
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}