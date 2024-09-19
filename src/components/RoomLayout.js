import React from 'react';

const RoomLayout = () => {
  return (
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
        <img src="/images/desk.png" alt="Desk" className="w-[50vw]" />
        
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
        {/* Speech Bubble with SVG Pointer */}
        <div className="relative bg-customCream p-4 rounded-lg shadow-lg w-[20vw] md:w-[25vw] mb-5 border-2 border-black">
          <div>
            <p className="text-center text-black font-semibold">
              Hi, I’m <br />
              <span className="text-xl md:text-2xl">Catherine Sutanto</span>
            </p>
            <p className="text-center text-sm">
              Welcome to my room! Click on some objects to learn more about me.
            </p>
          </div>
          <svg className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px]" width="20" height="10">
            <polygon points="0,0 10,10 20,0" fill="black" />
          </svg>
        </div>

        {/* Human Character */}
        <img src="/images/human.png" alt="Human" className="w-[15.5vw]" />
      </div>

      {/* Cabinet with Trophy and Briefcase */}
      <div className="relative">
        <img src="/images/cabinet.png" alt="Cabinet" className="w-[40vw]" />
        <img src="/images/trophy.png" alt="Trophy" className="absolute top-[10.5%] left-[35%] hover:cursor-pointer w-[9vw]" onClick={() => window.location.href = '/resume'} />
        <img src="/images/briefcase.png" alt="Briefcase" className="absolute bottom-0 left-[10%] hover:cursor-pointer w-[8vw]" onClick={() => window.location.href = '/experiences'} />
      </div>
    </section>
  );
};

export default RoomLayout;
