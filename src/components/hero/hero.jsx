import React from 'react'
import './hero.css'
import HeroBG from '../../assets/images/herobg.png'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const hero = () => {
  return (
    <div>
      <div className='Hero container mt-5'>
        <div className='left-grid'>
           <button className='my-2'>Woman’s Fashion <ArrowForwardIosOutlinedIcon className='ms-4 fs-9'/></button>
           <button className='mb-2'>Men’s Fashion <ArrowForwardIosOutlinedIcon className='ms-5 fs-9'/></button>
           <button className='mb-2'>Electronics</button>
           <button className='mb-2'>Home & Lifestyle</button>
           <button className='mb-2'>Medicine</button>
           <button className='mb-2'>Sports & Outdoor</button>
           <button className='mb-2'>Baby’s & Toys</button>
           <button className='mb-2'>Groceries & Pets</button>
           <button className='mb-2'>Health & Beauty</button>
       </div>
       <div className='right-grid'>
        <img src={HeroBG}/>
       </div>
      </div>
    </div>
  )
}

export default hero
