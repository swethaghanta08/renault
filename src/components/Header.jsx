
import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const navigate = useNavigate()
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false)
  const [secondaryNavIndex, setSecondaryNavIndex] = useState(0)
  const [mediumScreenMenuOpen, setMediumScreenMenuOpen] = useState(false)
  const [smallScreenMenuOpen, setSmallScreenMenuOpen] = useState(false)
  const productsRef = useRef(null)
  const secondaryNavRef = useRef(null)
  const mediumMenuRef = useRef(null)
  const smallMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target) &&
        !secondaryNavRef.current?.contains(event.target)
      ) {
        setProductsDropdownOpen(false)
        setSecondaryNavOpen(false)
      }
      if (mediumMenuRef.current && !mediumMenuRef.current.contains(event.target)) {
        setMediumScreenMenuOpen(false)
      }
      if (smallMenuRef.current && !smallMenuRef.current.contains(event.target)) {
        setSmallScreenMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleProductsDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setProductsDropdownOpen(!productsDropdownOpen)
    if (!productsDropdownOpen) setSecondaryNavOpen(false)
  }

  const handleMouseEnterProductItem = (index) => {
    setSecondaryNavIndex(index)
    setSecondaryNavOpen(true)
  }

  const handleMouseLeaveProductItem = () => {
    setSecondaryNavOpen(false)
  }

  const handleMediumScreenMenuClick = () => {
    setMediumScreenMenuOpen(!mediumScreenMenuOpen)
  }

  const handleSmallScreenMenuClick = () => {
    setSmallScreenMenuOpen(!smallScreenMenuOpen)
  }

  const handleMobileProductCategoryClick = (e, index) => {
    e.preventDefault()
    if (secondaryNavIndex === index && secondaryNavOpen) {
      setSecondaryNavOpen(false)
    } else {
      setSecondaryNavIndex(index)
      setSecondaryNavOpen(true)
    }
  }

  const productCategories = [
    "Standard Cartridge Seals",
    "Standard Mechanical Seals For Pumps & Compressors",
    "Engineered Seals For Demanding Applications",
    "Mechanical Seals For Agitators, Mixers, Kneaders & Reactors",
    "Split Seals",
    "Gas Lubricated Seals For Pumps & Agitators",
    "Algo Pumps",
    "Bearing Isolators",
    "Magnetic Mixers (Stirrers)",
  ]

  const productSecondaryNavItems = [
    [
      "CTX ANSI Single Seals/Cartex ANSI Single Seals",
      "CTX ANSI Dual Seals/Cartex Ansi Dual Seals",
      "CTX Single Seals/Cartex Single Seals",
      "CTX Dual Seals/Cartex Dual Seal",
      "ETX Single Seals",
      "MTX Single Seals/Mtex Single Seals",
      "MTX Dual Seals/Mtex Dual Seals",
      "UTX Single Bellow Seals/Unitex",
      "VTX Single Seals",
      "VTX Dual Seals",
      "B750VN/H75VN",
      "B550VN Dual Seals",
    ],
    [
      "B100/B800/H10/H8 Single Balanced Seals (Compact)",
      "BRN/HRN Single Balanced Seals (Stationary Design / Multiple Springs)",
      "B700N/H7N Single Balanced Seals (Multiple Springs)",
      "B740-D Dual Balanced Seals (Multiple Springs)",
      "U700N/M7N Single Unbalanced Seals (Wave Springs)",
      "UFLWT/MFLWT Single Balanced Seals (Rotary Metal Bellows)",
      "UFL650/MFL65 Single Balanced Seals (Stationary Metal Bellows)",
      "UFL850N/MFL85N Single Balanced Seals (Rotary Metal Bellows)",
      "UG100/MG1 Single Unbalanced Seals (Rubber Bellows)",
      "UG943/MG9 Single Unbalanced Seals (Rubber Bellows)",
      "U200N/M2N Single Unbalanced Seals (Conical Spring)",
      "U740-D/M74_D Dual Unbalanced Seals (Multiple Springs)",
      "U300N/M3N Single Unbalanced Seals (Conical Spring)",
      "B120N Single Balanced Seals (Conical Spring)",
      "BJ920N/HJ92N Single Balanced Seals (Wave Springs)",
    ],
    [
      "SBF/SBP",
      "SBF(V)-D / SBP(V)-D",
      "SBPV/SBFV",
      "BR Single & Dual Seals (Slurry)",
      "PP – D Dual Seals (Pulp & Paper)",
      "PP-S Single Seals (Pulp & Paper)",
    ],
    [
      "BSHLU-D Dual Seals (Bottom Entry) – 50 bars",
      "BSH-D Dual Seals (Top Entry) – 250 bars",
      "U184 Single & Dual Seals (Top Entry)/SeccoMix481",
      "U164 Single & Dual Seals (Top-side Entry)/SeccoMix461",
      "UR-D Dual Seals",
      "MXS Single & Dual Seals (Top-side Entry)/SeccoMix1",
    ],
    ["SPX/Splitex Single Semi Catridge Seals", "BGH201/HGH201 Single Semi Split Seals", "ADKS Contactless seals"],
    [
      "GSAZ Single & Dual Gas Seals/AGSZ",
      "CTX-GSDN Dual Gas Seals (For Pumps)",
      "GSPH-K Single & Dual Gas Seals (For Pumps)/CGSH_K",
    ],
  ]

  const productComponents = {
    "CTX ANSI Single Seals/Cartex ANSI Single Seals": "/our-products/StandardCartridgeSeals/CTXANSISingleSeals-Cartex-ansi-single-seals",
    "CTX ANSI Dual Seals/Cartex Ansi Dual Seals": "/our-products/StandardCartridgeSeals/CTXANSIDualSeals-Cartex-ansi-dual-seals",
    "CTX Single Seals/Cartex Single Seals": "/our-products/StandardCartridgeSeals/CTXSingleSeals-Cartex-single-seal",
    "CTX Dual Seals/Cartex Dual Seal": "/our-products/StandardCartridgeSeals/CTXDualSeals-Cartex-dual-seal",
    "ETX Single Seals": "/our-products/StandardCartridgeSeals/ETXSingleSeals",
    "MTX Single Seals/Mtex Single Seals": "/our-products/StandardCartridgeSeals/MTXSingleSeals-Mtex-Single-Seals",
    "MTX Dual Seals/Mtex Dual Seals": "/our-products/StandardCartridgeSeals/MTXDualSeals-Mtex-Dual-Seals",
    "UTX Single Bellow Seals/Unitex": "/our-products/StandardCartridgeSeals/UTXSingleBellowSeals-Unitex",
    "VTX Single Seals": "/our-products/StandardCartridgeSeals/VTXSingleSeals",
    "VTX Dual Seals": "/our-products/StandardCartridgeSeals/VTXDualSeals",
    "B750VN/H75VN": "/our-products/StandardCartridgeSeals/B750VN-H75VN",
    "B550VN Dual Seals": "/our-products/StandardCartridgeSeals/B550VNDualSeals",
    "Standard Cartridge Seals": "/our-products/Standardcartridgeseals",
    "Standard Mechanical Seals For Pumps & Compressors": "/our-products/StandardMechanicalSeals",
    "Engineered Seals For Demanding Applications": "/our-products/EngineeredSeals",
    "Mechanical Seals For Agitators, Mixers, Kneaders & Reactors": "/our-products/MechanicalSeals",
    "Split Seals": "/our-products/SplitSeals",
    "Gas Lubricated Seals For Pumps & Agitators": "/our-products/GasLubricated",
    "Algo Pumps": "/our-products/Algopumps",
    "Bearing Isolators": "/our-products/BearingIsollators",
    "Magnetic Mixers (Stirrers)": "/our-products/Magneticmixers",
    "B100/B800/H10/H8 Single Balanced Seals (Compact)": "/our-products/StandardMechanicalSeals/CompactB100-B800-H10-H8",
    "BRN/HRN Single Balanced Seals (Stationary Design / Multiple Springs)": "/our-products/StandardMechanicalSeals/BRN-HRNSingleBalanced",
    "B700N/H7N Single Balanced Seals (Multiple Springs)": "/our-products/StandardMechanicalSeals/MultipleSpringsB700N-H7N",
    "B740-D Dual Balanced Seals (Multiple Springs)": "/our-products/StandardMechanicalSeals/DualBalancedSealsB740",
    "U700N/M7N Single Unbalanced Seals (Wave Springs)": "/our-products/StandardMechanicalSeals/U700N-M7NSingle",
    "UFLWT/MFLWT Single Balanced Seals (Rotary Metal Bellows)": "/our-products/StandardMechanicalSeals/UFLWTSingle-MFLWT",
    "UFL650/MFL65 Single Balanced Seals (Stationary Metal Bellows)": "/our-products/StandardMechanicalSeals/UFL650Single-MFL65",
    "UFL850N/MFL85N Single Balanced Seals (Rotary Metal Bellows)": "/our-products/StandardMechanicalSeals/UFL850NSingle-MFL85N",
    "UG100/MG1 Single Unbalanced Seals (Rubber Bellows)": "/our-products/StandardMechanicalSeals/UG100Single-MG1",
    "UG943/MG9 Single Unbalanced Seals (Rubber Bellows)": "/our-products/StandardMechanicalSeals/UG943Single-MG9",
    "U200N/M2N Single Unbalanced Seals (Conical Spring)": "/our-products/StandardMechanicalSeals/U200N-M2NSingle",
    "U740-D/M74_D Dual Unbalanced Seals (Multiple Springs)": "/our-products/StandardMechanicalSeals/U740-D-M74-DDual",
    "U300N/M3N Single Unbalanced Seals (Conical Spring)": "/our-products/StandardMechanicalSeals/U300N-M3NSingle",
    "B120N Single Balanced Seals (Conical Spring)": "/our-products/StandardMechanicalSeals/B120NSingle",
    "BJ920N/HJ92N Single Balanced Seals (Wave Springs)": "/our-products/StandardMechanicalSeals/BJ920N-HJ92NSingle",
    "SBF/SBP": "/our-products/Engineeredseals/SBFSBP",
    "SBF(V)-D / SBP(V)-D": "/our-products/Engineeredseals/SBFVDSBPVD",
    "SBPV/SBFV": "/our-products/Engineeredseals/SBPVSBFV",
    "BR Single & Dual Seals (Slurry)": "/our-products/Engineeredseals/BRSingleDualSealsSlurry",
    "PP – D Dual Seals (Pulp & Paper)": "/our-products/Engineeredseals/PPDDualSealsPulpPaper",
    "PP-S Single Seals (Pulp & Paper)": "/our-products/Engineeredseals/PPSSingleSealsPulpPaper",
    "BSHLU-D Dual Seals (Bottom Entry) – 50 bars": "/our-products/Mechanicalseals/BSHLU",
    "BSH-D Dual Seals (Top Entry) – 250 bars": "/our-products/Mechanicalseals/BSH",
    "U184 Single & Dual Seals (Top Entry)/SeccoMix481": "/our-products/Mechanicalseals/U184-SeccoMix481",
    "U164 Single & Dual Seals (Top-side Entry)/SeccoMix461": "/our-products/Mechanicalseals/U164-SeccoMix461",
    "UR-D Dual Seals": "/our-products/Mechanicalseals/UR",
    "MXS Single & Dual Seals (Top-side Entry)/SeccoMix1": "/our-products/Mechanicalseals/MXS-SeccoMix1",
    "SPX/Splitex Single Semi Catridge Seals": "/our-products/Splitseals/SPXSingleSemiCatridgeSeals-Splitex",
    "BGH201/HGH201 Single Semi Split Seals": "/our-products/Splitseals/BGH201SingleSemiSplitSeals-HGH201",
    "ADKS Contactless seals": "/our-products/Splitseals/ADKSContactlessseals",
    "GSAZ Single & Dual Gas Seals/AGSZ": "/our-products/Gaslubricatedseals/GSAZSingle-DualGasSeals-AGSZ",
    "CTX-GSDN Dual Gas Seals (For Pumps)": "/our-products/Gaslubricatedseals/CTXGSDN",
    "GSPH-K Single & Dual Gas Seals (For Pumps)/CGSH_K": "/our-products/Gaslubricatedseals/GSPHKSingle-CGSH-K",
  }

  const getProductSecondaryPath = (categoryIndex, itemName) =>
    productComponents[itemName] ||
    `/products/${productCategories[categoryIndex].toLowerCase().replace(/\s+/g, "-")}/${itemName.toLowerCase().replace(/\s+/g, "-")}`

  const getProductComponentPath = (itemName) => productComponents[itemName] || "/"

  const getProductMainCategoryRoute = (index) => {
    const mainCategoryRoutes = {
      0: "/our-products/Standardcartridgeseals",
      1: "/our-products/StandardMechanicalSeals",
      2: "/our-products/EngineeredSeals",
      3: "/our-products/MechanicalSeals",
      4: "/our-products/SplitSeals",
      5: "/our-products/GasLubricated",
      6: "/our-products/Algopumps",
      7: "/our-products/BearingIsollators",
      8: "/our-products/Magneticmixers",
    }
    return mainCategoryRoutes[index] || "/"
  }

  const HamburgerButton = ({ isOpen, onClick }) => (
    <button onClick={onClick} className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        className="w-6 h-0.5 bg-black block"
        transition={{ duration: 0.2 }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        className="w-6 h-0.5 bg-black block"
        transition={{ duration: 0.2 }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        className="w-6 h-0.5 bg-black block"
        transition={{ duration: 0.2 }}
      />
    </button>
  )

  return (
    <>
      <header className="lg:mt-[10px] lg:w-[1024px] lg:mx-auto lg:h-auto lg:flex lg:items-center lg:justify-start lg:px-12 xl:mt-[12px] xl:w-auto xl:px-16 md:w-[768px] md:px-6 md:flex md:items-center md:justify-between md:mt-2 w-full px-4 flex items-center justify-between mt-2 relative max-w-[1440px] mx-auto">
        <Link to="/">
          <div
            className="lg:w-[200px] lg:h-[50px] xl:w-[235px] xl:h-[59px] md:w-[180px] md:h-[45px] w-[86px] h-[22px] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: "url('/assets/logo/Logo.png')" }}
          ></div>
        </Link>

        <nav className="lg:flex lg:items-center lg:ml-8 lg:gap-6 xl:ml-12 xl:gap-8 hidden">
          <Link
            to="/"
            className="lg:text-black font-[Monda] lg:text-[16px] lg:font-semibold xl:text-[18px] relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="lg:text-black font-[Monda] lg:text-[16px] lg:font-semibold xl:text-[18px] relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="lg:flex lg:items-center lg:gap-2 relative" ref={productsRef}>
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleProductsDropdown}>
              <a
                href="#"
                className="lg:text-black font-[Monda] lg:text-[16px] lg:font-semibold xl:text-[18px] relative group"
                onClick={(e) => e.preventDefault()}
              >
                Our Products
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <img
                src="/assets/logo/dropdown.png"
                alt="Dropdown"
                className="lg:w-5 lg:h-5 ml-[-10px] mt-[2px] xl:w-6 xl:h-6"
              />
            </div>
            {productsDropdownOpen && (
              <div className="absolute top-full left-0 mt-4 z-40 flex">
                <div
                  style={{
                    display: "inline-flex",
                    padding: "16px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--Foundation-Red-red-600, #363636)",
                  }}
                  className="rounded-lg"
                >
                  {productCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={`#`}
                      style={{
                        display: "flex",
                        padding: "8px 0px",
                        alignItems: "center",
                        gap: "10px",
                        color: "#FFF",
                        fontFamily: "Manrope",
                        fontSize: "16px",
                        fontWeight: "700",
                        textTransform: "capitalize",
                        width: "296px",
                        position: "relative",
                      }}
                      onMouseEnter={() => (index < 6 ? handleMouseEnterProductItem(index) : setSecondaryNavOpen(false))}
                      onMouseLeave={handleMouseLeaveProductItem}
                      onClick={(e) => {
                        e.preventDefault()
                        setProductsDropdownOpen(false)
                        navigate(getProductMainCategoryRoute(index))
                      }}
                      className="group"
                    >
                      {category}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </div>
                {secondaryNavOpen && secondaryNavIndex < 6 && (
                  <div
                    className="absolute left-[296px] z-50"
                    style={{
                      top: `${secondaryNavIndex * 40 + 16}px`,
                    }}
                    ref={secondaryNavRef}
                    onMouseEnter={() => setSecondaryNavOpen(true)}
                    onMouseLeave={handleMouseLeaveProductItem}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        padding: "12px",
                        marginLeft: "35px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        background: "var(--Foundation-Red-red-400, #363636)",
                      }}
                      className="rounded-lg"
                    >
                      {productSecondaryNavItems[secondaryNavIndex]?.map((item, index) => (
                        <Link
                          key={index}
                          to={getProductSecondaryPath(secondaryNavIndex, item)}
                          style={{
                            display: "flex",
                            width: "206px",
                            padding: "8px 0px",
                            alignItems: "center",
                            gap: "10px",
                            color: "#FFF",
                            fontFamily: "Manrope",
                            fontSize: "16px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                            position: "relative",
                          }}
                          onClick={() => {
                            setProductsDropdownOpen(false)
                            setSecondaryNavOpen(false)
                            navigate(getProductComponentPath(item))
                          }}
                          className="group"
                        >
                          {item}
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <Link
            to="/blog"
            className="lg:text-black font-[Monda] lg:text-[16px] lg:font-semibold xl:text-[18px] relative group"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="lg:text-black font-[Monda] lg:text-[16px] lg:font-semibold xl:text-[18px] relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Medium Screen Menu Button */}
        <div className="relative md:block lg:hidden xl:hidden hidden" ref={mediumMenuRef}>
          <HamburgerButton isOpen={mediumScreenMenuOpen} onClick={handleMediumScreenMenuClick} />
        </div>

        {/* Small Screen Menu Button */}
        <div className="relative md:hidden lg:hidden xl:hidden block" ref={smallMenuRef}>
          <HamburgerButton isOpen={smallScreenMenuOpen} onClick={handleSmallScreenMenuClick} />
        </div>
      </header>

      <AnimatePresence>
        {mediumScreenMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative md:block lg:hidden xl:hidden hidden z-50"
            ref={mediumMenuRef}
          >
            <div className="md:w-[768px] md:h-auto flex flex-col p-[20px] mb-[-40px] z-50 bg-white">
              <button
                className="self-start w-[32px] h-[32px] text-black"
                onClick={() => setMediumScreenMenuOpen(false)}
              >
                <img src="/assets/Homepage/Header/xbutton.png" alt="Close" className="w-full h-full" />
              </button>
              <nav className="flex flex-row mt-[-40px] items-start justify-between ml-[30px] w-[600px]">
                <Link
                  to="/"
                  className="text-black font-[Monda] text-[20px] font-semibold leading-normal"
                  onClick={() => setMediumScreenMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-black font-[Monda] text-[20px] font-semibold leading-normal"
                  onClick={() => setMediumScreenMenuOpen(false)}
                >
                  About
                </Link>
                <div className="flex items-center gap-2 relative" ref={productsRef}>
                  <div className="flex items-center gap-2 cursor-pointer" onClick={toggleProductsDropdown}>
                    <a
                      href="#"
                      className="text-black font-[Monda] text-[20px] font-semibold leading-normal whitespace-nowrap"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        toggleProductsDropdown(e)
                      }}
                    >
                      Our Products
                    </a>
                    <img
                      src="/assets/Homepage/Header/navigate_down (2).png"
                      alt="Dropdown"
                      className="w-5 h-5 cursor-pointer"
                    />
                  </div>
                  {productsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 flex flex-row z-40" ref={secondaryNavRef}>
                      <div
                        style={{
                          display: "inline-flex",
                          padding: "16px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "8px",
                          background: "#363636",
                          position: "relative",
                        }}
                        className="rounded-lg left-[-80px]"
                      >
                        {productCategories.map((category, index) => (
                          <Link
                            key={index}
                            to={`#`}
                            style={{
                              display: "flex",
                              padding: "8px 0px",
                              alignItems: "center",
                              gap: "10px",
                              color: "#FFF",
                              fontFamily: "Manrope",
                              fontSize: "16px",
                              fontWeight: "700",
                              textTransform: "capitalize",
                              width: "180px",
                              position: "relative",
                            }}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              if (index < 6) {
                                handleMouseEnterProductItem(index)
                              } else {
                                setProductsDropdownOpen(false)
                                setSecondaryNavOpen(false)
                                navigate(getProductMainCategoryRoute(index))
                                setMediumScreenMenuOpen(false)
                              }
                            }}
                            className="group"
                          >
                            {category}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        ))}
                      </div>
                      {secondaryNavOpen && secondaryNavIndex < 6 && (
                        <div className="absolute left-[100px] top-0 z-50" ref={secondaryNavRef}>
                          <div
                            style={{
                              display: "inline-flex",
                              padding: "12px",
                              marginLeft: "35px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                              background: "#363636",
                            }}
                            className="rounded-lg"
                          >
                            {productSecondaryNavItems[secondaryNavIndex]?.map((item, index) => (
                              <Link
                                key={index}
                                to={getProductSecondaryPath(secondaryNavIndex, item)}
                                style={{
                                  display: "flex",
                                  width: "206px",
                                  padding: "8px 0px",
                                  alignItems: "center",
                                  gap: "10px",
                                  color: "#FFF",
                                  fontFamily: "Manrope",
                                  fontSize: "16px",
                                  fontWeight: "700",
                                  textTransform: "capitalize",
                                  position: "relative",
                                }}
                                onClick={() => {
                                  setProductsDropdownOpen(false)
                                  setSecondaryNavOpen(false)
                                  navigate(getProductComponentPath(item))
                                  setMediumScreenMenuOpen(false)
                                }}
                                className="group"
                              >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <Link
                  to="/blog"
                  className="text-black font-[Monda] text-[20px] font-semibold leading-normal"
                  onClick={() => setMediumScreenMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-black font-[Monda] text-[20px] font-semibold leading-normal"
                  onClick={() => setMediumScreenMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {smallScreenMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative md:hidden lg:hidden xl:hidden block z-50"
            ref={smallMenuRef}
          >
            <div className="h-auto flex flex-col p-5 z-50 bg-white w-full">
              <nav className="flex flex-row items-center justify-center w-full gap-5">
                <Link
                  to="/"
                  className="text-black font-[Monda] text-[12px] font-semibold leading-normal"
                  onClick={() => setSmallScreenMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-black font-[Monda] text-[12px] font-semibold leading-normal"
                  onClick={() => setSmallScreenMenuOpen(false)}
                >
                  About
                </Link>
                <div className="relative flex items-center" ref={productsRef}>
                  <button
                    className="text-black font-[Monda] text-[12px] font-semibold leading-normal whitespace-nowrap cursor-pointer bg-transparent border-none p-0"
                    onClick={toggleProductsDropdown}
                  >
                    Our Products
                  </button>
                  {productsDropdownOpen && (
                    <div
                      className="absolute   w-[77vw] max-w-[300px] right-[-80px] z-50 bg-[#363636] p-4 rounded-lg mt-2"
                      style={{ top: "40px" }}
                    >
                      {productCategories.map((item, idx) => (
                        <div key={idx} className="mb-[6px]">
                          <button
                            className="text-white font-[Manrope] text-[14px] font-medium relative group cursor-pointer bg-transparent border-none text-left w-full p-1 flex items-center justify-between"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              if (idx >= 6) {
                                setSmallScreenMenuOpen(false)
                                setProductsDropdownOpen(false)
                                setSecondaryNavOpen(false)
                                navigate(getProductMainCategoryRoute(idx))
                              } else {
                                handleMobileProductCategoryClick(e, idx)
                              }
                            }}
                          >
                            <span>{item}</span>
                            {idx < 6 && (
                              <span className="text-xs ml-2">
                                {idx === secondaryNavIndex && secondaryNavOpen ? "−" : "+"}
                              </span>
                            )}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                          </button>
                          {idx === secondaryNavIndex && secondaryNavOpen && idx < 6 && (
                            <div className="ml-4 mt-2 flex flex-col gap-[6px]">
                              <button
                                className="text-yellow-300 font-[Manrope] text-[12px] font-bold relative group cursor-pointer bg-transparent border-none text-left w-full p-1"
                                onClick={(e) => {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  setSmallScreenMenuOpen(false)
                                  setProductsDropdownOpen(false)
                                  setSecondaryNavOpen(false)
                                  navigate(getProductMainCategoryRoute(idx))
                                }}
                              >
                                {`→ View All ${productCategories[idx]}`}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                              </button>
                              {productSecondaryNavItems[idx].map((subItem, subIdx) => (
                                <button
                                  key={subIdx}
                                  className="text-white font-[Manrope] text-[12px] font-medium relative group cursor-pointer bg-transparent border-none text-left w-full p-1"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setSmallScreenMenuOpen(false)
                                    setProductsDropdownOpen(false)
                                    setSecondaryNavOpen(false)
                                    navigate(getProductComponentPath(subItem))
                                  }}
                                >
                                  {subItem}
                                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  to="/blog"
                  className="text-black font-[Monda] text-[12px] font-semibold leading-normal"
                  onClick={() => setSmallScreenMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-black font-[Monda] text-[12px] font-semibold leading-normal"
                  onClick={() => setSmallScreenMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header