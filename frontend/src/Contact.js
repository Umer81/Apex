import React, { useState } from 'react';
import './Contact.css'; // Link the CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState(''); // To show success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env.URL);
    try {
      const response = await fetch(process.env.REACT_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-section">
      <div className="overlayc">
        <div className="contact-content">
          <h2 className="contact-title">CONTACT US</h2>
          <p className="contact-info">Apex Writing & Data Solution</p>
          <p className="contact-info">apexsolution83@gmail.com</p>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>

          {/* Status message */}
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
