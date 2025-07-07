import React from "react";

const features = [
  {
    imgSrc: "/assets/Aboutpage/Featuresection/logoimage1.png", // Replace with actual image path
    title: "Expert Engineer",
    description:
      "Our expert engineers bring innovation, precision, and reliability to every project. With years of experience, we ensure top-quality solutions tailored to your needs.",
  },
  {
    imgSrc: "/assets/Aboutpage/Featuresection/logoimage2.png", // Replace with actual image path
    title: "Quality Material",
    description:
      "We use only the finest quality materials to ensure durability and reliability. Our commitment to excellence guarantees superior performance in every product.",
  },
  {
    imgSrc: "/assets/Aboutpage/Featuresection/logoimage3.png", // Replace with actual image path
    title: "Free Estimates",
    description:
      "We offer free estimates to help you make informed decisions with complete transparency. Get expert guidance, accurate pricing, and tailored solutions.",
  },
];

const FeatureSection = () => {
  return (
    <div className="mt-[50px] mx-auto px-2 md:px-4  sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]">
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-start">
        {/* For mobile: display all vertically */}
        {/* For medium: top row with 2 features */}
        <div className="md:flex md:flex-row md:gap-6 md:justify-center md:w-full lg:hidden">
          <div className="w-full max-w-[410px] text-center mb-6 md:mb-0">
            <div className="flex w-[80px] h-[80px] p-4 items-center gap-2 rounded-[12px] bg-[#FCEDEA] justify-center mx-auto">
              <img src={features[0].imgSrc} alt={features[0].title} className="w-12 h-12" />
            </div>
            <h3 className="text-black font-[Manrope] w-full max-w-[200px] mx-auto text-[24px] font-bold capitalize mt-4">
              {features[0].title}
            </h3>
            <p className="text-[#827E7D] font-[Manrope] text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] sm:mt-4 lg:mt-1 xl:mt-4">
              {features[0].description}
            </p>
          </div>
          
          <div className="w-full max-w-[410px] text-center mb-6 md:mb-0">
            <div className="flex w-[80px] h-[80px] p-4 items-center gap-2 rounded-[12px] bg-[#FCEDEA] justify-center mx-auto">
              <img src={features[1].imgSrc} alt={features[1].title} className="w-12 h-12" />
            </div>
            <h3 className="text-black font-[Manrope] w-full max-w-[200px] mx-auto text-[24px] font-bold capitalize mt-4">
              {features[1].title}
            </h3>
            <p className="text-[#827E7D] font-[Manrope] text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] sm:mt-4 lg:mt-1 xl:mt-4">
              {features[1].description}
            </p>
          </div>
        </div>
        
        {/* For medium: bottom centered feature */}
        <div className="w-full max-w-[410px] text-center md:mx-auto lg:hidden">
          <div className="flex w-[80px] h-[80px] p-4 items-center gap-2 rounded-[12px] bg-[#FCEDEA] justify-center mx-auto">
            <img src={features[2].imgSrc} alt={features[2].title} className="w-12 h-12" />
          </div>
          <h3 className="text-black font-[Manrope] w-full max-w-[200px] mx-auto text-[24px] font-bold capitalize mt-4">
            {features[2].title}
          </h3>
          <p className="text-[#827E7D] font-[Manrope] text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] sm:mt-4 lg:mt-1 xl:mt-4">
            {features[2].description}
          </p>
        </div>
        
        {/* For large screens: all three in a row (exactly like original) */}
        {features.map((feature, index) => (
          <div key={index} className="w-full max-w-[410px] text-center hidden lg:block">
            <div className="flex w-[80px] h-[80px] p-4 items-center gap-2 rounded-[12px] bg-[#FCEDEA] justify-center mx-auto">
              <img src={feature.imgSrc} alt={feature.title} className="w-12 h-12" />
            </div>
            <h3 className="text-black font-[Manrope] w-full max-w-[200px] mx-auto text-[24px] font-bold capitalize mt-4">
              {feature.title}
            </h3>
            <p className="text-[#827E7D] font-[Manrope] text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] sm:mt-4 lg:mt-1 xl:mt-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;