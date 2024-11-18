import React from 'react';
import './Service.css'; // Create the CSS file for styles
import { FaQuran, FaUserShield, FaHeartbeat, FaHandshake } from 'react-icons/fa';
import Islam from './Islam';


const servicesData = [
    {
      title: "Imam’s Corner",
      description: "Our team of knowledgeable religious scholars...",
      icon: <FaQuran />, // Add the relevant icon
    },
    {
      title: "Sisters Zone",
      description: "The Sisters Zone is dedicated to fostering Islamic values...",
      icon: <FaUserShield />,
    },
    {
      title: "Health Awareness",
      description: "Promoting health awareness is a key focus at TANAZUR Islamic Center...",
      icon: <FaHeartbeat />,
    },
    {
      title: "Pre and Post Marriage Counseling",
      description: "Our counseling services provide support...",
      icon: <FaHandshake />,
    },
  ];

const Service = () => {
  return (
    <section className="services-section">
      <div className="section-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-description">
          At TANAZUR Islamic Center, we offer a variety of services to cater to the diverse needs of our community members. From religious guidance to personal support, we are here to assist you every step of the way.
        </p>
      </div>

      <div className="services-grid">
      {servicesData.map((service, index) => (
  <div key={index} className="service-card">
    <div className="service-icon">{service.icon}</div> {/* Display icon */}
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
        ))}
      </div>
      <Islam/>
    </section>
  );
};

export default Service;
