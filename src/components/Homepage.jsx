import React from 'react'
import HeroSection from '../pages/home/Herocontainer'
import AboutEngineer from '../pages/home/Aboutrenaultengineers'
import Carousel from '../pages/home/Casurosel'
import WhyChooseUs from '../pages/home/Whychooseus'
import WhatSetsUsApart from '../pages/home/Whatsetsusapart'
import TrustedClients from '../pages/home/Deliveringexcellence'
import ContactSection from '../pages/home/Getintouch'
import Footer from '../pages/home/Footer'

const Homepage = () => {
  return (
    <div> 
        <HeroSection/>
        <AboutEngineer/>
        <Carousel/>
        <WhyChooseUs/>
         <WhatSetsUsApart/>
         <TrustedClients/>
         <ContactSection/>
         <Footer/>

    </div>
  )
}

export default Homepage