import React from 'react';

const SealingTechnology = () => {
  return (
    <div className="flex xl:max-w-[1440px] bg-red-50 w-full mt-[40px] mx-auto flex-col items-center px-4 md:px-6 lg:px-16 py-10">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 w-full mb-8">
        <span className="text-red-500 text-center font-[Monda] text-xl font-semibold capitalize w-full">
          Sealing Technology
        </span>
        
        <h2 className="text-black text-center font-[Monda] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px] w-full">
          Precision, Performance, Protection
        </h2>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 w-full">
        
        {/* Image - Moves to Right on Large Screens, Comes First on Small Screens */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end order-1 lg:order-2">
          <img 
            src="/assets/Aboutpage/sealingtechnology/motorimage.png" 
            alt="Sealing Technology Products" 
            className="w-[300px] md:w-[344px] h-[200px] md:h-[244px] object-cover rounded-md"
          />
        </div>

        {/* Text Content - Moves Below Image on Small Screens */}
        <div className="lg:w-2/3 order-2 lg:order-1">
          <p className="text-black font-[Manrope] text-base md:text-lg lg:text-xl md:px-4 lg:px-0 font-normal leading-6 md:leading-7 tracking-wide">
          These Sealmatic designs and manufactures mechanical seals and associated products mainly for the oil & gas, refinery, petrochemical, 
          chemical, pharmaceutical, fertiliser, power, mining, pulp & paper, aerospace, marine and many more industrial applications.
           With a wide range of products and services, <span className="text-red-600">Sealmatic has solutions </span> for every sealing requirement – such as Pusher Seals, 
           Standard Cartridge Seals, Elastomer Bellows Seals, Metal Bellows Seals, Engineered Seals, Split Seals, Gas-Lubricated Seals 
           and many more. Each and every Sealmatic mechanical seal is the result of numerous steps involving extensive engineering and
            thus processing the same in various production steps
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default SealingTechnology;
