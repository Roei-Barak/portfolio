import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  tags: string[];
  features?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  tags,
  features
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition duration-300 group-hover:opacity-75" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {features && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-blue-400 hover:text-blue-300 transition mb-4"
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={20} className="mr-1" /> Hide Features
                </>
              ) : (
                <>
                  <ChevronDown size={20} className="mr-1" /> Show Features
                </>
              )}
            </button>

            {isExpanded && (
              <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2 pl-4">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm">{feature}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        <div className="flex space-x-4 pt-2 border-t border-gray-700">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition flex items-center"
          >
            <Github size={20} className="mr-1" /> View Code
          </a>
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition flex items-center"
            >
              <ExternalLink size={20} className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}