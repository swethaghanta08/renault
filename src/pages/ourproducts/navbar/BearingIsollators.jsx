import Footer from "../../home/Footer"
import StandardMechanicalnavbar from "../Standardmechanicalnavbar/Standardmechanicalnavbar"

const BearingIsollators = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] h-[320px] md:h-[460px] lg:h-[600px] xl:w-[1440px] mt-[20px] mx-auto w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${window.innerWidth >= 1024
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
            Bearing isolators
          </h2>
        </div>
      </section>


      {/* Standard Cartridge Seals Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-['Monda'] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] self-stretch mb-6">
          Bearing isolators
        </h1>
        <p className="text-[#827E7D] max-w-[1000px] mx-auto mt-4 font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">When considering bearing isolators, important service limit parameters include maximum operating speed, pressure, temperature, and vacuum rating. Maximum operating speed is measured in ft/min or m/sec.

            Bearing isolators are dynamic seals designed to protect bearings from outside contaminants. They are comprised of a rotor (rotating) and stator (stationary) member.

            Some bearing isolators are of labyrinth construction while others use O-rings or other positive seals.</p>   
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-black px-4 mt-[-20px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Specifications
          </h2>
                 <ul>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">shaft outer diameter or seal inner diameter</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">housing bore diameter or seal outer diameter</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">axial cross section or thickness</p>
            </li>
            <p className="text-[#827E7D] max-w-[1000px] mx-auto mt-4 font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">The shaft outer diameter or seal inner diameter refers to the size of the seal inside diameter or the shaft or piston outside diameter. The housing bore diameter or seal out diameter refers to the size of the housing bore diameter or the seal outside diameter. The axial cross section or thickness refers to the axial cross section, or thickness, of the seal.</p>
          </ul>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-black px-4 mt-[-20px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Features
          </h2>
          <p className="text-[#827E7D] max-w-[1000px] mx-auto mt-4 font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">When considering bearing isolators, important service limit parameters include maximum operating speed, pressure, temperature, and vacuum rating. Maximum operating speed is measured in ft/min or m/sec.

            The seal’s maximum pressure indicates its failure threshold. Operating temperature refers to the ambient temperature range.

            Some seals operate in a vacuum. Common features of bearing isolators are spring loaded, integral wiper or scraper, and split seals. Spring loaded seals, also known as spring-energized, maintain contact with the shaft. Wiper or scraper elements prevent contamination.

            Elastomeric seals have a split for easier assembly, while rigid seals resemble piston rings in functionality.</p>

        </div>
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-black px-4 mt-[-20px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Materials
          </h2>
          <p className="text-[#827E7D] max-w-[1000px] mx-auto mt-4 font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">Common materials of construction for the sealing element or lip material include:

          </p>

          <ul>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">clearance or labyrinth construction</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">ethylene acrylic</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">fluoroelastomer</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">fluorosilicone</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">nitrile</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">highly saturated nitrile</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">nylon or polyamide</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">polyacrylate</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">polychloroprene</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">polyetheretherkeytone</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">polyoxymethylene</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">polyurethane or urethane</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">natural rubber</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">sintered bronze</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">cast iron</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">stainless steel</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">felt</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">leather</p>
            </li>
          </ul>
        </div>

        <div className="max-w-[1000px] mx-auto mt-4">
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">
            A polymer is a solid, nonmetallic compound of high molecular weight and with a structure composed of small repeat units (mers). Plastics and elastomers are polymers. Many seal manufacturers use their own proprietary material. Where possible, these materials have been categorized into the generic equivalent of material family. Consult with the manufacturer for proprietary material specifications
          </p>


        </div>

        {/* Product Images - First Row */}
        <div className="max-w-[1000px] mx-auto mt-12">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/bearingisolators/image1.png')",
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
                backgroundImage: "url('/assets/Ourproducts/bearingisolators/image2.jpg')",
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
                backgroundImage: "url('/assets/Ourproducts/bearingisolators/image3.jpg')",
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

export default BearingIsollators

