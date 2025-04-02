import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ContactHeroSection from '../pages/contact/Contactheropage'
import Letsconnect from '../pages/contact/Letsconnect'
import VisitUsSection from '../pages/contact/Location'
import Footer from '../pages/home/Footer'

const Contactpage = () => {
  const location = useLocation();
  const letsConnectRef = useRef(null);
  
  useEffect(() => {
    // Check if we should scroll to the Letsconnect section
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get('section');
    
    if (section === 'letsconnect' && letsConnectRef.current) {
      // Add a small delay to ensure the component is fully rendered
      setTimeout(() => {
        letsConnectRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <ContactHeroSection/>
      <div ref={letsConnectRef}>
        <Letsconnect/>
      </div>
      <VisitUsSection/>
      <Footer/>
    </div>
  )
}

export default Contactpage
