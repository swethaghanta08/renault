import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TopBar from "./components/TopBar"
import "./App.css"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Aboutpage from "./components/Aboutpage"
import Contactpage from "./components/Contactpage"
import Letsconnect from "./pages/contact/Letsconnect" // Corrected import path
// Import the product page component
import CTXANSISingleSeals from "./pages/ourproducts/StandardCartridgeSeals/CTXANSISingleSeals"
import CTXANSIDualSeals from "./pages/ourproducts/StandardCartridgeSeals/CTXANSIDualSeals"
import CTXSingleSeals from "./pages/ourproducts/StandardCartridgeSeals/CTXSingleSeals"
import ETXSingleSeals from "./pages/ourproducts/StandardCartridgeSeals/ETXSingleSeals"
import MTXDualSeals from "./pages/ourproducts/StandardCartridgeSeals/MTXDualSeals"
import MTXSingleSeals from "./pages/ourproducts/StandardCartridgeSeals/MTXSingleSeals"
import UTXSingleBellowSeals from "./pages/ourproducts/StandardCartridgeSeals/UTXSingleBellowSeals"
import VTXSingleSeals from "./pages/ourproducts/StandardCartridgeSeals/VTXSingleSeals"
import VTXDualSeals from "./pages/ourproducts/StandardCartridgeSeals/VTXDualSeals"
import B750VN from "./pages/ourproducts/StandardCartridgeSeals/B750VN"
import B550VNDualSeals from "./pages/ourproducts/StandardCartridgeSeals/B550VNDualSeals"
import Algopumps from "./pages/ourproducts/navbar/Algopumps"
import Magneticimpellers from "./pages/ourproducts/navbar/Magneticimpellers"
import BearingIsollators from "./pages/ourproducts/navbar/BearingIsollators"
import Magneticmixers from "./pages/ourproducts/navbar/Magneticmixers"
import Standardmainpage from "./pages/ourproducts/navbar/Standardmainpage"
import StandardMechanicalSeals from "./pages/ourproducts/navbar/StandardMechanicalSeals "
import EngineeredSeals from "./pages/ourproducts/navbar/EngineeredSeals "
import MechanicalSeals from "./pages/ourproducts/navbar/MechanicalSeals"
import SplitSeals from "./pages/ourproducts/navbar/SplitSeals"
import GasLubricated from "./pages/ourproducts/navbar/GasLubricated"
import CTXDualSeals from "./pages/ourproducts/StandardCartridgeSeals/CTXDualSeals"
import Compact from "./pages/ourproducts/StandardMechanicalSeals/Compact"
import BRNSingleBalanced from "./pages/ourproducts/StandardMechanicalSeals/BRNSingleBalanced"
import MultipleSprings from "./pages/ourproducts/StandardMechanicalSeals/MultipleSprings"
import DualBalancedSealsB740 from "./pages/ourproducts/StandardMechanicalSeals/DualBalancedSealsB740"
import U700NSingle from "./pages/ourproducts/StandardMechanicalSeals/U700NSingle"
import UFLWTSingle from "./pages/ourproducts/StandardMechanicalSeals/UFLWTSingle"
import UFL650Single from "./pages/ourproducts/StandardMechanicalSeals/UFL650Single"
import UFL850NSingle from "./pages/ourproducts/StandardMechanicalSeals/UFL850NSingle"
import UG100Single from "./pages/ourproducts/StandardMechanicalSeals/UG100Single"
import UG943Single from "./pages/ourproducts/StandardMechanicalSeals/UG943Single"
import U200NSingle from "./pages/ourproducts/StandardMechanicalSeals/U200NSingle"
import U740 from "./pages/ourproducts/StandardMechanicalSeals/U740-DDual"
import U300NSingle from "./pages/ourproducts/StandardMechanicalSeals/U300NSingle"
import B120NSingle from "./pages/ourproducts/StandardMechanicalSeals/B120NSingle"
import BJ920NSingle from "./pages/ourproducts/StandardMechanicalSeals/BJ920NSingle"
import SBFSBP from "./pages/ourproducts/Engineeredseals/SBFSBP"
import SBFVDSBPVD from "./pages/ourproducts/Engineeredseals/SBFVDSBPVD"
import SBPVSBFV from "./pages/ourproducts/Engineeredseals/SBPVSBFV"
import BRSingleDualSealsSlurry from "./pages/ourproducts/Engineeredseals/BRSingleDualSealsSlurry"
import PPDDualSealsPulpPaper from "./pages/ourproducts/Engineeredseals/PPDDualSealsPulpPaper"
import PPSSingleSealsPulpPaper from "./pages/ourproducts/Engineeredseals/PPSSingleSealsPulpPaper"
import BSHLU from "./pages/ourproducts/Mechanicalseals/BSHLU"
import BSH from "./pages/ourproducts/Mechanicalseals/BSH"
import U184 from "./pages/ourproducts/Mechanicalseals/U184"
import U164 from "./pages/ourproducts/Mechanicalseals/U164"
import UR from "./pages/ourproducts/Mechanicalseals/UR"
import MXS from "./pages/ourproducts/Mechanicalseals/MXS"
import SPXSingleSemiCatridgeSeals from "./pages/ourproducts/Splitseals/SPXSingleSemiCatridgeSeals"
import BGH201SingleSemiSplitSeals from "./pages/ourproducts/Splitseals/BGH201SingleSemiSplitSeals"
import ADKSContactlessseals from "./pages/ourproducts/Splitseals/ADKSContactlessseals"
import GSAZSingleDualGasSeals from "./pages/ourproducts/Gaslubricatedseals/GSAZSingle&DualGasSeals"
import CTXGSDN from "./pages/ourproducts/Gaslubricatedseals/CTXGSDN"
import GSPHKSingle from "./pages/ourproducts/Gaslubricatedseals/GSPHKSingle"
import Agglomerator from "./pages/industry/Pharmaceutical/Agglomerator"
import Sphericaldryer from "./pages/industry/Pharmaceutical/Sphericaldryer"
import Eccentricpump from "./pages/industry/Pharmaceutical/Eccentricpump"
import Sterilepump from "./pages/industry/Pharmaceutical/Sterilepump"
import Centrifugalpumo from "./pages/industry/Pharmaceutical/Centrifugalpump"
import Filterdryer from "./pages/industry/Pharmaceutical/Filterdryer"
import DischargePump from "./pages/industry/Refinary/DischargePump"
import GasOilPump from "./pages/industry/Refinary/GasOilPump"
import GLPDeliveryPump from "./pages/industry/Refinary/GLPDeliveryPump"
import QuenchOilPump from "./pages/industry/Refinary/QuenchOilPump"
import VerticalInLinePump from "./pages/industry/Refinary/VerticalInLinePump"
import LowTemperaturePump from "./pages/industry/Refinary/LowTemperaturePump"
import ResidualOilPump from "./pages/industry/Refinary/ResidualOilPump"
import AgitatorBeadMill from "./pages/industry/ChemicalPetrochemical/AgitatorBeadMill"
import ChemicalPump from "./pages/industry/ChemicalPetrochemical/ChemicalPump"
import EccentricScrewPump from "./pages/industry/ChemicalPetrochemical/EccentricScrewPump"
import GearPump from "./pages/industry/ChemicalPetrochemical/GearPump"
import GlassLinedReactor from "./pages/industry/ChemicalPetrochemical/GlassLinedReactor"
import ThinFilmEvaporator from "./pages/industry/ChemicalPetrochemical/ThinFilmEvaporator"
import ChemicalReactor from "./pages/industry/ChemicalPetrochemical/ChemicalReactor"
import RotaryPistonPump from "./pages/industry/ChemicalPetrochemical/RotaryPistonPump"
import HotWater from "./pages/industry/Water/HotWater"
import DesalinizationOfSeaWater from "./pages/industry/Water/DesalinizationOfSeaWater"
import NonCloggingPump from "./pages/industry/Water/NonCloggingPump"
import RawSludgePump from "./pages/industry/Water/RawSludgePump"
import SewageBlockPump from "./pages/industry/Water/SewageBlockPump"
import SubmersibleAgitator from "./pages/industry/Water/SubmersibleAgitator"
import SubmersiblePump from "./pages/industry/Water/SubmersiblePump"
import BoilerCirculationPump from "./pages/industry/Power/BoilerCirculationPump"
import BoilerFeedPump from "./pages/industry/Power/BoilerFeedPump"
import FeedPump from "./pages/industry/Power/FeedPump"
import MainFeedPump from "./pages/industry/Power/MainFeedPump"
import FlueGasDesulphurizationPump from "./pages/industry/Power/FlueGasDesulphurizationPump"
import ResidueEvacuationPump from "./pages/industry/Power/ResidueEvacuationPump"
import CondensatePump from "./pages/industry/Power/CondensatePump"
import PressureGrinder from "./pages/industry/Pulppapaper/PressureGrinder"
import PulpPump from "./pages/industry/Pulppapaper/PulpPump"
import DigestingBleachingPump from "./pages/industry/Pulppapaper/DigestingBleachingPump"
import DeinkingPump from "./pages/industry/Pulppapaper/DeinkingPump"
import Refiner from "./pages/industry/Pulppapaper/Refiner"
import StockPump from "./pages/industry/Pulppapaper/StockPump"
import CoolingWaterPump from "./pages/industry/Marine/CoolingWaterPump"
import DredgingPump from "./pages/industry/Marine/DredgingPump"
import LubricatingOilPump from "./pages/industry/Marine/LubricatingOilPump"
import GearBox from "./pages/industry/Marine/GearBox"
import FlumeWaterPump from "./pages/industry/Sugar/FlumeWaterPump"
import JuiceCirculatingPump from "./pages/industry/Sugar/JuiceCirculatingPump"
import ThickJuicePump from "./pages/industry/Sugar/ThickJuicePump"
import MashPump from "./pages/industry/Sugar/MashPump"
import WormTypeAgitator from "./pages/industry/Sugar/WormTypeAgitator"
import Compressors from "./pages/industry/Compressors"
import Coalgasification from "./pages/industry/Coalgasification"

