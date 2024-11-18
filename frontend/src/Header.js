import React, { useState } from 'react';
import './Header.css'; // Import CSS
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'; 
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './assets/logo1.png'; // Import the logo image

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false); // Toggle mobile menu
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Toggle dropdown menu

  // GSAP animation for staggering nav links
  useGSAP(() => {
    gsap.from('.nav-links li', {
      y: -30,
      opacity: 0,
      delay: 1,
      duration: 1,
      stagger: 0.15,
    });
  }, []);

  return (
    <div className='header'>
      {/* Logo Container with PNG logo */}
      <div className='logo'>
        <Link to="/">
          <img src={logo} alt="Apex Logo" className="logo-img" /> {/* Add logo image */}
        </Link>
      </div>

      {/* Menu Icon for Mobile */}
      <div className='menu-icon' onClick={() => setMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
