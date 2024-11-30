import React from 'react';
import './categories.css';
import Phone from '../../assets/images/Category-CellPhone.svg';
import Computer from '../../assets/images/Category-Computer.svg';
import Camera from '../../assets/images/Category-Camera.svg';
import SmartWatch from '../../assets/images/Category-SmartWatch.svg';
import HeadPhone from '../../assets/images/Category-HeadPhone.svg';
import GamePad from '../../assets/images/Category-GamePad.svg';

const Categories = () => {
  return (
      <div className='container'>
        <div className='mt-5 mb-4 p-0 box'>
            <span className='box-span'></span>
          <h3>Categories</h3>
        </div>
        <div >
        <h2>Browse By Category</h2>
        <div className='arrows'>
          
        </div>
        </div>
        <div className='Grid container'>
          <div className='card cardi'>
            <img src={Phone} className='iconn' alt='Product 1' />
            <h4>Phone</h4>
          </div>
          <div className='card cardi'>
            <img src={Computer} className='iconn' alt='Product 1' /> 
            <h4>Computer</h4>
          </div>
          <div className='card cardi'>
            <img src={SmartWatch} className='iconn' alt='Product 1' />
            <h4>SmartWatch</h4>
          </div>
          <div className='card cardi'>
            <img src={Camera} className='iconn' alt='Product 1' />
            <h4>Camera</h4>
          </div>
          <div className='card cardi'>
            <img src={HeadPhone} className='iconn' alt='Product 1' />
            <h4>HeadPhone</h4>
          </div>
          <div className='card cardi'>
            <img src={GamePad} className='iconn' alt='Product 1' />
            <h4>Gaming</h4>
          </div>
        </div>
      </div>
  );
}

export default Categories;
