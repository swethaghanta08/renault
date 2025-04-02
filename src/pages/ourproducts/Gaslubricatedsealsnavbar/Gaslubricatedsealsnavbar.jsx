"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const menuItems = [
  { name: "GSAZ Single & Dual Gas Seals", path: "/ourproducts/Gaslubricatedseals/GSAZSingle&DualGasSeals" },
  {
    name: "CTX-GSDN Dual Gas Seals (For Pumps)",
    path: "/ourproducts/Gaslubricatedseals/CTXGSDN",
  },
  {
    name: "GSPH-K Single & Dual Gas Seals (For Pumps)",
    path: "/ourproducts/Gaslubricatedseals/GSPHKSingle",
  },
]

const Gaslubricatedsealsnavbar = () => {
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
      const scrollAmount = menuRef.current.clientWidth * 0.8
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
        Gas Lubricated Seals
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
          <div className="flex gap-2 sm:gap-3 md:gap-6 px-2 sm:px-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                ref={activeItem === item.path ? activeItemRef : null}
                onClick={() => handleItemClick(item.path)}
                className={`
                  flex-shrink-0 
                  min-w-[250px] sm:min-w-[300px] md:min-w-[350px] 
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

export default Gaslubricatedsealsnavbar