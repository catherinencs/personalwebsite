import React from 'react';
import RoomLayout from '../components/RoomLayout';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-no-repeat bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/background.png')" }}>
      <NavigationBar />
      <div className="flex-grow pt-20">
        <RoomLayout />
      </div>
    </div>
  );
};

export default Home;
