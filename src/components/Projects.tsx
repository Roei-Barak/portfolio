import React from 'react';
import { Code } from 'lucide-react';
import { projects } from '../data/projectsData';
import ProjectSection from './Projects/ProjectSection';

export default function Projects() {
  return (
    <div id="projects" className="bg-transparent space-y-screen relative">
      <div className="relative z-10">
        <div className="flex items-center justify-center py-12">
          <Code size={32} className="text-[#00ff41] mr-3" />
          <h2 className="text-4xl font-bold text-white text-center font-mono">
            Featured Projects
          </h2>
        </div>
        
        {projects.map((project, index) => (
          <div key={index} className="min-h-screen">
            <ProjectSection 
              project={project}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}