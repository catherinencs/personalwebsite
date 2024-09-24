import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Modal from '../components/ExperienceModal';
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
  date: 'Jan 2024 - July 2024',
  role: 'Full-Stack Software Development Co-op',
  description: 'Worked on enhancing customer experience through dashboard improvements and led the development of TankFax, a data platform for FMCSA to track hazardous material cargo tanks.',
  bullets: [
    'Enhanced customer and admin dashboards with Vue.js and TypeScript, improving performance and UX by fixing bugs and adding new features.',
    'Developed a dynamic regulations tab using PostGIS and Python, automating regulatory data collection and reducing manual input by over 50%.',
    'Built a scalable framework to automate branding and dashboard configurations, reducing client onboarding time by 35%.',
    'Led the MVP development of a data platform for hazardous material cargo tanks, handling requirements, user flow, and UI design, using Nuxt.js, MongoDB, Docker, and AWS S3.',
  ],
},

{
  company: 'Doyobi',
  date: 'May 2023 – Aug 2023',
  role: 'Web Development Intern',
  description: 'Focused on enhancing the educational platform through interactive learning modules and improved student engagement features.',
  bullets: [
    'Developed interactive learning modules using React.js, Tailwind CSS, and Canvas API, allowing students to explore real-time science simulations.',
    'Built a personalized quiz system with Node.js and MongoDB, incorporating gamification to enhance student progress tracking.',
    'Created a teacher dashboard with real-time performance data using Chart.js, supporting over 100 users.',
    'Optimized the platform’s scalability and accessibility for all devices, integrating AWS Lambda and ARIA attributes for a smoother user experience.',
    'Designed responsive marketing components in Figma and implemented them with React.js, driving a 20% increase in user signups.',
  ],
},

{
  company: 'Northeastern University',
  date: 'Sept 2023 – Dec 2023',
  role: 'DRC Notetaker',
  description: 'Provided detailed lecture notes for students with disabilities in two courses: "Computer Systems" and "Tech and Human Values."',
  bullets: [
    'Produced clear, organized notes for Computer Systems, ensuring complex technical concepts were accessible to all students.',
    'Captured key discussions and ethical debates in Tech and Human Values, supporting students in understanding critical topics.',
    'Collaborated with the Disability Resource Center to ensure notes met accessibility standards and specific student needs.',
    'Delivered notes promptly after each class to support students in staying on track with course material and preparing for exams.',
  ],
},

{
  company: 'Doyobi',
  date: 'Oct 2021 – Sept 2022',
  role: 'Marketing Intern',
  description: 'Contributed to Doyobi’s marketing efforts by designing visuals, editing videos, and driving engagement through data-driven strategies.',
  bullets: [
    'Designed engaging graphics for Instagram, Twitter, and Facebook, boosting brand visibility.',
    'Led market research initiatives that informed targeted campaigns, driving higher student registrations.',
    'Produced and edited high-quality videos that amplified marketing campaigns and drove engagement.',
    'Utilized data insights to refine strategies, increasing audience reach and interaction.',
  ],
},

{
  company: 'Kumon',
  date: 'Sept 2019 – May 2021',
  role: 'Marketing Intern and Math Tutor',
  description: 'Drove student enrollment through targeted marketing while providing personalized math tutoring.',
  bullets: [
    'Launched marketing campaigns that led to a 40% growth in program inquiries.',
    'Tutored 9 students in math, improving their problem-solving skills and progress.',
    'Communicated weekly with parents to update on student performance and offer guidance.',
    'Created social media content that boosted local awareness of Kumon’s programs.',
    'Organized workshops that showcased Kumon’s benefits, driving post-event enrollment.',
  ],
}





  ];

  const extracurricularExperiences = [
    {
  company: 'Girls Learn Code Jakarta',
  date: 'Dec 2019 – Present',
  role: 'President',
  description: 'Led a volunteer-driven organization focused on providing coding resources and fostering digital literacy for young girls in Jakarta.',
  bullets: [
    'Managed a team of 21 volunteers, organizing workshops, tutoring groups, and networking events for over 300 active members.',
    'Established partnerships and earned recognition from influential organizations like HP Inc. and Ashoka, expanding the program’s reach.',
    'Secured funding and partnerships to launch a digital literacy campaign, collaborating with Saturday Kids and Google to run a two-week summer bootcamp for underprivileged children.',
  ],
},
{
  company: 'ISANU',
  date: 'Sept 2022 – Present',
  role: 'Treasurer',
  description: 'Oversaw financial management and budgeting for ISANU (Indonesian Student Association at Northeastern), ensuring successful cultural and social events for the Indonesian student community.',
  bullets: [
    'Managed a $4,000 annual budget, ensuring the financial health of ISANU while funding multiple cultural and community events.',
    'Streamlined financial tracking systems, improving transparency and reducing expense discrepancies.',
    'Coordinated fundraising initiatives, securing sponsorships from local businesses and alumni, increasing event funding by 30%.',
    'Worked closely with event coordinators to allocate funds for high-impact events, enhancing the cultural presence of ISANU on campus.',
  ],
},

{
  company: 'Artistry Magazine',
  date: 'Jan 2024 – Present',
  role: 'Web Designer',
  description: 'Designed and maintained the Artistry Magazine website, enhancing its visual appeal and functionality to showcase student art and writing.',
  bullets: [
    'Redesigned the Artistry Magazine website, creating a visually striking and easy-to-navigate platform for student work.',
    'Implemented responsive design features, ensuring a seamless user experience across all devices.',
    'Collaborated with content creators to align the website’s design with the artistic vision of the magazine, boosting web traffic by 25%.',
    'Introduced new interactive elements, such as digital galleries and comment sections, to increase user engagement and feedback on student submissions.',
  ],
},

{
  company: 'PERMIAS Massachusetts',
  date: 'June 2023 – July 2024',
  role: 'Fundraising Officer',
  description: 'Led fundraising efforts to support cultural events and community initiatives for Indonesian students in Massachusetts.',
  bullets: [
    'Raised over $35,000 through sponsorships and fundraising events, significantly exceeding annual goals and expanding the organization’s event capacity.',
    'Secured sponsorships from local businesses and corporations, creating long-term partnerships that provided sustained financial support.',
    'Organized large-scale fundraising events, including cultural festivals and charity drives, attracting hundreds of participants and raising awareness for Indonesian culture.',
    'Collaborated with the executive team to allocate funds strategically, ensuring the success of key events and initiatives throughout the academic year.',
  ],
}




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
