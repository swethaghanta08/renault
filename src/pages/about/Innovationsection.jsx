import React, { useState } from 'react';

const InnovationSection = () => {
  const [activeTab, setActiveTab] = useState('environmental'); // Set the first tab as active by default

  const toggleTab = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  return (
    <div className="flex flex-col items-center gap-12 py-10 px-6 md:px-12 lg:px-16 w-full">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-6 w-full text-center">
        <span className="text-red-500 font-[Monda] text-xl font-semibold capitalize">
          What We Do
        </span>
        <h2 className="text-black font-[Monda] text-4xl md:text-5xl font-bold leading-[50px] md:leading-[60px]">
          Innovation in Action
        </h2>
        <p className="text-[#827E7D] font-[Manrope] text-lg md:text-xl font-normal leading-7 tracking-wider max-w-[1038px]">
          We specialize in delivering high-quality engineering solutions, innovative sealing technology, and reliable products tailored to meet the needs of various industries worldwide.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 w-full">
        {/* Left Side - Image */}
        <div className="w-full max-w-[450px] md:max-w-[500px] lg:max-w-[577px] h-[350px] md:h-[400px] lg:h-[476px] flex-shrink-0">
          <img
            src="/assets/Aboutpage/innovationsection/image.png"
            alt="Worker with yellow helmet welding"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side - FAQ Section */}
        <div className="flex flex-col items-center gap-3 w-full max-w-[500px] md:max-w-[560px]">
          {[{
            id: 'environmental',
            title: 'Environmental, Health & Safety',
            content: `Sealmatic's management and employees take active participation in establishing and supporting Environmental, Health and Safety (EHS) policy and procedures. By maintaining compliance with applicable EHS laws and regulations, Sealmatic strives to ensure the health, safety, and welfare of its employees and others affected by its business operations.`,
          }, {
            id: 'production',
            title: 'State-Of-The-Art Production',
            content: `Our state-of-the-art production facilities utilize the latest manufacturing technologies to ensure consistent quality and precision in every product we deliver.`,
          }, {
            id: 'quality',
            title: 'Quality Takes Center Stage',
            content: `Quality is at the core of everything we do. Our rigorous quality control processes ensure that every product meets or exceeds industry standards and customer expectations.`,
          }].map((section) => (
            <div key={section.id} className="w-full">
              {/* Toggle Button */}
              <div
                className={`flex justify-between items-center p-4 px-6 w-full cursor-pointer transition-all duration-300 rounded-lg shadow-md ${activeTab === section.id ? 'bg-[#CF422A] text-white' : 'bg-[#F9C8C3] text-black'}`}
                onClick={() => toggleTab(section.id)}
              >
                <h3 className="font-[Manrope] text-lg md:text-2xl font-bold capitalize">{section.title}</h3>
                <div
                  className="w-6 h-6 transition-transform duration-300"
                  style={{ transform: activeTab === section.id ? 'rotate(270deg)' : 'rotate(90deg)' }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={activeTab === section.id ? 'text-white' : 'text-black'}
                  >
                    <path
                      d="M10.5 7L17.5 14L10.5 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === section.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 px-6 bg-[#FCEDEA] rounded-b-lg">
                  <p className="text-[#827E7D] font-[Manrope] text-lg md:text-xl font-normal leading-7 tracking-wider">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
