// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"

// const HeaderMobile = ({ onClose }) => {
//   const navigate = useNavigate()
//   const [menuOpen, setMenuOpen] = useState(true)
//   const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
//   const [secondaryNavOpen, setSecondaryNavOpen] = useState(false)
//   const [secondaryNavIndex, setSecondaryNavIndex] = useState(0)

//   const menuRef = useRef(null)
//   const productsRef = useRef(null)
//   const secondaryNavRef = useRef(null)

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         productsRef.current &&
//         !productsRef.current.contains(event.target) &&
//         !secondaryNavRef.current?.contains(event.target)
//       ) {
//         setProductsDropdownOpen(false)
//         setSecondaryNavOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [menuOpen, productsDropdownOpen, secondaryNavOpen])

//   const toggleProductsDropdown = (e) => {
//     if (e) e.preventDefault()
//     if (productsDropdownOpen) {
//       setProductsDropdownOpen(false)
//       setSecondaryNavOpen(false)
//     } else {
//       setProductsDropdownOpen(true)
//       setSecondaryNavOpen(false)
//     }
//   }

//   const handleProductCategoryClick = (e, index) => {
//     e.preventDefault()
//     if (secondaryNavIndex === index && secondaryNavOpen) {
//       setSecondaryNavOpen(false)
//     } else {
//       setSecondaryNavIndex(index)
//       setSecondaryNavOpen(true)
//     }
//   }

//   const handleClose = () => {
//     if (onClose) onClose()
//   }

//   const productCategories = [
//     "Standard Cartridge Seals",
//     "Standard Mechanical Seals For Pumps & Compressors",
//     "Engineered Seals For Demanding Applications",
//     "Mechanical Seals For Agitators, Mixers, Kneaders & Reactors",
//     "Split Seals",
//     "Gas Lubricated Seals For Pumps & Agitators",
//     "Algo Pumps",
//     "Bearing Isolators",
//     "Magnetic Mixers (Stirrers)",
//   ]

//   const productSecondaryNavItems = [
//     [
//       "CTX ANSI Single Seals/Cartex ANSI Single Seals",
//       "CTX ANSI Dual Seals/Cartex Ansi Dual Seals",
//       "CTX Single Seals/Cartex Single Seals",
//       "CTX Dual Seals/Cartex Dual Seal",
//       "ETX Single Seals",
//       "MTX Single Seals/Mtex Single Seals",
//       "MTX Dual Seals/Mtex Dual Seals",
//       " UTX Single Bellow Seals/Unitex",
//       "VTX Single Seals",
//       "VTX Dual Seals",
//       "B750VN/H75VN",
//       "B550VN Dual Seals",
//     ],
//     [
//       "B100/B800/H10/H8 Single Balanced Seals (Compact)",
//       "BRN/HRN Single Balanced Seals (Stationary Design / Multiple Springs)",
//       "B700N/H7N Single Balanced Seals (Multiple Springs)",
//       "B740-D Dual Balanced Seals (Multiple Springs)",
//       "U700N/M7N Single Unbalanced Seals (Wave Springs)",
//       "UFLWT/MFLWT Single Balanced Seals (Rotary Metal Bellows)",
//       "UFL650/MFL65 Single Balanced Seals (Stationary Metal Bellows)",
//       "UFL850N/MFL85N Single Balanced Seals (Rotary Metal Bellows)",
//       "UG100/MG1 Single Unbalanced Seals (Rubber Bellows)",
//       "UG943/MG9 Single Unbalanced Seals (Rubber Bellows)",
//       "U200N/M2N Single Unbalanced Seals (Conical Spring)",
//       "U740-D/M74_D Dual Unbalanced Seals (Multiple Springs)",
//       "U300N/M3N Single Unbalanced Seals (Conical Spring)",
//       "B120N Single Balanced Seals (Conical Spring)",
//       "BJ920N/HJ92N Single Balanced Seals (Wave Springs)",
//     ],
//     [
//       "SBF/SBP",
//       "SBF(V)-D / SBP(V)-D",
//       "SBPV/SBFV",
//       "BR Single & Dual Seals (Slurry)",
//       "PP – D Dual Seals (Pulp & Paper)",
//       "PP-S Single Seals (Pulp & Paper)",
//     ],
//     [
//       "BSHLU-D Dual Seals (Bottom Entry) – 50 bars",
//       "BSH-D Dual Seals (Top Entry) – 250 bars",
//       "U184 Single & Dual Seals (Top Entry)/SeccoMix481",
//       "U164 Single & Dual Seals (Top-side Entry)/SeccoMix461",
//       "UR-D Dual Seals",
//       "MXS Single & Dual Seals (Top-side Entry)/SeccoMix1",
//     ],
//     ["SPX/Splitex Single Semi Catridge Seals", "BGH201/HGH201 Single Semi Split Seals", "ADKS Contactless seals"],
//     [
//       "GSAZ Single & Dual Gas Seals/AGSZ",
//       "CTX-GSDN Dual Gas Seals (For Pumps)",
//       "GSPH-K Single & Dual Gas Seals (For Pumps)/CGSH_K",
//     ],
//   ]

