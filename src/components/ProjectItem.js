import React from 'react';

const ProjectItem = ({ projectName, frameworks, description, bullets, visitLink, openModal }) => {
  return (
    <div className="mb-8 pl-4 border-l-2 border-customBlue">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mt-1">{projectName}</h3> 
      </div>
      <div className="flex space-x-2 mb-2">
        {frameworks.map((framework, index) => (
          <span key={index} className="px-2 py-1 border-2 border-gray-800 rounded-full text-sm">
            {framework}
          </span>
        ))}
      </div>
      <p className="mt-2">{description}</p>
      <button
        onClick={() => openModal(projectName, frameworks, description, bullets, visitLink)} 
        className="text-black px-2 py-1 bg-customBlue rounded-full hover:underline mt-2 inline-block"
      >
        More details &rarr;
      </button>
    </div>
  );
};

export default ProjectItem;
