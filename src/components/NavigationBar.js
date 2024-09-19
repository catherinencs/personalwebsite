import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-customBlue text-black text-xl fixed top-0 left-0 z-50"> 
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
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
        <ul className={`flex flex-col md:flex-row md:space-x-8 absolute md:static bg-blue-500 md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li className="text-center md:text-left p-2 md:p-0">
            <Link to="/about" className="hover:underline block">About</Link>
          </li>
          <li className="text-center md:text-left p-2 md:p-0">
            <Link to="/experiences" className="hover:underline block">Experiences</Link>
          </li>
          <li className="text-center md:text-left p-2 md:p-0">
            <Link to="/resume" className="hover:underline block">Resume</Link>
          </li>
          <li className="text-center md:text-left p-2 md:p-0">
            <Link to="/projects" className="hover:underline block">Projects</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavigationBar;
