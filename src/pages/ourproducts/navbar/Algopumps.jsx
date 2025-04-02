import Footer from "../../home/Footer"

const Algopumps = () => {
  return (
    <div>
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
        {/* SVG for Large & Extra-Large Screens */}
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

        {/* SVG for Medium Screens */}
        <div className="absolute top-0 right-0 hidden md:block lg:hidden">
          <svg
            className="w-[461px] h-[460px] flex-shrink-0"
            viewBox="0 0 461 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M461 460H0L143.271 214.263L276.795 0H461V460Z" fill="black" fillOpacity="0.6" />
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
            <path d="M251 320H0L78.0063 149.053L150.706 0H251V320Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Content Box */}
        <div className="relative z-10 ml-[40px] mt-[80px] aboutcontentbox2 aboutcontentbox md:mt-[40px] md:w-[442px] md:ml-[200px] lg:ml-[240px] xl:ml-[570px] w-[240px] h-[80px] md:h-[80px] lg:h-[135px] bg-white flex flex-col items-start p-10 gap-0 md:gap-0 lg:gap-4 lg:w-[605px] shadow-lg">
          {/* Flex container for Red Line & Subheading */}

          {/* Heading */}
          <h2 className="text-black mt-[-25px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Algo Pumps
          </h2>
        </div>
      </section>
      {/* Specifications Table */}
      <div className="max-w-[1000px] mx-auto mt-[40px] sm:mb-12 px-4">
        <h1 className="text-[#E4492E] font-['Monda'] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] self-stretch mb-6">
          Algo Pumps
        </h1>
        <div className="border border-[#B9B9B9] rounded-md overflow-hidden">
          <table className="w-full border-collapse">
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="bg-[#E6EFF6] p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] w-1/2 border-b border-[#B9B9B9]">
                  Type
                </td>
                <td className="p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] w-1/2 border-b border-[#B9B9B9]">
                  Automatic
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="bg-[#E6EFF6] p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] w-1/2 border-b border-[#B9B9B9]">
                  Material
                </td>
                <td className="p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] w-1/2 border-b border-[#B9B9B9]">
                  Mild Steel
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td className="bg-[#E6EFF6] p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] w-1/2 border-b border-[#B9B9B9]">
                  Motor Horsepower
                </td>
                <td className="p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] w-1/2 border-b border-[#B9B9B9]">
                  0.37 to 75kw
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td className="bg-[#E6EFF6] p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] w-1/2 border-b border-[#B9B9B9]">
                  Head
                </td>
                <td className="p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] w-1/2 border-b border-[#B9B9B9]">
                  300 mts
                </td>
              </tr>

              {/* Row 5 */}
              <tr>
                <td className="bg-[#E6EFF6] p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] w-1/2 border-b border-[#B9B9B9]">
                  Max Flow Rate
                </td>
                <td className="p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] w-1/2 border-b border-[#B9B9B9]">
                  250 m3/h
                </td>
              </tr>

              {/* Row 6 */}
              <tr>
                <td className="bg-[#E6EFF6] p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] w-1/2">
                  Phase
                </td>
                <td className="p-4 text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] w-1/2">
                  Single Phase
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Standard Cartridge Seals Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">
            These pumps are for RO plants, Biolers, Its a vertical multi stage High Pressure Pump Power range - 0.37KW.
            75KW Discharge Range upto 200 m3/h Head Range upto 300mts
          </p>

          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">
            Delivery Time: 1 week Algo pumps are advanced engineering solutions developed by Renault Engineers. These
            cutting-edge pumps utilize innovative algorithms to optimize performance and efficiency in various
            applications.
          </p>

          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">
            Algopumps, developed by Renaultengineers, are cutting-edge devices designed to optimize engine performance
            and fuel efficiency.
            <br />
            These innovative pumps utilize advanced algorithms to precisely regulate fuel flow and maximize combustion
            efficiency. Renaultengineers meticulously crafted the Algopumps to ensure seamless integration with the
            engine system, enhancing overall performance.
            <br />
            By accurately controlling fuel delivery, these pumps enhance power output while reducing emissions,
            contributing to a greener and more sustainable driving experience. With their compact design and robust
            construction, Algo- Pumps are built to withstand harsh operating conditions and deliver consistent
            performance over time.
            <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">
              The intelligent algorithms embedded within these pumps continuously adapt to changing driving conditions,
              providing optimal fuel-air mixture for efficient combustion.
              <br />
              Renault engineers have prioritized reliability and durability, making Algo-pumps a trusted component in
              their vehicles’ powertrain systems. Drivers can experience smoother acceleration, improved responsiveness,
              and increased fuel economy with the help of Renault’s Algo-pumps. These cutting-edge pumps reflect
              Renault’s commitment to innovation and their pursuit of delivering exceptional driving experiences to
              customers worldwide. Renault engineers continue to refine and enhance the Algo- pumps, pushing the
              boundaries of engine efficiency and performance in the automotive industry.
            </p>
          </p>
        </div>

        {/* Product Images - First Row */}
        <div className="max-w-[1000px] mx-auto mt-12">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/Algopumps/image1.jpg')",
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
                backgroundImage: "url('/assets/Ourproducts/Algopumps/image2.jpg')",
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
                backgroundImage: "url('/assets/Ourproducts/Algopumps/image3.jpg')",
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
                backgroundImage: "url('/assets/Ourproducts/Algopumps/image4.jpg')",
                aspectRatio: "1/1",
                maxWidth: "180px",
                maxHeight: "180px",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/Algopumps/image5.jpg')",
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
                backgroundImage: "url('/assets/Ourproducts/Algopumps/image6.jpg')",
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
                backgroundImage: "url('/assets/Ourproducts/Algopumps/image7.jpg')",
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
                backgroundImage: "url('/assets/Ourproducts/Algopumps/iamge8.jpg')",
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
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default Algopumps

