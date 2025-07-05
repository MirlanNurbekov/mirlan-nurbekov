// src/Pages/Contact.js

import React from 'react';
import '../styles/Contact.css';
import { Mail, MapPin, Instagram, Linkedin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        Feel free to reach out — I’m always open to new opportunities, collaborations, or a good chat!
      </p>

      <div className="contact-section">
        <div className="contact-item">
          <MapPin size={20} />
          <span>Bishkek, Kyrgyzstan</span>
        </div>

        <div className="contact-item">
          <Mail size={20} />
          <a href="mailto:mirlan96nurbekov@gmail.com?subject=Portfolio Inquiry&body=Hi Mirlan, I saw your portfolio and wanted to get in touch!"
             target="_blank" rel="noopener noreferrer">
            mirlan96nurbekov@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <Phone size={20} />
          <a href="https://wa.me/996551999747?text=Hello%20Mirlan%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
             target="_blank" rel="noopener noreferrer">
            +996 551 999 747 (WhatsApp)
          </a>
        </div>

        <div className="contact-item">
          <Instagram size={20} />
          <a href="https://www.instagram.com/mirlan_land/?igsh=aW13YzdmOWNsaTlp"
             target="_blank" rel="noopener noreferrer">
            @mirlan_land
          </a>
        </div>

        <div className="contact-item">
          <Linkedin size={20} />
          <a href="https://www.linkedin.com/in/mirlan-nurbekov/"
             target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
