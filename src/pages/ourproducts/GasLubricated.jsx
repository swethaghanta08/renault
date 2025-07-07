import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../home/Footer";
import Gaslubricatedsealsnavbar from "./Gaslubricatedsealsnavbar/Gaslubricatedsealsnavbar";

const GasLubricated = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Gas Lubricated Seals For Pumps & Agitators – Renault Engineers</title>
        <meta
          name="description"
          content="Discover high-performance gas lubricated seals for pumps and agitators at Renault Engineers. Enhance efficiency and reliability in your operations today!"
        />
        <link
          rel="canonical"
          href="https://renaultengineers.com/our-products/gas-lubricated"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] h-[320px] md:h-[460px] lg:h-[600px] xl:w-[1440px] mt-[20px] mx-auto w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${
            window.innerWidth >= 1024
              ? "/assets/Contactpage/Herosection/heroimage-desktop.png"
              : window.innerWidth >= 768
              ? "/assets/Contactpage/Herosection/heroimage-tab.png"
              : "/assets/Contactpage/Herosection/heroimage-phone.png"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* SVG Background Overlay */}
        <div className="absolute top-0 right-0 hidden lg:block">
          <svg className="xl:w-[870px] lg:h-[600px]" viewBox="0 0 870 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M870 600H0L270.381 279.474L522.368 0H870V600Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 hidden md:block lg:hidden">
          <svg className="w-[461px] h-[460px]" viewBox="0 0 461 460" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M461 460H0L143.271 214.263L276.795 0H461V460Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 block md:hidden">
          <svg className="w-[251px] h-[320px]" viewBox="0 0 251 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M251 320H0L78.0063 149.053L150.706 0H251V320Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Hero Heading */}
        <div className="relative z-10 ml-[40px] mt-[80px] aboutcontentbox2 aboutcontentbox md:mt-[40px] md:w-[442px] md:ml-[200px] lg:ml-[240px] xl:ml-[570px] w-[240px] h-[80px] md:h-[80px] lg:h-[135px] bg-white flex flex-col items-start p-10 gap-0 md:gap-0 lg:gap-4 lg:w-[605px] shadow-lg">
          <h2 className="text-black mt-[-25px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Gas Lubricated Seals
          </h2>
        </div>
      </section>

      {/* Navbar */}
      <div className="mt-4">
        <Gaslubricatedsealsnavbar />
      </div>

      {/* Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-['Monda'] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] mb-6">
          Gas Lubricated Seals For Pumps & Agitators
        </h1>

        <div className="max-w-[1000px] mx-auto text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[28px] tracking-[0.4px] space-y-6">
          <p>
            Gas lubricated seals are a type of mechanical seal commonly used in pumps and agitators to prevent leakage and maintain the efficiency of the equipment.
            These seals are designed to operate using a thin film of gas, typically nitrogen or air, instead of a liquid lubricant.
          </p>
          <p>
            Gas lubricated seals work by creating a pressurized gas barrier between the seal faces. The gas is introduced into the seal through a small orifice or passages, which creates a positive pressure that prevents the process fluid from leaking out of the pump or agitator. The gas also helps maintain a uniform clearance between the seal faces, reducing wear and increasing lifespan.
          </p>
          <p>
            Gas lubricated seals offer several advantages over traditional liquid-lubricated seals. They do not require a separate lubrication system, simplifying installation and maintenance. Since they don't use liquid lubricant, they are unaffected by changes in fluid properties like temperature or viscosity.
          </p>
          <p>
            These seals are ideal for applications involving abrasive or corrosive fluids. However, they may be less effective under high pressure or vacuum conditions and are sensitive to changes in gas pressure or flow rate.
          </p>
          <p>
            Overall, gas lubricated seals are a reliable and efficient choice for pumps and agitators, especially in environments where liquid-lubricated seals are unsuitable.
          </p>
        </div>

        {/* Product Images */}
        <div className="max-w-[1000px] mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/gaslubricatedseals/main/image1.png')",
                aspectRatio: "1/1",
                maxWidth: "180px",
                maxHeight: "180px",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/gaslubricatedseals/main/image2.jpg')",
                aspectRatio: "1/1",
                maxWidth: "180px",
                maxHeight: "180px",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/gaslubricatedseals/main/image3.jpg')",
                aspectRatio: "1/1",
                maxWidth: "180px",
                maxHeight: "180px",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/gaslubricatedseals/main/image4.jpg')",
                aspectRatio: "1/1",
                maxWidth: "180px",
                maxHeight: "180px",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GasLubricated;
