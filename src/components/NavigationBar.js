import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ hoveredSection, setHoveredSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resumePdfPath = 'CatherineSutantoResume.pdf';

  // Function to open the resume PDF in a new tab
  const openResume = () => {
    window.open(resumePdfPath, '_blank');
  };

  const handleMouseEnter = (section) => {
    if (setHoveredSection) {
      setHoveredSection(section);
    }
  };

  const handleMouseLeave = () => {
    if (setHoveredSection) {
      setHoveredSection(null);
    }
  };

  return (
    <section className="w-full bg-customBlue text-black text-base fixed top-0 left-0 z-50"> 
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-semibold"> 
          <Link to="/">Catherine's Room</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className={`flex flex-col md:flex-row md:space-x-8 items-center absolute md:static bg-customBlue md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li
            className={`text-center md:text-left p-2 md:p-0 ${hoveredSection === 'About' ? 'underline' : ''}`}
            onMouseEnter={() => handleMouseEnter('About')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/about" className="hover:underline block">About</Link>
          </li>
          <li
            className={`text-center md:text-left p-2 md:p-0 ${hoveredSection === 'Experiences' ? 'underline' : ''}`}
            onMouseEnter={() => handleMouseEnter('Experiences')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/experiences" className="hover:underline block">Experiences</Link>
          </li>
          <li
            className={`text-center md:text-left p-2 md:p-0 ${hoveredSection === 'Projects' ? 'underline' : ''}`}
            onMouseEnter={() => handleMouseEnter('Projects')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/projects" className="hover:underline block">Projects</Link>
          </li>
          <li
            className={`text-center md:text-left p-2 md:p-0 ${hoveredSection === 'Contact' ? 'underline' : ''}`}
            onMouseEnter={() => handleMouseEnter('Contact')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/contact" className="hover:underline block">Contact</Link>
          </li>
          <li
            className={`text-center md:text-left p-2 md:p-0 ${hoveredSection === 'Resume' ? 'underline' : ''}`}
            onMouseEnter={() => handleMouseEnter('Resume')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={openResume} 
              className="transition-colors duration-300 bg-customCream py-1 px-4 rounded-lg block"
              style={{ height: '100%', textDecoration: 'none' }}
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavigationBar;
