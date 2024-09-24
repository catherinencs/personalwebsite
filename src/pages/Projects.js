import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Modal from '../components/ProjectModal';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    projectName: '',
    frameworks: [],
    description: '',
    bullets: [],
    visitLink: '',
    images: [] 
  });

  const openModal = (projectName, frameworks, bullets, visitLink, images) => {
    setModalContent({ projectName, frameworks, bullets, visitLink, images });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const projects = [
    {
      projectName: 'CatherDines',
      frameworks: ['React.js', 'Node.js', 'AWS S3', 'MongoDB', 'spaCy'],
      description: 'A dynamic single-page food review platform with advanced features like semantic search and contextual filtering.',
      bullets: [
        'Engineered a dynamic single-page food review platform featuring an intuitive UI and interactive design.',
        'Implemented advanced semantic search and contextual filtering using spaCy for a smarter user experience.',
        'Created a password-protected admin dashboard to enable personal adding and editing of reviews.'
      ],
      visitLink: 'https://catherinencs.github.io/catherdines',
      images: [
        '/images/projects/catherdines-1.png',
        '/images/projects/catherdines-2.png',
        '/images/projects/catherdines-3.png',
        '/images/projects/catherdines-4.png'
      ],
    },
    {
      projectName: 'YumYard',
      frameworks: ['Firebase', 'Yelp API', 'Google Maps API'],
      description: 'An Android app for discovering restaurants, complete with review systems, real-time notifications, and a leaderboard for top reviewers.',
      bullets: [
        'Developed an Android app for discovering restaurants, integrating Yelp API for data, advanced filtering, and real-time Google Maps navigation.',
        'Built a Firebase-powered review system with authentication, notifications, a favorites list, and a leaderboard for top reviewers.',
        'Enabled real-time review submissions and ratings updates, with filtering by price and cuisine.',
        'Added a map for detailed restaurant locations with real-time directions.',
        'Designed a settings page for profile updates and theme toggles, including dark mode.'
      ],
      visitLink: 'https://github.com/catherinencs/yumyard',
      images: [
        '/images/projects/yumyard-1.png',
        '/images/projects/yumyard-2.png',
        '/images/projects/yumyard-3.png',
        '/images/projects/yumyard-4.png',
        '/images/projects/yumyard-5.png',
        '/images/projects/yumyard-6.png',
        '/images/projects/yumyard-7.png',
        '/images/projects/yumyard-8.png',
        '/images/projects/yumyard-9.png',
        '/images/projects/yumyard-10.png',
        '/images/projects/yumyard-11.png',
      ],
    },
    {
      projectName: 'PinMyPlace',
      frameworks: ['Vue.js', 'Node.js', 'Google Maps API', 'Slack API'],
      description: 'A web app for sharing locations via Slack, integrating Google Maps for real-time coordinates and Slack for communication.',
      bullets: [
        'Created a web app for sharing locations via Slack, leveraging Google Maps API for precise coordinates.',
        'Designed an interactive map and dynamic UI using Bulma CSS for a seamless user experience.',
        'Built a robust backend with Node.js for efficient data storage and management.'
      ],
      visitLink: 'https://github.com/catherinencs/pinmyplace',
      images: [
        '/images/projects/pinmyplace-1.png',
        '/images/projects/pinmyplace-2.png',
        '/images/projects/pinmyplace-3.png',
      ],
    },
    {
      projectName: 'Artifind',
      frameworks: ['Python', 'FastAPI', 'React.js', 'OpenAI', 'Google RSS'],
      description: 'A personalized news search platform that leverages AI for sentiment analysis and content summarization, designed for Northeastern London Campus students.',
      bullets: [
        'Developed a FastAPI platform offering personalized news search and detailed analytics via Google RSS.',
        'Integrated OpenAI for sentiment analysis and summarization of content for improved user experience.',
        'Led a 9-person scrum team, coordinating tasks through Jira and delivering milestones to university stakeholders.'
      ],
      visitLink: 'https://github.com/catherinencs/artifind',
      images: [
        '/images/projects/artifind-1.png',
        '/images/projects/artifind-2.png',
        '/images/projects/artifind-3.png',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-customCream pb-10">
      <NavigationBar hoveredSection={hoveredSection} setHoveredSection={setHoveredSection} />
      <div className="container mx-auto px-6 lg:px-20 pt-24 lg:pt-28 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        <div className="w-full lg:w-1/3 flex justify-center">
          <img src="/images/laptop2.png" alt="Projects" className="w-full max-w-[250px] lg:max-w-none" />
        </div>

        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>

          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              projectName={project.projectName}
              frameworks={project.frameworks}
              description={project.description}
              bullets={project.bullets}
              visitLink={project.visitLink}
              openModal={() => openModal(
                project.projectName,
                project.frameworks,
                project.bullets,
                project.visitLink,
                project.images 
              )}
            />
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        projectName={modalContent.projectName} 
        frameworks={modalContent.frameworks} 
        bullets={modalContent.bullets} 
        visitLink={modalContent.visitLink}
        images={modalContent.images} 
      />
    </div>
  );
};

export default Projects;
