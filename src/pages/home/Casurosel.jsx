import { useState, useEffect } from "react";

const products = [
    { id: 1, image: "/assets/Homepage/CAUROSEL/IMAGE1.png", title: "CTX ANSI Single Seals", description: "Used in industrial pumps and rotating equipment to provide efficient and reliable sealing in various applications" },
    { id: 2, image: "/assets/Homepage/CAUROSEL/image2.png", title: "SPX Single Cartridge Seals", description: "Used in industrial pumps and rotating equipment to provide efficient and reliable sealing in various applications" },
    { id: 3, image: "/assets/Homepage/CAUROSEL/image3.png", title: "SBF/SBP", description: "Used in industrial pumps and rotating equipment to provide efficient and reliable sealing in various applications" },
    { id: 4, image: "/assets/Homepage/CAUROSEL/image4.png", title: "Gas Lubricated Seals", description: "Used in industrial pumps and rotating equipment to provide efficient and reliable sealing in various applications" },
    { id: 5, image: "/assets/Homepage/CAUROSEL/image2.png", title: "Advanced Sealing Solution", description: "Used in industrial applications for high-performance sealing needs" },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(4);
    const [cardWidth, setCardWidth] = useState(293);
    const [cardSpacing, setCardSpacing] = useState(50);
    const [containerWidth, setContainerWidth] = useState("1370px"); // Default for large screens

    useEffect(() => {
        const updateLayout = () => {
            const width = window.innerWidth;

            if (width >= 1440) {
                setVisibleCards(4);
                setCardSpacing(50);
                setCardWidth(293);
                setContainerWidth("1370px");
            } else if (width >= 1024) {
                setVisibleCards(3);
                setCardSpacing(36);
                setCardWidth(293);
                setContainerWidth("1024px");
            } else if (width >= 768) {
                setVisibleCards(2);
                setCardSpacing(28);
                setCardWidth(280);
                setContainerWidth("768px");
            } else if (width >= 500) {
                // **Fix for 500px - 767px: Show exactly 2 full cards**
                setVisibleCards(2);
                setCardSpacing(20);
                setCardWidth(260);
                setContainerWidth(`${2 * 260 + 20}px`); // Ensure 2 cards fit correctly
            } else {
                setVisibleCards(1);
                setCardSpacing(10);
                setCardWidth(260);
                setContainerWidth("320px");
            }
        };

        updateLayout();
        window.addEventListener("resize", updateLayout);
        return () => window.removeEventListener("resize", updateLayout);
    }, []);

    const prevSlide = () => {
        if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    };

    const nextSlide = () => {
        if (currentIndex < products.length - visibleCards) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    return (
        <div className="mx-auto flex flex-col items-center py-8 md:px-8 lg:px-3 xl:px-9 padding">
            <span className="text-[#E4492E] text-[20px] font-semibold font-[Monda]">Shop</span>
            <h1 className="text-black text-[28px] font-[Monda] md:text-[28px] font-bold text-center">
                Our Top Products
            </h1>

            <div className="md:ml-[20px] lg:mr-[0px] px-5  relative w-full mt-[50px] overflow-hidden flex justify-center">
                <div className="relative  overflow-hidden" style={{ width: containerWidth, maxWidth: "100%" }}>
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (cardWidth + cardSpacing)}px)`,
                            width: `${products.length * (cardWidth + cardSpacing)}px`,
                        }}
                    >
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="bg-white shadow-md flex-shrink-0 border border-gray-200"
                                style={{
                                    width: `${cardWidth}px`,
                                    padding: "12px",
                                    gap: "12px",
                                    borderRadius: "4px",
                                    marginRight: index === products.length - 1 ? "0px" : `${cardSpacing}px`,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <img src={product.image} alt={product.title} style={{ width: "166px", height: "146px", objectFit: "contain" }} />
                                <h2 className="text-black font-bold font-[Manrope] text-center text-[20px]">{product.title}</h2>
                                <p className="text-[#827E7D] font-[Manrope] text-center text-[16px]">{product.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Left Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                        style={{
                            width: "24px",
                            height: "24px",
                            background: `#000 url('/assets/Homepage/CAUROSEL/material-symbols_arrow-right-rounded.png') center/contain no-repeat`,
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
                        }}
                        disabled={currentIndex === 0}
                    ></button>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute carousel-right-button mr-[8px] top-1/2 transform -translate-y-1/2 z-10"
                        style={{
                            right: "0",
                            width: "24px",
                            height: "24px",
                            background: `#000 url('/assets/Homepage/CAUROSEL/material-symbols_arrow-right-rounded (1).png') center/contain no-repeat`,
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
                        }}
                        disabled={currentIndex >= products.length - visibleCards}
                    ></button>
                </div>
            </div>
        </div>
    );
}
