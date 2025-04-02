"use client"

import { useEffect, useState } from "react"
import Footer from "../../home/Footer"
import Refinarynavbar from "../Refinarynavbar/Refinarynavbar"

const QuenchOilPump= () => {
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
          Refinery
          </h2>
          <div className="flex items-center mt-[-20px] ml-[-10px] sm:ml-[-20px] gap-2 md:mt-[-20px] lg:mt-[-10px]">
            <h4 className="text-[#CF422A]  mt-[30px]  text-[Monda] lg:text-[24px] lg:mt-[10px] text-[12px] md:text-[20px] font-bold leading-normal capitalize">
            Quench Oil Pump
            </h4>
          </div>

        </div>
      </section>
      <div className="max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]  mx-auto">
        <Refinarynavbar/>
      </div>

      {/* Original Agglomerator Component */}
      <div className="max-w-[1000px] mx-auto px-4 py-8 font-manrope">
        {/* Header Section */}
        <h1 className="text-[#CF422A] font-monda text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-[125%] mb-2 sm:mb-4">
        Quench Oil Pump
        </h1>

        <p className="text-[#827E7D] text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] mb-4 sm:mb-6">
        Quench oil pump are basically employed for quenching system in various application of refineries.</p>
        {/* Seal Type Button */}
        <div className="flex items-center bg-[#E4492E] p-2 sm:p-3 md:px-8 md:py-3 mb-4 sm:mb-6">
          <h3 className="text-white font-monda text-lg sm:text-xl md:text-2xl font-bold leading-[28px] md:leading-[32px]">
            Seal Type:GSPH-KD
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
              Quenching oil
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
              1475
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
            210 C
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
              1 Bar
              </span>
            </div>
          </div>
        </div>

        {/* Pharmaceutical Section */}
        <h2 className="text-black text-center font-monda text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold leading-[36px] sm:leading-[42px] md:leading-[50px] mb-4 sm:mb-8">
        Refinery
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
         

          <div className="w-full lg:max-w-[953px]">
            <p className="text-[#827E7D] text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-[22px] sm:leading-[26px] md:leading-[28px] tracking-[0.4px]">
            The processing of crude oil in refineries is a complex and multi-stage process in which crude oil is transformed into refined, high-quality end products or feed materials for petrochemical industry. Sealing technology for such diverse applications have to meet challenges in various respects; risk of insufficient lubrication and dry running, media with a diversity of physical properties, high and low temperature ranges and the handling of hazardous substances and all other conditions which need to be controlled with absolute reliability. With a comprehensive range of API-compliant quality seals and supply systems Sealmatic is playing a key role towards ensuring the reliability and safety of refinery processes. </p>         </div>
        </div>
       
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default QuenchOilPump

