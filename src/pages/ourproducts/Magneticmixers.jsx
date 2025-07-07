import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../home/Footer";

const Magnetimixers = () => {
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
        <title>Magnetic Mixers for Sterile - Mixer Manufacturers in Hyderabad | Renault Engineers</title>
        <meta
          name="description"
          content="Looking for reliable magnetic mixers for sterile applications? Renault Engineers in Hyderabad offers top-notch solutions tailored to meet your manufacturing needs."
        />
        <link
          rel="canonical"
          href="https://renaultengineers.com/our-products/magnetic-mixers"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] h-[320px] md:h-[460px] lg:h-[600px] mx-auto w-full bg-cover bg-center flex items-center justify-center mt-5"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* SVG Overlays */}
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

        {/* Hero Content Box */}
        <div className="relative z-10 ml-10 mt-20 md:mt-10 md:ml-[200px] lg:ml-[240px] xl:ml-[570px] bg-white p-10 shadow-lg w-[240px] md:w-[442px] lg:w-[605px] h-[80px] md:h-[80px] lg:h-[135px]">
          <h2 className="text-black font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px]">
            Magnetic Mixers
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Heading */}
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-monda text-[32px] md:text-[48px] font-bold mb-6">
          Magnetic Mixers (Stirrers)
        </h1>

        {/* Description */}
        <p className="text-[#827E7D] max-w-[1000px] mx-auto font-manrope text-[16px] md:text-[20px] leading-[28px] mb-6">
          We at Renault Engineers do sales and reconditioning of Magnetic Mixers (Stirrers).
          Our designs suit a wide variety of applications in the pharmaceutical and biotechnology industries.
          These mixers provide superior performance, easy maintenance, and operational efficiency.
          Their bottom-mounted magnetic drive eliminates shaft penetration, minimizing leakage risks.
          At Millipore’s Prevalidation Center, you can collaborate with mixing experts and validate your aseptic processes using a wide range of optimized mixers.
        </p>

        {/* Benefits */}
        <div className="max-w-[1000px] mx-auto mt-10">
          <h2 className="text-black font-monda text-[28px] md:text-[36px] font-bold mb-4">Benefits</h2>
          <ul className="space-y-4">
            {[
              "Enhanced performance",
              "Easy to clean and sterilize in place (CIP/SIP)",
              "Magnetically coupled",
              "Bottom mounted",
              "Reduce mixing time for difficult-to-mix solutions",
              "Improved operational and economic efficiency",
              "Full documentation support and materials traceability",
              "Option to test and optimize your process at Millipore’s Prevalidation Center",
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <img src="/assets/Ourproducts/Standard/drop down.png" alt="bullet" className="w-6 h-6 mt-1" />
                <p className="text-[#827E7D] font-manrope text-base">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Images */}
        <div className="max-w-[1000px] mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            className="bg-cover bg-center bg-no-repeat rounded-sm"
            style={{
              backgroundImage: "url('/assets/Ourproducts/magneticmixers/image2.jpg')",
              aspectRatio: "1/1",
              maxWidth: "180px",
              maxHeight: "180px",
              width: "100%",
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Magnetimixers;
