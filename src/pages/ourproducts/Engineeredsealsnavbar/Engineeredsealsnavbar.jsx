"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const menuItems = [
  { name: "SBF/SBP", path: "/ourproducts/Engineeredseals/SBFSBP" },
  { name: "SBF(V)-D / SBP(V)-D", path: "/ourproducts/Engineeredseals/SBFVDSBPVD" },
  { name: "SBPV/SBFV", path: "/ourproducts/Engineeredseals/SBPVSBFV" },
  { name: "BR Single & Dual Seals (Slurry)", path: "/ourproducts/Engineeredseals/BRSingleDualSealsSlurry" },
  { name: "PP – D Dual Seals (Pulp & Paper)", path: "/ourproducts/Engineeredseals/PPDDualSealsPulpPaper" },
  { name: "PP-S Single Seals (Pulp & Paper)", path: "/ourproducts/Engineeredseals/PPSSingleSealsPulpPaper" },
]

const Engineeredsealsnavbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const menuRef = useRef(null)
  const activeItemRef = useRef(null)
  const [activeItem, setActiveItem] = useState("")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Set active item based on current URL path when component mounts or location changes
  useEffect(() => {
    const currentPath = location.pathname
    setActiveItem(currentPath)
    
    // Find the matching menu item for the current path
    const matchingItem = menuItems.find(item => currentPath === item.path)
    
    // If we have a matching item and the menu has rendered, scroll to make it visible
    if (matchingItem && activeItemRef.current && menuRef.current) {
      // Use setTimeout to ensure the DOM has updated
      setTimeout(() => {
        scrollActiveItemIntoView()
      }, 150)
    }
  }, [location.pathname])

  // Function to check if scrolling is possible in either direction
  const updateScrollButtons = () => {
    if (menuRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = menuRef.current
      const maxScrollLeft = scrollWidth - clientWidth
      
      setCanScrollLeft(scrollLeft > 5) // Small buffer to account for rounding
      setCanScrollRight(scrollLeft < maxScrollLeft - 5)
    }
  }

  // Function to scroll the active item into view with smooth animation
  const scrollActiveItemIntoView = () => {
    if (activeItemRef.current && menuRef.current) {
      const container = menuRef.current
      const activeItem = activeItemRef.current
      
      // Get element positions
      const containerRect = container.getBoundingClientRect()
      const activeItemRect = activeItem.getBoundingClientRect()
      
      // Calculate if item is outside visible area
      const isOutsideLeft = activeItemRect.left < containerRect.left
      const isOutsideRight = activeItemRect.right > containerRect.right
      
      if (isOutsideLeft || isOutsideRight) {
        // Calculate the target scroll position to center the active item
        const itemOffsetLeft = activeItem.offsetLeft
        const itemWidth = activeItem.offsetWidth
        const containerWidth = container.clientWidth
        
        let targetScrollLeft = itemOffsetLeft - (containerWidth - itemWidth) / 2
        
        // Ensure we don't scroll beyond boundaries
        const maxScroll = container.scrollWidth - container.clientWidth
        targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll))
        
        // Smooth scroll to target position
        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        })
      }
      
      // Update scroll buttons after a delay
      setTimeout(updateScrollButtons, 300)
    }
  }

  // Update scroll buttons when active item changes
  useEffect(() => {
    scrollActiveItemIntoView()
  }, [activeItem])

  // Initialize scroll buttons and handle resize
  useEffect(() => {
    const handleResize = () => {
      setTimeout(updateScrollButtons, 100)
    }
    
    // Initial check
    setTimeout(updateScrollButtons, 100)
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleScroll = (direction) => {
    if (menuRef.current) {
      const container = menuRef.current
      const scrollAmount = container.clientWidth * 0.7 // Scroll 70% of visible width
      
      const targetScrollLeft = direction === "left" 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount
      
      // Smooth scroll with easing
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      })
      
      // Update buttons after scroll animation completes
      setTimeout(updateScrollButtons, 400)
    }
  }

  const handleItemClick = (path) => {
    setActiveItem(path)
    navigate(path)
  }

  const handleScrollEvent = () => {
    updateScrollButtons()
  }

  return (
    <div className="flex flex-col px-2 sm:px-4 md:px-6 items-center max-w-[1440px] mx-auto mt-4 sm:mt-6 overflow-hidden">
      {/* Heading */}
      <h2 className="text-black font-monda text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center mb-4 sm:mb-6">
        Engineered Seals
      </h2>

      {/* Navigation Bar */}
      <div className="relative flex items-center w-full max-w-[1300px]">
        {/* Left Scroll Button - Always visible */}
        <button
          onClick={() => handleScroll("left")}
          disabled={!canScrollLeft}
          className={`
            mr-2 sm:mr-3 md:mr-4 flex-shrink-0 z-10 p-1 sm:p-2 
            transition-all duration-300 rounded-lg
            ${canScrollLeft 
              ? 'opacity-100 hover:bg-gray-100 cursor-pointer' 
              : 'opacity-30 cursor-not-allowed'
            }
          `}
          aria-label="Scroll left"
        >
          <img
            src="/assets/Ourproducts/StandardNavbar/Buttons.png"
            alt="Scroll Left"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rotate-180 transition-transform hover:scale-110"
          />
        </button>

        {/* Scrollable Menu Container */}
        <div
          ref={menuRef}
          className="flex overflow-x-auto w-full no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: 'smooth'
          }}
          onScroll={handleScrollEvent}
        >
          <div className="flex gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 py-2">
            {menuItems.map((item, index) => {
              // Check if this item's path matches the current path
              const isActive = location.pathname === item.path
              
              return (
                <div
                  key={index}
                  ref={isActive ? activeItemRef : null}
                  onClick={() => handleItemClick(item.path)}
                  className={`
                    flex-shrink-0 
                    whitespace-nowrap
                    px-3 sm:px-4 md:px-5 lg:px-6
                    py-2 sm:py-2.5 md:py-3
                    flex justify-center items-center 
                    text-black font-monda 
                    text-xs sm:text-sm md:text-base lg:text-lg
                    font-semibold 
                    cursor-pointer 
                    transition-all duration-300 ease-in-out
                    rounded-lg border-2
                    transform hover:scale-105
                    ${isActive 
                      ? "bg-[#CF422A] text-white border-[#CF422A] shadow-lg scale-105" 
                      : "hover:bg-[#CF422A] hover:text-white border-transparent hover:shadow-md bg-white"}
                  `}
                  style={{
                    minWidth: 'fit-content',
                    wordBreak: 'keep-all',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span className="select-none">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Scroll Button - Always visible */}
        <button
          onClick={() => handleScroll("right")}
          disabled={!canScrollRight}
          className={`
            ml-2 sm:ml-3 md:ml-4 flex-shrink-0 z-10 p-1 sm:p-2
            transition-all duration-300 rounded-lg
            ${canScrollRight 
              ? 'opacity-100 hover:bg-gray-100 cursor-pointer' 
              : 'opacity-30 cursor-not-allowed'
            }
          `}
          aria-label="Scroll right"
        >
          <img
            src="/assets/Ourproducts/StandardNavbar/Buttons.png"
            alt="Scroll Right"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-transform hover:scale-110"
          />
        </button>
      </div>
    </div>
  )
}

export default Engineeredsealsnavbar