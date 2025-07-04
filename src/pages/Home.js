// src/Pages/Home.js

import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      {/* Experience Section */}
      <div className="experience-section">
        <div className="experience-item">
          <h3> 8 </h3>
          <p>Years of Experience</p>
        </div>
        <div className="experience-item">
          <h3>30</h3>
          <p>Projects Completed</p>
        </div>
        <div className="experience-item">
          <h3>3</h3>
          <p>IT Competitions Won</p>
        </div>
      </div>

      <div className="content">
        <p>
         I am a highly skilled software engineer with about 8 years of experience working in 
         dynamic, international environments. I specialize in designing, building, and optimizing 
         robust, scalable systems that support business-critical operations. I have a proven ability 
         to manage demanding schedules, handle critical administrative responsibilities, and foster 
         clear communication across multicultural teams. My strengths lie in delivering reliable 
         technical solutions, adapting quickly to new challenges, and contributing meaningfully to both
          team and organizational success.
        </p>
      </div>
    </section>
  );
};

export default Home;