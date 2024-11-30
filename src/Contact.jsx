import React from 'react'
import Ribbon from './components/headRibbon'
import Navbar from './components/navBar'
import ContactForm from './components/Contact/ContactForm'
import Footer from './components/Footer'


const Contact = () => {
  return (
    <div>
      <Ribbon />
      <Navbar />
      <ContactForm />
      <Footer />

    </div>
  )
}

export default Contact