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

    // Add ID to hero section if not present
    const heroElement = document.getElementById("hero-section")
    if (!heroElement) {
      const possibleHeroElement = document.querySelector(".hero-container")
      if (possibleHeroElement && !possibleHeroElement.id) {
        possibleHeroElement.id = "hero-section"
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 20) // Quick loading time for better UX

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // WhatsApp link configuration
  const whatsappNumber = "919948832220"
  const whatsappMessage = "Hello! I'm interested in your sealing solutions."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  // Loading skeleton
  if (isLoading) {
    return (
      <div
        id="hero-section"
        className="hero-container relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] mx-auto mt-1 sm:mt-2 overflow-hidden"
      >
        {/* Background Video Skeleton */}
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>

        {/* Overlay Skeleton */}
        <div className="absolute top-0 left-0 w-2/3 md:w-3/5 lg:w-4/5 xl:w-3/4 h-full bg-black bg-opacity-60 animate-pulse"></div>

        {/* Content Skeleton */}
        <div className="absolute top-1/4 left-4 md:left-8 lg:left-12 xl:left-16 w-3/4 md:w-4/5 lg:w-3/5 xl:w-2/3">
          {/* Title Skeleton */}
          <div className="h-8 sm:h-10 md:h-12 lg:h-16 w-full bg-gray-200 rounded-md animate-pulse"></div>

          {/* Paragraph Skeleton */}
          <div className="h-6 sm:h-8 md:h-10 w-full mt-3 bg-gray-200 rounded-md animate-pulse"></div>

          {/* Button Skeleton */}
          <div className="h-8 sm:h-10 md:h-12 w-32 sm:w-36 md:w-40 lg:w-44 mt-3 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        {/* Side Icons Skeleton */}
        <div className="absolute top-1/2 right-4 hidden lg:flex flex-col gap-6 -translate-y-1/2">
          <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-black animate-pulse"></div>
          <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-black animate-pulse"></div>
          <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-black animate-pulse"></div>
        </div>

        {/* WhatsApp Button Skeleton - Large */}
        <div className="absolute right-4 bottom-4 z-10 hidden lg:flex items-center w-64 h-12 rounded-lg bg-gray-200 animate-pulse"></div>

        {/* WhatsApp Button Skeleton - Small */}
        <div className="absolute right-4 bottom-4 z-10 flex lg:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
    )
  }

  // Actual content
  return (
    <div
      id="hero-section"
      className="hero-container relative  w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] mx-auto mt-1 sm:mt-2 overflow-hidden"
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
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/Homepage/Herosection/48342-454346532.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* SVG Overlay - Desktop and Tablet */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full w-3/4 md:w-2/3 hidden sm:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M0 0H1000L700 500L400 1000H0V0Z" fill="black" fillOpacity="0.6" />
        </svg>
      </motion.div>

      {/* SVG Overlay - Mobile */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full w-2/3 sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 500"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M0 0H300L200 250L100 500H0V0Z" fill="black" fillOpacity="0.6" />
        </svg>
      </motion.div>

      {/* Content Container - Aligned vertically centered */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-y-0 left-0 flex items-center"
      >
        {/* Content */}
        <div className="text-white ml-[16px] w-[230px] md:ml-[30px] md:w-[500px] lg:ml-[40px] lg:w-[800px] xl:ml-[93px] xl:w-[1009px]">
          <h1 className="font-[Monda] text-[32px] font-bold w-[295px] leading-[36px] md:text-[48px] md:leading-[60px] md:w-[482px] lg:text-[48px] lg:leading-[60px] lg:w-[750px] xl:text-[64px] xl:w-[1009px] xl:leading-[80px]">
            Advanced Sealing Technology for Every Industry
          </h1>
          <p className="font-[Manrope] text-[16px] font-normal w-[309px] mt-3 md:text-[20px] md:mt-[20px] md:w-[466px] lg:text-[20px] lg:mt-4 lg:w-[750px] xl:text-[24px] xl:mt-5 xl:w-[1009px]">
            Providing high-performance sealing solutions designed for durability, efficiency, and reliability across
            diverse industries worldwide.
          </p>
          <motion.a
            href="/about"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#CF422A] text-white font-[Monda] font-bold mt-3 px-5 py-2 w-[130px] text-[14px] md:mt-[20px] md:px-[32px] md:py-[12px] md:w-[162px] md:text-[16px] lg:mt-4 lg:px-6 lg:py-2 lg:w-[162px] lg:text-[16px] xl:mt-5 xl:px-8 xl:py-3 xl:w-[162px] xl:text-[18px] transition-all inline-block text-center"
          >
            <span>Know More</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Right-side Icons */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/2 right-4 -translate-y-1/2 hidden lg:flex flex-col gap-6"
      >
        {/* Phone Icon */}
        <div
          className="relative flex w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 justify-center items-center bg-black shadow-md cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredIcon("phone")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img
            src="/assets/Homepage/Herosection/phone.png"
            alt="Phone"
            className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain"
          />
          {hoveredIcon === "phone" && (
            <motion.div
              initial={{ scaleX: 0, originX: 1, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-full bg-black text-white flex items-center h-full p-2 w-max whitespace-nowrap z-20"
            >
              <div className="flex flex-col justify-center h-full">
                <div className="font-bold text-sm lg:text-base font-['Monda']">Call Us: (+91) 9948832220</div>
                <div className="text-xs font-['Manrope']">(Sat - Thursday)</div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Time Icon */}
        <div
          className="relative flex w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 justify-center items-center bg-black shadow-md cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredIcon("time")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img
            src="/assets/Homepage/Herosection/time.png"
            alt="Time"
            className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain"
          />
          {hoveredIcon === "time" && (
            <motion.div
              initial={{ scaleX: 0, originX: 1, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-full bg-black text-white flex items-center h-full p-2 w-max whitespace-nowrap z-20"
            >
              <div className="flex flex-col justify-center h-full">
                <div className="font-bold text-sm lg:text-base font-['Monda']">Working Hours</div>
                <div className="text-xs font-['Manrope']">Mon-Sat 9:00 AM - 6:00 PM</div>
                <div className="text-xs font-['Manrope']">(Sunday closed)</div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Location Icon */}
        <div
          className="relative flex w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 justify-center items-center bg-black shadow-md cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredIcon("location")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img
            src="/assets/Homepage/Herosection/location.png"
            alt="Location"
            className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain"
          />
          {hoveredIcon === "location" && (
            <motion.div
              initial={{ scaleX: 0, originX: 1, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-full bg-black text-white flex items-center h-full p-2 w-max max-w-xs z-20"
            >
              <div className="flex flex-col justify-center h-full">
                <div className="font-bold text-sm lg:text-base font-['Monda']">Our Location</div>
                <div className="text-xs font-['Manrope']">Nizampet, Hyderabad, Telangana, India</div>
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
          isScrolled ? "fixed right-4 bottom-4 z-50" : "absolute right-4 bottom-4 z-10"
        } hidden lg:flex items-center gap-3 px-3 py-2 rounded-lg bg-[#F7C7BE] shadow-lg hover:bg-[#F0B1A7] transition-all`}
      >
        <div
          className="w-8 h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/Homepage/Herosection/Whatsapp.png')` }}
        ></div>
        <span className="text-black font-bold text-sm lg:text-base font-['Monda']">
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
          isScrolled ? "fixed right-4 bottom-4 z-50" : "absolute right-4 bottom-4 z-10"
        } flex lg:hidden items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] shadow-lg hover:brightness-105 transition-all`}
      >
        <div
          className="w-5 h-5 sm:w-6 sm:h-6 bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/Homepage/Herosection/Whatsapp.png')` }}
        ></div>
      </motion.a>
    </div>
  )
}

export default HeroSection