//   const productComponents = {
//     "CTX ANSI Single Seals/Cartex ANSI Single Seals": "/our-products/StandardCartridgeSeals/CTXANSISingleSeals-Cartex-ansi-single-seals",
//     "CTX ANSI Dual Seals/Cartex Ansi Dual Seals": "/our-products/StandardCartridgeSeals/CTXANSIDualSeals-Cartex-ansi-dual-seals",
//     "CTX Single Seals/Cartex Single Seals": "/our-products/StandardCartridgeSeals/CTXSingleSeals-Cartex-single-seal",
//     "CTX Dual Seals/Cartex Dual Seal": "/our-products/StandardCartridgeSeals/CTXDualSeals-Cartex-dual-seal",
//     "ETX Single Seals": "/our-products/StandardCartridgeSeals/ETXSingleSeals",
//     "MTX Single Seals/Mtex Single Seals": "/our-products/StandardCartridgeSeals/MTXSingleSeals-Mtex-Single-Seals",
//     "MTX Dual Seals/Mtex Dual Seals": "/our-products/StandardCartridgeSeals/MTXDualSeals-Mtex-Dual-Seals",
//     " UTX Single Bellow Seals/Unitex": "/our-products/StandardCartridgeSeals/UTXSingleBellowSeals-Unitex",
//     "VTX Single Seals": "/our-products/StandardCartridgeSeals/VTXSingleSeals",
//     "VTX Dual Seals": "/our-products/StandardCartridgeSeals/VTXDualSeals",
//     "B750VN/H75VN": "/our-products/StandardCartridgeSeals/B750VN-H75VN",
//     "B550VN Dual Seals": "/our-products/StandardCartridgeSeals/B550VNDualSeals",
//     "Standard Cartridge Seals": "/our-products/navbar/Standardmainpage",
//     "Standard Mechanical Seals For Pumps & Compressors": "/our-products/navbar/StandardMechanicalSeals",
//     "Engineered Seals For Demanding Applications": "/our-products/navbar/EngineeredSeals",
//     "Mechanical Seals For Agitators, Mixers, Kneaders & Reactors": "/our-products/navbar/MechanicalSeals",
//     "Split Seals": "/our-products/navbar/SplitSeals",
//     "Gas Lubricated Seals For Pumps & Agitators": "/our-products/navbar/GasLubricated",
//     "Algo Pumps": "/our-products/navbar/Algopumps",
//     "Bearing Isolators": "/our-products/navbar/BearingIsollators",
//     "Magnetic Mixers (Stirrers)": "/our-products/navbar/Magneticmixers",
//     "B100/B800/H10/H8 Single Balanced Seals (Compact)": "/our-products/StandardMechanicalSeals/CompactB100-B800-H10-H8",
//     "BRN/HRN Single Balanced Seals (Stationary Design / Multiple Springs)": "/our-products/StandardMechanicalSeals/BRN-HRNSingleBalanced",
//     "B700N/H7N Single Balanced Seals (Multiple Springs)": "/our-products/StandardMechanicalSeals/MultipleSpringsB700N-H7N",
//     "B740-D Dual Balanced Seals (Multiple Springs)": "/our-products/StandardMechanicalSeals/DualBalancedSealsB740",
//     "U700N/M7N Single Unbalanced Seals (Wave Springs)": "/our-products/StandardMechanicalSeals/U700N-M7NSingle",
//     "UFLWT/MFLWT Single Balanced Seals (Rotary Metal Bellows)": "/our-products/StandardMechanicalSeals/UFLWTSingle-MFLWT",
//     "UFL650/MFL65 Single Balanced Seals (Stationary Metal Bellows)": "/our-products/StandardMechanicalSeals/UFL650Single-MFL65",
//     "UFL850N/MFL85N Single Balanced Seals (Rotary Metal Bellows)": "/our-products/StandardMechanicalSeals/UFL850NSingle-MFL85N",
//     "UG100/MG1 Single Unbalanced Seals (Rubber Bellows)": "/our-products/StandardMechanicalSeals/UG100Single-MG1",
//     "UG943/MG9 Single Unbalanced Seals (Rubber Bellows)": "/our-products/StandardMechanicalSeals/UG943Single-MG9",
//     "U200N/M2N Single Unbalanced Seals (Conical Spring)": "/our-products/StandardMechanicalSeals/U200N-M2NSingle",
//     "U740-D/M74_D Dual Unbalanced Seals (Multiple Springs)": "/our-products/StandardMechanicalSeals/U740-D-M74-DDual",
//     "U300N/M3N Single Unbalanced Seals (Conical Spring)": "/our-products/StandardMechanicalSeals/U300N-M3NSingle",
//     "B120N Single Balanced Seals (Conical Spring)": "/our-products/StandardMechanicalSeals/B120NSingle",
//     "BJ920N/HJ92N Single Balanced Seals (Wave Springs)": "/our-products/StandardMechanicalSeals/BJ920N-HJ92NSingle",
//     "SBF/SBP": "/our-products/Engineeredseals/SBFSBP",
//     "SBF(V)-D / SBP(V)-D": "/our-products/Engineeredseals/SBFVDSBPVD",
//     "SBPV/SBFV": "/our-products/Engineeredseals/SBPVSBFV",
//     "BR Single & Dual Seals (Slurry)": "/our-products/Engineeredseals/BRSingleDualSealsSlurry",
//     "PP – D Dual Seals (Pulp & Paper)": "/our-products/Engineeredseals/PPDDualSealsPulpPaper",
//     "PP-S Single Seals (Pulp & Paper)": "/our-products/Engineeredseals/PPSSingleSealsPulpPaper",
//     "BSHLU-D Dual Seals (Bottom Entry) – 50 bars": "/our-products/Mechanicalseals/BSHLU",
//     "BSH-D Dual Seals (Top Entry) – 250 bars": "/our-products/Mechanicalseals/BSH",
//     "U184 Single & Dual Seals (Top Entry)/SeccoMix481": "/our-products/Mechanicalseals/U184-SeccoMix481",
//     "U164 Single & Dual Seals (Top-side Entry)/SeccoMix461": "/our-products/Mechanicalseals/U164-SeccoMix461",
//     "UR-D Dual Seals": "/our-products/Mechanicalseals/UR",
//     "MXS Single & Dual Seals (Top-side Entry)/SeccoMix1": "/our-products/Mechanicalseals/MXS-SeccoMix1",
//     "SPX/Splitex Single Semi Catridge Seals": "/our-products/Splitseals/SPXSingleSemiCatridgeSeals-Splitex",
//     "BGH201/HGH201 Single Semi Split Seals": "/our-products/Splitseals/BGH201SingleSemiSplitSeals-HGH201",
//     "ADKS Contactless seals": "/our-products/Splitseals/ADKSContactlessseals",
//     "GSAZ Single & Dual Gas Seals/AGSZ": "/our-products/Gaslubricatedseals/GSAZSingle-DualGasSeals-AGSZ",
//     "CTX-GSDN Dual Gas Seals (For Pumps)": "/our-products/Gaslubricatedseals/CTXGSDN",
//     "GSPH-K Single & Dual Gas Seals (For Pumps)/CGSH_K": "/our-products/Gaslubricatedseals/GSPHKSingle-CGSH-K",
//   }

