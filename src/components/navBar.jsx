import React, { useState } from 'react';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection

  // Toggle the dropdown visibility
  const handleProfileClick = () => {
    setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
  };

  // Handle Logout functionality
  const handleLogout=()=>{
   localStorage.removeItem("signUp")
   window.location.reload()
}

  // JSX for the Navbar with the Profile dropdown
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">Exclusive</a>
  
          <button className="navbar-toggler text-white" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
  
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mx-auto mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" activeClassName="active" className="ms-4">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" activeClassName="active" className="ms-4">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/SignUp" activeClassName="active" className="ms-4">Sign up</NavLink>
              </li>
            </ul>
  
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
              <NavLink to="/Wishlist" activeClassName="active" className="ms-4 icon p-1"><FavoriteBorderOutlinedIcon /></NavLink>
              <NavLink to="/Cart" activeClassName="active" className="ms-3 icon p-1"><ShoppingCartOutlinedIcon /></NavLink>
              {/* Profile Icon */}
              <div className="ms-3 icon p-1" onClick={handleProfileClick}>
                <Person2OutlinedIcon />
              </div>
  
              {/* Profile Dropdown Menu */}
              {dropdownVisible && (
                <div className="profile-dropdown me-2">
                  <ul className="list-unstyled">
                    <li>
                      <NavLink to="/Profile" onClick={() => setDropdownVisible(false)}>
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="dropdown-item">
                        Logout
                      </button>
                    </li>
                    <li>
                      <NavLink to="/Wishlist" onClick={() => setDropdownVisible(false)}>
                        My Wishlist
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Products" onClick={() => setDropdownVisible(false)}>
                        Products
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

