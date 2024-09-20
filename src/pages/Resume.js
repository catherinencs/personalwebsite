import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { Worker, Viewer } from '@react-pdf-viewer/core'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {
  const pdfPath = '/resume.pdf'; 

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.setAttribute('download', 'Catherine_Sutanto_Resume.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-customCream pb-10">
      <NavigationBar />
      <div className="container mx-auto px-6 lg:px-20 pt-24 lg:pt-28 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        
        {/* Resume Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="/images/trophy.png"
            alt="Catherine's Resume"
            className="w-full max-w-[250px] lg:max-w-none"
          />
        </div>

        {/* Resume Viewer Content */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="bg-customDarkerBlue text-white py-2 px-4 rounded-lg mb-6 hover:bg-blue-800"
          >
            Download Resume
          </button>

          {/* PDF Display */}
          <div className="w-4/5 h-[70vh]">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
              <Viewer fileUrl={pdfPath} />
            </Worker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
