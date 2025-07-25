
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../home/Footer";
import StandardCartridgeNavbar from "./Standardcatridgenavbar/StandardCatridgeNavbar";

const Standardmainpage = () => {
  // Preload hero and product images for SEO and fast loading
  useEffect(() => {
    const heroImages = [
      "/assets/Contactpage/Herosection/heroimage-desktop.png",
      "/assets/Contactpage/Herosection/heroimage-tab.png",
      "/assets/Contactpage/Herosection/heroimage-phone.png",
    ];
    const productImages = [
      "image 46.png", "image 47.png", "image 48.png", "image 49.png", "image 50.png"
    ].map(img => `/assets/Ourproducts/Standard/Standardmainpage/${img}`);
    [...heroImages, ...productImages].forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div>
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>Standard Mechanical Seals & Cartridge Seals | Renault Engineers</title>
        <meta
          name="description"
          content="Explore a full range of standard mechanical seals and cartridge seals by Renault Engineers. Precision, durability, and custom sealing solutions for industry."
        />
        <link rel="canonical" href="https://renaultengineers.com/our-products/standard-crtridge-seals" />
        <link rel="preload" as="image" href="/assets/Contactpage/Herosection/heroimage-desktop.png" />
        <link rel="preload" as="image" href="/assets/Contactpage/Herosection/heroimage-tab.png" />
        <link rel="preload" as="image" href="/assets/Contactpage/Herosection/heroimage-phone.png" />
        <link rel="preload" as="image" href="/assets/Ourproducts/Standard/Standardmainpage/image 46.png" />
        <link rel="preload" as="image" href="/assets/Ourproducts/Standard/Standardmainpage/image 47.png" />
        <link rel="preload" as="image" href="/assets/Ourproducts/Standard/Standardmainpage/image 48.png" />
        <link rel="preload" as="image" href="/assets/Ourproducts/Standard/Standardmainpage/image 49.png" />
        <link rel="preload" as="image" href="/assets/Ourproducts/Standard/Standardmainpage/image 50.png" />
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
        {/* SVGs for different screen sizes */}
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

        {/* Title Box */}
        <div className="relative z-10 ml-[40px] mt-[80px] aboutcontentbox2 aboutcontentbox md:mt-[40px] md:w-[442px] md:ml-[200px] lg:ml-[240px] xl:ml-[570px] w-[240px] h-[80px] md:h-[80px] lg:h-[135px] bg-white flex flex-col items-start p-10 gap-0 md:gap-0 lg:gap-4 lg:w-[605px] shadow-lg">
          <h2 className="text-black mt-[-25px] ml-[-20px] md:mt-[-20px] lg:mt-0 lg:ml-[-20px] font-monda text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[452px]">
            Standard Cartridge Seals
          </h2>
        </div>
      </section>

      <div className="mt-4">
        <StandardCartridgeNavbar />
      </div>

      {/* Description */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-[#E4492E] mx-auto max-w-[1000px] font-['Monda'] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] mb-6">
          Standard cartridge seals
        </h1>

        <div className="max-w-[1000px] mx-auto text-[#827E7D] font-['Manrope'] text-[16px] md:text-[20px] leading-[22px] md:leading-[28px] tracking-[0.4px] space-y-6">
          <p>
            Standard cartridge seals are Pre-assembled in cartridges, standard mechanical seals offer a convenient
            plug-and-play solution for sealing rotating equipment such as pumps and mixers. A rotating seal face, a
            stationary seal face, and a set of secondary sealing components, such as an O-ring, gasket, or springs, are
            assembled into a cartridge-style housing.
          </p>
          <p>
            The seal faces, typically made of hard, wear-resistant materials like ceramic or tungsten carbide, are held
            in place by a spring or similar mechanism to maintain constant pressure and prevent fluid leak. Installation
            and maintenance of cartridge seals are designed to be easy, allowing for quick and effortless replacement
            when servicing or wear occurs. Available in various sizes and configurations, cartridge seals can suit a
            wide range of applications across industries such as chemical processing, food and beverage,
            pharmaceuticals, and water and wastewater treatment.
          </p>
          <p>
            Designed to fit standard ANSI, DIN and ISO seal chambers they can also be used in a variety of rotary
            equipment. Our standard cartridge range provides you with reduced installation times, lower maintenance
            costs and optimal equipment performance. The ISO2 is a complete family of mechanical seals that provide
            reliability and standardization over a wide variety equipment. A cartridge seal will have the following
            elements; Gland, Sleeve, Seal faces (2 or 4), an energizing force source (single spring, multiple springs,
            metal bellows, or elastomer), and a lock collar to set it to the shaft.
          </p>
        </div>

        {/* Images */}
        <div className="max-w-[1000px] mx-auto mt-12 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["image 46.png", "image 47.png", "image 48.png", "image 49.png"].map((img, i) => (
              <div
                key={i}
                className="bg-cover bg-center bg-no-repeat rounded-sm"
                style={{
                  backgroundImage: `url('/assets/Ourproducts/Standard/Standardmainpage/${img}')`,
                  aspectRatio: "1/1",
                  maxWidth: "180px",
                  maxHeight: "180px",
                  width: "100%",
                  height: "100%",
                }}
                aria-label={`Standard Cartridge Seals product image ${i + 1}`}
                role="img"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["image 50.png", "image 47.png", "image 49.png", "image 48.png"].map((img, i) => (
              <div
                key={i}
                className="bg-cover bg-center bg-no-repeat rounded-sm"
                style={{
                  backgroundImage: `url('/assets/Ourproducts/Standard/Standardmainpage/${img}')`,
                  aspectRatio: "1/1",
                  maxWidth: "180px",
                  maxHeight: "180px",
                  width: "100%",
                  height: "100%",
                }}
                aria-label={`Standard Cartridge Seals product image ${i + 5}`}
                role="img"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Standardmainpage;
