// src/pages/Projects.js
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Project A',
      imageUrl: '/path/to/projectA.png',
      description: 'A brief description of Project A...',
      link: 'https://example.com/project-a'
    },
    {
      title: 'Project B',
      imageUrl: '/path/to/projectB.png',
      description: 'A brief description of Project B...',
      link: 'https://example.com/project-b'
    },
    // ...more
  ];

  return (
    <section className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
