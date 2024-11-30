import React from 'react'
import Ribbon from '../src/components/headRibbon'
import Nav from '../src/components/navBar'
import Hero from '../src/components/hero/hero'
import Categories from './components/hero/categories'
import Enhance from './components/hero/Enhance'
import GridItems from './components/GridItems'
import ThreeBox from './components/ThreeBox'
import Footer from './components/Footer'


const Landing = () => {
  return (
    <div>
      <Ribbon />
      <Nav />
      <Hero />
      <Categories/>
      <Enhance />
      <GridItems />
      <ThreeBox />
      <Footer />
    </div>
  )
}

export default Landing
