// src/pages/Experience.js
import React from 'react';
import '../styles/Experience.css';

import SalymbekovImg from '../assets/work/salymbekov.png';
import ZentrekImg from '../assets/work/zentrek.png';
import CincariaImg from '../assets/work/cincaria.png';

const experiences = [
  {
    title: 'Head of IT - Salymbekov University',
    imageUrl: SalymbekovImg,
    description: 'Leading the IT department with a strong emphasis on integrating modern technologies into education and institutional systems.'
  },
  {
    title: 'Senior Software Engineer - Zentrek Technologies',
    imageUrl: ZentrekImg,
    description: 'Built and delivered scalable software solutions focused on client satisfaction, performance, and on-time delivery.'
  },
  {
    title: 'Electronic Engineer - Cincaria Sdn Bhd',
    imageUrl: CincariaImg,
    description: 'Worked on debugging, QA processes, and hardware manufacturing, gaining hands-on experience with embedded systems.'
  }
];

const Experience = () => {
  return (
    <section className="experience-page">
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img src={exp.imageUrl} alt={exp.title} className="experience-img" />
            <div className="experience-info">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
