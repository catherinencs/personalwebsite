import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';

const About = () => {
  const [activeTab, setActiveTab] = useState('Education'); 

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Education':
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">
              Northeastern University | 2022 - 2025
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Major: Computer Science</li>
              <li>Minor: Interaction Design</li>
              <li>Activities:
                <ul className="list-disc pl-6">
                  <li>Treasurer at ISANU</li>
                  <li>Web Designer at Artistry Magazine</li>
                </ul>
              </li>
              <li>Relevant Coursework:
                <ul className="list-disc pl-6">
                  <li>Fundamentals of Computer Science 1 & 2</li>
                  <li>Discrete Structures</li>
                  <li>Intro to Math Reasoning</li>
                  <li>Mathematics of Data Models</li>
                  <li>Foundations of Cybersecurity</li>
                  <li>Info System Design & Development</li>
                  <li>Object-Oriented Design</li>
                  <li>Computer Systems</li>
                  <li>Mobile Application Development</li>
                  <li>Algorithms & Data</li>
                  <li>Theory of Computation</li>
                  <li>Web Development</li>
                  <li>Human Computer Interaction</li>
                  <li>Color and Composition</li>
                  <li>Experience and Interaction</li>
                </ul>
              </li>
            </ul>
          </div>
        );
      case 'Skills':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Programming Languages:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Python, Java, C++, JavaScript, Racket, x86 Assembly, Kotlin, HTML, CSS</li>
            </ul>
            <h2 className="text-xl font-bold mt-4 mb-4">Frontend Development:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>React.js, Vue.js, React Native, Oruga, Bulma, Tailwind CSS</li>
            </ul>
            <h2 className="text-xl font-bold mt-4 mb-4">Backend Development:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">Frameworks:</span> Node.js, Express.js, Django, FastAPI</li>
              <li><span className="font-bold">Databases & Cloud Services:</span> MySQL, MongoDB, AWS Lambda, Google Cloud Storage, Firebase</li>
            </ul>
            <h2 className="text-xl font-bold mt-4 mb-4">APIs and Libraries:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Yelp API, Google Maps API, Beautiful Soup, Twilio</li>
            </ul>
            <h2 className="text-xl font-bold mt-4 mb-4">Tools and Version Control:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Git/GitHub, Unix/Linux, Jira, Trello, Google Analytics</li>
            </ul>
            <h2 className="text-xl font-bold mt-4 mb-4">IDEs and Development Tools:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>IntelliJ, Eclipse, Visual Studio Code, Vim, DrRacket, Android Studio</li>
            </ul>
            <h2 className="text-xl font-bold mt-4 mb-4">Design Tools:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adobe Illustrator, Adobe Photoshop, Figma</li>
            </ul>
          </div>
        );
      case 'Interests':
        return (
          <div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Soccer</li>
              <li>Traveling to new places</li>
              <li>Indoor cycling</li>
              <li>DJ-ing</li>
              <li>Graphic design</li>
              <li>Fashion</li>
              <li>Watching Snoopy</li>
              <li>Cooking/baking yummy food… and eating them :)</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-customCream pb-10">
      <NavigationBar />
      <div className="container mx-auto px-6 lg:px-20 pt-24 lg:pt-28 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Portrait Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="/images/portrait2.png"
            alt="Catherine's Portrait"
            className="w-full max-w-[250px] lg:max-w-none"
          />
        </div>

        {/* About Me Content */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">About me</h1>
          <p className="text-lg mb-8">
            I’m passionate about the intersection of <span className="font-bold">technology</span> and <span className="font-bold">creativity</span>, where I find endless opportunities to innovate and solve real-world problems. I believe software development is a powerful tool for change, and I’m committed to building solutions that not only function well but also inspire. For me, writing code is more than a technical task—it’s an opportunity to create meaningful experiences that leave a lasting impact.
          </p>

          {/* Tabs for Education, Skills, Interests */}
          <div className="border-b border-gray-300 mb-6">
            <ul className="flex space-x-8">
              <li
                className={`pb-2 cursor-pointer ${activeTab === 'Education' ? 'border-b-2 border-black font-bold' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Education')}
              >
                Education
              </li>
              <li
                className={`pb-2 cursor-pointer ${activeTab === 'Skills' ? 'border-b-2 border-black font-bold' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Skills')}
              >
                Skills
              </li>
              <li
                className={`pb-2 cursor-pointer ${activeTab === 'Interests' ? 'border-b-2 border-black font-bold' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Interests')}
              >
                Interests
              </li>
            </ul>
          </div>
          <div>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
