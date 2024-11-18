import React from 'react';
import './Donate.css'; // Make sure you create and link your CSS file

function Donate() {
  return (
    <div className="donate-section">
      <h2 className="donate-title">DONATE</h2>
      <p className="donate-description">
        Support the <strong>TANAZUR Islamic Center</strong>!
        <br />
        Your generous donations help us maintain our projects and services, from Masjid Dar al-Taqwa to educational and research initiatives. By donating, you are contributing to the spiritual and intellectual growth of the Muslim community in Bochum and beyond.
      </p>
      <p className="donate-call-to-action">
        Click below to donate and make a difference.
      </p>
      
    </div>
  );
}

export default Donate;
