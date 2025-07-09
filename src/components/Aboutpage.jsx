import { Helmet } from 'react-helmet';
import AboutHeroSection from '../pages/about/HeroAboutSection';
import FeatureSection from '../pages/about/Featuresection';
import AboutEngineersSection from '../pages/about/Aboutengineers';
import WhereDesignMeetsPerformance from '../pages/about/Wheredesignmetts';
import Footer from '../pages/home/Footer';
const Aboutpage = () => {
  return (
    <div>
      <Helmet>
        <title>Mechanical Seals Manufacturers in Hyderabad | Renault Engineers</title>
        <meta 
          name="description" 
          content="Leading mechanical seals manufacturers in Hyderabad. Renault Engineers offers precision-engineered seals, cartridge seals & custom sealing solutions." 
        />
        <link rel="canonical" href="https://renaultengineers.com/about" />
      </Helmet>
      <AboutHeroSection />
      <FeatureSection />
      <AboutEngineersSection />
      <WhereDesignMeetsPerformance />
      <Footer />
    </div>
  );
};

export default Aboutpage;