//   const getProductSecondaryPath = (categoryIndex, itemName) => {
//     return (
//       productComponents[itemName] ||
//       `/products/${productCategories[categoryIndex].toLowerCase().replace(/\s+/g, "-")}/${itemName.toLowerCase().replace(/\s+/g, "-")}`
//     )
//   }

//   const getProductComponentPath = (itemName) => {
//     return productComponents[itemName] || "/"
//   }

//   const getProductMainCategoryRoute = (index) => {
//     const mainCategoryRoutes = {
//       0: "/our-products/navbar/Standardmainpage",
//       1: "/our-products/navbar/StandardMechanicalSeals",
//       2: "/our-products/navbar/EngineeredSeals",
//       3: "/our-products/navbar/MechanicalSeals",
//       4: "/our-products/navbar/SplitSeals",
//       5: "/our-products/navbar/GasLubricated",
//       6: "/our-products/navbar/Algopumps",
//       7: "/our-products/navbar/BearingIsollators",
//       8: "/our-products/navbar/Magneticmixers",
//     }
//     return mainCategoryRoutes[index] || "/"
//   }

//   return (
//     <div className="h-auto flex flex-col p-5 z-50">
//       {/* Mobile Navigation */}
//       <nav className="flex flex-row items-center justify-center  w-full gap-9">
//         <Link to="/" className="text-black font-[Monda] text-[12px] font-semibold leading-normal" onClick={handleClose}>
//           Home
//         </Link>
//         <Link
//           to="/about"
//           className="text-black font-[Monda] text-[12px] font-semibold leading-normal"
//           onClick={handleClose}
//         >
//           About
//         </Link>
//         <div className="relative flex items-center" ref={productsRef}>
//           <a
//             href="#"
//             className="text-black font-[Monda] text-[12px] font-semibold leading-normal whitespace-nowrap cursor-pointer"
//             onClick={toggleProductsDropdown}
//           >
//             Our Products
//           </a>
//         </div>
//         <Link
//           to="/contact"
//           className="text-black font-[Monda] text-[12px] font-semibold leading-normal"
//           onClick={handleClose}
//         >
//           Contact
//         </Link>
//       </nav>

