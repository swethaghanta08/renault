"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Footer from "../../home/Footer"
import Mechanicalsealsnavbar from "../Mechanicalsealsnavbar/Mechanicalsealsnavbar"

const U164 = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [mainImage, setMainImage] = useState("/assets/Ourproducts/Mechanicalseals/u164single/image1.jpg")

  const toggleTab = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId)
  }

  const productFeatures = [
    "Single and Dual seal configuration",
    "UnBalanced design",
    "Independent of direction of rotation",
    "Cartridge construction",
   "Designed for bottom entry vessels",
   "Rotary unit with multiple springs",
   "Construction with Integrated bearing",
"For glass-lined vessels, design according to DIN 28138 T2",
"U164 Single & Dual Seals (Top-side Entry)"   
]

  const technicalFeatures = [
   "Available with or without floating bearing",
   "Double seals can be applied at higher pressure and rotating speed",
   "Suitable for standardizations",
   "Rugged design to ensure long term reliability and operating life",
   "Seals are assembled in cartridge construction for easy fitment",
   "Over all connecting dimensions are tailor made to customer's specifications",
   "The seal design is unique as it closes due to the hydraulic product pressure as well as overlaying barrier pressure"
  ]

  const industrialApplications = [
  "Chemical industry",
  "Non-toxic media with single seal",
  "Pharmaceutical industry",
  "Toxic media with double seal",
  "Agitators",
  "Reactors",
  ]

  const materialOptions = ["According to application and customer's specification" ]

  const performanceCapabilities = [
 "Sizes: d3 = Upto 160 mm (Upto 6.500’’)",
 "Pressure: p1 = vacuum ... 16 bar (232 PSI), p3 = max. 18 bar (261 PSI)",
 "Pressure: p1 = vacuum ... 16 bar (232 PSI), p3 = max. 18 bar (261 PSI)b Speed = 0 ... 5 m/s (0 ... 16 ft/s)"
  ]

  const partsList = [
    { no: "1", description: "	Seal face, atmosphere side" },
    { no: "2", description: "	Seal face, product side" },
    { no: "6, 7, 13, 14, 15", description: "O-Ring" },
    { no: "11", description: "Seat, product side" },
    { no: "12", description: "Seat, atmosphere side" },
    




  ]

  const thumbnails = [
    "/assets/Ourproducts/Mechanicalseals/u164single/image1.jpg",
    "/assets/Ourproducts/Mechanicalseals/u164single/image2.jpg",
  ]

  return (
    <>
      <section
        className="relative mx-auto w-full max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] h-[320px] md:h-[460px] lg:h-[600px] bg-cover bg-center flex items-center justify-center mt-[20px]"
        style={{
          backgroundImage: `url(${typeof window !== "undefined" && window.innerWidth >= 1024
            ? "/assets/Contactpage/Herosection/heroimage-desktop.png"
            : typeof window !== "undefined" && window.innerWidth >= 768
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
            className="lg:w-[700px] lg:h-[600px] xl:w-[870px]"
            viewBox="0 0 870 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M870 600H0L270.381 279.474L522.368 0H870V600Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>

        {/* SVG for Medium Screens */}
        <div className="absolute top-0 right-0 hidden md:block lg:hidden">
          <svg className="w-[461px] h-[460px]" viewBox="0 0 461 460" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M461 460H0L143.271 214.263L276.795 0H461V460Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>

        {/* SVG for Phone Screens */}
        <div className="absolute top-0 right-0 block md:hidden">
          <svg className="w-[251px] h-[320px]" viewBox="0 0 251 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M251 320H0L78.0063 149.053L150.706 0H251V320Z" fill="black" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Content Box */}
        <div className="relative z-10 ml-[20px] sm:ml-[40px] mt-[80px] aboutcontentbox2 aboutcontentbox md:mt-[40px] w-[240px] h-[100px] md:w-[442px] md:h-[121px] md:ml-[100px] lg:ml-[240px] lg:h-[155px] lg:w-[605px] xl:ml-[570px] bg-white flex flex-col items-start p-6 sm:p-10 gap-0 shadow-lg">
          {/* Heading */}
          <h2 className="text-black ml-[-10px] md:mt-[-20px] sm:ml-[-20px] font-monda text-[18px] sm:text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[24px] sm:leading-[28px] md:leading-[50px] w-[216px] md:w-[402px] lg:w-[502px]">
            Mechanical Seals
          </h2>
          <div className="flex items-center mt-[-20px] ml-[-10px] sm:ml-[-20px] gap-2 md:mt-[-20px] lg:mt-[-10px]">
            <h4 className="text-[#CF422A] mt-[30px] xl:mt-[30px] text-[Monda] text-[12px] md:text-[20px] lg:text-[24px] lg:mt-[10px] font-bold leading-normal capitalize">
            U164 Single & Dual Seals
            </h4>
          </div>
        </div>
      </section>

      {/* Navbar Below Hero Section */}
      <div className="max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]  mx-auto">
        <Mechanicalsealsnavbar/>
      </div>

      {/* Product Detail Section */}
      <section className="max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-32 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-28">
          {/* Left Side - Product Info */}
          <div className="w-full  lg:pr-8">
            <h1 className="text-[#CF422A] font-monda text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight md:leading-[60px] self-stretch mb-6 md:mb-8">
            U164 Single & Dual Seals (Top-side Entry)
            </h1>

            <h2 className="text-black text-center md:text-left font-manrope text-xl sm:text-2xl font-bold leading-normal capitalize mb-4">
              Product Description
            </h2>

            <ul className="space-y-2 sm:space-y-3 mb-6 md:mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img
                    src="/assets/Ourproducts/Standard/drop down.png"
                    alt="Bullet"
                    className="w-5 h-5 sm:w-6 sm:h-6 mt-1"
                  />
                  <p className="text-[#827E7D] font-manrope text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 tracking-[0.4px] flex-1 self-stretch">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            {/* Details Button */}
            <button className="flex w-full h-12 sm:h-14 p-[10px_24px] sm:p-[12px_32px] items-center justify-center gap-2.5 bg-[#CF422A] text-white font-manrope text-lg sm:text-xl font-bold mb-6">
              Details
            </button>

            {/* Parts Table */}
            <div className="w-full border border-gray-200 overflow-x-auto">
              {/* Table Header */}
              <div className="flex border-b border-gray-200">
                <div className="flex p-[8px_10px] sm:p-[10px_12px] items-start flex-1 border-r border-gray-200 min-w-[100px]">
                  <h3 className="text-black font-manrope text-lg sm:text-xl md:text-2xl font-bold leading-normal capitalize">
                    Item No.
                  </h3>
                </div>
                <div className="flex p-[8px_10px] sm:p-[10px_12px] justify-center items-center flex-1 min-w-[200px]">
                  <h3 className="text-black font-manrope text-lg sm:text-xl md:text-2xl font-bold leading-normal capitalize">
                    Description
                  </h3>
                </div>
              </div>

              {/* Table Rows */}
              {partsList.map((part, index) => (
                <div key={index} className="flex border-b border-gray-200 last:border-b-0">
                  <div className="flex p-[8px_10px] sm:p-[10px_12px] items-start flex-1 border-r border-gray-200 min-w-[100px]">
                    <p className="text-black font-manrope text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 tracking-[0.4px] flex-1">
                      {part.no}
                    </p>
                  </div>
                  <div className="flex p-[8px_10px] sm:p-[10px_12px] items-start flex-1 min-w-[200px]">
                    <p className="text-black font-manrope text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 tracking-[0.4px] flex-1">
                      {part.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Images and Accordion */}
          <div className="w-full lg:w-auto lg:pl-8 mt-8 lg:mt-0">
            {/* Product Images */}
            <div className="flex flex-col items-center gap-4 sm:gap-7 mb-8">
              <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px]">
                <img
                  src={mainImage || "/placeholder.svg"}
                  alt="MTX Dual Seal"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex gap-2 sm:gap-4">
                {thumbnails.map((thumb, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer border border-transparent hover:border-[#CF422A]"
                    onClick={() => setMainImage(thumb)}
                  >
                    <img
                      src={thumb || "/placeholder.svg"}
                      alt={`MTX Dual Seal thumbnail ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="flex flex-col gap-3 w-full ">
              {/* Technical Features */}
              <div className="w-full">
                <div
                  className={`flex justify-between items-center p-4 px-6 w-full cursor-pointer transition-all duration-300 ${activeTab === "technical" ? "bg-[#CF422A] text-white" : "bg-[#DBE6EB] text-black"
                    }`}
                  onClick={() => toggleTab("technical")}
                >
                  <h3 className="font-manrope text-[16px] md:text-[20px] font-bold capitalize">Technical Features</h3>
                  {activeTab === "technical" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === "technical" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-4 px-6 bg-[#FCEDEA]">
                    <ul className="space-y-2">
                      {technicalFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <img
                            src="/assets/Ourproducts/Standard/drop down.png"
                            alt="Bullet"
                            className="w-[24px] h-[24px] mt-1"
                          />
                          <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Typical Industrial Applications */}
              <div className="w-full">
                <div
                  className={`flex justify-between items-center p-4 px-6 w-full cursor-pointer transition-all duration-300 ${activeTab === "applications" ? "bg-[#CF422A] text-white" : "bg-[#DBE6EB] text-black"
                    }`}
                  onClick={() => toggleTab("applications")}
                >
                  <h3 className="font-manrope text-[16px] md:text-[20px] font-bold capitalize">
                    Typical Industrial Applications
                  </h3>
                  {activeTab === "applications" ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === "applications" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-4 px-6 bg-[#FCEDEA]">
                    <ul className="space-y-2">
                      {industrialApplications.map((application, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <img
                            src="/assets/Ourproducts/Standard/drop down.png"
                            alt="Bullet"
                            className="w-[24px] h-[24px] mt-1"
                          />
                          <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">{application}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div className="w-full">
                <div
                  className={`flex justify-between items-center p-4 px-6 w-full cursor-pointer transition-all duration-300 ${activeTab === "materials" ? "bg-[#CF422A] text-white" : "bg-[#DBE6EB] text-black"
                    }`}
                  onClick={() => toggleTab("materials")}
                >
                  <h3 className="font-manrope text-[16px] md:text-[20px] font-bold capitalize">Materials</h3>
                  {activeTab === "materials" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === "materials" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-4 px-6 bg-[#FCEDEA]">
                    <ul className="space-y-2">
                      {materialOptions.map((material, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <img
                            src="/assets/Ourproducts/Standard/drop down.png"
                            alt="Bullet"
                            className="w-[24px] h-[24px] mt-1"
                          />
                          <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">{material}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Performance Capabilities */}
              <div className="w-full">
                <div
                  className={`flex justify-between items-center p-4 px-6 w-full cursor-pointer transition-all duration-300 ${activeTab === "performance" ? "bg-[#CF422A] text-white" : "bg-[#DBE6EB] text-black"
                    }`}
                  onClick={() => toggleTab("performance")}
                >
                  <h3 className="font-manrope text-[16px] md:text-[20px] font-bold capitalize">
                    Performance Capabilities
                  </h3>
                  {activeTab === "performance" ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === "performance" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-4 px-6 bg-[#FCEDEA]">
                    <ul className="space-y-2">
                      {performanceCapabilities.map((capability, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <img
                            src="/assets/Ourproducts/Standard/drop down.png"
                            alt="Bullet"
                            className="w-[24px] h-[24px] mt-1"
                          />
                          <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">{capability}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Notes*/}
              <div className="w-full">
                <div
                  className={`flex justify-between items-center p-4 px-6 w-full cursor-pointer transition-all duration-300 ${activeTab === "notes" ? "bg-[#CF422A] text-white" : "bg-[#DBE6EB] text-black"
                    }`}
                  onClick={() => toggleTab("notes")}
                >
                  <h3 className="font-manrope text-[16px] md:text-[20px] font-bold capitalize">Notes</h3>
                  {activeTab === "notes" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === "notes" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-4 px-6 bg-[#FCEDEA]">
                    <ul className="space-y-2">
                      <li className="flex flex-col items-start gap-2">
                        <img
                          src="/assets/Ourproducts/Standard/drop down.png"
                          alt="Bullet"
                          className="w-[24px] h-[24px] mt-1"
                        />
                        <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">
                        Options:
                        </p>
                        <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">
                        Cooling or heating flange
                        </p>
                        <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">
                        Leakage drain, flush or heating flange
                        </p>
                        <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">
                        Leakage drain or flush
                        </p>
                       
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
                 {/* Standards*/}
            <div className="w-full">
                <div
                  className={`flex justify-between items-center p-4 px-6 w-full cursor-pointer transition-all duration-300 ${activeTab === "standards" ? "bg-[#CF422A] text-white" : "bg-[#DBE6EB] text-black"
                    }`}
                  onClick={() => toggleTab("standards")}
                >
                  <h3 className="font-manrope text-[16px] md:text-[20px] font-bold capitalize">Standards</h3>
                  {activeTab === "standards" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === "standards" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-4 px-6 bg-[#FCEDEA]">
                    <ul className="space-y-2">
                      <li className="flex flex-col items-start gap-2">
                        <img
                          src="/assets/Ourproducts/Standard/drop down.png"
                          alt="Bullet"
                          className="w-[24px] h-[24px] mt-1"
                        />
                        <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">
                        FDA
                        </p>
                        
                      </li>
                      <li className="flex flex-col items-start gap-2">
                        <img
                          src="/assets/Ourproducts/Standard/drop down.png"
                          alt="Bullet"
                          className="w-[24px] h-[24px] mt-1"
                        />
                        <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">
                        DIN 28136 T2 (for steel vessels)
                        </p>
                        
                      </li>
                      <li className="flex flex-col items-start gap-2">
                        <img
                          src="/assets/Ourproducts/Standard/drop down.png"
                          alt="Bullet"
                          className="w-[24px] h-[24px] mt-1"
                        />
                        <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">
                        DIN 28141 (flange connection for steel vessels)
                        </p>
                        
                      </li>
                      <li className="flex flex-col items-start gap-2">
                        <img
                          src="/assets/Ourproducts/Standard/drop down.png"
                          alt="Bullet"
                          className="w-[24px] h-[24px] mt-1"
                        />
                        <p className="text-[#827E7D] font-manrope text-base font-normal leading-7">
                        DIN 28154 (shaft end for steel vessels)
                        </p>
                        
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
           


            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto">
        <Footer />
      </div>
    </>
  )
}

export default U164
