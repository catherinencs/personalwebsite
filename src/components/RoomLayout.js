import React from 'react';

const RoomLayout = () => {
  return (
    <section className="flex justify-center items-end gap-x-0 w-full max-w-[90vw] mx-auto mb-0">

      {/* Desk and Portrait Container */}
      <div className="relative flex flex-col items-center">

        {/* Desk */}
        <img
          src="/images/desk.png"
          alt="Desk"
          className="w-[50vw] relative z-20" 
        />

        {/* Portrait placed above the desk */}
        <img
          src="/images/portrait.png"
          alt="Portrait"
          className="absolute top-[-60%] left-[20%] hover:cursor-pointer w-[11vw]"
          onClick={() => window.location.href = '/about'}
        />
        
        {/* Laptop placed on top of the desk, but behind it */}
        <img
          src="/images/laptop.png"
          alt="Laptop"
          className="absolute top-[-11%] left-[48%] hover:cursor-pointer w-[15vw] z-10" 
          onClick={() => window.location.href = '/projects'}
        />
      </div>

      {/* Human and Speech Bubble Container */}
      <div className="relative flex flex-col items-center transform translate-y-12">

        {/* Speech bubble */}
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

        {/* Human */}
        <img src="/images/human.png" alt="Human" className="w-[15.5vw]" />
      </div>

      {/* Cabinet with Trophy, Phone and Briefcase Container */}
      <div className="relative">
        <img src="/images/cabinet.png" alt="Cabinet" className="w-[40vw]" />
        <img src="/images/trophy.png" alt="Trophy" className="absolute top-[14%] left-[37%] hover:cursor-pointer w-[7vw]" onClick={() => window.location.href = '/resume'} />
        <img src="/images/phone.png" alt="Phone" className="absolute top-[43%] left-[55%] hover:cursor-pointer w-[7vw]" onClick={() => window.location.href = '/contact'} />
        <img src="/images/briefcase.png" alt="Briefcase" className="absolute bottom-[-5%] left-[-5%] hover:cursor-pointer w-[8vw]" onClick={() => window.location.href = '/experiences'} />
      </div>
    </section>
  );
};

export default RoomLayout;
