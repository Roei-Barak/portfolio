import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data/experienceData';

export default function EducationSection() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <GraduationCap className="text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold text-white">Education</h3>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
            <p className="text-blue-400 mb-2">{edu.institution} • {edu.period}</p>
            <p className="text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}