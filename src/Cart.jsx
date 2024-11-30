import React from 'react'
import Ribbon from './components/headRibbon'
import Navbar from './components/navBar'
import CartItems from './components/cart/Cart'
import Footer from './components/Footer'

const Cart = () => {
  return (
    <div>
      <Ribbon />
      <Navbar />
      <CartItems />
      <Footer />
      
    </div>
  )
}

export default Cart
