import React, { useState } from 'react';

const RoomLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/images/background.png')" }}>
      {/* Navigation Section */}
      <section className="w-full bg-customBlue text-white text-xl">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold">
            <a href="/">Catherine's Room</a>
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
              <a href="/about" className="hover:underline block">About</a>
            </li>
            <li className="text-center md:text-left p-2 md:p-0">
              <a href="/experiences" className="hover:underline block">Experiences</a>
            </li>
            <li className="text-center md:text-left p-2 md:p-0">
              <a href="/resume" className="hover:underline block">Resume</a>
            </li>
            <li className="text-center md:text-left p-2 md:p-0">
              <a href="/projects" className="hover:underline block">Projects</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Content Section */}
<section className="flex justify-center items-end gap-x-0 mt-[10vh] w-full max-w-[90vw] mx-auto mb-[10vh]">

        {/* Desk and Portrait Container */}
        <div className="relative flex flex-col items-center">
          {/* Portrait placed above the desk */}
          <img
            src="/images/portrait.png"
            alt="Portrait"
            className="absolute top-[-120%] left-[20%] hover:cursor-pointer w-[10vw]" 
            onClick={() => window.location.href = '/about'}
          />
          
          {/* Desk */}
          <img src="/images/desk.png" alt="Desk" className="w-[40vw]" />
          
          {/* Laptop placed on top of the desk */}
          <img
            src="/images/laptop.png"
            alt="Laptop"
            className="absolute top-[-33%] left-[50%] hover:cursor-pointer w-[12vw]"
            onClick={() => window.location.href = '/projects'}
          />
        </div>

        {/* Human Character and Speech Bubble */}
        <div className="relative flex flex-col items-center">
          {/* Speech Bubble */}
          <div className="relative bg-customCream p-4 rounded-lg shadow-lg w-[20vw] md:w-[25vw] mb-5">
            <div className="font-poppins">
              <p className="text-center text-black font-semibold">
                Hi, I’m <br />
                <span className="text-xl md:text-2xl">Catherine Sutanto</span>
              </p>
              <p className="text-center text-sm">
                Welcome to my room! Click on some objects to learn more about me.
              </p>
            </div>

            {/* Speech Bubble Pointer */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-customCream"></div>
          </div>

          {/* Human Character */}
          <img src="/images/human.png" alt="Human" className="w-[15.5vw]" />
        </div>

        {/* Cabinet with Trophy and Briefcase */}
        <div className="relative">
          <img src="/images/cabinet.png" alt="Cabinet" className="w-[30vw]" />
          <img src="/images/trophy.png" alt="Trophy" className="absolute top-[10.5%] left-[35%] hover:cursor-pointer w-[9vw]" onClick={() => window.location.href = '/resume'} />
          <img src="/images/briefcase.png" alt="Briefcase" className="absolute bottom-0 left-[10%] hover:cursor-pointer w-[8vw]" onClick={() => window.location.href = '/experiences'} />
        </div>
      </section>
    </div>
  );
};

export default RoomLayout;