const App = () => {
  return (
    <Router>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/letsconnect" element={<Letsconnect />} /> {/* Updated to use Letsconnect */}
        {/* Keep these routes for direct access if needed */}
        {/* <Route path="/HeaderMedium" element={<HeaderMedium />} /> */}
        {/* <Route path="/HomeSmall" element={<HeaderMobile />} /> */}
        {/* Routes for Standard Cartridge Seals - REMOVE .jsx extension */}
        <Route path="/ourproducts/StandardCartridgeSeals/CTXANSISingleSeals" element={<CTXANSISingleSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/CTXANSIDualSeals" element={<CTXANSIDualSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/CTXSingleSeals" element={<CTXSingleSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/CTXDualSeals" element={<CTXDualSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/ETXSingleSeals" element={<ETXSingleSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/MTXDualSeals" element={<MTXDualSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/MTXSingleSeals" element={<MTXSingleSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/UTXSingleBellowSeals" element={<UTXSingleBellowSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/VTXSingleSeals" element={<VTXSingleSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/VTXDualSeals" element={<VTXDualSeals />} />
        <Route path="/ourproducts/StandardCartridgeSeals/B750VN" element={<B750VN />} />
        <Route path="/ourproducts/StandardCartridgeSeals/B550VNDualSeals" element={<B550VNDualSeals />} />
        {/* Routes for direct navigation items - REMOVE .jsx extension */}
        <Route path="/ourproducts/navbar/Algopumps" element={<Algopumps />} />
        <Route path="/ourproducts/navbar/Magneticimpellers" element={<Magneticimpellers />} />
        <Route path="/ourproducts/navbar/BearingIsollators" element={<BearingIsollators />} />
        <Route path="/ourproducts/navbar/Magneticmixers" element={<Magneticmixers />} />
        <Route path="/ourproducts/navbar/Standardmainpage" element={<Standardmainpage />} />
        <Route path="/ourproducts/navbar/StandardMechanicalSeals" element={<StandardMechanicalSeals />} />
        <Route path="/ourproducts/navbar/EngineeredSeals" element={<EngineeredSeals />} />
        <Route path="/ourproducts/navbar/MechanicalSeals" element={<MechanicalSeals />} />
        <Route path="/ourproducts/navbar/SplitSeals" element={<SplitSeals />} />
        <Route path="/ourproducts/navbar/GasLubricated" element={<GasLubricated />} />
        {/* Routes for Standard Mechanical Seals - REMOVE .jsx extension */}
        <Route path="ourproducts/StandardMechanicalSeals/Compact" element={<Compact />} />
        <Route path="/ourproducts/StandardMechanicalSeals/BRNSingleBalanced" element={<BRNSingleBalanced />} />
        <Route path="/ourproducts/StandardMechanicalSeals/MultipleSprings" element={<MultipleSprings />} />
        <Route path="/ourproducts/StandardMechanicalSeals/DualBalancedSealsB740" element={<DualBalancedSealsB740 />} />
        <Route path="/ourproducts/StandardMechanicalSeals/U700NSingle" element={<U700NSingle />} />
        <Route path="/ourproducts/StandardMechanicalSeals/UFLWTSingle" element={<UFLWTSingle />} />
        <Route path="/ourproducts/StandardMechanicalSeals/UFL650Single" element={<UFL650Single />} />
        <Route path="/ourproducts/StandardMechanicalSeals/UFL850NSingle" element={<UFL850NSingle />} />
        <Route path="/ourproducts/StandardMechanicalSeals/UG100Single" element={<UG100Single />} />
        <Route path="/ourproducts/StandardMechanicalSeals/UG943Single" element={<UG943Single />} />
        <Route path="/ourproducts/StandardMechanicalSeals/U200NSingle" element={<U200NSingle />} />
        <Route path="/ourproducts/StandardMechanicalSeals/U740-DDual" element={<U740 />} />
        <Route path="/ourproducts/StandardMechanicalSeals/U300NSingle" element={<U300NSingle />} />
        <Route path="/ourproducts/StandardMechanicalSeals/B120NSingle" element={<B120NSingle />} />
        <Route path="/ourproducts/StandardMechanicalSeals/BJ920NSingle" element={<BJ920NSingle />} />
        {/* Routes for Engineered Seals - REMOVE .jsx extension */}
        <Route path="/ourproducts/Engineeredseals/SBFSBP" element={<SBFSBP />} />
        <Route path="/ourproducts/Engineeredseals/SBFVDSBPVD" element={<SBFVDSBPVD />} />
        <Route path="/ourproducts/Engineeredseals/SBPVSBFV" element={<SBPVSBFV />} />
        <Route path="/ourproducts/Engineeredseals/BRSingleDualSealsSlurry" element={<BRSingleDualSealsSlurry />} />
        <Route path="/ourproducts/Engineeredseals/PPDDualSealsPulpPaper" element={<PPDDualSealsPulpPaper />} />
        <Route path="/ourproducts/Engineeredseals/PPSSingleSealsPulpPaper" element={<PPSSingleSealsPulpPaper />} />
        {/* Routes for Mechanical Seals - REMOVE .jsx extension */}
        <Route path="/ourproducts/Mechanicalseals/BSHLU" element={<BSHLU />} />
        <Route path="/ourproducts/Mechanicalseals/BSH" element={<BSH />} />
        <Route path="/ourproducts/Mechanicalseals/U184" element={<U184 />} />
        <Route path="/ourproducts/Mechanicalseals/U164" element={<U164 />} />
        <Route path="/ourproducts/Mechanicalseals/UR" element={<UR />} />
        <Route path="/ourproducts/Mechanicalseals/MXS" element={<MXS />} />
        {/* Routes for Split Seals - REMOVE .jsx extension */}
        <Route path="/ourproducts/Splitseals/SPXSingleSemiCatridgeSeals" element={<SPXSingleSemiCatridgeSeals />} />
        <Route path="/ourproducts/Splitseals/BGH201SingleSemiSplitSeals" element={<BGH201SingleSemiSplitSeals />} />
        <Route path="/ourproducts/Splitseals/ADKSContactlessseals" element={<ADKSContactlessseals />} />
        {/* Routes for Gaslubricated Seals - REMOVE .jsx extension */}
        <Route path="/ourproducts/Gaslubricatedseals/GSAZSingle&DualGasSeals" element={<GSAZSingleDualGasSeals />} />
        <Route path="/ourproducts/Gaslubricatedseals/CTXGSDN" element={<CTXGSDN />} />
        <Route path="/ourproducts/Gaslubricatedseals/GSPHKSingle" element={<GSPHKSingle />} />
        {/* Routes for Pharmacetical - REMOVE .jsx extension */}
        <Route path="/industry/Pharmaceutical/Agglomerator" element={<Agglomerator />} />
        <Route path="/industry/Pharmaceutical/Sphericaldryer" element={<Sphericaldryer />} />
        <Route path="/industry/Pharmaceutical/Eccentricpump" element={<Eccentricpump />} />
        <Route path="/industry/Pharmaceutical/Sterilepump" element={<Sterilepump />} />
        <Route path="/industry/Pharmaceutical/Centrifugalpump" element={<Centrifugalpumo />} />
        <Route path="/industry/Pharmaceutical/Filterdryer" element={<Filterdryer />} />
        {/* Routes for Refinary- REMOVE .jsx extension */}
        <Route path="/industry/Refinary/DischargePump" element={<DischargePump />} />
        <Route path="/industry/Refinary/GasOilPump" element={<GasOilPump />} />
        <Route path="/industry/Refinary/GLPDeliveryPump" element={<GLPDeliveryPump />} />
        <Route path="/industry/Refinary/QuenchOilPump" element={<QuenchOilPump />} />
        <Route path="/industry/Refinary/ResidualOilPump" element={<ResidualOilPump />} />
        <Route path="/industry/Refinary/VerticalInLinePump" element={<VerticalInLinePump />} />
        <Route path="/industry/Refinary/LowTemperaturePump" element={<LowTemperaturePump />} />
        {/* Routes for ChemicalPetroleum- REMOVE .jsx extension */}
        <Route path="/industry/ChemicalPetrochemical/AgitatorBeadMill" element={<AgitatorBeadMill />} />
        <Route path="/industry/ChemicalPetrochemical/ChemicalPump" element={<ChemicalPump />} />
        <Route path="/industry/ChemicalPetrochemical/EccentricScrewPump" element={<EccentricScrewPump />} />
        <Route path="/industry/ChemicalPetrochemical/GearPump" element={<GearPump />} />
        <Route path="/industry/ChemicalPetrochemical/GlassLinedReactor" element={<GlassLinedReactor />} />
        <Route path="/industry/ChemicalPetrochemical/ThinFilmEvaporator" element={<ThinFilmEvaporator />} />
        <Route path="/industry/ChemicalPetrochemical/ChemicalReactor" element={<ChemicalReactor />} />
        <Route path="/industry/ChemicalPetrochemical/RotaryPistonPump" element={<RotaryPistonPump />} />
        {/* Routes for Water- REMOVE .jsx extension */}
        <Route path="/industry/Water/HotWater" element={<HotWater />} />
        <Route path="/industry/Water/DesalinizationOfSeaWater" element={<DesalinizationOfSeaWater />} />
        <Route path="/industry/Water/NonCloggingPump" element={<NonCloggingPump />} />
        <Route path="/industry/Water/RawSludgePump" element={<RawSludgePump />} />
        <Route path="/industry/Water/SewageBlockPump" element={<SewageBlockPump />} />
        <Route path="/industry/Water/SubmersibleAgitator" element={<SubmersibleAgitator />} />
        <Route path="/industry/Water/SubmersiblePump" element={<SubmersiblePump />} />
        {/* Routes for Power- REMOVE .jsx extension */}
        <Route path="/industry/Power/BoilerCirculationPump" element={<BoilerCirculationPump />} />
        <Route path="/industry/Power/BoilerFeedPump" element={<BoilerFeedPump />} />
        <Route path="/industry/Power/FeedPump" element={<FeedPump />} />
        <Route path="/industry/Power/MainFeedPump" element={<MainFeedPump />} />
        <Route path="/industry/Power/FlueGasDesulphurizationPump" element={<FlueGasDesulphurizationPump />} />
        <Route path="/industry/Power/ResidueEvacuationPump" element={<ResidueEvacuationPump />} />
        <Route path="/industry/Power/CondensatePump" element={<CondensatePump />} />
        {/* Routes for Pulppaper- REMOVE .jsx extension */}
        <Route path="/industry/Pulppapaper/PressureGrinder" element={<PressureGrinder />} />
        <Route path="/industry/Pulppapaper/PulpPump" element={<PulpPump />} />
        <Route path="/industry/Pulppapaper/DigestingBleachingPump" element={<DigestingBleachingPump />} />
        <Route path="/industry/Pulppapaper/DeinkingPump" element={<DeinkingPump />} />
        <Route path="/industry/Pulppapaper/Refiner" element={<Refiner />} />
        <Route path="/industry/Pulppapaper/StockPump" element={<StockPump />} />
        {/* Routes for Marine- REMOVE .jsx extension */}
        <Route path="/industry/Marine/CoolingWaterPump" element={<CoolingWaterPump />} />
        <Route path="/industry/Marine/DredgingPump" element={<DredgingPump />} />
        <Route path="/industry/Marine/LubricatingOilPump" element={<LubricatingOilPump />} />
        <Route path="/industry/Marine/GearBox" element={<GearBox />} />
        {/* Routes for Sugar- REMOVE .jsx extension */}
        <Route path="/industry/Sugar/FlumeWaterPump" element={<FlumeWaterPump />} />
        <Route path="/industry/Sugar/JuiceCirculatingPump" element={<JuiceCirculatingPump />} />
        <Route path="/industry/Sugar/ThickJuicePump" element={<ThickJuicePump />} />
        <Route path="/industry/Sugar/MashPump" element={<MashPump />} />
        <Route path="/industry/Sugar/WormTypeAgitator" element={<WormTypeAgitator />} />
        <Route path="/industry/Compressors" element={<Compressors />} />
        <Route path="/industry/CoalGasification" element={<Coalgasification />} />
      </Routes>
    </Router>
  )
}

export default App

