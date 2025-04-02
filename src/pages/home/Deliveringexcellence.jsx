import React from "react";

const TrustedClients = () => {
  const logos = [
    { src: "/assets/Homepage/deliveringexcellence/image1.png", className: "brightness-110", alt: "Client 1 Logo" },
    { src: "/assets/Homepage/deliveringexcellence/image2.jpg", className: "opacity-90", alt: "Client 2 Logo" },
    { src: "/assets/Homepage/deliveringexcellence/image3.jpg", className: "rounded-lg", alt: "Client 3 Logo" },
    { src: "/assets/Homepage/deliveringexcellence/image4.png", className: "scale-105", alt: "Client 4 Logo" },
    { src: "/assets/Homepage/deliveringexcellence/image5.png", className: "w-[120px]", alt: "Client 5 Logo" },
    { src: "/assets/Homepage/deliveringexcellence/image6.png", className: "scale-105", alt: "Client 4 Logo" },
    { src: "/assets/Homepage/deliveringexcellence/image7.jpg", className: "scale-105", alt: "Client 4 Logo" },
    { src: "/assets/Homepage/deliveringexcellence/image8.jpg", className: "scale-105", alt: "Client 4 Logo" },
    { src: "/assets/Homepage/deliveringexcellence/image9.jpg", className: "scale-105", alt: "Client 4 Logo" },
    { src: "/assets/Homepage/deliveringexcellence/image10.png", className: "scale-105", alt: "Client 4 Logo" },

    

    
  ];

  return (
    <div className="flex flex-col items-center md:mt-[0px] lg:mt-[190px] py-16 bg-white max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-6">
      <h3 className="text-[#E4492E] font-['Monda'] text-2xl font-semibold text-center w-full">
        Delivering Excellence
      </h3>
      <h2 className="text-black font-['Monda'] md:text-[42px] text-[30px] font-bold md:leading-[60px] text-center max-w-[1100px] mt-4">
        Our Products, Trusted by Clients Worldwide
      </h2>
      <p className="text-[#827E7D] font-['Manrope'] text-[18px] font-normal leading-8 text-center md:w-[600px] lg:w-[900px] xl:w-[1200px] mt-8">
        We take pride in providing high-quality products that meet industry standards and exceed client expectations.
        Our solutions are trusted by leading businesses worldwide, ensuring reliability, efficiency, and long-term
        performance in every application.
      </p>

      {/* Scrolling Logo Section (Strictly Within 1440px) */}
      <div className="w-full max-w-[1300px] overflow-hidden relative mt-12 bg-[#f7f7f7] py-8">
        <div className="flex items-center animate-scroll w-max">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex justify-center items-center w-[200px] mx-0">
              <img src={logo.src} alt={logo.alt} className={`h-[55px] ${logo.className}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframe Animation (Add this in Tailwind config if needed) */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default TrustedClients;
