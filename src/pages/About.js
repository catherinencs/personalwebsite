import React from 'react';
import NavigationBar from '../components/NavigationBar';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-customCream pt-16">
      <NavigationBar />
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-lg text-center max-w-lg">
        Hi, I'm Catherine! blabla
      </p>
    </div>
  );
};

export default About;
