import React from 'react'
import Ribbon from './headRibbon'
import Navbar from './navBar'
import Billing from './Billing/Billing'
import Footer from './Footer'

const CheckOut = () => {
  return (
    <div>
        <Ribbon />
        <Navbar />
        <Billing />
        <Footer />
      
    </div>
  )
}

export default CheckOut
