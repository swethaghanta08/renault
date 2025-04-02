"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Handle scroll detection
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section")
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsScrolled(heroBottom < 0)
      }
    }

    const heroElement = document.querySelector(".relative.w-full.h-\\[370px\\]")
    if (heroElement && !heroElement.id) {
      heroElement.id = "hero-section"
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 20) // Show skeleton for 2 seconds

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // WhatsApp link configuration
  const whatsappNumber = "919948832220" // Replace with your actual number (without + or spaces)
  const whatsappMessage = "Hello! I'm interested in your sealing solutions."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  // Loading skeleton
  if (isLoading) {
    return (
      <div
        id="hero-section"
        className="relative w-full h-[370px] mx-auto mt-[4px] xl:width xl:mx-auto xl:h-[760px] xl:w-[1440px] lg:w-[1024px] md:w-[768px] xl:mt-[10px] lg:width lg:mx-auto lg:h-[600px] lg:mt-[8px] md:w-[768px] md:h-[570px] md:mx-auto md:mt-[6px] overflow-hidden"
      >
        {/* Background Video Skeleton */}
        <div className="absolute top-0 left-0 xl:w-full xl:h-full lg:w-full lg:h-full md:w-full md:h-[570px] w-full h-full bg-gray-300 animate-pulse"></div>

        {/* Black SVG Overlay Skeleton */}
        <div className="absolute top-0 xl:left-0 lg:left-0 xl:w-[1088px] xl:h-[760px] lg:w-full lg:h-full lg:ml-[-90px] md:w-[533px] hidden md:block bg-black bg-opacity-60 animate-pulse"></div>

        {/* Small Screen SVG Skeleton */}
        <div className="absolute top-0 w-[258px] h-[370px] md:hidden bg-black bg-opacity-60 animate-pulse"></div>

        {/* Content Skeleton */}
        <div className="absolute top-[80px] left-[16px] text-white w-[230px] xl:top-[262px] xl:left-[93px] xl:w-[1009px] lg:top-[200px] lg:left-[40px] lg:w-[800px] md:top-[150px] md:left-[30px] md:w-[500px]">
          {/* Title Skeleton */}
          <div className="h-[36px] w-[295px] bg-gray-200 rounded-md animate-pulse xl:h-[80px] xl:w-[1009px] lg:w-[750px] lg:h-[60px] md:h-[60px] md:w-[482px]"></div>

          {/* Paragraph Skeleton */}
          <div className="h-[48px] w-[309px] mt-3 bg-gray-200 rounded-md animate-pulse xl:h-[72px] xl:w-[1009px] lg:w-[750px] xl:mt-5 lg:h-[60px] lg:mt-4 md:h-[60px] md:mt-[20px] md:w-[466px]"></div>

          {/* Button Skeleton */}
          <div className="h-[38px] w-[130px] mt-3 bg-gray-200 rounded-md animate-pulse xl:mt-5 xl:h-[48px] xl:w-[162px] lg:mt-4 lg:h-[42px] lg:w-[162px] md:mt-[20px] md:h-[44px] md:w-[162px]"></div>
        </div>

        {/* Right-side Icons Skeleton */}
        <div className="absolute xl:top-1/2 xl:right-5 lg:top-1/2 lg:right-4 flex flex-col gap-6 -translate-y-1/2 hidden lg:flex">
          <div className="xl:w-16 xl:h-16 lg:w-14 lg:h-14 lg:mt-[-100px] xl:mt-[-100px] bg-black animate-pulse"></div>
          <div className="xl:w-16 xl:h-16 lg:w-14 lg:h-14 bg-black animate-pulse"></div>
          <div className="xl:w-16 xl:h-16 lg:w-14 lg:h-14 bg-black animate-pulse"></div>
        </div>

        {/* Large Screens WhatsApp Button Skeleton */}
        <div className="absolute right-[84px] bottom-[5%] z-10 flex items-center gap-[12px] xl:px-[12px] xl:py-[8px] lg:px-[10px] lg:py-[6px] rounded-[12px] bg-gray-200 animate-pulse xl:w-[300px] xl:h-[48px] lg:w-[280px] lg:h-[40px] hidden lg:flex"></div>

        {/* Small Screens WhatsApp Button Skeleton */}
        <div className="absolute right-[15px] bottom-[5%] z-10 md:w-[45px] md:h-[45px] w-[35px] h-[35px] rounded-full bg-gray-200 animate-pulse md:flex lg:hidden"></div>
      </div>
    )
  }

  // Actual content
  return (
    <div
      id="hero-section"
      className="relative w-full h-[370px] mx-auto mt-[4px] xl:width xl:mx-auto xl:h-[760px] xl:w-[1440px] lg:w-[1024px] md:w-[768px]  xl:mt-[10px] lg:width lg:mx-auto lg:h-[600px] lg:mt-[8px] md:w-[768px] md:h-[570px] md:mx-auto md:mt-[6px] overflow-hidden"
    >
      {/* Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 xl:w-full xl:h-full lg:w-full lg:h-full md:w-full md:h-[570px] w-full h-full object-cover"
      >
        <source src="/assets/Homepage/Herosection/48342-454346532.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Black SVG Overlay */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 xl:left-0 lg:left-0 xl:w-[1088px] xl:h-[760px] lg:w-full lg:h-full lg:ml-[-90px] md:w-[533px] hidden md:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1088"
          height="760"
          viewBox="0 0 1088 760"
          fill="none"
          className="lg:w-full lg:h-full xl:block lg:block md:hidden"
        >
          <path d="M0 0H1088L749.869 406L434.74 760H0V0Z" fill="black" fillOpacity="0.6" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="533"
          height="570"
          viewBox="0 0 533 570"
          fill="none"
          className="w-full h-full md:block lg:hidden"
        >
          <path d="M0 0H533L367.353 304.5L212.975 570H0V0Z" fill="black" fillOpacity="0.6" />
        </svg>
      </motion.div>

      {/* Small Screen SVG */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 w-[258px] h-[370px] md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="258"
          height="370"
          viewBox="0 0 258 370"
          fill="none"
          className="w-full h-full"
        >
          <path d="M0 0H258L177.818 197.658L103.091 370H0V0Z" fill="black" fillOpacity="0.6" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="absolute top-[80px] left-[16px] text-white w-[230px] xl:top-[262px] xl:left-[93px] xl:w-[1009px] lg:top-[200px] lg:left-[40px] lg:w-[800px] md:top-[150px] md:left-[30px] md:w-[500px]"
      >
        <h1 className="font-[Monda] text-[32px] font-bold mt-[-30px] w-[295px] leading-[36px] xl:text-[64px] xl:w-[1009px] lg:w-[750px] xl:leading-[80px] lg:text-[48px] lg:leading-[60px] md:text-[48px] md:leading-[60px] md:w-[482px]">
          Advanced Sealing Technology for Every Industry
        </h1>
        <p className="font-[Manrope] text-[16px] font-normal w-[309px] mt-3 xl:text-[24px] xl:w-[1009px] lg:w-[750px] xl:mt-5 lg:text-[20px] lg:mt-4 md:text-[20px] md:mt-[20px] md:w-[466px]">
          Providing high-performance sealing solutions designed for durability, efficiency, and reliability across
          diverse industries worldwide.
        </p>
        <motion.a
          href="/about"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#CF422A] text-white font-[Monda] font-bold mt-3 px-5 py-2 w-[130px] text-[14px] xl:mt-5 xl:px-8 xl:py-3 xl:w-[162px] lg:mt-4 lg:px-6 lg:py-2 lg:w-[162px] md:mt-[20px] md:px-[32px] md:py-[12px] md:w-[162px] xl:text-[18px] lg:text-[16px] md:text-[16px] transition-all inline-block text-center"
        >
          <span>Know More</span>
        </motion.a>
      </motion.div>

      {/* Right-side Icons */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute xl:top-1/2 xl:right-5 lg:top-1/2 lg:right-4 flex flex-col gap-6 -translate-y-1/2 hidden lg:flex"
      >
        <div
          className="relative flex xl:w-16 xl:h-16 lg:w-14 lg:h-14 lg:mt-[-100px] xl:mt-[-100px] justify-center items-center bg-[#000] shadow-md cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredIcon("phone")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img
            src="/assets/Homepage/Herosection/phone.png"
            alt="Phone"
            className="xl:w-[48px] xl:h-[48px] lg:w-[40px] lg:h-[40px] object-contain flex-shrink-0"
          />
          {hoveredIcon === "phone" && (
            <motion.div
              initial={{
                scaleX: 0,
                originX: 1,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
              className="absolute right-full origin-right bg-black text-white flex items-center xl:h-16 lg:h-14 p-2 w-max whitespace-nowrap z-20"
            >
              <div className="flex flex-col justify-center h-full">
                <div className="font-[Monda] xl:text-base lg:text-sm font-bold">Call Us: (+91) 9948832220</div>
                <div className="font-[Manrope] xl:text-xs lg:text-[10px]">(Sat - Thursday)</div>
              </div>
            </motion.div>
          )}
        </div>

        <div
          className="relative flex xl:w-16 xl:h-16 lg:w-14 lg:h-14 justify-center items-center bg-[#000] shadow-md cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredIcon("time")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img
            src="/assets/Homepage/Herosection/time.png"
            alt="Time"
            className="xl:w-[62px] xl:h-[62px] lg:w-[50px] lg:h-[50px] object-contain flex-shrink-0"
          />
          {hoveredIcon === "time" && (
            <motion.div
              initial={{
                scaleX: 0,
                originX: 1,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
              className="absolute right-full origin-right bg-black text-white flex items-center xl:h-16 lg:h-14 p-2 w-max whitespace-nowrap z-20"
            >
              <div className="flex flex-col justify-center h-full">
                <div className="font-[Monda] xl:text-base lg:text-sm font-bold">Working Hours</div>
                <div className="font-[Manrope] xl:text-xs lg:text-[10px]">Mon-Sat 9:00 AM - 6:00 PM</div>
                <div className="font-[Manrope] xl:text-xs lg:text-[10px]">(Sunday closed)</div>
              </div>
            </motion.div>
          )}
        </div>

        <div
          className="relative flex xl:w-16 xl:h-16 lg:w-14 lg:h-14 justify-center items-center bg-[#000] shadow-md cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredIcon("location")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img
            src="/assets/Homepage/Herosection/location.png"
            alt="Location"
            className="xl:w-[62px] xl:h-[62px] lg:w-[50px] lg:h-[50px] object-contain flex-shrink-0"
          />
          {hoveredIcon === "location" && (
            <motion.div
              initial={{
                scaleX: 0,
                originX: 1,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
              className="absolute right-full origin-right bg-black text-white flex items-center xl:h-16 lg:h-14 p-2 w-max max-w-xs z-20"
            >
              <div className="flex flex-col justify-center h-full">
                <div className="font-[Monda] xl:text-base lg:text-sm font-bold">Our Location</div>
                <div className="font-[Manrope] xl:text-xs lg:text-[10px]">Nizampet, Hyderabad, Telangana, India</div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Large Screens WhatsApp Button with Link */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className={`${
          isScrolled ? "fixed right-[15px] bottom-[15px] z-50" : "absolute right-[84px] bottom-[5%] z-10"
        } flex items-center gap-[12px] xl:px-[12px] xl:py-[8px] lg:px-[10px] lg:py-[6px] rounded-[12px] bg-[#F7C7BE] shadow-lg hidden lg:flex`}
      >
        <div
          className="xl:w-[32px] xl:h-[32px] lg:w-[28px] lg:h-[28px] aspect-square bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/Homepage/Herosection/Whatsapp.png')` }}
        ></div>
        <span className="text-black font-[Monda] xl:text-[16px] lg:text-[14px] font-bold xl:leading-[32px] lg:leading-[28px]">
          WhatsApp Us for Quick Solutions!
        </span>
      </motion.a>

      {/* Small Screens WhatsApp Button with Link */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className={`${
          isScrolled ? "fixed right-[15px] bottom-[15px] z-50" : "absolute right-[15px] bottom-[5%] z-10"
        } flex items-center justify-center md:w-[45px] md:h-[45px] w-[35px] h-[35px] rounded-full bg-[#25D366] shadow-lg md:flex lg:hidden`}
      >
        <div
          className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] aspect-square bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/Homepage/Herosection/Whatsapp.png')` }}
        ></div>
      </motion.a>
    </div>
  )
}

export default HeroSection

