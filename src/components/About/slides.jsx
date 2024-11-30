import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const Slides = () => {
  return (
    <div>
     <div className='Grid container p-5'>
          <div className='card cardSS'>
            <a><StorefrontIcon className='iconi'/></a>
            <h4>10.5k </h4>
            <p>Sallers active our site</p>
          </div>
          <div className='card cardSS'>
            <a> <MonetizationOnOutlinedIcon/> </a>
            <h4>33k</h4>
            <p>Monthly Produduct Sale</p>
          </div>
          <div className='card cardSS'>
            <a><RedeemOutlinedIcon/></a>
            <h4>45.5k</h4>
            <p>Customer active in our site</p>
          </div>
          <div className='card cardSS'>
            <a><SavingsOutlinedIcon/></a>
            <h4>25k</h4>
            <p>Anual gross sale in our site</p>
          </div>
      </div>    
    </div>
  )
}

export default Slides
