import React from 'react'
import AboutHeroSection from '../pages/about/HeroAboutSection'
import FeatureSection from '../pages/about/Featuresection'
import AboutEngineersSection from '../pages/about/Aboutengineers'
import InnovationSection from '../pages/about/Innovationsection'
import SealingTechnology from '../pages/about/Sealingtechnology'
import WhereDesignMeetsPerformance from '../pages/about/Wheredesignmetts'
import Footer from '../pages/home/Footer'

const Aboutpage = () => {
  return (
    <div>
        <AboutHeroSection/>
        <FeatureSection/>
        <AboutEngineersSection/>
        <SealingTechnology/>
        <InnovationSection/>
        <WhereDesignMeetsPerformance/>
        <Footer/>
    
    </div>
  )
}

export default Aboutpage