//       {/* Products Dropdown */}
//       {productsDropdownOpen && (
//         <div
//           className="absolute left-16 right-0 z-50 bg-[#363636]  w-[220px] p-4 rounded-lg"
//           style={{ top: "40px" }}
//           ref={secondaryNavRef}
//         >
//           {productCategories.map((item, idx) => (
//             <div key={idx} className="mb-[6px]">
//               <div className="flex items-center gap-2">
//                 <Link
//                   to={idx < 6 ? getProductMainCategoryRoute(idx) : productComponents[item] || "/"}
//                   className="text-white font-[Manrope] text-[14px] font-medium relative group"
//                   onClick={(e) => {
//                     e.preventDefault()
//                     if (idx >= 6) {
//                       handleClose()
//                       setProductsDropdownOpen(false)
//                       navigate(idx < 6 ? getProductMainCategoryRoute(idx) : productComponents[item] || "/")
//                     } else {
//                       handleProductCategoryClick(e, idx)
//                     }
//                   }}
//                 >
//                   {item}
//                   <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </div>

//               {idx === secondaryNavIndex && secondaryNavOpen && idx < 6 && (
//                 <div className="ml-4 mt-2 flex flex-col gap-[6px]">
//                   {productSecondaryNavItems[idx].map((subItem, subIdx) => (
//                     <Link
//                       key={subIdx}
//                       to={getProductSecondaryPath(idx, subItem)}
//                       className="text-white font-[Manrope] text-[12px] font-medium relative group"
//                       onClick={() => {
//                         handleClose()
//                         setProductsDropdownOpen(false)
//                         setSecondaryNavOpen(false)
//                         const componentPath = getProductComponentPath(subItem)
//                         navigate(componentPath)
//                       }}
//                     >
//                       {subItem}
//                       <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default HeaderMobile
