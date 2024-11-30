import React from 'react'
import Ribbon from './components/headRibbon'
import Navbar from './components/navBar'
import ProductItem from './components/Products/ProductsItem'
import Footer from './components/Footer'

const Products = () => {
  return (
    <div>
        <Ribbon />
        <Navbar />
        <ProductItem />
        <Footer />
      
    </div>
  )
}

export default Products
