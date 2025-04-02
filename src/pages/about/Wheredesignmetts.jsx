import React, { useRef } from 'react';

const WhereDesignMeetsPerformance = () => {
  const carouselRef = useRef(null);
  
  // Product images array with their dimensions
  const productImages = [
    { src: "/assets/Aboutpage/wheredesignmeets/image1.png", alt: "Sealmatic product 1" },
    { src: "/assets/Aboutpage/wheredesignmeets/image2.png", alt: "Sealmatic product 2" },
    { src: "/assets/Aboutpage/wheredesignmeets/image3.png", alt: "Sealmatic product 3" },
    { src: "/assets/Aboutpage/wheredesignmeets/image4.png", alt: "Sealmatic product 4" },
    { src: "/assets/Aboutpage/wheredesignmeets/image5.png", alt: "Sealmatic product 5" },
   
  ];

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-12 w-full max-w-[1440px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 w-full mb-8">
        <span className="text-red-500 text-center font-monda text-xl font-semibold capitalize w-full">
          Sealing Technology
        </span>
        
        <h2 className="text-black text-center font-monda text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px] w-full mb-6">
          Where Design Meets Performance
        </h2>
        
        <p className="text-[#827E7D] text-center font-manrope text-lg md:text-xl font-normal leading-7 tracking-wide max-w-5xl">
          Sealmatic designs and manufactures mechanical seals and associated products mainly for the oil & gas, chemical,
          pharmaceutical, pulp & paper, power, mining and many more industrial applications. Today, it provides the most complete
          selection of engineered mechanical seals and sealing support systems. Sealmatic products are globally recognized as a trusted
          brand in the process industry can help relieve stress and reduce the life cycle costs associated with the most important aspects
          of plant operation. Dedicated to delivering the highest quality support, Sealmatic services and solutions integrates hydraulic,
          mechanical and materials engineering knowledge with creative solutions. It improves equipment reliability and system
          performance, reduces energy consumption and improves the safety and environmental impact of operations.
        </p>
      </div>
      
      {/* Image Carousel Section */}
      <div className="w-full xl:max-w-[1100px] md:max-w-[768px] overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex gap-4 w-full overflow-x-auto"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
          }}
        >
          {productImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[30%] md:w-[25%] lg:w-[20%] h-[260px]"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                draggable="false" // Prevents image drag
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Paragraph */}
      <div className="w-full mt-8">
        <p className="text-[#827E7D] text-center font-manrope text-lg md:text-xl font-normal leading-7 tracking-wide max-w-5xl mx-auto">
          It has a longstanding tradition of providing mechanical seals and sealing services that are trusted by the industry. Sealmatic
          mechanical seals represent a collection of trusted products that are supported by strong aftermarket services, providing users
          with both safety and environmental benefits. Sealmatic mechanical seals are used on a variety of rotating
          equipment, including pumps, compressors, mixers, steam turbines and other specialty equipment, primarily in the oil and gas,
          pharmaceutical, chemical processing, mineral and ore processing and general industries. Products guarantee highest quality 
          standards & application know-how with full service to its customers.
        </p>
      </div>
    </div>
  );
};

export default WhereDesignMeetsPerformance;