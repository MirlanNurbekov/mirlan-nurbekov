// src/pages/Awards.js
import React from 'react';
import '../styles/Awards.css';
import cert1 from '../assets/awards/cert.jpeg';
import cert2 from '../assets/awards/cert2.jpeg';
import cert3 from '../assets/awards/cert3.jpeg';
import Projects from './Projects';

const Awards = () => {
  const awards = [
    {
      image: cert1,
      link: 'https://www.linkedin.com/posts/mirlan-nurbekov_studentambassadors-inti-activity-7112816177000644609-LHn7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAXo54BbUDOUuPt8roO7djzygpgvsC1wHI'
    },
    {
      image: cert2,
      link: 'https://www.linkedin.com/posts/mirlan-nurbekov_competition-usc-inti-activity-7114659237804281856-IaQB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAXo54BbUDOUuPt8roO7djzygpgvsC1wHI'
    },
    {
      image: cert3,
      link: 'https://www.linkedin.com/posts/mirlan-nurbekov_it-was-such-a-fantastic-experience-to-activity-7119582838890389504-l6mo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAXo54BbUDOUuPt8roO7djzygpgvsC1wHI'
    }
  ];

  return (
    <section className="awards-page">
      <div className="cert-card-container">
        {awards.map((award, index) => (
          <a
            key={index}
            href={award.link}
            target="_blank"
            rel="noreferrer"
            className="cert-card"
          >
            <img src={award.image} alt={`Certificate ${index + 1}`} className="cert-image" />
          </a>
        ))}
      </div>

      <div className="projects-section">
        <Projects />
      </div>
    </section>
  );
};

export default Awards;
