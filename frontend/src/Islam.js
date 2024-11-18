import React from 'react';
import { Link } from 'react-router-dom'; // To link to the form page
import './Islam.css'; // CSS for styling

const Islam = () => {
  return (
    <section className="embrace-section">
      <h2 className="section-title">Embracing Islam</h2>
      <p className="quran-quote">
        إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّـٰلِحَٰتِ سَيَجۡعَلُ لَهُمُ ٱلرَّحۡمَٰنُ وُدّٗا
        <br />
        <span> "As for those who believe and do good, the Most Compassionate will certainly bless them with love." (Maryam: 96)</span>
      </p>
      <p className="embrace-description">
        If you are embracing Islam, we are here to guide and support you. Whether you are embracing Islam independently or alongside a marriage procedure, you can fill out the application form below. We will guide you through the necessary steps and documentation required.
      </p>
      <ul className="embrace-list">
        <li>Required documents will be listed in the form.</li>
        <li>Appointments are provided after the completion and approval of forms and documents.</li>
        <li>For follow-ups, you may contact us at [Insert Contact Number].</li>
        <li>Bring original documents on the day of your appointment.</li>
      </ul>

      {/* Redirect button to the form page */}
      <Link to="/form" className="form-button">
        Fill Application Form
      </Link>
    </section>
  );
};

export default Islam;
