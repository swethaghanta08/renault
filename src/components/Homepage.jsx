import { Helmet } from 'react-helmet';
import HeroSection from '../pages/home/Herocontainer';
import AboutEngineer from '../pages/home/Aboutrenaultengineers';
import Carousel from '../pages/home/Casurosel';
import TrustedClients from '../pages/home/Deliveringexcellence';
import ContactSection from '../pages/home/Getintouch';
import Footer from '../pages/home/Footer';

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Mechanical Seals & Engineering Solutions in Hyderabad | Renault Engineers</title>
        <meta
          name="description"
          content="Renault Engineers is a leading manufacturer of mechanical seals in Hyderabad. Specializing in cartridge seals and providing industrial engineering services."
        />
        <link rel="canonical" href="https://renaultengineers.com/" />
      </Helmet>

      <HeroSection />
      <AboutEngineer />
      <Carousel />
      <TrustedClients />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;
