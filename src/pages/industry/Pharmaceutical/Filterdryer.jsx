"use client"

import { useEffect, useState } from "react"
import Footer from "../../home/Footer"
import Pharmaceuticalnavbar from "../Pharmaceuticalnavbar.jsx/Pharmaceuticalnavbar"

const Filterdryer = () => {
  const [backgroundImage, setBackgroundImage] = useState("/assets/Contactpage/Herosection/heroimage-mobile.png")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBackgroundImage("/assets/Contactpage/Herosection/heroimage-desktop.png")
      } else if (window.innerWidth >= 768) {
        setBackgroundImage("/assets/Contactpage/Herosection/heroimage-tab.png")
      } else {
        setBackgroundImage("/assets/Contactpage/Herosection/heroimage-phone.png")
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] h-[320px] md:h-[460px] lg:h-[600px] xl:w-[1440px] mt-[20px] mx-auto w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
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
        <div className="relative z-10 ml-[20px] sm:ml-[40px] mt-[80px] aboutcontentbox2 aboutcontentbox md:mt-[40px] md:w-[442px] md:ml-[100px] lg:ml-[240px] w-[240px] h-[100px] md:h-[121px] xl:ml-[570px] lg:h-[155px] bg-white flex flex-col items-start p-6 sm:p-10 md:gap-0 gap-0 lg:gap-4 lg:w-[605px] shadow-lg">
          {/* Flex container for Red Line & Subheading */}

          {/* Heading */}
          <h2 className="text-black ml-[-10px] md:mt-[-20px] sm:ml-[-20px] font-monda text-[12px] sm:text-[20px] lg:text-[30px] md:text-[20px] font-bold leading-[24px] sm:leading-[28px] md:leading-[50px] w-[216px] md:w-[402px] lg:w-[502px] ">
            Pharmaceutical & Sterile Processes
          </h2>
          <div className="flex items-center mt-[-20px] ml-[-10px] sm:ml-[-20px] gap-2 md:mt-[-20px] lg:mt-[-10px]">
            <h4 className="text-[#CF422A]  mt-[30px]  text-[Monda] lg:text-[24px] lg:mt-[10px] text-[12px] md:text-[20px] font-bold leading-normal capitalize">
            Filter Dryer
            </h4>
          </div>

        </div>
      </section>
      <div className="max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]  mx-auto">
        <Pharmaceuticalnavbar />
      </div>

      {/* Original Agglomerator Component */}
      <div className="max-w-[1000px] mx-auto px-4 py-8 font-manrope">
        {/* Header Section */}
        <h1 className="text-[#CF422A] font-monda text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-[125%] mb-2 sm:mb-4">
        Filter Dryer
        </h1>

        <p className="text-[#827E7D] text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] mb-4 sm:mb-6">
        A filter dryer is an application for the process equipment which is employed during the filtration and drying phase of
         a pharmaceutical, bio pharmaceutical or chemical process for an active pharmaceutical ingredient (API) or other compounds
          production. The industries like sterile processes and pharmaceutical requires decisive and specialized mechanical seal
           on the processing equipment or machinery, they are designed precisely to avoid the formation of deposits that could
            cause bacterial contamination of the medium.
        </p>

        {/* Seal Type Button */}
        <div className="flex items-center bg-[#E4492E] p-2 sm:p-3 md:px-8 md:py-3 mb-4 sm:mb-6">
          <h3 className="text-white font-monda text-lg sm:text-xl md:text-2xl font-bold leading-[28px] md:leading-[32px]">
            Seal Type:  U154 KL-D

          </h3>
        </div>

        {/* Specifications Table */}
        <div className="mb-8 sm:mb-12 border-b border-r border-[#B9B9B9]">
          {/* Row 1 */}
          <div className="flex flex-wrap border-t border-l border-[#B9B9B9]">
            <div className="flex p-2 md:p-3 items-start flex-1 bg-[#E6EFF6]">
              <span className="text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] flex-1">
                Media
              </span>
            </div>
            <div className="flex flex-col justify-center items-start flex-1 border-t border-l border-[#B9B9B9] p-2 md:p-3">
              <span className="text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] flex-1">
              Pharmecutical Powder
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap border-t border-l border-[#B9B9B9]">
            <div className="flex p-2 md:p-3 items-start flex-1 bg-[#E6EFF6]">
              <span className="text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] flex-1">
                RMP
              </span>
            </div>
            <div className="flex flex-col justify-center items-start flex-1 border-t border-l border-[#B9B9B9] p-2 md:p-3">
              <span className="text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] flex-1">
              50
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap border-t border-l border-[#B9B9B9]">
            <div className="flex p-2 md:p-3 items-start flex-1 bg-[#E6EFF6]">
              <span className="text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] flex-1">
                Temperature
              </span>
            </div>
            <div className="flex flex-col justify-center items-start flex-1 border-t border-l border-[#B9B9B9] p-2 md:p-3">
              <span className="text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] flex-1">
              140 C
              </span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-wrap border-t border-l border-[#B9B9B9]">
            <div className="flex p-2 md:p-3 items-start flex-1 bg-[#E6EFF6]">
              <span className="text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-[24px] sm:leading-[28px] flex-1">
                Pressure
              </span>
            </div>
            <div className="flex flex-col justify-center items-start flex-1 border-t border-l border-[#B9B9B9] p-2 md:p-3">
              <span className="text-black font-manrope text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] flex-1">
              Vacuum to 6 bar
              </span>
            </div>
          </div>
        </div>

        {/* Pharmaceutical Section */}
        <h2 className="text-black text-center font-monda text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold leading-[36px] sm:leading-[42px] md:leading-[50px] mb-4 sm:mb-8">
          Pharmaceutical & Sterile Processes
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="w-full lg:w-[461px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[347px]">
            <img
              src="/assets/industry/Agglometer/image1.png"
              alt="Pharmaceutical equipment"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:max-w-[753px]">
            <p className="text-[#827E7D] text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[22px] sm:leading-[26px] md:leading-[28px] tracking-[0.4px]">


            In addition to meeting technical requirements a seal has to display many other characteristics in connection with 
            cleanliness, health and general legislation. These include for example materials which are compatible with food,
             smooth and abrasion-proof surfaces which are easy to clean, complete units which can be sterilized and cleaned
              without having to be dismantled (SIP/CIP). Sealmatic mechanical seals have been used for such demanding applications
               with great success in sterile processes. Our range of mechanical seals includes a broad spectrum of high-quality,
                specifically optimized sealing solutions ranging from standard solutions to specialized system solutions for nearly
                 any application in the pharmaceutical industry.
            </p>
          </div>
        </div>

      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Filterdryer

