import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Modal from '../components/Modal';
import ExperienceItem from '../components/ExperienceItem';

const Experience = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [activeTab, setActiveTab] = useState('Professional');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ role: '', company: '', date: '', bullets: [] });

  const openModal = (role, company, date, bullets) => {
    setModalContent({ role, company, date, bullets });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const professionalExperiences = [
    {
      company: 'Spill Center', 
      date: 'January 2024 - July 2024',
      role: 'Software Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      bullets: [
        'Implemented a redesign of the company homepage',
        'Developed new features related to user identity verification',
        'Worked with React Native mobile app for push notifications',
      ],
    },
    {
      company: 'Spill Center', 
      date: 'January 2024 - July 2024',
      role: 'Software Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      bullets: [
        'Implemented a redesign of the company homepage',
        'Developed new features related to user identity verification',
        'Worked with React Native mobile app for push notifications',
      ],
    },
  ];

  const extracurricularExperiences = [
    {
      company: 'ISANU (Indonesian Student Association)',
      date: 'September 2023 - Present',
      role: 'Treasurer',
      description: 'Managed finances and organized fundraising events.',
      bullets: [
        'Managed organization budget and financials',
        'Organized multiple fundraising events',
        'Collaborated with event coordinators for cultural events',
      ],
    },
  ];

  const renderContent = () => {
    const experiences = activeTab === 'Professional' ? professionalExperiences : extracurricularExperiences;

    return (
      <div>
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            role={experience.role}
            company={experience.company} 
            date={experience.date}
            description={experience.description}
            bullets={experience.bullets}
            openModal={openModal}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-customCream pb-10">
      <NavigationBar hoveredSection={hoveredSection} setHoveredSection={setHoveredSection} />
      <div className="container mx-auto px-6 lg:px-20 pt-24 lg:pt-28 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        <div className="w-full lg:w-1/3 flex justify-center">
          <img src="/images/briefcase2.png" alt="Briefcase" className="w-full max-w-[250px] lg:max-w-none" />
        </div>

        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-8">Experiences</h1>

          <div className="border-b border-gray-300 mb-6">
            <ul className="flex space-x-8">
              <li
                className={`pb-2 cursor-pointer ${activeTab === 'Professional' ? 'border-b-2 border-black font-bold' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Professional')}
              >
                Professional
              </li>
              <li
                className={`pb-2 cursor-pointer ${activeTab === 'Extracurricular' ? 'border-b-2 border-black font-bold' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Extracurricular')}
              >
                Extracurricular
              </li>
            </ul>
          </div>

          {renderContent()}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        role={modalContent.role} 
        company={modalContent.company} 
        date={modalContent.date} 
        bullets={modalContent.bullets} 
      />
    </div>
  );
};

export default Experience;
