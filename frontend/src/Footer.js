import React from 'react';
import './Footer.css'; // Link to the CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './assets/logo.png'; // Import the logo image

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* Footer Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Apex Logo" className="footer-logo-img" />
          
        </div>

        {/* Footer Links */}
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* Footer Bottom Text */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Apex Write & Data Solutions. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
