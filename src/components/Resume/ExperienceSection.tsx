import React from 'react';
import { Briefcase } from 'lucide-react';
import { workExperience } from '../../data/experienceData';

export default function ExperienceSection() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Briefcase className="text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold text-white">Work Experience</h3>
      </div>
      
      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-white mb-2">{job.title}</h4>
            <p className="text-blue-400 mb-2">{job.company} • {job.period}</p>
            <p className="text-gray-300">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}