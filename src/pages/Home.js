// src/Pages/Home.js
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

import exp0 from '../assets/work/su5.jpg';
import exp1 from '../assets/work/salymbekov.png';
import exp2 from '../assets/work/su2.jpg';
import exp3 from '../assets/work/cincaria1.jpeg';
import exp4 from '../assets/work/cincaria.png';
import exp5 from '../assets/work/cincaria2.jpeg';
import exp6 from '../assets/work/zent3.jpeg';


import award1 from '../assets/awards/01.jpeg';
import award2 from '../assets/awards/0.jpeg';
import award3 from '../assets/awards/2.jpeg';

const Home = () => {
  const experienceImages = [exp0, exp1, exp2, exp3, exp4, exp5, exp6];
  const awardImages = [award1, award2, award3];

  const [expIndex, setExpIndex] = useState(0);
  const [awardIndex, setAwardIndex] = useState(0);

  useEffect(() => {
    const expInterval = setInterval(() => {
      setExpIndex(prev => (prev + 1) % experienceImages.length);
    }, 4000);

    const awardInterval = setInterval(() => {
      setAwardIndex(prev => (prev + 1) % awardImages.length);
    }, 4000);

    return () => {
      clearInterval(expInterval);
      clearInterval(awardInterval);
    };
  }, []);

  return (
    <section className="home" id="home">
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
      <div className="card-container">
        <div className="card" onClick={() => window.location.href = "/experience"}>
          <img src={experienceImages[expIndex]} alt="Experience" className="card-image" />
          <p className="card-text">8 Years of Experience</p>
        </div>

        <div className="card" onClick={() => window.location.href = "/awards"}>
          <img src={awardImages[awardIndex]} alt="Achievements" className="card-image" />
          <p className="card-text">Achievements & Awards</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
