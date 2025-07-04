// src/Pages/Contact.js

import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        I’d love to hear from you! Feel free to reach out through email at 
        <a href="mailto:example@example.com" className="contact-email"> example@example.com</a>
        or connect with me on my social media platforms below.
      </p>
      <div className="contact-socials">
        {/* Replace these links with actual social media URLs */}
        <a href="https://github.com/yourprofile" className="social-link">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" className="social-link">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" className="social-link">Twitter</a>
      </div>
    </div>
  );
};

export default Contact;