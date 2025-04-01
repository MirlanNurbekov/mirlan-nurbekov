// src/pages/Awards.js
import React from 'react';
import '../styles/Awards.css';

function Awards() {
  const awardsData = [
    {
      title: 'Best Innovator Award',
      organization: 'Tech Summit',
      year: 2023,
      link: 'https://example.com/best-innovator'
    },
    {
      title: 'Top Coder',
      organization: 'Online Coding Platform',
      year: 2022,
      link: 'https://example.com/top-coder'
    }
  ];

  return (
    <section className="awards-page">
      <h2>My Awards</h2>
      <div className="awards-list">
        {awardsData.map((award, index) => (
          <div className="award-item" key={index}>
            <h3>{award.title}</h3>
            <p>{award.organization} - {award.year}</p>
            {award.link && (
              <a href={award.link} target="_blank" rel="noreferrer">
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
