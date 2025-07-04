// src/pages/Education.js
import React from 'react';
import '../styles/Education.css';

import CoventryImg from '../assets/education/coventry.png';
import IntiImg from '../assets/education/inti.png';

const educationData = [
  {
    institution: 'Coventry University, UK',
    degree: 'Bachelor of Science (Hons) in Computing & IT ',
    year: '2019 - 2022',
    imageUrl: CoventryImg,
    link: 'https://www.coventry.ac.uk/london/about-us/'
  },
  {
    institution: 'INTI International University & College, Malaysia',
    degree: 'Bachelor of Science (Hons) in Electrical and Electronic Engineering',
    year: '2015 - 2018',
    imageUrl: IntiImg,
    link: 'https://newinti.edu.my/campuses/inti-international-university/'
  }
];

function Education() {
  return (
    <section className="education-page">
      <div className="education-container">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <img src={item.imageUrl} alt={item.institution} className="education-img" />
            <div className="education-info">
              <h3>{item.institution}</h3>
              <p>{item.degree}</p>
              <span>{item.year}</span>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="education-link">
                  Visit Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
