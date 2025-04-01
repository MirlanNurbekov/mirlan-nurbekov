// src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted:', formData);
    // Optionally reset form:
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message!');
  };

  return (
    <section className="contact-page">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          value={formData.name} 
          onChange={handleChange}
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={handleChange}
          required 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5"
          value={formData.message} 
          onChange={handleChange}
          required 
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
