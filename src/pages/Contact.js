import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { GitHub, LinkedIn, Email } from '@mui/icons-material'; 

const Contacts = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="min-h-screen bg-customCream pb-10">
      <NavigationBar 
        hoveredSection={hoveredSection} 
        setHoveredSection={setHoveredSection}
      />
      
      <div className="container mx-auto px-6 lg:px-20 pt-24 lg:pt-28 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Phone Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="/images/phone2.png"
            alt="Phone Icon"
            className="w-full max-w-[250px] lg:max-w-none"
          />
        </div>

        {/* Contact Links and Form */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg mb-8">
            Feel free to connect with me via the platforms below.
          </p>

          {/* Contact Icons in a row */}
          <div className="flex space-x-8 mb-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/catherinencs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-bold text-customBlue hover:underline"
            >
              <LinkedIn style={{ fontSize: 40, color: '#0077b5' }} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/catherinencs"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-bold text-customBlue hover:underline"
            >
              <GitHub style={{ fontSize: 40, color: 'black' }} />
            </a>

            {/* Email */}
            <a
              href="mailto:sutanto.c@northeastern.edu"
              className="text-xl font-bold text-customBlue hover:underline"
            >
              <Email style={{ fontSize: 40, color: '#D44638' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
