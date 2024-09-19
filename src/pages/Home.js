import React from 'react';
import RoomLayout from '../components/RoomLayout';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/background.png')" }}>
      <NavigationBar />
      <div className="pt-16">
        <RoomLayout />
      </div>
    </div>
  );
};

export default Home;
