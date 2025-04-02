"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import HeaderMedium from "./HeaderMedium"
import HeaderMobile from "./HeaderSmall"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false)
  const [secondaryNavIndex, setSecondaryNavIndex] = useState(0)
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false)
  const [industrySecondaryNavOpen, setIndustrySecondaryNavOpen] = useState(false)
  const [industrySecondaryNavIndex, setIndustrySecondaryNavIndex] = useState(0)
  const [mediumScreenMenuOpen, setMediumScreenMenuOpen] = useState(false)
  const [smallScreenMenuOpen, setSmallScreenMenuOpen] = useState(false)

  const menuRef = useRef(null)
  const productsRef = useRef(null)
  const secondaryNavRef = useRef(null)
  const industryRef = useRef(null)
  const industrySecondaryNavRef = useRef(null)
  const mediumMenuRef = useRef(null)
  const smallMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
      if (
        mediumMenuRef.current &&
        !mediumMenuRef.current.contains(event.target) &&
        !document.querySelector(".md\\:block.lg\\:hidden.xl\\:hidden button")?.contains(event.target)
      ) {
        setMediumScreenMenuOpen(false)
      }
      if (
        smallMenuRef.current &&
        !smallMenuRef.current.contains(event.target) &&
        !document.querySelector(".md\\:hidden.lg\\:hidden.xl\\:hidden button")?.contains(event.target)
      ) {
        setSmallScreenMenuOpen(false)
      }
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target) &&
        !secondaryNavRef.current?.contains(event.target)
      ) {
        setProductsDropdownOpen(false)
        setSecondaryNavOpen(false)
      }
      if (
        industryRef.current &&
        !industryRef.current.contains(event.target) &&
        !industrySecondaryNavRef.current?.contains(event.target)
      ) {
        setIndustryDropdownOpen(false)
        setIndustrySecondaryNavOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [
    menuOpen,
    productsDropdownOpen,
    secondaryNavOpen,
    industryDropdownOpen,
    industrySecondaryNavOpen,
    mediumScreenMenuOpen,
    smallScreenMenuOpen,
  ])

  const toggleProductsDropdown = (e) => {
    if (e) e.preventDefault()
    setProductsDropdownOpen(!productsDropdownOpen)
    if (!productsDropdownOpen) setSecondaryNavOpen(false)
  }

  const toggleIndustryDropdown = (e) => {
    if (e) e.preventDefault()
    setIndustryDropdownOpen(!industryDropdownOpen)
    if (!industryDropdownOpen) setIndustrySecondaryNavOpen(false)
  }

  const handleMouseEnterProductItem = (index) => {
    setSecondaryNavIndex(index)
    setSecondaryNavOpen(true)
  }

  const handleMouseLeaveProductItem = () => {
    setSecondaryNavOpen(false)
  }

  const handleMouseEnterIndustryItem = (index) => {
    setIndustrySecondaryNavIndex(index)
    setIndustrySecondaryNavOpen(true)
  }

  const handleMouseLeaveIndustryItem = () => {
    setIndustrySecondaryNavOpen(false)
  }

  const handleMediumScreenMenuClick = () => {
    setMediumScreenMenuOpen(!mediumScreenMenuOpen)
  }

  const handleSmallScreenMenuClick = () => {
    setSmallScreenMenuOpen(!smallScreenMenuOpen)
  }

  const closeMediumScreenMenu = () => {
    setMediumScreenMenuOpen(false)
  }

  const closeSmallScreenMenu = () => {
    setSmallScreenMenuOpen(false)
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
      "CTX ANSI Single Seals",
      "CTX ANSI Dual Seals",
      "CTX Single Seals",
      "CTX Dual Seals",
      "ETX Single Seals",
      "MTX Single Seals",
      "MTX Dual Seals",
      "UTX Single Bellow Seals",
      "VTX Single Seals",
      "VTX Dual Seals",
      "B750VN",
      "B550VN Dual Seals",
    ],
    [
      "B100/B800 Single Balanced Seals (Compact)",
      "BRN Single Balanced Seals (Stationary Design / Multiple Springs)",
      "B700N Single Balanced Seals (Multiple Springs)",
      "B740-D Dual Balanced Seals (Multiple Springs)",
      "U700N Single Unbalanced Seals (Wave Springs)",
      "UFLWT Single Balanced Seals (Rotary Metal Bellows)",
      "UFL650 Single Balanced Seals (Stationary Metal Bellows)",
      "UFL850N Single Balanced Seals (Rotary Metal Bellows)",
      "UG100 Single Unbalanced Seals (Rubber Bellows)",
      "UG943 Single Unbalanced Seals (Rubber Bellows)",
      "U200N Single Unbalanced Seals (Conical Spring)",
      "U740-D Dual Unbalanced Seals (Multiple Springs)",
      "U300N Single Unbalanced Seals (Conical Spring)",
      "B120N Single Balanced Seals (Conical Spring)",
      "BJ920N Single Balanced Seals (Wave Springs)",
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
      "U184 Single & Dual Seals (Top Entry)",
      "U164 Single & Dual Seals (Top-side Entry)",
      "UR-D Dual Seals",
      "MXS Single & Dual Seals (Top-side Entry)",
    ],
    ["SPX Single Semi Catridge Seals", "BGH201 Single Semi Split Seals", "ADKS Contactless seals"],
    [
      "GSAZ Single & Dual Gas Seals",
      "CTX-GSDN Dual Gas Seals (For Pumps)",
      "GSPH-K Single & Dual Gas Seals (For Pumps)",
    ],
  ]

  const industryCategories = [
    "Pharmaceutical & Sterile Processes",
    "Refinery",
    "Chemical & Petrochemical",
    "Water",
    "Power",
    "Pulp & Paper",
    "Marine",
    "Sugar",
    "Compressors",
    "Coal Gasification",
  ]

  const industrySecondaryNavItems = [
    ["Agglomerator", "Spherical Dryer", "Eccentric Pump", "Sterile Pump", "Centrifugal Pump", "Filter Dryer"],
    [
      "Discharge Pump",
      "Gas Oil Pump",
      "GLP Delivery Pump",
      "Quench Oil Pump",
      "Residual Oil Pump",
      "Vertical In-Line Pump",
      "Low Temperature Pump",
    ],
    [
      "Agitator Bead Mill",
      "Chemical Pump",
      "Eccentric Screw Pump",
      "Gear Pump",
      "Glass Lined Reactor",
      "Thin Film Evaporator",
      "Chemical Reactor",
      "Rotary Piston Pump",
    ],
    [
      "Hot Water",
      "Desalinization Of Sea Water",
      "Non-Clogging Pump",
      "Raw Sludge Pump",
      "Sewage Block Pump",
      "Submersible Agitator",
      "Submersible Pump",
    ],
    [
      "Boiler Circulation Pump",
      "Boiler Feed Pump",
      "Feed Pump",
      "Main Feed Pump",
      "Flue Gas Desulphurization Pump",
      "Residue Evacuation Pump",
      "Condensate Pump",
    ],
    ["Pressure Grinder", "Pulp Pump", "Digesting & Bleaching Pump", "Deinking Pump", "Refiner", "Stock Pump"],
    ["Cooling Water Pump", "Dredging Pump", "Lubricating Oil Pump", "Gear Box"],
    ["Flume Water Pump", "Juice Circulating Pump", "Thick Juice Pump", "Mash Pump", "Worm Type Agitator"],
  ]

  const productComponents = {
    "CTX ANSI Single Seals": "/ourproducts/StandardCartridgeSeals/CTXANSISingleSeals",
    "CTX ANSI Dual Seals": "/ourproducts/StandardCartridgeSeals/CTXANSIDualSeals",
    "CTX Single Seals": "/ourproducts/StandardCartridgeSeals/CTXSingleSeals",
    "CTX Dual Seals": "/ourproducts/StandardCartridgeSeals/CTXDualSeals",
    "ETX Single Seals": "/ourproducts/StandardCartridgeSeals/ETXSingleSeals",
    "MTX Single Seals": "/ourproducts/StandardCartridgeSeals/MTXSingleSeals",
    "MTX Dual Seals": "/ourproducts/StandardCartridgeSeals/MTXDualSeals",
    "UTX Single Bellow Seals": "/ourproducts/StandardCartridgeSeals/UTXSingleBellowSeals",
    "VTX Single Seals": "/ourproducts/StandardCartridgeSeals/VTXSingleSeals",
    "VTX Dual Seals": "/ourproducts/StandardCartridgeSeals/VTXDualSeals",
    B750VN: "/ourproducts/StandardCartridgeSeals/B750VN",
    "B550VN Dual Seals": "/ourproducts/StandardCartridgeSeals/B550VNDualSeals",
    "Standard Cartridge Seals": "/ourproducts/navbar/Standardmainpage",
    "Standard Mechanical Seals For Pumps & Compressors": "/ourproducts/navbar/StandardMechanicalSeals",
    "Engineered Seals For Demanding Applications": "/ourproducts/navbar/EngineeredSeals",
    "Mechanical Seals For Agitators, Mixers, Kneaders & Reactors": "/ourproducts/navbar/MechanicalSeals",
    "Split Seals": "/ourproducts/navbar/SplitSeals",
    "Gas Lubricated Seals For Pumps & Agitators": "/ourproducts/navbar/GasLubricated",
    "Algo Pumps": "/ourproducts/navbar/Algopumps",
    "Bearing Isolators": "/ourproducts/navbar/BearingIsollators",
    "Magnetic Mixers (Stirrers)": "/ourproducts/navbar/Magneticmixers",
    "B100/B800 Single Balanced Seals (Compact)": "/ourproducts/StandardMechanicalSeals/Compact",
    "BRN Single Balanced Seals (Stationary Design / Multiple Springs)":
      "/ourproducts/StandardMechanicalSeals/BRNSingleBalanced",
    "B700N Single Balanced Seals (Multiple Springs)": "/ourproducts/StandardMechanicalSeals/MultipleSprings",
    "B740-D Dual Balanced Seals (Multiple Springs)": "/ourproducts/StandardMechanicalSeals/DualBalancedSealsB740",
    "U700N Single Unbalanced Seals (Wave Springs)": "/ourproducts/StandardMechanicalSeals/U700NSingle",
    "UFLWT Single Balanced Seals (Rotary Metal Bellows)": "/ourproducts/StandardMechanicalSeals/UFLWTSingle",
    "UFL650 Single Balanced Seals (Stationary Metal Bellows)": "/ourproducts/StandardMechanicalSeals/UFL650Single",
    "UFL850N Single Balanced Seals (Rotary Metal Bellows)": "/ourproducts/StandardMechanicalSeals/UFL850NSingle",
    "UG100 Single Unbalanced Seals (Rubber Bellows)": "/ourproducts/StandardMechanicalSeals/UG100Single",
    "UG943 Single Unbalanced Seals (Rubber Bellows)": "/ourproducts/StandardMechanicalSeals/UG943Single",
    "U200N Single Unbalanced Seals (Conical Spring)": "/ourproducts/StandardMechanicalSeals/U200NSingle",
    "U740-D Dual Unbalanced Seals (Multiple Springs)": "/ourproducts/StandardMechanicalSeals/U740-DDual",
    "U300N Single Unbalanced Seals (Conical Spring)": "/ourproducts/StandardMechanicalSeals/U300NSingle",
    "B120N Single Balanced Seals (Conical Spring)": "/ourproducts/StandardMechanicalSeals/B120NSingle",
    "BJ920N Single Balanced Seals (Wave Springs)": "/ourproducts/StandardMechanicalSeals/BJ920NSingle",
    "SBF/SBP": "/ourproducts/Engineeredseals/SBFSBP",
    "SBF(V)-D / SBP(V)-D": "/ourproducts/Engineeredseals/SBFVDSBPVD",
    "SBPV/SBFV": "/ourproducts/Engineeredseals/SBPVSBFV",
    "BR Single & Dual Seals (Slurry)": "/ourproducts/Engineeredseals/BRSingleDualSealsSlurry",
    "PP – D Dual Seals (Pulp & Paper)": "/ourproducts/Engineeredseals/PPDDualSealsPulpPaper",
    "PP-S Single Seals (Pulp & Paper)": "/ourproducts/Engineeredseals/PPSSingleSealsPulpPaper",
    "BSHLU-D Dual Seals (Bottom Entry) – 50 bars": "/ourproducts/Mechanicalseals/BSHLU",
    "BSH-D Dual Seals (Top Entry) – 250 bars": "/ourproducts/Mechanicalseals/BSH",
    "U184 Single & Dual Seals (Top Entry)": "/ourproducts/Mechanicalseals/U184",
    "U164 Single & Dual Seals (Top-side Entry)": "/ourproducts/Mechanicalseals/U164",
    "UR-D Dual Seals": "/ourproducts/Mechanicalseals/UR",
    "MXS Single & Dual Seals (Top-side Entry)": "/ourproducts/Mechanicalseals/MXS",
    "SPX Single Semi Catridge Seals": "/ourproducts/Splitseals/SPXSingleSemiCatridgeSeals",
    "BGH201 Single Semi Split Seals": "/ourproducts/Splitseals/BGH201SingleSemiSplitSeals",
    "ADKS Contactless seals": "/ourproducts/Splitseals/ADKSContactlessseals",
    "GSAZ Single & Dual Gas Seals": "/ourproducts/Gaslubricatedseals/GSAZSingle&DualGasSeals",
    "CTX-GSDN Dual Gas Seals (For Pumps)": "/ourproducts/Gaslubricatedseals/CTXGSDN",
    "GSPH-K Single & Dual Gas Seals (For Pumps)": "/ourproducts/Gaslubricatedseals/GSPHKSingle",
  }

  const industryComponents = {
    Compressors: "/industry/Compressors",
    "Coal Gasification": "/industry/CoalGasification",
    Agglomerator: "/industry/Pharmaceutical/Agglomerator",
    "Spherical Dryer": "/industry/Pharmaceutical/Sphericaldryer",
    "Eccentric Pump": "/industry/Pharmaceutical/Eccentricpump",
    "Sterile Pump": "/industry/Pharmaceutical/Sterilepump",
    "Centrifugal Pump": "/industry/Pharmaceutical/Centrifugalpump",
    "Filter Dryer": "/industry/Pharmaceutical/Filterdryer",
    "Discharge Pump": "/industry/Refinary/DischargePump",
    "Gas Oil Pump": "/industry/Refinary/GasOilPump",
    "GLP Delivery Pump": "/industry/Refinary/GLPDeliveryPump",
    "Quench Oil Pump": "/industry/Refinary/QuenchOilPump",
    "Residual Oil Pump": "/industry/Refinary/ResidualOilPump",
    "Vertical In-Line Pump": "/industry/Refinary/VerticalInLinePump",
    "Low Temperature Pump": "/industry/Refinary/LowTemperaturePump",
    "Agitator Bead Mill": "/industry/ChemicalPetrochemical/AgitatorBeadMill",
    "Chemical Pump": "/industry/ChemicalPetrochemical/ChemicalPump",
    "Eccentric Screw Pump": "/industry/ChemicalPetrochemical/EccentricScrewPump",
    "Gear Pump": "/industry/ChemicalPetrochemical/GearPump",
    "Glass Lined Reactor": "/industry/ChemicalPetrochemical/GlassLinedReactor",
    "Thin Film Evaporator": "/industry/ChemicalPetrochemical/ThinFilmEvaporator",
    "Chemical Reactor": "/industry/ChemicalPetrochemical/ChemicalReactor",
    "Rotary Piston Pump": "/industry/ChemicalPetrochemical/RotaryPistonPump",
    "Hot Water": "/industry/Water/HotWater",
    "Desalinization Of Sea Water": "/industry/Water/DesalinizationOfSeaWater",
    "Non-Clogging Pump": "/industry/Water/NonCloggingPump",
    "Raw Sludge Pump": "/industry/Water/RawSludgePump",
    "Sewage Block Pump": "/industry/Water/SewageBlockPump",
    "Submersible Agitator": "/industry/Water/SubmersibleAgitator",
    "Submersible Pump": "/industry/Water/SubmersiblePump",
    "Boiler Circulation Pump": "/industry/Power/BoilerCirculationPump",
    "Boiler Feed Pump": "/industry/Power/BoilerFeedPump",
    "Feed Pump": "/industry/Power/FeedPump",
    "Main Feed Pump": "/industry/Power/MainFeedPump",
    "Flue Gas Desulphurization Pump": "/industry/Power/FlueGasDesulphurizationPump",
    "Residue Evacuation Pump": "/industry/Power/ResidueEvacuationPump",
    "Condensate Pump": "/industry/Power/CondensatePump",
    "Pressure Grinder": "/industry/Pulppapaper/PressureGrinder",
    "Pulp Pump": "/industry/Pulppapaper/PulpPump",
    "Digesting & Bleaching Pump": "/industry/Pulppapaper/DigestingBleachingPump",
    "Deinking Pump": "/industry/Pulppapaper/DeinkingPump",
    Refiner: "/industry/Pulppapaper/Refiner",
    "Stock Pump": "/industry/Pulppapaper/StockPump",
    "Gear Box": "/industry/Marine/GearBox",
    "Cooling Water Pump": "/industry/Marine/CoolingWaterPump",
    "Dredging Pump": "/industry/Marine/DredgingPump",
    "Lubricating Oil Pump": "/industry/Marine/LubricatingOilPump",
    "Flume Water Pump": "/industry/Sugar/FlumeWaterPump",
    "Juice Circulating Pump": "/industry/Sugar/JuiceCirculatingPump",
    "Thick Juice Pump": "/industry/Sugar/ThickJuicePump",
    "Mash Pump": "/industry/Sugar/MashPump",
    "Worm Type Agitator": "/industry/Sugar/WormTypeAgitator",
  }

  const getProductSecondaryPath = (categoryIndex, itemName) =>
    productComponents[itemName] ||
    `/products/${productCategories[categoryIndex].toLowerCase().replace(/\s+/g, "-")}/${itemName.toLowerCase().replace(/\s+/g, "-")}`

  const getIndustrySecondaryPath = (categoryIndex, itemName) =>
    industryComponents[itemName] ||
    `/industry/${industryCategories[categoryIndex].toLowerCase().replace(/\s+/g, "-")}/${itemName.toLowerCase().replace(/\s+/g, "-")}`

  const getProductComponentPath = (itemName) => productComponents[itemName] || "/"
  const getIndustryComponentPath = (itemName) => industryComponents[itemName] || "/"

  const getProductMainCategoryRoute = (index) => {
    const mainCategoryRoutes = {
      0: "/ourproducts/navbar/Standardmainpage",
      1: "/ourproducts/navbar/StandardMechanicalSeals",
      2: "/ourproducts/navbar/EngineeredSeals",
      3: "/ourproducts/navbar/MechanicalSeals",
      4: "/ourproducts/navbar/SplitSeals",
      5: "/ourproducts/navbar/GasLubricated",
      6: "/ourproducts/navbar/Algopumps",
      7: "/ourproducts/navbar/BearingIsollators",
      8: "/ourproducts/navbar/Magneticmixers",
    }
    return mainCategoryRoutes[index] || "/"
  }

  const getIndustryMainCategoryRoute = (index) => {
    if (index === 8) return "/industry/Compressors"
    if (index === 9) return "/industry/CoalGasification"
    return "/"
  }

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

          <div className="lg:flex lg:items-center lg:gap-2 relative" ref={industryRef}>
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleIndustryDropdown}>
              <a
                href="#"
                className="lg:text-black font-[Monda] lg:text-[16px] lg:font-semibold xl:text-[18px] relative group"
                onClick={(e) => e.preventDefault()}
              >
                Industry
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <img src="/assets/logo/dropdown.png" alt="Dropdown" className="lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
            </div>

            {industryDropdownOpen && (
              <div className="absolute top-full left-0 z-40 flex">
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
                  {industryCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={index >= 8 ? getIndustryMainCategoryRoute(index) : "#"}
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
                        cursor: "pointer",
                      }}
                      onMouseEnter={() =>
                        index < 8 ? handleMouseEnterIndustryItem(index) : setIndustrySecondaryNavOpen(false)
                      }
                      onMouseLeave={handleMouseLeaveIndustryItem}
                      onClick={(e) => {
                        if (index >= 8) {
                          e.preventDefault()
                          setIndustryDropdownOpen(false)
                          navigate(getIndustryMainCategoryRoute(index))
                        }
                      }}
                      className="group"
                    >
                      {category}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </div>

                {industrySecondaryNavOpen && industrySecondaryNavIndex < 8 && (
                  <div
                    className="absolute left-[296px] top-0 z-50"
                    ref={industrySecondaryNavRef}
                    onMouseEnter={() => setIndustrySecondaryNavOpen(true)}
                    onMouseLeave={handleMouseLeaveIndustryItem}
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
                      {industrySecondaryNavItems[industrySecondaryNavIndex]?.map((item, index) => (
                        <Link
                          key={index}
                          to={getIndustrySecondaryPath(industrySecondaryNavIndex, item)}
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
                            setIndustryDropdownOpen(false)
                            setIndustrySecondaryNavOpen(false)
                            navigate(getIndustryComponentPath(item))
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
              <img src="/assets/logo/dropdown.png" alt="Dropdown" className="lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
            </div>

            {productsDropdownOpen && (
              <div className="absolute top-full left-0 z-40 flex">
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
                    className="absolute left-[296px] top-0 z-50"
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
            to="/contact"
            className="lg:text-black font-[Monda] lg:text-[16px] lg:font-semibold xl:text-[18px] relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="relative md:block lg:hidden xl:hidden hidden" ref={mediumMenuRef}>
          <button
            onClick={handleMediumScreenMenuClick}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          >
            <motion.span
              animate={mediumScreenMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black block"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mediumScreenMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-black block"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mediumScreenMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black block"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        <div className="relative md:hidden lg:hidden xl:hidden block" ref={smallMenuRef}>
          <button
            onClick={handleSmallScreenMenuClick}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          >
            <motion.span
              animate={smallScreenMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black block"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={smallScreenMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-black block"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={smallScreenMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black block"
              transition={{ duration: 0.2 }}
            />
          </button>
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
            <HeaderMedium onClose={closeMediumScreenMenu} />
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
            <HeaderMobile onClose={closeSmallScreenMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

