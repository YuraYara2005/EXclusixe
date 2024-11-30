import React from 'react'
import Ribbon from './components/headRibbon'
import Navbar from './components/navBar'
import HeroGrid from './components/About/Herogrid'
import Slides from './components/About/slides'
import Employee from './components/About/employee'
import ThreeBox from './components/ThreeBox'
import Footer from './components/Footer'

const About = () => {
  return (
    <div>
      <Ribbon />
      <Navbar />
      <HeroGrid />
      <Slides />
      <Employee />
      <ThreeBox />
      <Footer />
    </div>
  )
}

export default About
