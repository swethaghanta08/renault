import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";

const ContactHeroSection = () => {
  const [loading, setLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setTimeout(() => setLoading(false), 20);
    const updateBackground = () => {
      const width = window.innerWidth;
      let imagePath;
      
      if (width >= 1024) {
        imagePath = "/assets/Contactpage/Herosection/heroimage-desktop.png";
      } else if (width >= 768) {
        imagePath = "/assets/Contactpage/Herosection/heroimage-tab.png";
      } else {
        imagePath = "/assets/Contactpage/Herosection/heroimage-phone.png";
      }
      
      setBackgroundImage(imagePath);
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <section className="relative xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] h-[320px] md:h-[460px] xl:w-[1440px] md:flex-shrink-0 mt-[20px] mx-auto w-full lg:w-[1024px] lg:h-[600px] flex items-center justify-center">
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height="100%" className="absolute top-0 left-0" />
      ) : (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      )}

      <div className="absolute top-0 right-0 hidden lg:block">
        {loading ? <Skeleton variant="rectangular" width={870} height={600} /> : (
          <svg className="xl:w-[870px] lg:h-[600px]" viewBox="0 0 870 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M870 600H0L270.381 279.474L522.368 0H870V600Z" fill="black" fillOpacity="0.6" />
          </svg>
        )}
      </div>

      <div className="absolute top-0 right-0 hidden md:block lg:hidden">
        {loading ? <Skeleton variant="rectangular" width={461} height={460} /> : (
          <svg className="md:w-[461px] md:h-[460px] md:flex-shrink-0" viewBox="0 0 461 460" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M461 460H0L143.271 214.263L276.795 0H461V460Z" fill="black" fillOpacity="0.6" />
          </svg>
        )}
      </div>

      <div className="absolute top-0 right-0 block md:hidden">
        {loading ? <Skeleton variant="rectangular" width={251} height={320} /> : (
          <svg className="w-[251px] h-[320px] flex-shrink-0" viewBox="0 0 251 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M251 320H0L78.0063 149.053L150.706 0H251V320Z" fill="black" fillOpacity="0.6" />
          </svg>
        )}
      </div>

      <div className="relative z-10 ml-[40px] mt-[80px] aboutcontentbox2 aboutcontentbox md:mt-[40px] md:w-[442px] md:ml-[200px] w-[240px] h-[100px] md:h-[150px] xl:ml-[570px] lg:ml-[240px] lg:h-[235px] bg-white flex flex-col items-start p-10 md:gap-0 gap-0 lg:gap-4 lg:w-[605px] shadow-lg">
        {loading ? (
          <>
            <Skeleton variant="text" width={150} height={20} />
            <Skeleton variant="text" width={300} height={40} />
          </>
        ) : (
          <>
            <div className="flex items-center mt-[-20px] ml-[-20px] gap-2 md:mt-[-20px] lg:mt-[0px]">
              <div className="md:w-[60px] w-[24px] h-[2px] bg-[#CF422A]"></div>
              <h4 className="text-[#CF422A] font-[Monda] text-[12px] md:text-[16px] font-semibold uppercase">
                Get In Touch
              </h4>
            </div>

            <h2 className="text-black ml-[-20px] font-[Monda] text-[20px] lg:text-[36px] md:text-[28px] sm:text-[24px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[402px]">
              Contact Us for Expert Assistance
            </h2>
          </>
        )}
      </div>
    </section>
  );
};

export default ContactHeroSection;
