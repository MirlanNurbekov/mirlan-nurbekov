// src/pages/Education.js
import React from 'react';
import '../styles/Education.css';

function Education() {
  const educationData = [
    {
      institution: 'Coventry University, UK',
      degree: 'Bachelor of Science (Hons) Computing & IT',
      year: '2019 - 2022',
      link: 'https://www.coventry.ac.uk/london/about-us/'
    },
    {
      institution: 'INTI International University & College, Malaysia ',
      degree: 'HDiploma in Electrical and Electronic Engineering ',
      year: '2015 - 2018',
      link: 'https://newinti.edu.my/campuses/inti-international-university/'
    }
  ];

  return (
    <section className="education-page">
      <h2>My Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div className="education-item" key={index}>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <span>{item.year}</span>
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer">
                Visit Website
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
