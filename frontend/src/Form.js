import React, { useState, useEffect } from "react";
import "./Form.css"; // Add form styling here

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    islamicFirstname: "",
    passportNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    nationality: "",
    phone: "",
    mobile: "",
    email: "",
    comments: "",
    photo: null,
    passport: null,
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch the countries from the API
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryList = data.map((country) => country.name.common).sort();
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a FormData object
    const formDataToSend = new FormData();
    
    // Append text fields
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
  
    // Append file fields (photo and passport)
    if (formData.photo) {
      formDataToSend.append("photo", formData.photo);
    }
    if (formData.passport) {
      formDataToSend.append("passport", formData.passport);
    }
  
    try {
      const response = await fetch(process.env.URL + "/send-email", {
        method: "POST",
        body: formDataToSend, // Send form data as multipart/form-data
      });
  
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  

  return (
    <section className="form-section">
      <h2 className="form-title">Embrace Islam Application Form</h2>
      <form className="embrace-form" onSubmit={handleSubmit}>
        <label>Name *</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
          required
        />

        <label>Surname *</label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          required
        />

        <label>
          If you have chosen an ISLAMIC FIRSTNAME, please let us know
        </label>
        <input
          type="text"
          name="islamicFirstname"
          value={formData.islamicFirstname}
          onChange={handleInputChange}
        />

        <label>Upload your photo here *</label>
        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
          accept=".jpg,.png,.jpeg"
          required
        />

        <label>Passport / Driving License number</label>
        <input
          type="text"
          name="passportNumber"
          value={formData.passportNumber}
          onChange={handleInputChange}
        />

        <label>Upload your passport / driving license *</label>
        <input
          type="file"
          name="passport"
          onChange={handleFileChange}
          accept=".jpg,.png,.pdf"
          required
        />

        <label>Address *</label>
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleInputChange}
          placeholder="Address Line 1"
          required
        />
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleInputChange}
          placeholder="Address Line 2"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
        />
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="State / Province / Region"
        />
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          placeholder="Postal Code"
        />

        <label>Country *</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
        >
          <option value="">--- Select country ---</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        <label>Nationality *</label>
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleInputChange}
          required
        />

        <label>Mobile *</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          required
        />

        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label>Any Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleInputChange}
        />

        <button className="submit-button"
          type="submit"
        
        >Submit</button>
      </form>
    </section>
  );
};

export default Form;
