import React, { useState } from 'react';

const RoomLayout = ({ hoveredSection, setHoveredSection }) => {
  const [isGlowing, setIsGlowing] = useState(false); // State to control the glow effect on button press

  const openResume = () => {
    const resumePdfPath = 'resume.pdf';
    window.open(resumePdfPath, '_blank');
  };

  const triggerGlowEffect = () => {
    setIsGlowing(true);
    setTimeout(() => {
      setIsGlowing(false); // Glow will stop after 8 seconds
    }, 8000);
  };

  return (
    <section className="flex justify-center items-end gap-x-0 w-full max-w-[90vw] mx-auto mb-0">
      {/* Desk and Portrait Container */}
      <div className="relative flex flex-col items-center">
        <img src="/images/desk.png" alt="Desk" className="w-[50vw]" />

        {/* Portrait changes on hover */}
        <img
          src={hoveredSection === 'About' ? '/images/portrait2.png' : '/images/portrait.png'}
          alt="Portrait"
          className={`absolute top-[-60%] left-[13%] hover:cursor-pointer w-[11vw] ${
            isGlowing ? 'hover-glow-image' : ''
          }`}
          onMouseEnter={() => setHoveredSection('About')}
          onMouseLeave={() => setHoveredSection(null)}
          onClick={() => window.location.href = '/about'}
        />

        {/* Laptop changes on hover */}
        <img
          src={hoveredSection === 'Projects' ? '/images/laptop2.png' : '/images/laptop.png'}
          alt="Laptop"
          className={`absolute top-[-7.1%] left-[48%] hover:cursor-pointer w-[15vw] z-100 ${
            isGlowing ? 'hover-glow-image' : ''
          }`}
          onMouseEnter={() => setHoveredSection('Projects')}
          onMouseLeave={() => setHoveredSection(null)}
          onClick={() => window.location.href = '/projects'}
        />
      </div>

      <div className="relative flex flex-col items-center transform translate-y-12">
        <div className="relative bg-customCream p-4 rounded-lg shadow-lg w-[20vw] md:w-[25vw] mb-5 border-2 border-black">
          <p className="text-center text-black font-semibold">
            Hi, I’m <br />
            <span className="text-xl md:text-2xl">Catherine Sutanto</span>
          </p>
          <p className="text-center text-sm">
            Welcome to my room! Take a look around to learn more about me. Click {' '}
            <button
              onClick={triggerGlowEffect}
              className="font-bold underline hover:cursor-pointer"
            >
              here
            </button>{' '}
            for clues!
          </p>
          <svg className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px]" width="20" height="10">
            <polygon points="0,0 10,10 20,0" fill="black" />
          </svg>
        </div>

        <img src="/images/human.png" alt="Human" className="w-[15.5vw]" />
      </div>

      {/* Cabinet with Trophy, Phone, and Briefcase */}
      <div className="relative">
        <img src="/images/cabinet.png" alt="Cabinet" className="w-[40vw]" />

        {/* Trophy changes on hover and glows on button press */}
        <img
          src={hoveredSection === 'Resume' ? '/images/trophy2.png' : '/images/trophy.png'}
          alt="Trophy"
          className={`absolute top-[13%] left-[37%] hover:cursor-pointer w-[7vw] ${
            isGlowing ? 'hover-glow-image' : ''
          }`}
          onMouseEnter={() => setHoveredSection('Resume')}
          onMouseLeave={() => setHoveredSection(null)}
          onClick={openResume}
        />

        {/* Phone changes on hover and glows on button press */}
        <img
          src={hoveredSection === 'Contact' ? '/images/phone2.png' : '/images/phone.png'}
          alt="Phone"
          className={`absolute top-[49%] left-[58.5%] hover:cursor-pointer w-[6vw] ${
            isGlowing ? 'hover-glow-image' : ''
          }`}
          onMouseEnter={() => setHoveredSection('Contact')}
          onMouseLeave={() => setHoveredSection(null)}
          onClick={() => window.location.href = '/contact'}
        />

        {/* Briefcase changes on hover and glows on button press */}
        <img
          src={hoveredSection === 'Experiences' ? '/images/briefcase2.png' : '/images/briefcase.png'}
          alt="Briefcase"
          className={`absolute bottom-[-5%] left-[-5%] hover:cursor-pointer w-[8vw] ${
            isGlowing ? 'hover-glow-image' : ''
          }`}
          onMouseEnter={() => setHoveredSection('Experiences')}
          onMouseLeave={() => setHoveredSection(null)}
          onClick={() => window.location.href = '/experiences'}
        />
      </div>
    </section>
  );
};

export default RoomLayout;
