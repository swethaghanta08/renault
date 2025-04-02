"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom" // Using React Router

const HeaderMedium = ({ onClose }) => {
  const navigate = useNavigate() // For programmatic navigation
  const [menuOpen, setMenuOpen] = useState(true) // Start with menu open when rendered as dropdown
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false) // Products dropdown closed by default
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false)
  const [secondaryNavIndex, setSecondaryNavIndex] = useState(0)

  // Open Industry dropdown by default, but not its subnavbar
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false) // Open by default
  const [industrySecondaryNavOpen, setIndustrySecondaryNavOpen] = useState(false) // Subnavbar closed by default
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
      // Close dropdowns if clicking outside
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target) &&
        !secondaryNavRef.current?.contains(event.target)
      ) {
        setProductsDropdownOpen(false)
        setSecondaryNavOpen(false)
      }

      // Close industry dropdowns if clicking outside
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen, productsDropdownOpen, secondaryNavOpen, industryDropdownOpen, industrySecondaryNavOpen])

  const toggleProductsDropdown = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation() // Prevent event bubbling
    }
    setProductsDropdownOpen(!productsDropdownOpen)
    if (!productsDropdownOpen) {
      setSecondaryNavOpen(false)
    }
  }

  const toggleIndustryDropdown = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation() // Prevent event bubbling
    }
    setIndustryDropdownOpen(!industryDropdownOpen)
    if (!industryDropdownOpen) {
      setIndustrySecondaryNavOpen(false)
    }
  }

  const handleProductCategoryClick = (e, index) => {
    e.preventDefault() // Prevent default link behavior
    e.stopPropagation() // Prevent event bubbling
    setSecondaryNavIndex(index)
    setSecondaryNavOpen(true) // Show secondary nav on click
  }

  const handleIndustryCategoryClick = (e, index) => {
    e.preventDefault() // Prevent default link behavior
    e.stopPropagation() // Prevent event bubbling
    setIndustrySecondaryNavIndex(index)
    setIndustrySecondaryNavOpen(true) // Show secondary nav on click
  }

  // Handle close if provided as prop
  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      setMenuOpen(false)
    }
  }

  // Handle navigation and close the menu
  const handleNavigation = (path) => {
    navigate(path)
    handleClose() // Close the menu after navigation
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

  // Secondary nav items for each product category (first 6 categories)
  const productSecondaryNavItems = [
    // Category 1: Standard Cartridge Seals
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
    // Category 2: Standard Mechanical Seals For Pumps & Compressors
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
    // Category 3: Engineered Seals For Demanding Applications
    [
      "SBF/SBP",
      "SBF(V)-D / SBP(V)-D",
      "SBPV/SBFV",
      "BR Single & Dual Seals (Slurry)",
      "PP – D Dual Seals (Pulp & Paper)",
      "PP-S Single Seals (Pulp & Paper)",
    ],
    // Category 4: Mechanical Seals For Agitators, Mixers, Kneaders & Reactors
    [
      "BSHLU-D Dual Seals (Bottom Entry) – 50 bars",
      "BSH-D Dual Seals (Top Entry) – 250 bars",
      "U184 Single & Dual Seals (Top Entry)",
      "U164 Single & Dual Seals (Top-side Entry)",
      "UR-D Dual Seals",
      "MXS Single & Dual Seals (Top-side Entry)",
    ],
    // Category 5: Split Seals
    ["SPX Single Semi Catridge Seals", "BGH201 Single Semi Split Seals", "ADKS Contactless seals"],
    // Category 6: Gas Lubricated Seals For Pumps & Agitators
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

  // Secondary nav items for each industry category (first 8 categories)
  const industrySecondaryNavItems = [
    // Category 1: Pharmaceutical & Sterile Processes
    ["Agglomerator", "Spherical Dryer", "Eccentric Pump", "Sterile Pump", "Centrifugal Pump", "Filter Dryer"],
    // Category 2: Refinery
    [
      "Discharge Pump",
      "Gas Oil Pump",
      "GLP Delivery Pump",
      "Quench Oil Pump",
      "Residual Oil Pump",
      "Vertical In-Line Pump",
      "Low Temperature Pump",
    ],
    // Category 3: Chemical & Petrochemical
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
    // Category 4: Water
    [
      "Hot Water",
      "Desalinization Of Sea Water",
      "Non-Clogging Pump",
      "Raw Sludge Pump",
      "Sewage Block Pump",
      "Submersible Agitator",
      "Submersible Pump",
    ],
    // Category 5: Power
    [
      "Boiler Circulation Pump",
      "Boiler Feed Pump",
      "Feed Pump",
      "Main Feed Pump",
      "Flue Gas Desulphurization Pump",
      "Residue Evacuation Pump",
      "Condensate Pump",
    ],
    // Category 6: Pulp & Paper
    ["Pressure Grinder", "Pulp Pump", "Digesting & Bleaching Pump", "Deinking Pump", "Refiner", "Stock Pump"],
    // Category 7: Marine
    ["Cooling Water Pump", "Dredging Pump", "Lubricating Oil Pump", "Gear Box"],
    // Category 8: Sugar
    ["Flume Water Pump", "Juice Circulating Pump", "Thick Juice Pump", "Mash Pump", "Worm Type Agitator"],
  ]

  // Component imports for secondary items
  const productComponents = {
    // Category 1: Standard Cartridge Seals
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
    "B750VN": "/ourproducts/StandardCartridgeSeals/B750VN",
    "B550VN Dual Seals": "/ourproducts/StandardCartridgeSeals/B550VNDualSeals",

    // Add direct paths for items 7-10
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

    // Category 2: Standard Mechanical Seals For Pumps & Compressors
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

    // Category 3: Engineered Seals For Demanding Applications
    "SBF/SBP": "/ourproducts/Engineeredseals/SBFSBP",
    "SBF(V)-D / SBP(V)-D": "/ourproducts/Engineeredseals/SBFVDSBPVD",
    "SBPV/SBFV": "/ourproducts/Engineeredseals/SBPVSBFV",
    "BR Single & Dual Seals (Slurry)": "/ourproducts/Engineeredseals/BRSingleDualSealsSlurry",
    "PP – D Dual Seals (Pulp & Paper)": "/ourproducts/Engineeredseals/PPDDualSealsPulpPaper",
    "PP-S Single Seals (Pulp & Paper)": "/ourproducts/Engineeredseals/PPSSingleSealsPulpPaper",

    // Category 4: Mechanical Seals For Agitators, Mixers, Kneaders & Reactors
    "BSHLU-D Dual Seals (Bottom Entry) – 50 bars": "/ourproducts/Mechanicalseals/BSHLU",
    "BSH-D Dual Seals (Top Entry) – 250 bars": "/ourproducts/Mechanicalseals/BSH",
    "U184 Single & Dual Seals (Top Entry)": "/ourproducts/Mechanicalseals/U184",
    "U164 Single & Dual Seals (Top-side Entry)": "/ourproducts/Mechanicalseals/U164",
    "UR-D Dual Seals": "/ourproducts/Mechanicalseals/UR",
    "MXS Single & Dual Seals (Top-side Entry)": "/ourproducts/Mechanicalseals/MXS",

    // Category 5: Split Seals
    "SPX Single Semi Catridge Seals": "/ourproducts/Splitseals/SPXSingleSemiCatridgeSeals",
    "BGH201 Single Semi Split Seals": "/ourproducts/Splitseals/BGH201SingleSemiSplitSeals",
    "ADKS Contactless seals": "/ourproducts/Splitseals/ADKSContactlessseals",

    // Category 6: Gas Lubricated Seals For Pumps & Agitators
    "GSAZ Single & Dual Gas Seals": "/ourproducts/Gaslubricatedseals/GSAZSingle&DualGasSeals",
    "CTX-GSDN Dual Gas Seals (For Pumps)": "/ourproducts/Gaslubricatedseals/CTXGSDN",
    "GSPH-K Single & Dual Gas Seals (For Pumps)": "/ourproducts/Gaslubricatedseals/GSPHKSingle",
  }

  // Component imports for industry secondary items
  const industryComponents = {
    "Compressors": "/industry/Compressors",
    "Coal Gasification": "/industry/CoalGasification",

    // Category 1: Pharmaceutical & Sterile Processes
    "Agglomerator": "/industry/Pharmaceutical/Agglomerator",
    "Spherical Dryer": "/industry/Pharmaceutical/Sphericaldryer",
    "Eccentric Pump": "/industry/Pharmaceutical/Eccentricpump",
    "Sterile Pump": "/industry/Pharmaceutical/Sterilepump",
    "Centrifugal Pump": "/industry/Pharmaceutical/Centrifugalpump",
    "Filter Dryer": "/industry/Pharmaceutical/Filterdryer",

    // Category 2: Refinery
    "Discharge Pump": "/industry/Refinary/DischargePump",
    "Gas Oil Pump": "/industry/Refinary/GasOilPump",
    "GLP Delivery Pump": "/industry/Refinary/GLPDeliveryPump",
    "Quench Oil Pump": "/industry/Refinary/QuenchOilPump",
    "Residual Oil Pump": "/industry/Refinary/ResidualOilPump",
    "Vertical In-Line Pump": "/industry/Refinary/VerticalInLinePump",
    "Low Temperature Pump": "/industry/Refinary/LowTemperaturePump",

    // Category 3: Chemical & Petrochemical
    "Agitator Bead Mill": "/industry/ChemicalPetrochemical/AgitatorBeadMill",
    "Chemical Pump": "/industry/ChemicalPetrochemical/ChemicalPump",
    "Eccentric Screw Pump": "/industry/ChemicalPetrochemical/EccentricScrewPump",
    "Gear Pump": "/industry/ChemicalPetrochemical/GearPump",
    "Glass Lined Reactor": "/industry/ChemicalPetrochemical/GlassLinedReactor",
    "Thin Film Evaporator": "/industry/ChemicalPetrochemical/ThinFilmEvaporator",
    "Chemical Reactor": "/industry/ChemicalPetrochemical/ChemicalReactor",
    "Rotary Piston Pump": "/industry/ChemicalPetrochemical/RotaryPistonPump",

    // Category 4: Water
    "Hot Water": "/industry/Water/HotWater",
    "Desalinization Of Sea Water": "/industry/Water/DesalinizationOfSeaWater",
    "Non-Clogging Pump": "/industry/Water/NonCloggingPump",
    "Raw Sludge Pump": "/industry/Water/RawSludgePump",
    "Sewage Block Pump": "/industry/Water/SewageBlockPump",
    "Submersible Agitator": "/industry/Water/SubmersibleAgitator",
    "Submersible Pump": "/industry/Water/SubmersiblePump",

    // Category 5: Power
    "Boiler Circulation Pump": "/industry/Power/BoilerCirculationPump",
    "Boiler Feed Pump": "/industry/Power/BoilerFeedPump",
    "Feed Pump": "/industry/Power/FeedPump",
    "Main Feed Pump": "/industry/Power/MainFeedPump",
    "Flue Gas Desulphurization Pump": "/industry/Power/FlueGasDesulphurizationPump",
    "Residue Evacuation Pump": "/industry/Power/ResidueEvacuationPump",
    "Condensate Pump": "/industry/Power/CondensatePump",

    // Category 6: Pulp & Paper
    "Pressure Grinder": "/industry/Pulppapaper/PressureGrinder",
    "Pulp Pump": "/industry/Pulppapaper/PulpPump",
    "Digesting & Bleaching Pump": "/industry/Pulppapaper/DigestingBleachingPump",
    "Deinking Pump": "/industry/Pulppapaper/DeinkingPump",
    "Refiner": "/industry/Pulppapaper/Refiner",
    "Stock Pump": "/industry/Pulppapaper/StockPump",

    // Category 7: Marine
    "Gear Box": "/industry/Marine/GearBox",
    "Cooling Water Pump": "/industry/Marine/CoolingWaterPump",
    "Dredging Pump": "/industry/Marine/DredgingPump",
    "Lubricating Oil Pump": "/industry/Marine/LubricatingOilPump",

    // Category 8: Sugar
    "Flume Water Pump": "/industry/Sugar/FlumeWaterPump",
    "Juice Circulating Pump": "/industry/Sugar/JuiceCirculatingPump",
    "Thick Juice Pump": "/industry/Sugar/ThickJuicePump",
    "Mash Pump": "/industry/Sugar/MashPump",
    "Worm Type Agitator": "/industry/Sugar/WormTypeAgitator",
  }

  // Helper function to get the correct URL path for secondary items
  const getProductSecondaryPath = (categoryIndex, itemName) => {
    return (
      productComponents[itemName] ||
      `/products/${productCategories[categoryIndex].toLowerCase().replace(/\s+/g, "-")}/${itemName.toLowerCase().replace(/\s+/g, "-")}`
    )
  }

  // Helper function to get the correct URL path for industry secondary items
  const getIndustrySecondaryPath = (categoryIndex, itemName) => {
    return (
      industryComponents[itemName] ||
      `/industry/${industryCategories[categoryIndex].toLowerCase().replace(/\s+/g, "-")}/${itemName.toLowerCase().replace(/\s+/g, "-")}`
    )
  }

  // Helper function to get the component path for product secondary items
  const getProductComponentPath = (itemName) => {
    return productComponents[itemName] || "/" // Default path if not found
  }

  // Helper function to get the component path for industry secondary items
  const getIndustryComponentPath = (itemName) => {
    return industryComponents[itemName] || "/" // Default path if not found
  }

  // Get the main category route based on index
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
    menuOpen && (
      <div className="md:w-[768px] md:h-auto flex flex-col p-[20px] mb-[-40px] z-50 bg-white">
        {/* Close Button */}
        <button className="self-start w-[32px] h-[32px] text-black" onClick={handleClose}>
          <img src="/assets/Homepage/Header/xbutton.png" alt="Close" className="w-full h-full" />
        </button>

        <nav className="flex flex-row mt-[-40px] items-start justify-between ml-[30px] w-[600px]">
          <Link
            to="/"
            className="text-black font-[Monda] text-[20px] font-semibold leading-normal"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleNavigation("/")
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black font-[Monda] text-[20px] font-semibold leading-normal"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleNavigation("/about")
            }}
          >
            About
          </Link>

          {/* Industry Dropdown */}
          <div className="flex items-center gap-2 relative" ref={industryRef}>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                toggleIndustryDropdown(e)
              }}
            >
              <a
                href="#"
                className="text-black font-[Monda] text-[20px] font-semibold leading-normal"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleIndustryDropdown(e)
                }}
              >
                Industry
              </a>
              <img
                src="/assets/Homepage/Header/navigate_down (2).png"
                alt="Dropdown"
                className="w-5 h-5 cursor-pointer"
              />
            </div>

            {/* Industry Dropdown Layout */}
            {industryDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 flex flex-row z-40"
                ref={industrySecondaryNavRef}
              >
                {/* Main Industry Dropdown */}
                <div
                  style={{
                    display: "inline-flex",
                    padding: "16px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--Foundation-Red-red-600, #363636)",
                    position: "relative",
                  }}
                  className="rounded-lg"
                >
                  {industryCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/industry/${category.toLowerCase().replace(/\s+/g, "-")}`}
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
                      ref={index === 0 ? firstIndustryItemRef : null}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        if (index < 8) {
                          handleIndustryCategoryClick(e, index)
                        } else {
                          setIndustryDropdownOpen(false)
                          setIndustrySecondaryNavOpen(false)
                          if (category === "Compressors") {
                            handleNavigation("/industry/Compressors")
                          } else if (category === "Coal Gasification") {
                            handleNavigation("/industry/CoalGasification")
                          }
                        }
                      }}
                      className="group"
                    >
                      {category}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </div>

                {/* Secondary Nav for Industry Categories */}
                {industrySecondaryNavOpen && industrySecondaryNavIndex < 8 && (
                  <div className="absolute left-[180px] top-0 z-50" ref={industrySecondaryNavRef}>
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
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setIndustryDropdownOpen(false)
                            setIndustrySecondaryNavOpen(false)
                            const componentPath = getIndustryComponentPath(item)
                            handleNavigation(componentPath)
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

          {/* Products Dropdown */}
          <div className="flex items-center gap-2 relative" ref={productsRef}>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                toggleProductsDropdown(e)
              }}
            >
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

            {/* Products Dropdown Layout */}
            {productsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 flex flex-row z-40" ref={secondaryNavRef}>
                {/* Main Products Dropdown */}
                <div
                  style={{
                    display: "inline-flex",
                    padding: "16px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--Foundation-Red-red-600, #363636)",
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
                      ref={index === 0 ? firstItemRef : null}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        if (index < 6) {
                          handleProductCategoryClick(e, index)
                        } else {
                          setProductsDropdownOpen(false)
                          setSecondaryNavOpen(false)
                          const directRoutes = {
                            "Algo Pumps": "/ourproducts/navbar/Algopumps",
                            "Magnetic Impellers": "/ourproducts/navbar/Magneticimpellers",
                            "Bearing Isolators": "/ourproducts/navbar/BearingIsollators",
                            "Magnetic Mixers (Stirrers)": "/ourproducts/navbar/Magneticmixers",
                          }
                          handleNavigation(directRoutes[category] || getProductMainCategoryRoute(index))
                        }
                      }}
                      className="group"
                    >
                      {category}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </div>

                {/* Secondary Nav for Product Categories */}
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
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setProductsDropdownOpen(false)
                            setSecondaryNavOpen(false)
                            const componentPath = getProductComponentPath(item)
                            handleNavigation(componentPath)
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
            className="text-black font-[Monda] text-[20px] font-semibold leading-normal"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleNavigation("/contact")
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    )
  )
}

export default HeaderMedium