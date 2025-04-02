import Footer from "../../home/Footer"

const Magnetimixers = () => {
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
            Magnetic mixers
          </h2>
        </div>
      </section>


      {/* Standard Cartridge Seals Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-['Monda'] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] self-stretch mb-6">
          Magnetic mixers (stirrers)
        </h1>

        <div className="max-w-[1000px] mx-auto">
          <p className="text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[28px] tracking-[0.4px] mb-6">

            We at Renault engineers  do sales and Recondition of Magnetic Mixers ( Stirrers ).

            We  design to meet a wide variety applications within the pharmaceutical and biotechnology industries. Our mixers offer durability and easy maintenance while providing you with superior mixing performance and operational efficiency.

            Reassembling a NovAseptic mixer is a straightforward process. As it does not require a mechanical lifting device due to its bottom-mounted design.

            The use of magnetic drive eliminates the risk of leakage, and the integrity of the tank remains intact since no shaft passes through the tank wall

            At Millipore’s state-of-the-art Prevalidation Center, you have the option of working with our mixing.

            specialists and wide range of mixers optimized for specific operations to help you validate and optimize your aseptic mixing process.
          </p>

         
        </div>
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-black px-4  mt-[-20px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Benifits
          </h2>
                 <ul>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">Enhanced performance</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">Easy to clean and sterilize in place (CIP/SIP)</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">Magnetically coupled</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">Bottom mounted</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">Reduce mixing time for difficult-to-mix solutions</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">Improved operational and economic efficiency</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">Full documentation support and materials traceability</p>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/Ourproducts/Standard/drop down.png"
                alt="Bullet"
                className="w-[24px] h-[24px] mt-4"
              />
              <p className="text-[#827E7D] mt-3 font-manrope text-base font-normal leading-7">Option to test and optimize your process at Millipore’s Prevalidation Center</p>
            </li>
          </ul>
        </div>


        {/* Product Images - First Row */}
        <div className="max-w-[1000px] mx-auto mt-12">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-sm"
              style={{
                backgroundImage: "url('/assets/Ourproducts/magneticmixers/image1.png')",
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
                backgroundImage: "url('/assets/Ourproducts/magneticmixers/image2.jpg')",
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
                backgroundImage: "url('/assets/Ourproducts/magneticmixers/image3.png')",
                aspectRatio: "1/1",
                maxWidth: "270px",
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

export default Magnetimixers

