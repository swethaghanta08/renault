import Footer from "../../home/Footer"
import Splitsealsnavbar from "../Splitsealsnavbar/Splitsealsnavbar"

const SplitSeals = () => {
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
            Split Seals
          </h2>
        </div>
      </section>
      <div className="mt-4">
<Splitsealsnavbar/>
      </div>

      {/* Standard Cartridge Seals Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-['Monda'] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] self-stretch mb-6">
          Split seals sealing technologys
        </h1>

        <div className="max-w-[1000px] mx-auto">
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">
            Split seals sealing technology Renault engineers Installing split seals will eliminate sleeve wear and associated maintenance interventions and costs, and can eliminate the need for packing adjustments as well as packing gland leakage and associated cleanup costs. Most split mechanical seals are designed to seal outside of the stuffing box Split seals sealing technology Renault engineers.          </p>

          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">

            Sealing device maintenance on large rotating equipment, such as large pumps, can be a time-consuming and costly exercise.<br />
            As asset owners, maintainers and operators, users want to find out if using split seals can enable their teams to spend less time on maintaining equipment and sealing devices, and if they can help to reduce operating costs, increase equipment availability and maximize productivity.<br />
            For some applications, completely removing the equipment shaft was not possible, and so packing was historically the only sealing device available that could facilitate on-site changeouts.
            In split mechanical seals, all the parts are split into at least two halves.<br />
            Like traditional nonsplit mechanical seals, they are applied on rotating equipment, such as pumps, mixers and agitators. Like other mechanical seals, they seal the interface of the rotating shaft and the equipment housing. Being split, the seals can be installed around the shaft as opposed to being slid onto the shaft during equipment assembly.</p>

          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">
            Split mechanical seals were first used to seal submarine main propulsion shafts back in 1954.<br />
            It was some time later, around 1986, when split seals were introduced to the process industries as a standard, off-the-shelf available rotating shaft sealing technology.<br />
            Since the first-generation split seal was introduced, many technological improvements have been made and integrated into the latest generation of split seals. <br />
          </p>

          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">These improvements have greatly expanded the window of operation and application of split seals.

            <br />
            The current generation of split mechanical seals is comparable in performance to cartridge-type mechanical seals. The newest split mechanical seals are self-aligning and installed by simply fastening subassembly halves together around the shaft and bolting to the equipment. The need for measurements and accurate setting of the split components by the installer now happens automatically within these modern designs.
          </p>
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">
            Split mechanical seals are available for shaft diameters from 1 inch (25 millimeters [mm]) up to 36 inches (915 mm), and with the capability to seal pressures from slight vacuum to 450 pounds per square inch (psi) (31 Bar), there are many available applications.

          </p>
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">The materials of construction are where some limitations may apply when comparing split mechanical seals to cartridge seals.<br />
            Most noticeable is that the elastomers, which are often custom moldings, are typically only offered in fluoroelastomer (FKM), ethylene propylene diene monomer (EPDM) and tetrafluoroethylene propylene (FEPM). Face materials are typically limited to carbon and variants thereof, along with silicon carbides.
          </p>
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10"> The toughness and density of tungsten carbide makes it a great choice for arduous duties but a poor choice for split seals due to the splitting methods and the rotational mass separating the split components during rotation.</p>
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">Leakage is often a concern for operators considering split seals. It should be noted that properly installed and applied split seals are known to operate leak-free for more than 10 years. The splitting of mechanical seals into halves generates a multitude of leak paths within the seal that are sealed by static secondary sealing elements. As such, there is a greater risk of static joint leakage and, as a result, split mechanical seals are not recommended for hazardous services.

          </p>
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">Over the years, there have been various opinions regarding the startup leakage phenomena of split seals, wherein the seal may leak at up to 1 drop/shaft millimeters per minute (mm/min) for the initial 48 to 72 operating hours, as a general guide. This initial leakage typically subsides or stops completely beyond 200 hours as the split components go through various cycles of temperature, pressure and vibration.

          </p>
        </div>

        {/* Product Images - First Row */}
        <div className="max-w-[1000px] mx-auto mt-12">
          {/* First Row */}
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
            ></div>
           
          </div>

          {/* Second Row */}
          
        </div>

      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default SplitSeals

