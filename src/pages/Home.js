import React, { useState } from 'react';
import RoomLayout from '../components/RoomLayout';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
  const [hoveredSection, setHoveredSection] = useState(null); // State to track hover

  return (
    <div className="min-h-screen flex flex-col bg-no-repeat bg-cover bg-center"
         style={{ backgroundImage: "url('/images/background.png')" }}>
      <NavigationBar hoveredSection={hoveredSection} setHoveredSection={setHoveredSection} />
      <div className="flex-grow pt-20">
        <RoomLayout hoveredSection={hoveredSection} setHoveredSection={setHoveredSection} />
      </div>
    </div>
  );
};

export default Home;
