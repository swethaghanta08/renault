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
    <div className="flex flex-col lg:flex-row gap-6 mt-[50px] justify-center items-center lg:items-start mx-auto px-4 max-w-[320px] sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]">
      {features.map((feature, index) => (
        <div key={index} className="w-full max-w-[410px] text-center px-4">
          <div className="flex w-[80px] h-[80px] p-4 items-center gap-2 rounded-[12px] bg-[#FCEDEA] justify-center mx-auto">
            <img src={feature.imgSrc} alt={feature.title} className="w-12 h-12" />
          </div>
          <h3 className="text-black font-[Manrope] w-full max-w-[200px] mx-auto text-[24px] font-bold capitalize mt-4">
            {feature.title}
          </h3>
          <p className="text-[#827E7D] text-[16px] w-full max-w-[280px] mx-auto lg:text-[20px] font-[Manrope] font-normal leading-[28px] tracking-[0.4px] mt-2">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;