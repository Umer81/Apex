import React from "react";
import "./About.css";
import img10 from "./assets/10.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <div className="vision-container">
          <h1>ABOUT US </h1>
          
          <p>
          At Apex Write and Data Solutions, we are committed to empowering students and professionals by providing high-quality academic and professional services. Whether you need assignment writing, research proposals, thesis writing, or data analysis using tools like R, Excel, SPSS, Python, SQL, Jamovi, and JASP, we’ve got you covered.

Founded on the principles of excellence and reliability, we aim to make complex tasks simple and manageable for our clients. From quantitative and qualitative analysis to customized writing solutions, every project we undertake reflects our dedication to precision and client satisfaction.

With flexible payment options, AI and plagiarism-free content, and a 99% success rate, we have earned the trust of students and professionals alike. At Apex Write and Data Solutions, your academic and research success is our top priority.
          </p>

        </div>
      </div>

      <div className="about-img">
        <img src={img10}></img>
      </div>
    </div>
  );
}

export default About;
