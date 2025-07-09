
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { ChevronDown, ChevronUp } from "lucide-react"
import Footer from "../../home/Footer"
import StandardCartridgeNavbar from "../Standardcatridgenavbar/StandardCatridgeNavbar"


const B750VN = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [mainImage, setMainImage] = useState("/assets/Ourproducts/Standard/Standardmainpage/B750vn/image1.jpg")

  // Preload hero and product images for SEO and performance
  useEffect(() => {
    const imagesToPreload = [
      "/assets/Contactpage/Herosection/heroimage-desktop.png",
      "/assets/Contactpage/Herosection/heroimage-tab.png",
      "/assets/Contactpage/Herosection/heroimage-phone.png",
      "/assets/Ourproducts/Standard/Standardmainpage/B750vn/image1.jpg",
      "/assets/Ourproducts/Standard/Standardmainpage/B750vn/image2.jpg"
    ]
    imagesToPreload.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  const toggleTab = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId)
  }

  const productFeatures = [
    "Single seal configuration",
    "Balanced design",
    "Independent of direction of rotation",
    "Cartridge construction",
    "Category 2 and 3, Type A, Arrangement1",
    "Design in accordance to API 682 / ISO 21049",
    "Pumping device available for increased efficiency in circulation (B750VP)",
    "Rotary unit with multiple springs",
    "B750VN – Renault Engineers"
  ]

  const technicalFeatures = [
    "Ideal for use in ANSI process pumps",
    "O-rings dynamically isolated to prevent shaft damage",
    "Dimensional modification of the stuffing box chamber is not required due to short radial installation height",
    "Ideal to convert and retrofit pumps with packings and large volume OEM production",
    "Compact and sturdy construction for easy installation, which reduce downtime",
    "Rugged design for long operating life",
  ]
  const industrialApplications = [
    "ANSI process pumps",
    "Chemical industry",
    "Food and beverage industry",
    "Petrochemical industry",
    "Pharmaceutical industry",
    "Universally applicable",
    "Water and waste water technology",
  ]

  const materialOptions = [
    "Seal face: Silicon carbide (Q1), Carbon graphite resin impregnated (B), Tungsten carbide (U2)",
    "Seat: Silicon carbide (Q1)",
    "Secondary seals: FKM (V), EPDM (E), FFKM (K), Perflourocarbon rubber/PTFE (U1)",
    "Springs: Hastelloy® C-4 (M)",
    "Metal parts: CrNiMo steel (G), CrNiMo cast steel (G)",
  ]

  const partsList = [
    { no: "1.1.1", description: "	Seal face" },
    { no: "1.1.2", description: "	Driver" },
    { no: "1.1.3", description: "	Thrust ring" },
    { no: "1.1.4, 1.3, 6 ,8", description: "O-Ring" },
    { no: "1.1.5", description: "Sleeve" },
    { no: "1.1.6", description: "Spring" },
    { no: "1.1.7", description: "Set screw" },
    { no: "1.2", description: "Seat" },
    { no: "2", description: "Shaft sleeve" },
    { no: "4", description: "Housing" },
    { no: "5", description: "Trottle ring" },
    { no: "7", description: "Insert" },
    { no: "9", description: "Washer" },
    { no: "10", description: "Assembly fixture" },
    { no: "11", description: "Hexagon bolt" },
    { no: "12", description: "Set ring" },
    { no: "13", description: "Set screw" },

  ]

  const thumbnails = [
    "/assets/Ourproducts/Standard/Standardmainpage/B750vn/image1.jpg",
    "/assets/Ourproducts/Standard/Standardmainpage/B750vn/image2.jpg",
  ]

  return (
    <>
      <Helmet>
        <title>B750VN / H75VN | Standard Cartridge Seals | Renault</title>
        <meta name="description" content="B750VN / H75VN: Single seal, balanced, cartridge construction, API 682/ISO 21049, for ANSI process pumps and more. Technical features, applications, materials, and performance." />
        <link rel="preload" as="image" href="/assets/Contactpage/Herosection/heroimage-desktop.png" />
        <link rel="preload" as="image" href="/assets/Contactpage/Herosection/heroimage-tab.png" />
        <link rel="preload" as="image" href="/assets/Contactpage/Herosection/heroimage-phone.png" />
        <link rel="preload" as="image" href="/assets/Ourproducts/Standard/Standardmainpage/B750vn/image1.jpg" />
        <link rel="preload" as="image" href="/assets/Ourproducts/Standard/Standardmainpage/B750vn/image2.jpg" />
      </Helmet>
      <section
        className="relative xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] h-[320px] md:h-[460px] xl:w-[1440px] md:flex-shrink-0 mt-[20px] mx-auto w-full lg:w-[1024px] lg:h-[600px] bg-cover bg-center flex items-center justify-center"
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
            className="md:w-[461px] md:h-[460px] md:flex-shrink-0"
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
          <h2 className="text-black ml-[-10px] md:mt-[-20px] sm:ml-[-20px] font-monda text-[18px] sm:text-[20px] lg:text-[36px] md:text-[28px] font-bold leading-[24px] sm:leading-[28px] md:leading-[50px] w-[216px] md:w-[402px] lg:w-[502px] ">
            Standard cartridge seals
          </h2>
          <div className="flex items-center mt-[-20px] ml-[-10px] sm:ml-[-20px] gap-2 md:mt-[-20px] lg:mt-[-10px]">
            <h4 className="text-[#CF422A] mt-[30px] font-[Monda] lg:text-[24px] lg:mt-[10px] text-[12px] md:text-[20px] font-bold leading-normal capitalize">
              B750VN<span className="mx-[2px]">/</span>H75VN
            </h4>
          </div>


        </div>
      </section>

      {/* Navbar Below Hero Section */}
      <div className="max-w-[1440px] mx-auto">
        <StandardCartridgeNavbar />
      </div>

      {/* Product Detail Section */}
      <section className="xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-24 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-28">
          {/* Left Side - Product Info */}
          <div className="w-full lg:w-[687px] lg:pr-8">
          <h1 className="text-[#CF422A] mt-[30px] font-[Monda] lg:text-[44px] lg:mt-[10px] text-[12px] md:text-[20px] font-bold leading-normal capitalize">
          B750VN<span className="mx-[2px]">/</span>H75VN
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
                  alt="B750VN / H75VN main image"
                  className="w-full h-full object-contain"
                  loading="eager"
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
                      alt={`B750VN / H75VN thumbnail ${index + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="flex flex-col gap-3 w-full  mx-auto lg:mx-0">
              {/* Technical Features */}
              <div className="w-full">
                <div
                  className={`flex justify-between items-center p-3 sm:p-4 px-4 sm:px-6 w-full cursor-pointer transition-all duration-300 ${activeTab === "technical" ? "bg-[#CF422A] text-white" : "bg-[#DBE6EB] text-black"
                    }`}
                  onClick={() => toggleTab("technical")}
                >
                  <h3 className="font-manrope text-[16px] md:text-[20px] font-bold capitalize">
                    Technical Features
                  </h3>
                  {activeTab === "technical" ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === "technical" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-3 sm:p-4 px-4 sm:px-6 bg-[#FCEDEA]">
                    <ul className="space-y-2">
                      {technicalFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <img
                            src="/assets/Ourproducts/Standard/drop down.png"
                            alt="Bullet"
                            className="w-5 h-5 sm:w-[24px] sm:h-[24px] mt-1"
                          />
                          <p className="text-[#827E7D] font-manrope text-sm sm:text-base font-normal leading-6 sm:leading-7">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Typical Industrial Applications */}
              <div className="w-full">
                <div
                  className={`flex justify-between items-center p-3 sm:p-4 px-4 sm:px-6 w-full cursor-pointer transition-all duration-300 ${activeTab === "applications" ? "bg-[#CF422A] text-white" : "bg-[#DBE6EB] text-black"
                    }`}
                  onClick={() => toggleTab("applications")}
                >
                  <h3 className="font-manrope text-[16px] md:text-[20px] font-bold capitalize">
                    Typical Industrial Applications
                  </h3>
                  {activeTab === "applications" ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === "applications" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-3 sm:p-4 px-4 sm:px-6 bg-[#FCEDEA]">
                    <ul className="space-y-2">
                      {industrialApplications.map((application, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <img
                            src="/assets/Ourproducts/Standard/drop down.png"
                            alt="Bullet"
                            className="w-5 h-5 sm:w-[24px] sm:h-[24px] mt-1"
                          />
                          <p className="text-[#827E7D] font-manrope text-sm sm:text-base font-normal leading-6 sm:leading-7">
                            {application}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div className="w-full">
                <div
                  className={`flex justify-between items-center p-3 sm:p-4 px-4 sm:px-6 w-full cursor-pointer transition-all duration-300 ${activeTab === "materials" ? "bg-[#CF422A] text-white" : "bg-[#DBE6EB] text-black"
                    }`}
                  onClick={() => toggleTab("materials")}
                >
                  <h3 className="font-manrope text-[16px] md:text-[20px] font-bold capitalize">Materials</h3>
                  {activeTab === "materials" ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeTab === "materials" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-3 sm:p-4 px-4 sm:px-6 bg-[#FCEDEA]">
                    <ul className="space-y-2">
                      {materialOptions.map((material, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <img
                            src="/assets/Ourproducts/Standard/drop down.png"
                            alt="Bullet"
                            className="w-5 h-5 sm:w-[24px] sm:h-[24px] mt-1"
                          />
                          <p className="text-[#827E7D] font-manrope text-sm sm:text-base font-normal leading-6 sm:leading-7">
                            {material}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto">
        <Footer />
      </div>
    </>
  )
}

export default B750VN

