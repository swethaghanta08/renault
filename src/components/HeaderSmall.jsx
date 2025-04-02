"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const HeaderMobile = ({ onClose }) => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(true)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false)
  const [secondaryNavIndex, setSecondaryNavIndex] = useState(0)
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false)
  const [industrySecondaryNavOpen, setIndustrySecondaryNavOpen] = useState(false)
  const [industrySecondaryNavIndex, setIndustrySecondaryNavIndex] = useState(0)

  const menuRef = useRef(null)
  const productsRef = useRef(null)
  const secondaryNavRef = useRef(null)
  const firstItemRef = useRef(null)
  const industryRef = useRef(null)
  const industrySecondaryNavRef = useRef(null)
  const firstIndustryItemRef = useRef(null)

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
  }, [menuOpen, productsDropdownOpen, secondaryNavOpen, industryDropdownOpen, industrySecondaryNavOpen])

  const toggleProductsDropdown = (e) => {
    if (e) e.preventDefault()
    if (productsDropdownOpen) {
      setProductsDropdownOpen(false)
      setSecondaryNavOpen(false)
    } else {
      setProductsDropdownOpen(true)
      setSecondaryNavOpen(false)
      setIndustryDropdownOpen(false)
      setIndustrySecondaryNavOpen(false)
    }
  }

  const toggleIndustryDropdown = (e) => {
    if (e) e.preventDefault()
    if (industryDropdownOpen) {
      setIndustryDropdownOpen(false)
      setIndustrySecondaryNavOpen(false)
    } else {
      setIndustryDropdownOpen(true)
      setIndustrySecondaryNavOpen(false)
      setProductsDropdownOpen(false)
      setSecondaryNavOpen(false)
    }
  }

  const handleProductCategoryClick = (e, index) => {
    e.preventDefault()
    if (secondaryNavIndex === index && secondaryNavOpen) {
      setSecondaryNavOpen(false)
    } else {
      setSecondaryNavIndex(index)
      setSecondaryNavOpen(true)
    }
  }

  const handleIndustryCategoryClick = (e, index) => {
    e.preventDefault()
    if (industrySecondaryNavIndex === index && industrySecondaryNavOpen) {
      setIndustrySecondaryNavOpen(false)
    } else {
      setIndustrySecondaryNavIndex(index)
      setIndustrySecondaryNavOpen(true)
    }
  }

  const handleClose = () => {
    if (onClose) onClose()
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
    ["SPX Single Semi Catridge seals", "BGH201 Single Semi Split Seals", "ADKS Contactless seals"],
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
    "Compressor",
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
      "Boiler Feed Pump",
      "Cooling Water Pump",
      "Turbine Seal",
      "Generator Cooling",
      "Condensate Pump",
      "Circulating Water Pump",
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
    "Magnetic Impellers": "/ourproducts/navbar/Magneticimpellers",
    "Bearing Isolators": "/ourproducts/navbar/BearingIsollators",
    "Magnetic Mixers (Stirrers)": "/ourproducts/navbar/Magneticmixers",
    "B100/B800 Single Balanced Seals (Compact)": "ourproducts/StandardMechanicalSeals/Compact",
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
    "Boiler Feed Pump": "/industry/Power/BoilerFeedPump",
    "Cooling Water Pump": "/industry/Power/CoolingWaterPump",
    "Turbine Seal": "/industry/Power/TurbineSeal",
    "Generator Cooling": "/industry/Power/GeneratorCooling",
    "Condensate Pump": "/industry/Power/CondensatePump",
    "Circulating Water Pump": "/industry/Power/CirculatingWaterPump",
    "Pressure Grinder": "/industry/Pulppapaper/PressureGrinder",
    "Pulp Pump": "/industry/Pulppapaper/PulpPump",
    "Digesting & Bleaching Pump": "/industry/Pulppapaper/DigestingBleachingPump",
    "Deinking Pump": "/industry/Pulppapaper/DeinkingPump",
    Refiner: "/industry/Pulppapaper/Refiner",
    "Stock Pump": "/industry/Pulppapaper/StockPump",
    "Gear Box": "/industry/Marine/GearBox",
    "Dredging Pump": "/industry/Marine/DredgingPump",
    "Lubricating Oil Pump": "/industry/Marine/LubricatingOilPump",
    "Flume Water Pump": "/industry/Sugar/FlumeWaterPump",
    "Juice Circulating Pump": "/industry/Sugar/JuiceCirculatingPump",
    "Thick Juice Pump": "/industry/Sugar/ThickJuicePump",
    "Mash Pump": "/industry/Sugar/MashPump",
    "Worm Type Agitator": "/industry/Sugar/WormTypeAgitator",
  }

  const getProductSecondaryPath = (categoryIndex, itemName) => {
    return (
      productComponents[itemName] ||
      `/products/${productCategories[categoryIndex].toLowerCase().replace(/\s+/g, "-")}/${itemName.toLowerCase().replace(/\s+/g, "-")}`
    )
  }

  const getIndustrySecondaryPath = (categoryIndex, itemName) => {
    return (
      industryComponents[itemName] ||
      `/industry/${industryCategories[categoryIndex].toLowerCase().replace(/\s+/g, "-")}/${itemName.toLowerCase().replace(/\s+/g, "-")}`
    )
  }

  const getProductComponentPath = (itemName) => {
    return productComponents[itemName] || "/"
  }

  const getIndustryComponentPath = (itemName) => {
    return industryComponents[itemName] || "/"
  }

  const getProductMainCategoryRoute = (index) => {
    const mainCategoryRoutes = [
      "/ourproducts/navbar/Standardmainpage",
      "/ourproducts/navbar/StandardMechanicalSeals",
      "/ourproducts/navbar/EngineeredSeals",
      "/ourproducts/navbar/MechanicalSeals",
      "/ourproducts/navbar/SplitSeals",
      "/ourproducts/navbar/GasLubricated",
    ]
    return mainCategoryRoutes[index] || "/"
  }

  return (
    <div className="h-auto flex flex-col p-5 z-50">
      {/* Mobile Navigation */}
      <nav className="flex flex-row items-center justify-between w-full gap-3">
        <Link
          to="/"
          className="text-black font-[Monda] text-[12px] font-semibold leading-normal"
          onClick={handleClose}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black font-[Monda] text-[12px] font-semibold leading-normal"
          onClick={handleClose}
        >
          About
        </Link>
        <div className="relative flex items-center" ref={industryRef}>
          <a
            href="#"
            className="text-black font-[Monda] text-[12px] font-semibold leading-normal cursor-pointer"
            onClick={toggleIndustryDropdown}
          >
            Industry
          </a>
        </div>
        <div className="relative flex items-center" ref={productsRef}>
          <a
            href="#"
            className="text-black font-[Monda] text-[12px] font-semibold leading-normal whitespace-nowrap cursor-pointer"
            onClick={toggleProductsDropdown}
          >
            Our Products
          </a>
        </div>
        <Link
          to="/contact"
          className="text-black font-[Monda] text-[12px] font-semibold leading-normal"
          onClick={handleClose}
        >
          Contact
        </Link>
      </nav>

      {/* Industry Dropdown */}
      {industryDropdownOpen && (
        <div
          className="absolute left-6 right-0 mt-8 z-50 w-[220px] bg-[#363636] p-4 rounded-lg"
          style={{ top: "10px" }}
          ref={industrySecondaryNavRef}
        >
          {industryCategories.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="text-white font-[Manrope] text-[14px] font-medium cursor-pointer relative group"
                  onClick={(e) => {
                    e.preventDefault()
                    if (idx >= 8) {
                      handleClose()
                      setIndustryDropdownOpen(false)
                      if (item === "Compressor") {
                        navigate("/industry/Compressors")
                      } else if (item === "Coal Gasification") {
                        navigate("/industry/CoalGasification")
                      }
                    } else {
                      handleIndustryCategoryClick(e, idx)
                    }
                  }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              {idx === industrySecondaryNavIndex && industrySecondaryNavOpen && idx < 8 && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {industrySecondaryNavItems[idx].map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={getIndustrySecondaryPath(idx, subItem)}
                      className="text-white font-[Manrope] text-[12px] font-medium relative group"
                      onClick={() => {
                        handleClose()
                        setIndustryDropdownOpen(false)
                        setIndustrySecondaryNavOpen(false)
                        const componentPath = getIndustryComponentPath(subItem)
                        navigate(componentPath)
                      }}
                    >
                      {subItem}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Products Dropdown */}
      {productsDropdownOpen && (
        <div
          className="absolute left-16 right-0 z-50 bg-[#363636]  w-[220px] p-4 rounded-lg"
          style={{ top: "40px" }}
          ref={secondaryNavRef}
        >
          {productCategories.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2">
                <Link
                  to={idx < 6 ? getProductMainCategoryRoute(idx) : productComponents[item] || "/"}
                  className="text-white font-[Manrope] text-[14px] font-medium relative group"
                  onClick={(e) => {
                    e.preventDefault()
                    if (idx >= 6) {
                      handleClose()
                      setProductsDropdownOpen(false)
                      navigate(idx < 6 ? getProductMainCategoryRoute(idx) : productComponents[item] || "/")
                    } else {
                      handleProductCategoryClick(e, idx)
                    }
                  }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>

              {idx === secondaryNavIndex && secondaryNavOpen && idx < 6 && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {productSecondaryNavItems[idx].map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={getProductSecondaryPath(idx, subItem)}
                      className="text-white font-[Manrope] text-[12px] font-medium relative group"
                      onClick={() => {
                        handleClose()
                        setProductsDropdownOpen(false)
                        setSecondaryNavOpen(false)
                        const componentPath = getProductComponentPath(subItem)
                        navigate(componentPath)
                      }}
                    >
                      {subItem}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderMobile