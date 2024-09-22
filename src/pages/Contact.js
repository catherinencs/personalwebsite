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
            Feel free to connect with me via the platforms below or fill out the contact form.
          </p>

          <div className="space-y-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/catherine-sutanto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xl font-bold text-customBlue hover:underline"
            >
              <LinkedIn style={{ fontSize: 40, color: '#0077b5' }} /> {/* LinkedIn Icon */}
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/catherinencs"
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xl font-bold text-customBlue hover:underline"
            >
              <GitHub style={{ fontSize: 40, color: 'black' }} /> {/* GitHub Icon */}
            </a>

            {/* Email */}
            <a
              href="mailto:catherine@example.com"
              className="block text-xl font-bold text-customBlue hover:underline"
            >
              <Email style={{ fontSize: 40, color: '#D44638' }} /> {/* Email Icon */}
            </a>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-black">
              <h2 className="text-xl font-bold mb-4">Contact Form</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-customBlue text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
