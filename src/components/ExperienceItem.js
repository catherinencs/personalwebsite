import React from 'react';

const ExperienceItem = ({ company, date, role, description, bullets, openModal }) => {
  return (
    <div className="mb-8 pl-4 border-l-2 border-customBlue">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mt-1">{company}</h3> 
        <p className="text-gray-600">{date}</p>
      </div>
      <h2 className="text-xl font-bold">{role}</h2>
      <p className="mt-2">{description}</p>
      <button
        onClick={() => openModal(role, company, date, bullets)} 
        className="text-black px-2 py-1 bg-customBlue rounded-full hover:underline mt-2 inline-block"
      >
        More details &rarr;
      </button>
    </div>
  );
};

export default ExperienceItem;
