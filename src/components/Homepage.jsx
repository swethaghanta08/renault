import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../pages/home/Herocontainer';
import AboutEngineer from '../pages/home/Aboutrenaultengineers';

const Carousel = lazy(() => import('../pages/home/Casurosel'));
const TrustedClients = lazy(() => import('../pages/home/Deliveringexcellence'));
const ContactSection = lazy(() => import('../pages/home/Getintouch'));
const Footer = lazy(() => import('../pages/home/Footer'));

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
        <link
          rel="preload"
          as="image"
          href="/assets/HeroImage.jpg"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/fonts/monda.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Helmet>

      <HeroSection />
      <AboutEngineer />
      <Suspense fallback={<div style={{ height: '100px' }}></div>}>
        <Carousel />
        <TrustedClients />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Homepage;
