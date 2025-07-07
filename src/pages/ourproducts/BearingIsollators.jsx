import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../home/Footer";
import StandardMechanicalnavbar from "./Standardmechanicalnavbar/Standardmechanicalnavbar";

const BearingIsollators = () => {
  const bgImage =
    window.innerWidth >= 1024
      ? "/assets/Contactpage/Herosection/heroimage-desktop.png"
      : window.innerWidth >= 768
      ? "/assets/Contactpage/Herosection/heroimage-tab.png"
      : "/assets/Contactpage/Herosection/heroimage-phone.png";

  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Bearing Isolators | Reliable Bearing Protection | Renault Engineers</title>
        <meta
          name="description"
          content="Explore Renault Engineers' top-quality bearing isolators for optimal protection. Enhance your equipment's performance and reliability with our expert solutions."
        />
        <link
          rel="canonical"
          href="https://renaultengineers.com/our-products/bearing-isolators"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] h-[320px] md:h-[460px] lg:h-[600px] mx-auto w-full bg-cover bg-center flex items-center justify-center mt-5"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* SVG overlays */}
        <div className="absolute top-0 right-0 hidden lg:block">
          <svg
            className="xl:w-[870px] lg:h-[600px]"
            viewBox="0 0 870 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M870 600H0L270.381 279.474L522.368 0H870V600Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 hidden md:block lg:hidden">
          <svg
            className="w-[461px] h-[460px]"
            viewBox="0 0 461 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M461 460H0L143.271 214.263L276.795 0H461V460Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 block md:hidden">
          <svg
            className="w-[251px] h-[320px]"
            viewBox="0 0 251 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M251 320H0L78.0063 149.053L150.706 0H251V320Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 ml-10 mt-20 md:mt-10 md:ml-[200px] lg:ml-[240px] xl:ml-[570px] bg-white p-10 shadow-lg w-[240px] md:w-[442px] lg:w-[605px] h-[80px] md:h-[80px] lg:h-[135px]">
          <h2 className="text-black font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px]">
            Bearing Isolators
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Title */}
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-['Monda'] text-[32px] md:text-[48px] font-bold mb-6">
          Bearing Isolators
        </h1>

        {/* Intro */}
        <p className="text-[#827E7D] max-w-[1000px] mx-auto font-['Manrope'] text-[16px] md:text-[20px] leading-[28px] mb-6">
          When considering bearing isolators, important service limit parameters include maximum operating speed,
          pressure, temperature, and vacuum rating. Bearing isolators are dynamic seals designed to protect bearings
          from outside contaminants. Some bearing isolators are of labyrinth construction while others use O-rings or
          other positive seals.
        </p>

        {/* Specifications */}
        <div className="max-w-[1000px] mx-auto mb-10">
          <h2 className="text-black font-monda text-[28px] lg:text-[36px] font-bold mb-4">Specifications</h2>
          <ul className="space-y-4">
            {[
              "shaft outer diameter or seal inner diameter",
              "housing bore diameter or seal outer diameter",
              "axial cross section or thickness",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <img src="/assets/Ourproducts/Standard/drop down.png" alt="bullet" className="w-6 h-6 mt-1" />
                <p className="text-[#827E7D] font-manrope text-base">{item}</p>
              </li>
            ))}
          </ul>
          <p className="text-[#827E7D] mt-4 font-['Manrope'] text-[16px] md:text-[20px]">
            The shaft outer diameter or seal inner diameter refers to the seal size. The axial cross section refers to
            the seal thickness.
          </p>
        </div>

        {/* Features */}
        <div className="max-w-[1000px] mx-auto mb-10">
          <h2 className="text-black font-monda text-[28px] lg:text-[36px] font-bold mb-4">Features</h2>
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] leading-[28px]">
            Key features include high-speed handling, vacuum rating, spring-loaded sealing, integral wipers, and
            compatibility with various pressure and temperature ranges.
          </p>
        </div>

        {/* Materials */}
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-black font-monda text-[28px] lg:text-[36px] font-bold mb-4">Materials</h2>
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] mb-4">
            Common materials used:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {[
              "clearance or labyrinth construction",
              "ethylene acrylic",
              "fluoroelastomer",
              "fluorosilicone",
              "nitrile",
              "highly saturated nitrile",
              "nylon or polyamide",
              "polyacrylate",
              "polychloroprene",
              "polyetheretherkeytone",
              "polyoxymethylene",
              "polyurethane or urethane",
              "natural rubber",
              "sintered bronze",
              "cast iron",
              "stainless steel",
              "felt",
              "leather",
            ].map((material, index) => (
              <li key={index} className="flex items-start gap-2">
                <img src="/assets/Ourproducts/Standard/drop down.png" alt="bullet" className="w-6 h-6 mt-1" />
                <p className="text-[#827E7D] font-manrope text-base">{material}</p>
              </li>
            ))}
          </ul>
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] mt-6">
            Plastics and elastomers are used depending on sealing needs. Some manufacturers offer proprietary blends.
          </p>
        </div>

        {/* Image Grid */}
        <div className="max-w-[1000px] mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          {["image1.png", "image2.jpg", "image3.jpg"].map((img, idx) => (
            <div
              key={idx}
              className="bg-cover bg-center rounded-sm"
              style={{
                backgroundImage: `url(/assets/Ourproducts/bearingisolators/${img})`,
                aspectRatio: "1/1",
                maxWidth: "180px",
                maxHeight: "180px",
                width: "100%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BearingIsollators;
