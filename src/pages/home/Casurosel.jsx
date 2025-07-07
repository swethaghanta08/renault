"use client"

import { useState, useEffect } from "react"

const products = [
  {
    id: 1,
    image: "/assets/Homepage/CAUROSEL/IMAGE1.png",
    title: "CTX ANSI Single Seals",
    description:
      "The CTX Dual Seals feature a double pressure-balanced, bi-directional cartridge design with integrated pumping",
  },
  {
    id: 2,
    image: "/assets/Homepage/CAUROSEL/image2.png",
    title: "SPX Single Semi Catridge Seals",
    description:
      "The SPX Single Semi Cartridge Seal is designed with a single seal in a split configuration, offering easy installation and maintenance.",
  },
  {
    id: 3,
    image: "/assets/Homepage/CAUROSEL/image3.png",
    title: "SBF/SBP",
    description:
      "The SBF/SBP seals by Renault Engineers feature a single seal configuration with a balanced design that ensures optimal sealing performance under varying conditions.",
  },
  {
    id: 4,
    image: "/assets/Homepage/CAUROSEL/image4.png",
    title: "Gas Lubricated Seals",
    description:
      "Gas lubricated seals offer a number of advantages over traditional liquid lubricated seals.they do not require a separate lubrication system, which simplifies installation and maintenance.",
  },
  {
    id: 5,
    image: "/assets/Homepage/CAUROSEL/image2.png",
    title: "CTX Single Seals",
    description:
      "CTX Single Seals are designed with a single seal configuration and a balanced construction, ensuring reliable performance in demanding environments.",
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(4)
  const [cardWidth, setCardWidth] = useState(293)
  const [cardSpacing, setCardSpacing] = useState(50)
  const [containerWidth, setContainerWidth] = useState("1370px")

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth

    if (width >= 1440) {
  // Extra large screens
  setVisibleCards(4)
  setCardSpacing(50)
  setCardWidth(293)
  setContainerWidth("1370px")
} else if (width >= 1024) {
  // Large screens
  setVisibleCards(3)
  setCardSpacing(36)
  setCardWidth(293)
  setContainerWidth("1024px")
} else if (width >= 768) {
  // Medium screens (tablets)
  setVisibleCards(2)
  setCardSpacing(35)
  setCardWidth(280)
  setContainerWidth("650px")
} else if (width >= 431) {
  // Small screens (large mobile)
  setVisibleCards(2)
  setCardSpacing(16)
  setCardWidth(280)
  setContainerWidth("580px")
} else if (width === 430) {
  // Specific handling for 430px screens
  setVisibleCards(1)
  setCardSpacing(69)
  setCardWidth(280)
  setContainerWidth("400px")
} else if (width === 414) {
  // Specific handling for 414px screens
  setVisibleCards(1)
  setCardSpacing(64) // You can fine-tune this value
  setCardWidth(312)
  setContainerWidth("398px")
} else if (width >= 390) {
  // Extra small screens (390px to 413px)
  setVisibleCards(1)
  setCardSpacing(62)
  setCardWidth(323)
  setContainerWidth("399px")
} else if (width >= 375) {
  // Extra small screens (375px to 389px)
  setVisibleCards(1)
  setCardSpacing(52)
  setCardWidth(300)
  setContainerWidth("380px")
} else {
  // Very small screens (320px)
  setVisibleCards(1)
  setCardSpacing(32)
  setCardWidth(230)
  setContainerWidth("280px")
}


    }

    updateLayout()
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout)
  }, [])

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1)
  }

  const nextSlide = () => {
    if (currentIndex < products.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  return (
    <div className="mx-auto flex flex-col mt-[-30px] md:mt-[-50px] items-center py-8  padding  sm:px-4 md:px-8 lg:px-3 xl:px-9">
      <span className="text-[#E4492E] text-[20px] font-semibold font-[Monda]">Shop</span>
      <h2 className="text-black text-[28px] font-[Monda] md:text-[28px] lg:text-[28px] lg:leading-[38px] xl:text-[48px] mt-2 font-bold text-center">Our Top Products</h2>

      <div className="relative w-full  marginleft   mt-[30px] flex justify-center">
        <div
          className="relative overflow-hidden"
          style={{
            width: "100%",
            maxWidth: containerWidth,
            padding: "0 20px", 
          }}
        >
          <div
            className="flex transition-transform ml-[4px] duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + cardSpacing)}px)`,
              width: `${products.length * (cardWidth + cardSpacing)}px`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white shadow-md  marginleftside flex-shrink-0 border border-gray-200"
                style={{
                  width: `${cardWidth}px`,
                  padding: "10px", 
                  gap: "8px", 
                  borderRadius: "4px",
                  marginRight: index === products.length - 1 ? "0px" : `${cardSpacing}px`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="w-full flex  justify-center" style={{ height: "120px" }}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    style={{
                      maxWidth: "100%",
                      height: "120px", 
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h2 className="text-black font-bold font-[Manrope] text-center text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] mt-1">
                  {product.title}
                </h2>
                <p className="text-[#827E7D] font-[Manrope] text-center text-[12px] xs:text-[14px] sm:text-[16px] line-clamp-2 xs:line-clamp-3">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className={`absolute left-[-1px] buttonmarginleft top-1/2  transform -translate-y-1/2 z-10 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            style={{
              width: "20px",
              height: "20px",
              background: `#000 url('/assets/Homepage/CAUROSEL/material-symbols_arrow-right-rounded.png') center/contain no-repeat`,
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
            }}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
          ></button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 md:right-[6px]  lg:right-0 right-0 buttonmarginright   top-1/2 transform -translate-y-1/2 z-10 ${
              currentIndex >= products.length - visibleCards ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            style={{
              width: "20px", 
              height: "20px",
              background: `#000 url('/assets/Homepage/CAUROSEL/material-symbols_arrow-right-rounded (1).png') center/contain no-repeat`,
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
            }}
            disabled={currentIndex >= products.length - visibleCards}
            aria-label="Next slide"
          ></button>
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(products.length - visibleCards + 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-[#E4492E]" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}
