import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import app1 from '../assets/images/Qrcode.png';
import app2 from '../assets/images/AppStore.png';
import app3 from '../assets/images/googleplay.png';
import './Footer.css'; // Assuming you have custom styles here

const Footer = () => {
  return (
    <footer className="text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* First Section - Subscribe */}
          <div className="col-md-3 mb-4">
            <h4>Exclusive</h4>
            <p>Subscribe and get 10% off your first order</p>
            <a href="#" className="text-white text-decoration-none ">Subscribe </a>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mb-2 mt-4"
            />
          </div>

          {/* Second Section - Support */}
          <div className="col-md-3 mb-4">
            <h4>Support</h4>
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
            <p>
              <MailOutlineIcon /> exclusive@gmail.com
            </p>
            <p>
              <PhoneInTalkIcon /> +88015-88888-9999
            </p>
          </div>

          {/* Third Section - Account */}
          <div className="col-md-2 mb-4">
            <h4>Account</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">My Account</a></li>
              <li><a href="#" className="text-white">Sign/Login</a></li>
              <li><a href="#" className="text-white">Cart</a></li>
              <li><a href="#" className="text-white">Wishlist</a></li>
              <li><a href="#" className="text-white">Shop</a></li>
            </ul>
          </div>

          {/* Fourth Section - Quick Links */}
          <div className="col-md-2 mb-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Terms of Use</a></li>
              <li><a href="#" className="text-white">FAQ</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Fifth Section - Download App */}
          <div className="col-md-2 mb-4">
            <h4>Download App</h4>
            <div className="footer-grid">
              <img src={app1} alt="Google Play" className="img-fluid mb-2" />
              <img src={app2} alt="App Store" className="img-fluid mb-2" />
              <img src={app3} alt="Google Play" className="img-fluid mb-2" />
            </div>
            <div className="social-icons mt-3">
              <a href="#" className="mr-2"><FacebookIcon style={{ color: "white" }} /></a>
              <a href="#" className="mr-2"><TwitterIcon style={{ color: "white" }} /></a>
              <a href="#" className="mr-2"><InstagramIcon style={{ color: "white" }} /></a>
              <a href="#" className="mr-2"><LinkedInIcon style={{ color: "white" }} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
