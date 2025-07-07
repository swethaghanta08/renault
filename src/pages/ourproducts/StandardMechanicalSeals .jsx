import { Helmet } from "react-helmet"
import Footer from "../home/Footer"
import StandardMechanicalnavbar from "./Standardmechanicalnavbar/Standardmechanicalnavbar"

const StandardMechanicalSeals = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Standard Mechanical Seals for Pumps & Compressors | Renault Engineers</title>
        <meta
          name="description"
          content="Discover high-performance standard mechanical seals for pumps and compressors by Renault Engineers. Engineered for durability, leak prevention, and industrial-grade reliability."
        />
        <link
          rel="canonical"
          href="https://renaultengineers.com/our-products/standard-mechanical-seals"
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
          <h2 className="text-black mt-[-25px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Standard Mechanical Seals
          </h2>
        </div>
      </section>

      <div className="mt-4">
        <StandardMechanicalnavbar />
      </div>

      {/* Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-['Monda'] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] self-stretch mb-6">
          Standard Mechanical Seals For Pumps & Compressors
        </h1>

        <div className="max-w-[1000px] mx-auto">
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">
            Seal Materials: Information on the materials used to make standard mechanical seals,
            including the properties of different materials and their suitability for different
            applications.
            <br />
            Seal Design: An overview of the design considerations for standard mechanical seals,
            including the importance of proper alignment, seal face design, and the selection of
            secondary seals.
            <br />
            Seal Installation and Maintenance: Tips for installing and maintaining standard
            mechanical seals, including best practices for proper installation and regular
            maintenance to ensure optimal performance.
            <br />
            Seal Applications: Examples of applications for standard mechanical seals, including
            pumps and compressors used in a variety of industries such as oil and gas, chemical
            processing, and power generation.
            <br />
            Seal Suppliers: Information on suppliers and manufacturers of standard mechanical seals,
            including their products and services.
          </p>

          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">
            Seals are widely used in pumps and compressors to prevent leakage of fluids or gases.
            They consist of stationary and rotating components that create a tight seal, ensuring
            efficient operation and minimizing environmental impact.
          </p>

          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">
            Depending on the focus of your website or page, you may want to add or combine some of
            these sections. You could also include images or diagrams to illustrate the information
            and make the content more engaging Standard Mechanical Seals For Pumps and Compressors.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default StandardMechanicalSeals
