import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Modal from '../components/Modal';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('Professional');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', date: '', bullets: [] });

    // Function to open the modal with specific content (bullet points)
    const openModal = (title, date, bullets) => {
        setModalContent({ title, date, bullets });
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to render content based on the active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'Professional':
                return (
                    <div>
                        <div className="mb-8 pl-4 border-l-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold mt-1">Spill Center</h3>
                                <p className="text-gray-600">January 2024 - July 2024</p>
                            </div>
                            <h2 className="text-xl font-bold">Software Developer</h2>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed porttitor lorem, vel lobortis ligula.
                            </p>
                            <button
                                onClick={() =>
                                    openModal(
                                        'Spill Center - Software Developer',
                                        'January 2024 - July 2024',
                                        [
                                            'Implemented a redesign of the company homepage',
                                            'Developed new features related to user identity verification',
                                            'Worked with React Native mobile app for push notifications',
                                        ]
                                    )
                                }
                                className="text-customDarkerBlue hover:underline mt-2 inline-block"
                            >
                                More details &rarr;
                            </button>
                        </div>

                        <div className="mb-8 pl-4 border-l-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold mt-1">Spill Center</h3>
                                <p className="text-gray-600">January 2024 - July 2024</p>
                            </div>
                            <h2 className="text-xl font-bold">Software Developer</h2>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed porttitor lorem, vel lobortis ligula.
                            </p>
                            <button
                                onClick={() =>
                                    openModal(
                                        'Spill Center - Software Developer',
                                        'January 2024 - July 2024',
                                        [
                                            'Implemented a redesign of the company homepage',
                                            'Developed new features related to user identity verification',
                                            'Worked with React Native mobile app for push notifications',
                                        ]
                                    )
                                }
                                className="text-customDarkerBlue hover:underline mt-2 inline-block"
                            >
                                More details &rarr;
                            </button>
                        </div>
                        
                    </div>
                );
            case 'Extracurricular':
                return (
                    <div>
                        <div className="mb-8 pl-4 border-l-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold mt-1">ISANU (Indonesian Student Association)</h3>
                                <p className="text-gray-600">September 2023 - Present</p>
                            </div>
                            <h2 className="text-xl font-bold">Treasurer</h2>
                            <p className="mt-2">
                                Managed finances and organized fundraising events.
                            </p>
                            <button
                                onClick={() =>
                                    openModal(
                                        'ISANU - Treasurer',
                                        'September 2023 - Present',
                                        [
                                            'Managed organization budget and financials',
                                            'Organized multiple fundraising events',
                                            'Collaborated with event coordinators for cultural events',
                                        ]
                                    )
                                }
                                className="text-customDarkerBlue hover:underline mt-2 inline-block"
                            >
                                More details &rarr;
                            </button>
                        </div>
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
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img
                        src="/images/briefcase2.png"
                        alt="Briefcase"
                        className="w-full max-w-[250px] lg:max-w-none"
                    />
                </div>

                {/* Experience Content */}
                <div className="w-full lg:w-2/3">
                    <h1 className="text-4xl font-bold mb-8">Experiences</h1>

                    {/* Tabs for Professional and Extracurricular */}
                    <div className="border-b border-gray-300 mb-6">
                        <ul className="flex space-x-8">
                            <li
                                className={`pb-2 cursor-pointer ${activeTab === 'Professional' ? 'border-b-2 border-black font-bold' : 'text-gray-400'}`}
                                onClick={() => setActiveTab('Professional')}
                            >
                                Professional
                            </li>
                            <li
                                className={`pb-2 cursor-pointer ${activeTab === 'Extracurricular' ? 'border-b-2 border-black font-bold' : 'text-gray-400'}`}
                                onClick={() => setActiveTab('Extracurricular')}
                            >
                                Extracurricular
                            </li>
                        </ul>
                    </div>

                    {/* Content based on active tab */}
                    <div>
                        {renderContent()}
                    </div>
                </div>
            </div>

            {/* Modal for More Details */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={modalContent.title}
                date={modalContent.date}
                bullets={modalContent.bullets} 
            />
        </div>
    );
};

export default Experience;
