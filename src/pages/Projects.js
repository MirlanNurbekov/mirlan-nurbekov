// src/pages/Projects.js
import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

import Techmakers1 from '../assets/projects/Techmakers/Techmakers1.PNG';
import Techmakers2 from '../assets/projects/Techmakers/Techmakers2.PNG';
import Techmakers3 from '../assets/projects/Techmakers/Techmakers3.PNG';

import FarmSens1 from '../assets/projects/FarmSens/FarmSens1.jpg'
import FarmSens2 from '../assets/projects/FarmSens/FarmSens2.jpg'
import FarmSens3 from '../assets/projects/FarmSens/FarmSens3.jpg'
import FarmSens4 from '../assets/projects/FarmSens/FarmSens4.jpg'
import FarmSens5 from '../assets/projects/FarmSens/FarmSens5.jpg'

import EdUS1 from '../assets/projects/EdUS/EdUS1.PNG'
import EdUS2 from '../assets/projects/EdUS/EdUS2.PNG'
import EdUS3 from '../assets/projects/EdUS/EdUS3.PNG'

function Projects() {
  const techmakersImages = [Techmakers1, Techmakers2, Techmakers3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const farmsensImages = [FarmSens1, FarmSens2, FarmSens3, FarmSens4, FarmSens5];
  const [currentImageIndexFarmSens, setCurrentImageIndexFarmSens] = useState(0);

  const edusImages = [EdUS1, EdUS2, EdUS3];
  const [currentImageIndexEdUS, setCurrentImageIndexEdUS] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % techmakersImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexFarmSens(prevIndex => (prevIndex + 1) % farmsensImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval); // cleanup
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexEdUS(prevIndex => (prevIndex + 1) % edusImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval); // cleanup
  }, []);


  const projectList = [
    {
      title: 'TechMakers',
      imageUrl: techmakersImages[currentImageIndex],
      description: 'Designed and developed a fully functional e-commerce web application, with complete storage system.',
      link: 'https://www.techmakers.com.my/'
    },
    {
      title: 'FarmSens',
      imageUrl: farmsensImages[currentImageIndexFarmSens],
      description: 'Contributed to the development and implementation of software and hardware solutions for a comprehensive crop monitoring.',
      link: 'https://www.youtube.com/watch?v=1_YkQsDGzDg&ab_channel=Cloudatik'
    },
    {
      title: 'EdUS',
      imageUrl: edusImages[currentImageIndexEdUS],
      description: 'Developed, and managed a full-stack web application for EdUS, a consulting company specializing in international education.',
      link: 'https://edus.org.kg/'
    },
  ];

  return (
    <section className="projects-page">
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
