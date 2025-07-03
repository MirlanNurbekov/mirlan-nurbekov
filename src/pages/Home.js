// Home.js

import React from 'react';
import '../styles/Home.css';
import meImage from '../assets/me/me1.png';

function Home() {
  return (
    <div className="home-page">
      <section className="about-section">
        <div className="about-image">
          <img src={meImage} alt="Me" />
        </div>
        <div className="about-text">
          <h3>About Me</h3>
          <p>
            I am a highly skilled software engineer with about 8 years of 
            experience working in dynamic, international environments. I specialize in designing, 
            building, and optimizing robust, scalable systems that support business-critical operations. 
            I have a proven ability to manage demanding schedules, handle critical administrative 
            responsibilities, and foster clear communication across multicultural teams. My strengths 
            lie in delivering reliable technical solutions, adapting quickly to new challenges, and 
            contributing meaningfully to both team and organizational success.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
