import Footer from "../../home/Footer"
import Mechanicalsealsnavbar from "../Mechanicalsealsnavbar/Mechanicalsealsnavbar"

const MechanicalSeals = () => {
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
            Mechanical  Seals
          </h2>
        </div>
      </section>
      <div className="mt-4">
       <Mechanicalsealsnavbar/>
      </div>

      {/* Standard Cartridge Seals Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-['Monda'] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] self-stretch mb-6">
        Mechanical Seals For Agitators, Mixers, Kneaders & Reactors
        </h1>

        <div className="max-w-[1000px] mx-auto">
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">
          Mechanical seals are an essential component of industrial equipment such as agitators, mixers, kneaders, and reactors. These seals are designed to provide a high level of sealing performance and reliability in demanding industrial applications.
          </p>

          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">
          Agitators and mixers are used in a wide range of industries, including chemical processing, pharmaceuticals, food and beverage, and water treatment. They are used to mix and blend materials, dissolve solids, and promote chemical reactions. Mechanical seals are typically designed to operate under high pressures and temperatures, as well as corrosive and abrasive environments.<br/>
          Kneaders and reactors are used in the chemical and pharmaceutical industries for the production of a wide range of products, including polymers, adhesives, and pharmaceuticals. They are designed to handle highly viscous materials and to provide precise control over chemical reactions. Mechanical seals for kneaders and reactors are designed to handle high pressures, high temperatures, and aggressive chemical environments.          </p>

          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-10">
          In all of these applications, mechanical seals must provide a reliable and consistent seal to prevent leaks and ensure the safety and efficiency of the equipment. These seals typically consist of a rotating seal face and a stationary seal face, which are held together by a spring or other mechanism. The seal faces are typically made from materials such as silicon carbide, tungsten carbide, or ceramic, which provide high wear resistance and chemical compatibility .<br/>
          Overall, mechanical Seals are essential components of industrial equipment and play a critical role in ensuring the safe and efficient operation of these processes.          </p>
        </div>

        {/* Product Images - First Row */}
        <div className="max-w-[1000px] mx-auto mt-12">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/Mechanicalseals/main/image1.jpg')",
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
                backgroundImage: "url('/assets/Ourproducts/Mechanicalseals/main/image2.jpg')",
                aspectRatio: "1/1",
                maxWidth: "180px",
                maxHeight: "180px",
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

export default MechanicalSeals

