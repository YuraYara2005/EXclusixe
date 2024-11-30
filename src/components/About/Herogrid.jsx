import React from 'react'
import './HeroGrid.css'
import Rightimage from '../../assets/images/Portrait.png'

const Herogrid = () => {
  return (
    <div>
      <div className="hero-Grid my-5">
        <div className='left-side container ms-md-5 me-md-5'>
            <h2 className='mb-5'>Our Story</h2>
            <p>Launched in 2015, Exclusive is South Asia’s premier online shopping 
                marketplace with an active presence in Bangladesh. Supported by a wide
                range of tailored marketing, data, and service solutions, Exclusive
                has 10,500 sellers and 300 brands and serves 3 million
                 customers across the region.</p>
                 
                  <br/>

            <p>Exclusive has more than 1 Million products to offer, 
                growing very fast. Exclusive offers a diverse 
                assortment in categories ranging from consumer electronics to household goods and fashion.</p>
        </div>
        <div className='image-portrait'>
            <img src={Rightimage} className='rounded' alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Herogrid
