import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TopBar from "./components/TopBar"
import "./App.css"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Aboutpage from "./components/Aboutpage"
import Contactpage from "./components/Contactpage"
import Letsconnect from "./pages/contact/Letsconnect" 
// Import the product page component
import CTXANSISingleSeals from "./pages/ourproducts/StandardCartridgeSeals/CTXANSISingleSeals-Cartex-ansi-single-seals"
import CTXANSIDualSeals from "./pages/ourproducts/StandardCartridgeSeals/CTXANSIDualSeals-Cartex-ansi-dual-seals"
import CTXSingleSeals from "./pages/ourproducts/StandardCartridgeSeals/CTXSingleSeals-Cartex-single-seals"
import ETXSingleSeals from "./pages/ourproducts/StandardCartridgeSeals/ETXSingleSeals"
import MTXDualSeals from "./pages/ourproducts/StandardCartridgeSeals/MTXDualSeals-MtexDualSeals"
import MTXSingleSeals from "./pages/ourproducts/StandardCartridgeSeals/MTXSingleSeals-MtexSingleSeals"
import UTXSingleBellowSeals from "./pages/ourproducts/StandardCartridgeSeals/UTXSingleBellowSeals-Unitex"
import VTXSingleSeals from "./pages/ourproducts/StandardCartridgeSeals/VTXSingleSeals"
import VTXDualSeals from "./pages/ourproducts/StandardCartridgeSeals/VTXDualSeals"
import B750VN from "./pages/ourproducts/StandardCartridgeSeals/B750VN-H75VN"
import B550VNDualSeals from "./pages/ourproducts/StandardCartridgeSeals/B550VNDualSeals"
import Algopumps from "./pages/ourproducts/Algopumps"
import BearingIsollators from "./pages/ourproducts/BearingIsollators"
import Magneticmixers from "./pages/ourproducts/Magneticmixers"
import Standardmainpage from "./pages/ourproducts/Standardmainpage"
import StandardMechanicalSeals from "./pages/ourproducts/StandardMechanicalSeals "
import EngineeredSeals from "./pages/ourproducts/EngineeredSeals "
import MechanicalSeals from "./pages/ourproducts/MechanicalSeals"
import SplitSeals from "./pages/ourproducts/SplitSeals"
import GasLubricated from "./pages/ourproducts/GasLubricated"
import CTXDualSeals from "./pages/ourproducts/StandardCartridgeSeals/CTXDualSeals-Cartex-dual-seal"
import Compact from "./pages/ourproducts/StandardMechanicalSeals/CompactB100-B800-H10-H8"
import BRNSingleBalanced from "./pages/ourproducts/StandardMechanicalSeals/BRN-HRNSingleBalanced"
import MultipleSprings from "./pages/ourproducts/StandardMechanicalSeals/MultipleSpringsB700N-H7N"
import DualBalancedSealsB740 from "./pages/ourproducts/StandardMechanicalSeals/DualBalancedSealsB740"
import U700NSingle from "./pages/ourproducts/StandardMechanicalSeals/U700N-M7NSingle"
import UFLWTSingle from "./pages/ourproducts/StandardMechanicalSeals/UFLWTSingle-MFLWT"
import UFL650Single from "./pages/ourproducts/StandardMechanicalSeals/UFL650Single-MFL65"
import UFL850NSingle from "./pages/ourproducts/StandardMechanicalSeals/UFL850NSingle-MFL85N"
import UG100Single from "./pages/ourproducts/StandardMechanicalSeals/UG100Single-MG1"
import UG943Single from "./pages/ourproducts/StandardMechanicalSeals/UG943Single-MG9"
import U200NSingle from "./pages/ourproducts/StandardMechanicalSeals/U200N-M2NSingle"
import U740 from "./pages/ourproducts/StandardMechanicalSeals/U740-D-M74-DDual"
import U300NSingle from "./pages/ourproducts/StandardMechanicalSeals/U300N-M3NSingle"
import B120NSingle from "./pages/ourproducts/StandardMechanicalSeals/B120NSingle"
import BJ920NSingle from "./pages/ourproducts/StandardMechanicalSeals/BJ920N-HJ92NSingle"
import SBFSBP from "./pages/ourproducts/Engineeredseals/SBFSBP"
import SBFVDSBPVD from "./pages/ourproducts/Engineeredseals/SBFVDSBPVD"
import SBPVSBFV from "./pages/ourproducts/Engineeredseals/SBPVSBFV"
import BRSingleDualSealsSlurry from "./pages/ourproducts/Engineeredseals/BRSingleDualSealsSlurry"
import PPDDualSealsPulpPaper from "./pages/ourproducts/Engineeredseals/PPDDualSealsPulpPaper"
import PPSSingleSealsPulpPaper from "./pages/ourproducts/Engineeredseals/PPSSingleSealsPulpPaper"
import BSHLU from "./pages/ourproducts/Mechanicalseals/BSHLU"
import BSH from "./pages/ourproducts/Mechanicalseals/BSH"
import U184 from "./pages/ourproducts/Mechanicalseals/U184-SeccoMix481"
import U164 from "./pages/ourproducts/Mechanicalseals/U164-SeccoMix461"
import UR from "./pages/ourproducts/Mechanicalseals/UR"
import MXS from "./pages/ourproducts/Mechanicalseals/MXS-SeccoMix1"
import SPXSingleSemiCatridgeSeals from "./pages/ourproducts/Splitseals/SPXSingleSemiCatridgeSeals-Splitex"
import BGH201SingleSemiSplitSeals from "./pages/ourproducts/Splitseals/BGH201SingleSemiSplitSeals-HGH201"
import ADKSContactlessseals from "./pages/ourproducts/Splitseals/ADKSContactlessseals"
import GSAZSingleDualGasSeals from "./pages/ourproducts/Gaslubricatedseals/GSAZSingle&DualGasSeals-AGSZ"
import CTXGSDN from "./pages/ourproducts/Gaslubricatedseals/CTXGSDN"
import GSPHKSingle from "./pages/ourproducts/Gaslubricatedseals/GSPHKSingle-CGSH-K"

