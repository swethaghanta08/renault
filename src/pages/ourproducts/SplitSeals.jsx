
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../home/Footer";
import Splitsealsnavbar from "./Splitsealsnavbar/Splitsealsnavbar";

const SplitSeals = () => {
  // Preload hero and product images for SEO and fast loading
  useEffect(() => {
    const heroImages = [
      "/assets/Contactpage/Herosection/heroimage-desktop.png",
      "/assets/Contactpage/Herosection/heroimage-tab.png",
      "/assets/Contactpage/Herosection/heroimage-phone.png",
    ];
    const productImages = [
      "/assets/Ourproducts/Splitseals/main/image1.jpg"
    ];
    [...heroImages, ...productImages].forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Split Mechanical Seals for Pumps & Mixers | Renault Engineers</title>
        <meta
          name="description"
          content="Find the perfect split mechanical seals for your pumps and mixers at Renault Engineers. Trust our expertise for reliable and efficient sealing solutions!"
        />
        <link rel="canonical" href="https://renaultengineers.com/our-products/split-seals" />
        <link rel="preload" as="image" href="/assets/Contactpage/Herosection/heroimage-desktop.png" />
        <link rel="preload" as="image" href="/assets/Contactpage/Herosection/heroimage-tab.png" />
        <link rel="preload" as="image" href="/assets/Contactpage/Herosection/heroimage-phone.png" />
        <link rel="preload" as="image" href="/assets/Ourproducts/Splitseals/main/image1.jpg" />
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
        {/* SVG Overlays */}
        <div className="absolute top-0 right-0 hidden lg:block">
          <svg className="xl:w-[870px] lg:h-[600px]" viewBox="0 0 870 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M870 600H0L270.381 279.474L522.368 0H870V600Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 hidden md:block lg:hidden">
          <svg className="w-[461px] h-[460px] flex-shrink-0" viewBox="0 0 461 460" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M461 460H0L143.271 214.263L276.795 0H461V460Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 block md:hidden">
          <svg className="w-[251px] h-[320px] flex-shrink-0" viewBox="0 0 251 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M251 320H0L78.0063 149.053L150.706 0H251V320Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Heading Box */}
        <div className="relative z-10 ml-[40px] mt-[80px] aboutcontentbox2 aboutcontentbox md:mt-[40px] md:w-[442px] md:ml-[200px] lg:ml-[240px] xl:ml-[570px] w-[240px] h-[80px] md:h-[80px] lg:h-[135px] bg-white flex flex-col items-start p-10 gap-0 md:gap-0 lg:gap-4 lg:w-[605px] shadow-lg">
          <h2 className="text-black mt-[-25px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Split Seals
          </h2>
        </div>
      </section>

      {/* Navbar Section */}
      <div className="mt-4">
        <Splitsealsnavbar />
      </div>

      {/* Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-['Monda'] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] self-stretch mb-6">
          Split Seals Sealing Technology
        </h1>

        <div className="max-w-[1000px] mx-auto text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[28px] tracking-[0.4px] space-y-6">
          <p>
            Split seals sealing technology Renault Engineers: Installing split seals will eliminate sleeve wear and associated maintenance interventions and costs, and can eliminate the need for packing adjustments as well as packing gland leakage and associated cleanup costs. Most split mechanical seals are designed to seal outside of the stuffing box.
          </p>
          <p>
            Sealing device maintenance on large rotating equipment, such as large pumps, can be a time-consuming and costly exercise. Users want to know if split seals can reduce maintenance time, operating costs, and increase equipment uptime.
            Split seals allow shaft assembly without full removal. All parts are split into at least two halves.
          </p>
          <p>
            Split seals were first used in submarines in 1954 and became standard in process industries by 1986. Since then, newer generations have improved performance, auto-alignment, and simpler installation.
          </p>
          <p>
            Split seals now operate comparably to cartridge seals, handling shaft diameters from 1 inch to 36 inches and pressures up to 450 psi (31 bar).
          </p>
          <p>
            Elastomers are typically FKM, EPDM, or FEPM. Face materials include carbon variants and silicon carbide. Tungsten carbide is rarely used due to mass splitting limitations.
          </p>
          <p>
            While leak risks exist, properly installed split seals are known to operate leak-free for over 10 years. Initial startup leakage (up to 1 drop/mm/min) usually subsides after 200 hours of operation.
          </p>
        </div>

        {/* Product Image */}
        <div className="max-w-[1000px] mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/Splitseals/main/image1.jpg')",
                aspectRatio: "1/1",
                maxWidth: "480px",
                maxHeight: "280px",
                width: "100%",
                height: "100%",
              }}
              aria-label="Split Seals product image 1"
              role="img"
            ></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SplitSeals;
