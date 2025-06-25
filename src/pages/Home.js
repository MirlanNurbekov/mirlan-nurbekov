// src/Pages/Home.js

import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      {/* Experience Section */}
      <div className="experience-section">
        <div className="experience-item">
          <h3>7+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="experience-item">
          <h3>30+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="experience-item">
          <h3>3</h3>
          <p>IT Competitions Won</p>
        </div>
      </div>

      <div className="content">
        <p>
          A versatile and highly skilled software engineer with over seven years
          of experience in international environments as a software engineer.
          Proficient in crafting complex queries, stored procedures, and
          functions, I have a proven track record of managing intricate
          schedules, handling key administrative tasks, and fostering
          seamless communication across culturally diverse teams. Fluent in
          English and Russian.
        </p>
        <a href="#projects" className="btn">View My Projects</a>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        <div className="skills">
          <div className="skill">
            <div className="circle">
              <div className="percentage">95%</div>
            </div>
            <p>Web Development</p>
          </div>
          <div className="skill">
            <div className="circle">
              <div className="percentage">90%</div>
            </div>
            <p>Software Engineering</p>
          </div>
          <div className="skill">
            <div className="circle">
              <div className="percentage">80%</div>
            </div>
            <p>UI/UX Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;