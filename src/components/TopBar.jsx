import React from "react";

const TopBar = () => {
  return (
    <div className="w-full width mx-auto border-b-[1px] border-[#827E7D]">
      {/* Desktop & Tablet View */}
      <div className="hidden md:flex width mx-auto items-center justify-between md:px-8 md:py-2 lg:px-12 lg:py-2 xl:px-16 xl:py-2">
        {/* Left - Social Connect */}
        <div className="flex items-center text-[#827E7D] font-[Monda] md:text-[14px] lg:text-[16px] xl:text-[20px]">
          <span>Social Connect</span>
          <div className="flex items-center ml-4 space-x-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/TopBar/facebook.png"
                alt="Facebook"
                className="md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
              />
            </a>
            <span className="md:w-0.5 md:h-0.5 lg:w-1 lg:h-1 xl:w-1.5 xl:h-1.5 bg-[#827E7D] rounded-full"></span>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/TopBar/instagram.png"
                alt="Instagram"
                className="md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
              />
            </a>
            <span className="md:w-0.5 md:h-0.5 lg:w-1 lg:h-1 xl:w-1.5 xl:h-1.5 bg-[#827E7D] rounded-full"></span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/TopBar/twitter.png"
                alt="Twitter"
                className="md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
              />
            </a>
            <span className="md:w-0.5 md:h-0.5 lg:w-1 lg:h-1 xl:w-1.5 xl:h-1.5 bg-[#827E7D] rounded-full"></span>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/TopBar/linkedin.png"
                alt="LinkedIn"
                className="md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
              />
            </a>
          </div>
        </div>

        {/* Center - ISM Certification */}
        <div className="flex-1 text-center md:ml-[50px] lg:ml-[100px] xl:ml-[225px] text-[#827E7D] font-[Monda] md:text-[14px] lg:text-[16px] xl:text-[20px] capitalize whitespace-nowrap">
          ISM Certificate Manufacturer
        </div>

        {/* Right - Download */}
        <div className="flex-1 text-right text-[#827E7D] font-[Monda] md:text-[14px] lg:text-[16px] xl:text-[20px] capitalize">
          <a 
            href="https://renaultengineers.com/wp-content/uploads/2023/06/Sealmatic-Design-Manual2.3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#CF422A] transition-colors duration-300"
          >
            Download
          </a>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden items-center justify-between px-4 py-1">
        {/* Left - ISM Certification */}
        <div className="flex-1 text-left text-[#827E7D] font-[Monda] text-[12px] capitalize whitespace-nowrap">
          ISM Certificate Manufacturer
        </div>

        {/* Right - Download */}
        <div className="text-right text-[#827E7D] font-[Monda] text-[12px] capitalize">
          <a 
            href="https://renaultengineers.com/wp-content/uploads/2023/06/Sealmatic-Design-Manual2.3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#CF422A] transition-colors duration-300"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
