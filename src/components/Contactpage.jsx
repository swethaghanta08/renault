import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ContactHeroSection from '../pages/contact/Contactheropage';
import Letsconnect from '../pages/contact/Letsconnect';
import VisitUsSection from '../pages/contact/Location';
import Footer from '../pages/home/Footer';

const Contactpage = () => {
  const location = useLocation();
  const letsConnectRef = useRef(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get('section');

    if (section === 'letsconnect' && letsConnectRef.current) {
      setTimeout(() => {
        letsConnectRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Renault Engineers | Mechanical Seal Experts in Hyderabad</title>
        <meta
          name="description"
          content="Get in touch with Renault Engineers for custom mechanical seals, engineered sealing solutions, and expert technical support. We’re here to help!"
        />
        <link rel="canonical" href="https://renaultengineers.com/contact" />
      </Helmet>

      {/* Page Sections */}
      <ContactHeroSection />
      <div ref={letsConnectRef}>
        <Letsconnect />
      </div>
      <VisitUsSection />
      <Footer />
    </>
  );
};

export default Contactpage;
