import React from 'react';
import './Hero.css';
import img1 from './assets/1.jpg'; // Import the image
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'; // Use GSAP hooks


function Hero() {


  useGSAP(() => {
    gsap.from('.overlay h1, .overlay p', {
      x: -30,
      opacity: 0,
      delay: 0.5, // Delay before animation starts
      duration: 1, // Animation duration
      stagger: 0.2, // Stagger between elements
    });
  }, []);
  return (
    <div className="hero-container">
      <div className="overlay">
        <h1>Apex Writing & Data Soltuion</h1>
        <p>
          Welcome to Apex We provide top-quality academic and professional services, including assignment writing, research proposals, thesis writing, and data analysis using tools like R, Excel, SPSS, Python, SQL, Jamovi, and JASP. With a commitment to excellence and client success, we deliver customized solutions to meet your needs.
        </p>
      </div>
    </div>
  );
}

export default Hero;
