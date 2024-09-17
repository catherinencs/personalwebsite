import React from 'react';

const RoomLayout = () => {
    return (
        <div
            className="relative h-screen w-screen bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background.png')" }}
        >
            {/* Navigation Bar */}
            <nav className="absolute top-5 left-1/2 transform -translate-x-1/2 text-xl">
                <ul className="flex space-x-8">
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/experiences" className="hover:underline">Experiences</a></li>
                    <li><a href="/resume" className="hover:underline">Resume</a></li>
                    <li><a href="/projects" className="hover:underline">Projects</a></li>
                </ul>
            </nav>

            {/* Desk with Laptop and Portrait */}
            <div className="absolute bottom-24 left-1/4 transform -translate-x-1/2">
                <div className="relative">
                    {/* Desk */}
                    <img
                        src="/images/desk.png"
                        alt="Desk"
                        style={{ width: "38vw" }}
                    />

                    {/* Laptop placed on top of the desk */}
                    <img
                        src="/images/laptop.png"
                        alt="Laptop"
                        className="absolute top-[-36%] left-[50%] hover:cursor-pointer"
                        style={{ width: "12vw" }}
                        onClick={() => window.location.href = '/projects'}
                    />

                    {/* Portrait placed above the desk */}
                    <img
                        src="/images/portrait.png"
                        alt="Portrait"
                        className="absolute -top-[120%] left-[20%] hover:cursor-pointer"
                        style={{ width: "10vw" }}
                        onClick={() => window.location.href = '/about'}
                    />
                </div>
            </div>

            {/* Cabinet with Trophy and Briefcase */}
            <div className="absolute bottom-24 right-20">
                <div className="relative"> 
                    <img
                        src="/images/cabinet.png"
                        alt="Cabinet"
                        style={{ width: "30vw" }} 
                    />

                    {/* Trophy placed relative to the cabinet */}
                    <img
                        src="/images/trophy.png"
                        alt="Trophy"
                        className="absolute top-[10.5%] left-[35%] hover:cursor-pointer" // Positioning relative to the top shelf
                        style={{ width: "9vw" }}
                        onClick={() => window.location.href = '/resume'}
                    />

                    {/* Briefcase placed relative to the cabinet */}
                    <img
                        src="/images/briefcase.png"
                        alt="Briefcase"
                        className="absolute bottom-0 left-[10%] w-16 hover:cursor-pointer"
                        style={{ width: "8vw" }}
                        onClick={() => window.location.href = '/experiences'}
                    />
                </div>
            </div>

            {/* Human Character and Speech Bubble */}
            <div className="absolute bottom-20 left-[55%] transform -translate-x-1/2 flex flex-col items-center">
                {/* Speech Bubble */}
                <div className="relative bg-customCream p-4 rounded-lg shadow-lg w-[20vw] md:w-[25vw] mb-5 mr-8">
                    <div className="font-poppins">
                        <p className="text-center text-black font-semibold">
                            Hi, I’m <br />
                            <span className="text-xl md:text-2xl">Catherine Sutanto</span>
                        </p>
                        <p className="text-center text-sm">
                            Welcome to my room! <br />
                            Click on some objects to learn more about me.
                        </p>
                    </div>


                    {/* Speech Bubble Pointer */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-customCream"></div>
                </div>

                {/* Human Character */}
                <img
                    src="/images/human.png"
                    alt="Human"
                    style={{ width: "15.5vw" }}
                />
            </div>
        </div>
    );
};

export default RoomLayout;