"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const menuItems = [
  { name: "B100/B800 Single Balanced Seals (Compact)", path: "/ourproducts/StandardMechanicalSeals/Compact" },
  {
    name: "BRN Single Balanced Seals (Stationary Design / Multiple Springs)",
    path: "/ourproducts/StandardMechanicalSeals/BRNSingleBalanced",
  },
  {
    name: "B700N Single Balanced Seals (Multiple Springs)",
    path: "/ourproducts/StandardMechanicalSeals/MultipleSprings",
  },
  {
    name: "B740-D Dual Balanced Seals (Multiple Springs)",
    path: "/ourproducts/StandardMechanicalSeals/DualBalancedSealsB740",
  },
  { name: "U700N Single Unbalanced Seals (Wave Springs)", path: "/ourproducts/StandardMechanicalSeals/U700NSingle" },
  {
    name: "UFLWT Single Balanced Seals (Rotary Metal Bellows)",
    path: "/ourproducts/StandardMechanicalSeals/UFLWTSingle",
  },
  {
    name: "UFL650 Single Balanced Seals (Stationary Metal Bellows)",
    path: "/ourproducts/StandardMechanicalSeals/UFL650Single",
  },
  {
    name: "UFL850N Single Balanced Seals (Rotary Metal Bellows)",
    path: "/ourproducts/StandardMechanicalSeals/UFL850NSingle",
  },
  { name: "UG100 Single Unbalanced Seals (Rubber Bellows)", path: "/ourproducts/StandardMechanicalSeals/UG100Single" },
  { name: "UG943 Single Unbalanced Seals (Rubber Bellows)", path: "/ourproducts/StandardMechanicalSeals/UG943Single" },
  { name: "U200N Single Unbalanced Seals (Conical Spring)", path: "/ourproducts/StandardMechanicalSeals/U200NSingle" },
  { name: "U740-D Dual Unbalanced Seals (Multiple Springs)", path: "/ourproducts/StandardMechanicalSeals/U740-DDual" },
  { name: "U300N Single Unbalanced Seals (Conical Spring)", path: "/ourproducts/StandardMechanicalSeals/U300NSingle" },
  { name: "B120N Single Balanced Seals (Conical Spring)", path: "/ourproducts/StandardMechanicalSeals/B120NSingle" },
  { name: "BJ920N Single Balanced Seals (Wave Springs)", path: "/ourproducts/StandardMechanicalSeals/BJ920NSingle" },
]

const StandardMechanicalNavbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const menuRef = useRef(null)
  const activeItemRef = useRef(null)
  const [activeItem, setActiveItem] = useState("")

  // Set active item based on current URL path when component mounts
  useEffect(() => {
    setActiveItem(location.pathname)
  }, [location.pathname])

  const handleScroll = (direction) => {
    if (menuRef.current) {
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
        Standard Mechanical Seals
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
                  min-w-[250px] sm:min-w-[300px] md:min-w-[350px] 
                  px-3 sm:px-4 py-2 sm:py-3
                  flex justify-center items-center 
                  text-black font-monda text-[14px] sm:text-[15px] md:text-[16px] font-semibold 
                  cursor-pointer transition-all duration-300
                  rounded-md border-2 border-transparent
                  ${activeItem === item.path ? "bg-[#CF422A] text-white border-[#CF422A]" : "hover:bg-[#CF422A] hover:text-white border-transparent"}
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

export default StandardMechanicalNavbar