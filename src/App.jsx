import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Landing'
import About from './About.jsx';
import SignUp from './SignUp';
import Contact from './Contact';
import Login from './components/Login';
import Profile from './components/Profile';
import WishList from './Wishlist'
import Cart from './Cart'
import CheckOut from './components/CheckOut.jsx';
import ProductDetails from './components/Products/ProductDetails.jsx';
import Products from './Products.jsx';

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Wishlist" element={<WishList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<CheckOut />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
