import { useState, useEffect } from "react";

const ContactHeroSection = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const preloadAll = async () => {
      const images = [
        "/assets/Contactpage/Herosection/heroimage-desktop.png",
        "/assets/Contactpage/Herosection/heroimage-tab.png",
        "/assets/Contactpage/Herosection/heroimage-phone.png",
      ];

      try {
        await Promise.all(images.map(preloadImage));
      } catch (e) {
        console.warn("Some contact hero images failed to preload", e);
      }

      const width = window.innerWidth;
      let imagePath;

      if (width >= 1024) {
        imagePath = images[0];
      } else if (width >= 768) {
        imagePath = images[1];
      } else {
        imagePath = images[2];
      }

      setBackgroundImage(imagePath);
    };

    preloadAll();
  }, []);

  return (
    <section className="relative h-[320px] md:h-[460px] lg:h-[600px] mt-[20px] mx-auto w-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* SVG for Large & Extra-Large Screens */}
      <div className="absolute top-0 right-0 hidden lg:block">
        <svg
          className="xl:w-[870px] lg:h-[600px]"
          viewBox="0 0 870 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M870 600H0L270.381 279.474L522.368 0H870V600Z"
            fill="black"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {/* SVG for Medium Screens */}
      <div className="absolute top-0 right-0 hidden md:block lg:hidden">
        <svg
          className="md:w-[461px] md:h-[460px] md:flex-shrink-0"
          viewBox="0 0 461 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M461 460H0L143.271 214.263L276.795 0H461V460Z"
            fill="black"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {/* SVG for Phone Screens */}
      <div className="absolute top-0 right-0 block md:hidden">
        <svg
          className="w-[251px] h-[320px] flex-shrink-0"
          viewBox="0 0 251 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M251 320H0L78.0063 149.053L150.706 0H251V320Z"
            fill="black"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {/* Content Box */}
      <div className="relative z-10 ml-[40px] mt-[80px] md:mt-[40px] md:ml-[200px] lg:ml-[240px] xl:ml-[570px] w-[240px] h-[100px] md:w-[442px] md:h-[150px] lg:w-[605px] lg:h-[235px] bg-white flex flex-col items-start p-10 gap-0 lg:gap-4 shadow-lg">
        <div className="flex items-center mt-[-20px] ml-[-20px] gap-2 md:mt-[-20px] lg:mt-[0px]">
          <div className="w-[24px] h-[2px] md:w-[60px] bg-[#CF422A]"></div>
          <h4 className="text-[#CF422A] font-[Monda] text-[12px] md:text-[16px] font-semibold uppercase">
            Get In Touch
          </h4>
        </div>

        <h2 className="text-black ml-[-20px] font-[Monda] text-[20px] md:text-[28px] lg:text-[36px] sm:text-[24px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[402px]">
          Contact Us for Expert Assistance
        </h2>
      </div>
    </section>
  );
};

export default ContactHeroSection;
