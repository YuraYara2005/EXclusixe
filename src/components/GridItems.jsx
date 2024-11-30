import React from 'react';
import './GridItems.css'; // Adjust if needed
import { NavLink } from 'react-router-dom';
import ps5Image from '../assets/images/PS5.png'; // Update paths
import womanInHatImage from '../assets/images/WomaninHat.png';
import speakerImage from '../assets/images/SpeakerJbl.png';
import Gucci from '../assets/images/GucciPerfumes.png';

const GridItems = () => {
  return (
    <div className="container">
      <div className="row g-4">
        {/* First Card - Large */}
        <div className="col-lg-6  bg-black col-md-12">
          <div className="card cardt text-white bg-black position-relative">
            <img src={ps5Image} className="card-img" alt="PS5" />
            <div className="card-img-overlay d-flex flex-column justify-content-end text-start">
              <h2>Featured Product</h2>
              <p>Discover our exclusive collection.</p>
              <NavLink to="/cart" className="btn btn-light col-3 btn-sm">Shop Now</NavLink>
            </div>
          </div>
        </div>

        {/* Second Card - Medium */}
        <div className="col-lg-6 col-md-12">
          <div className="card cardt text-white bg-black position-relative">
            <img src={womanInHatImage} className="card-img" alt="Woman in Hat" />
            <div className="card-img-overlay d-flex flex-column justify-content-end text-start">
              <h2>New Arrivals</h2>
              <p>Check out the latest trends.</p>
              <NavLink to="/cart" className="btn btn-light col-3 btn-sm">Explore</NavLink>
            </div>
          </div>
        </div>

        {/* Third Card - Small */}
        <div className="col-md-6 col-lg-3">
          <div className="card cardt text-white bg-black position-relative p-5">
            <img src={speakerImage} className="card-img" alt="Speaker JBL" />
            <div className="card-img-overlay d-flex flex-column justify-content-end text-start">
              <h2>Sale</h2>
              <p>Up to 50% off.</p>
              <NavLink to="/cart" className="btn btn-light col-6 btn-sm">Grab Now</NavLink>
            </div>
          </div>
        </div>

        {/* Fourth Card - Small */}
        <div className="col-md-6 col-lg-3">
          <div className="card cardt text-white bg-black position-relative p-5">
            <img src={Gucci} className="card-img" alt="Speaker JBL" />
            <div className="card-img-overlay d-flex flex-column justify-content-end text-start">
              <h2>Best Sellers</h2>
              <p>Top-rated products.</p>
              <NavLink to="/cart" className="btn btn-light col-6 btn-sm">View</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItems;
