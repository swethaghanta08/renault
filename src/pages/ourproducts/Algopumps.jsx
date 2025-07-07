import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../home/Footer";

const Algopumps = () => {
  return (
    <div>
      {/* Meta SEO Tags */}
      <Helmet>
        <title>ALGO Pumps & Pumping Solutions | Reliable Industrial Pumps - Renault Engineers</title>
        <meta
          name="description"
          content="Explore Renault Engineers for top-quality ALGO Pumps & Pumping Solutions. Trust our reliable industrial pumps to meet your needs with unmatched performance. Contact us Today!"
        />
        <link
          rel="canonical"
          href="https://renaultengineers.com/our-products/algo-pumps"
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
        }}
      >
        {/* Background Overlays */}
        <div className="absolute top-0 right-0 hidden lg:block">
          <svg className="xl:w-[870px] lg:h-[600px]" viewBox="0 0 870 600" fill="none">
            <path d="M870 600H0L270.381 279.474L522.368 0H870V600Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 hidden md:block lg:hidden">
          <svg className="w-[461px] h-[460px]" viewBox="0 0 461 460" fill="none">
            <path d="M461 460H0L143.271 214.263L276.795 0H461V460Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 block md:hidden">
          <svg className="w-[251px] h-[320px]" viewBox="0 0 251 320" fill="none">
            <path d="M251 320H0L78.0063 149.053L150.706 0H251V320Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Hero Text Box */}
        <div className="relative z-10 ml-[40px] mt-[80px] aboutcontentbox2 aboutcontentbox md:mt-[40px] md:w-[442px] md:ml-[200px] lg:ml-[240px] xl:ml-[570px] w-[240px] h-[80px] md:h-[80px] lg:h-[135px] bg-white flex flex-col items-start p-10 shadow-lg">
          <h2 className="text-black mt-[-25px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Algo Pumps
          </h2>
        </div>
      </section>

      {/* Specifications Table */}
      <div className="max-w-[1000px] mx-auto mt-[40px] sm:mb-12 px-4">
        <h1 className="text-[#E4492E] font-['Monda'] text-[32px] md:text-[48px] font-bold mb-6">
          Algo Pumps
        </h1>
        <div className="border border-[#B9B9B9] rounded-md overflow-hidden">
          <table className="w-full border-collapse">
            <tbody>
              {[
                { label: "Type", value: "Automatic" },
                { label: "Material", value: "Mild Steel" },
                { label: "Motor Horsepower", value: "0.37 to 75kw" },
                { label: "Head", value: "300 mts" },
                { label: "Max Flow Rate", value: "250 m3/h" },
                { label: "Phase", value: "Single Phase" },
              ].map((item, idx) => (
                <tr key={idx}>
                  <td className="bg-[#E6EFF6] p-4 text-black font-manrope text-[16px] lg:text-[20px] font-semibold border-b border-[#B9B9B9] w-1/2">
                    {item.label}
                  </td>
                  <td className="p-4 text-black font-manrope text-[16px] lg:text-[20px] font-normal border-b border-[#B9B9B9] w-1/2">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Description Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="max-w-[1000px] mx-auto text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] leading-[28px] space-y-6">
          <p>
            These pumps are for RO plants and boilers. It's a vertical multi-stage high-pressure pump with a power
            range from 0.37KW to 75KW, discharge up to 200 m³/h, and head up to 300 meters.
          </p>
          <p>
            Delivery Time: 1 week. Algo pumps are advanced engineering solutions developed by Renault Engineers. These
            cutting-edge pumps utilize innovative algorithms to optimize performance and efficiency.
          </p>
          <p>
            Algopumps are smart devices designed to optimize engine performance and fuel efficiency. Their algorithm-based control enables precise fuel regulation, maximizing combustion and performance.
          </p>
          <p>
            Compact, durable, and built for harsh environments, Algo Pumps improve acceleration, responsiveness, and
            fuel economy while reducing emissions. They reflect Renault's innovation and commitment to exceptional
            engineering.
          </p>
          <p>
            Their intelligent system adapts to driving conditions in real-time, ensuring the perfect fuel-air mix for
            efficiency. Renault engineers continue to refine Algo Pumps for even greater powertrain performance and sustainability.
          </p>
        </div>

        {/* Product Images */}
        <div className="max-w-[1000px] mx-auto mt-12 space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"].map((img, idx) => (
              <div
                key={idx}
                className="bg-cover bg-center bg-no-repeat rounded-sm"
                style={{
                  backgroundImage: `url('/assets/Ourproducts/Algopumps/${img}')`,
                  aspectRatio: "1/1",
                  maxWidth: "180px",
                  maxHeight: "180px",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["image5.jpg", "image6.jpg", "image7.jpg", "iamge8.jpg"].map((img, idx) => (
              <div
                key={idx}
                className="bg-cover bg-center bg-no-repeat rounded-sm"
                style={{
                  backgroundImage: `url('/assets/Ourproducts/Algopumps/${img}')`,
                  aspectRatio: "1/1",
                  maxWidth: "180px",
                  maxHeight: "180px",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Algopumps;
