import React from 'react';

const ProjectCard = ({ title, period, description, skills }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{period}</p>
    <p className="mb-4">{description}</p>
    <div className="text-sm text-gray-600"><strong>Skills:</strong> {skills}</div>
  </div>
);

export default ProjectCard;
