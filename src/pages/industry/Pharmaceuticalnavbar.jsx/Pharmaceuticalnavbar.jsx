"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const menuItems = [
  { name: "Agglomerator", path: "/industry/Pharmaceutical/Agglomerator" },
  {
    name: "Spherical Dryer",
    path: "/industry/Pharmaceutical/Sphericaldryer",
  },
  {
    name: "Eccentric Pump",
    path: "/industry/Pharmaceutical/Eccentricpump",
  },
  {
    name: "Sterile Pump",
    path: "/industry/Pharmaceutical/Sterilepump",
  },
  { name: "Centrifugal Pump", path: "/industry/Pharmaceutical/Centrifugalpump" },
  {
    name: "Filter Dryer",
    path: "/industry/Pharmaceutical/Filterdryer",
  },
]

const Pharmaceuticalnavbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const menuRef = useRef(null)
  const activeItemRef = useRef(null)
  const [activeItem, setActiveItem] = useState("")

  // Set active item based on current URL path when component mounts
  useEffect(() => {
    setActiveItem(location.pathname)
  }, [location.pathname])

  // Remove the useEffect that handles automatic scrolling entirely
  // This ensures the navbar does not move when clicking an item

  const handleScroll = (direction) => {
    if (menuRef.current) {
      // Calculate the scroll amount based on the visible area
      const scrollAmount = menuRef.current.clientWidth * 0.5 // Kept as 0.5 for smoother scrolling as per original
      menuRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleItemClick = (path) => {
    setActiveItem(path)
    navigate(path)
  }

  return (
    <div className="flex flex-col px-3 sm:px-4 md:px-6 items-center max-w-[1440px] mx-auto mt-4 sm:mt-6 overflow-hidden">
      {/* Heading */}
      <h2 className="text-black font-monda text-[24px] sm:text-[28px] md:text-[36px] font-bold leading-[36px] sm:leading-[50px] text-center">
        Pharmaceutical & Sterile Processes
      </h2>

      {/* Navigation Bar */}
      <div className="relative flex items-center mt-3 sm:mt-4 w-full max-w-[1300px]">
        {/* Left Scroll Button */}
        <button
          onClick={() => handleScroll("left")}
          className="mr-2 sm:mr-4 flex-shrink-0 z-10"
          aria-label="Scroll left"
        >
          <img
            src="/assets/Ourproducts/StandardNavbar/Buttons.png"
            alt="Scroll Left"
            className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rotate-180"
          />
        </button>

        {/* Scrollable Menu Container */}
        <div
          ref={menuRef}
          className="flex overflow-x-auto scroll-smooth w-full no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                ref={activeItem === item.path ? activeItemRef : null}
                onClick={() => handleItemClick(item.path)}
                className={`
                  flex-shrink-0 
                  min-w-[220px] sm:min-w-[260px] md:min-w-[300px] 
                  px-3 sm:px-4 py-2 sm:py-3
                  flex justify-center items-center 
                  text-black font-monda text-[14px] sm:text-[15px] md:text-[16px] font-semibold 
                  cursor-pointer transition-all duration-300
                  rounded-md
                  ${activeItem === item.path ? "bg-[#CF422A] text-white" : "hover:bg-[#CF422A] hover:text-white"}
                `}
              >
                <span className="text-center whitespace-normal">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => handleScroll("right")}
          className="ml-2 sm:ml-4 flex-shrink-0 z-10"
          aria-label="Scroll right"
        >
          <img
            src="/assets/Ourproducts/StandardNavbar/Buttons.png"
            alt="Scroll Right"
            className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
          />
        </button>
      </div>
    </div>
  )
}

export default Pharmaceuticalnavbar