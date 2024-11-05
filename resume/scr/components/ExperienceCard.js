import React from 'react';

const ExperienceCard = ({ title, company, period, responsibilities }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-600 mb-4">{company} | {period}</p>
    <ul className="list-disc pl-5 space-y-2">
      {responsibilities.map((task, index) => <li key={index}>{task}</li>)}
    </ul>
  </div>
);

export default ExperienceCard;
