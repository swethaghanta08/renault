"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const menuItems = [
  { name: "CTX ANSI Single Seals", path: "/ourproducts/StandardCartridgeSeals/CTXANSISingleSeals" },
  { name: "CTX ANSI Dual Seals", path: "/ourproducts/StandardCartridgeSeals/CTXANSIDualSeals" },
  { name: "CTX Single Seals", path: "/ourproducts/StandardCartridgeSeals/CTXSingleSeals" },
  { name: "CTX Dual Seals", path: "/ourproducts/StandardCartridgeSeals/CTXDualSeals" },
  { name: "MTX Single Seals", path: "/ourproducts/StandardCartridgeSeals/MTXSingleSeals" },
  { name: "MTX Dual Seals", path: "/ourproducts/StandardCartridgeSeals/MTXDualSeals" },
  { name: "VTX Single Seals", path: "/ourproducts/StandardCartridgeSeals/VTXSingleSeals" },
  { name: "VTX Dual Seals", path: "/ourproducts/StandardCartridgeSeals/VTXDualSeals" },
  { name: "ETX Single Seals", path: "/ourproducts/StandardCartridgeSeals/ETXSingleSeals" },
  { name: "UTX Single Bellow Seals", path: "/ourproducts/StandardCartridgeSeals/UTXSingleBellowSeals" },
  { name: "B750VN", path: "/ourproducts/StandardCartridgeSeals/B750VN" },
  { name: "B550VN Dual Seals", path: "/ourproducts/StandardCartridgeSeals/B550VNDualSeals" },
]

const StandardCartridgeNavbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const menuRef = useRef(null)
  const activeItemRef = useRef(null)
  const [activeItem, setActiveItem] = useState("")

  useEffect(() => {
    setActiveItem(location.pathname)
  }, [location.pathname])

  // Remove the useEffect that handles automatic scrolling entirely
  // This ensures the navbar does not move when clicking an item

  const handleScroll = (direction) => {
    if (menuRef.current) {
      const itemWidth = 250 + 40
      menuRef.current.scrollBy({ left: direction === "left" ? -itemWidth : itemWidth, behavior: "smooth" })
    }
  }

  const handleItemClick = (path) => {
    setActiveItem(path)
    navigate(path)
  }

  return (
    <div className="flex flex-col px-4 md:px-7 items-center max-w-[1440px] mx-auto mt-6 overflow-hidden">
      <h2 className="text-black font-monda text-[28px] md:text-[36px] font-bold leading-[50px]">
        Standard Cartridge Seals
      </h2>

      <div className="relative flex items-center mt-4 w-full max-w-[1300px]">
        <button onClick={() => handleScroll("left")} className="mr-4">
          <img
            src="/assets/Ourproducts/StandardNavbar/Buttons.png"
            alt="Scroll Left"
            className="w-[40px] h-[40px] rotate-180"
          />
        </button>

        <div
          ref={menuRef}
          className="flex overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar w-full px-12"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              ref={activeItem === item.path ? activeItemRef : null}
              onClick={() => handleItemClick(item.path)}
              className={`flex w-[250px] p-[12px_20px] justify-center items-center gap-[40px] text-black font-monda text-[20px] font-semibold leading-[32px] cursor-pointer transition-all duration-300 snap-start rounded-md 
                ${activeItem === item.path ? "bg-[#CF422A] text-white" : "hover:bg-[#CF422A] hover:text-white"}`}
              style={{
                margin: "0 8px", // Adds spacing between items
                transition: "background-color 0.3s ease-in-out", // Smooth transition effect
              }}
            >
              {item.name}
            </div>
          ))}
        </div>

        <button onClick={() => handleScroll("right")} className="ml-4">
          <img src="/assets/Ourproducts/StandardNavbar/Buttons.png" alt="Scroll Right" className="w-[40px] h-[40px]" />
        </button>
      </div>
    </div>
  )
}

export default StandardCartridgeNavbar