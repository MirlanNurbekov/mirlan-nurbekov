import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css'; // Import your CSS file

function HomePage() {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [itAwards, setItAwards] = useState(0);

  useEffect(() => {
    /**
     * Animates counting up from 0 to the given 'target' within 'duration' milliseconds.
     * @param {Function} setter - React setState function (e.g. setYearsExperience)
     * @param {number} target - The final number you want to reach
     * @param {number} duration - Time in ms over which the count will occur
     */
    function animateValue(setter, target, duration) {
      let start = 0;
      const end = target;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        setter(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    // Start the animations on mount
    animateValue(setYearsExperience, 7, 2000);    // 7+ Years
    animateValue(setProjectsCompleted, 30, 2000); // 30 Completed Projects
    animateValue(setItAwards, 3, 2000);           // 3 IT-Related Awards
  }, []);

  return (
    <div className="stats-container">
      <div className="stat-box">
        <div className="stat-value">{yearsExperience}</div>
        <div className="stat-label">Years of Experience</div>
      </div>

      <div className="stat-box">
        <div className="stat-value">{projectsCompleted}</div>
        <div className="stat-label">Projects Completed</div>
      </div>

      <div className="stat-box">
        <div className="stat-value">{itAwards}</div>
        <div className="stat-label">IT-Related Awards</div>
      </div>
    </div>
  );
}

export default HomePage;
