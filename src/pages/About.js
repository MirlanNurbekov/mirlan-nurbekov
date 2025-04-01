// src/pages/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about-page">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src="/path/to/your-profile.jpg" 
          alt="Profile" 
          className="about-image" 
        />
        <div className="about-text">
          <p>
            Hello! I’m [Your Name], a passionate web developer with a focus on React, 
            JavaScript, and modern web technologies. My goal is to build responsive, 
            user-friendly applications that solve real-world problems.
          </p>
          <p>
            In my spare time, I love exploring new coding challenges and contributing 
            to open-source projects. I’m always excited to learn and grow in the tech space.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