import IndustrialBlog from "./components/Blogpage"

const App = () => {
  return (
    <Router>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/blog" element={<IndustrialBlog/>} />
        <Route path="/letsconnect" element={<Letsconnect />} />

        {/* Routes for Standard Cartridge Seals */}
        <Route path="/our-products/StandardCartridgeSeals/CTXANSISingleSeals-Cartex-ansi-single-seals" element={<CTXANSISingleSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/CTXANSIDualSeals-Cartex-ansi-dual-seals" element={<CTXANSIDualSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/CTXSingleSeals-Cartex-single-seal" element={<CTXSingleSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/CTXDualSeals-Cartex-dual-seal" element={<CTXDualSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/ETXSingleSeals" element={<ETXSingleSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/MTXDualSeals-Mtex-Dual-Seals" element={<MTXDualSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/MTXSingleSeals-Mtex-Single-Seals" element={<MTXSingleSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/UTXSingleBellowSeals-Unitex" element={<UTXSingleBellowSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/VTXSingleSeals" element={<VTXSingleSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/VTXDualSeals" element={<VTXDualSeals />} />
        <Route path="/our-products/StandardCartridgeSeals/B750VN-H75VN" element={<B750VN />} />
        <Route path="/our-products/StandardCartridgeSeals/B550VNDualSeals" element={<B550VNDualSeals />} />

        {/* Routes for direct navigation items */}
        <Route path="/our-products/Algopumps" element={<Algopumps />} />
        <Route path="/our-products/BearingIsollators" element={<BearingIsollators />} />
        <Route path="/our-products/Magneticmixers" element={<Magneticmixers />} />
        <Route path="/our-products/Standardcartridgeseals" element={<Standardmainpage />} />
        <Route path="/our-products/StandardMechanicalSeals" element={<StandardMechanicalSeals />} />
        <Route path="/our-products/EngineeredSeals" element={<EngineeredSeals />} />
        <Route path="/our-products/MechanicalSeals" element={<MechanicalSeals />} />
        <Route path="/our-products/SplitSeals" element={<SplitSeals />} />
        <Route path="/our-products/GasLubricated" element={<GasLubricated />} />

        {/* Routes for Standard Mechanical Seals */}
        <Route path="/our-products/StandardMechanicalSeals/CompactB100-B800-H10-H8" element={<Compact />} />
        <Route path="/our-products/StandardMechanicalSeals/BRN-HRNSingleBalanced" element={<BRNSingleBalanced />} />
        <Route path="/our-products/StandardMechanicalSeals/MultipleSpringsB700N-H7N" element={<MultipleSprings />} />
        <Route path="/our-products/StandardMechanicalSeals/DualBalancedSealsB740" element={<DualBalancedSealsB740 />} />
        <Route path="/our-products/StandardMechanicalSeals/U700N-M7NSingle" element={<U700NSingle />} />
        <Route path="/our-products/StandardMechanicalSeals/UFLWTSingle-MFLWT" element={<UFLWTSingle />} />
        <Route path="/our-products/StandardMechanicalSeals/UFL650Single-MFL65" element={<UFL650Single />} />
        <Route path="/our-products/StandardMechanicalSeals/UFL850NSingle-MFL85N" element={<UFL850NSingle />} />
        <Route path="/our-products/StandardMechanicalSeals/UG100Single-MG1" element={<UG100Single />} />
        <Route path="/our-products/StandardMechanicalSeals/UG943Single-MG9" element={<UG943Single />} />
        <Route path="/our-products/StandardMechanicalSeals/U200N-M2NSingle" element={<U200NSingle />} />
        <Route path="/our-products/StandardMechanicalSeals/U740-D-M74-DDual" element={<U740 />} />
        <Route path="/our-products/StandardMechanicalSeals/U300N-M3NSingle" element={<U300NSingle />} />
        <Route path="/our-products/StandardMechanicalSeals/B120NSingle" element={<B120NSingle />} />
        <Route path="/our-products/StandardMechanicalSeals/BJ920N-HJ92NSingle" element={<BJ920NSingle />} />

        {/* Routes for Engineered Seals */}
        <Route path="/our-products/Engineeredseals/SBFSBP" element={<SBFSBP />} />
        <Route path="/our-products/Engineeredseals/SBFVDSBPVD" element={<SBFVDSBPVD />} />
        <Route path="/our-products/Engineeredseals/SBPVSBFV" element={<SBPVSBFV />} />
        <Route path="/our-products/Engineeredseals/BRSingleDualSealsSlurry" element={<BRSingleDualSealsSlurry />} />
        <Route path="/our-products/Engineeredseals/PPDDualSealsPulpPaper" element={<PPDDualSealsPulpPaper />} />
        <Route path="/our-products/Engineeredseals/PPSSingleSealsPulpPaper" element={<PPSSingleSealsPulpPaper />} />

        {/* Routes for Mechanical Seals */}
        <Route path="/our-products/Mechanicalseals/BSHLU" element={<BSHLU />} />
        <Route path="/our-products/Mechanicalseals/BSH" element={<BSH />} />
        <Route path="/our-products/Mechanicalseals/U184-SeccoMix481" element={<U184 />} />
        <Route path="/our-products/Mechanicalseals/U164-SeccoMix461" element={<U164 />} />
        <Route path="/our-products/Mechanicalseals/UR" element={<UR />} />
        <Route path="/our-products/Mechanicalseals/MXS-SeccoMix1" element={<MXS />} />

        {/* Routes for Split Seals */}
        <Route path="/our-products/Splitseals/SPXSingleSemiCatridgeSeals-Splitex" element={<SPXSingleSemiCatridgeSeals />} />
        <Route path="/our-products/Splitseals/BGH201SingleSemiSplitSeals-HGH201" element={<BGH201SingleSemiSplitSeals />} />
        <Route path="/our-products/Splitseals/ADKSContactlessseals" element={<ADKSContactlessseals />} />

        {/* Routes for Gas Lubricated Seals */}
        <Route path="/our-products/Gaslubricatedseals/GSAZSingle-DualGasSeals-AGSZ" element={<GSAZSingleDualGasSeals />} />
        <Route path="/our-products/Gaslubricatedseals/CTXGSDN" element={<CTXGSDN />} />
        <Route path="/our-products/Gaslubricatedseals/GSPHKSingle-CGSH-K" element={<GSPHKSingle />} />
{/*  */}
      </Routes>
    </Router>
  )
}

export default App