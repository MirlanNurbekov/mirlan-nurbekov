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

import TypingNinja1 from '../assets/projects/TypingNinja/TypingNinja1.PNG'
import TypingNinja2 from '../assets/projects/TypingNinja/TypingNinja2.PNG'
import TypingNinja3 from '../assets/projects/TypingNinja/TypingNinja3.PNG'

import Pepsi1 from '../assets/projects/Pepsi/Pepsi1.PNG'
import Pepsi2 from '../assets/projects/Pepsi/Pepsi2.PNG'
import Pepsi3 from '../assets/projects/Pepsi/Pepsi3.PNG'

import Pegasus1 from '../assets/projects/Pegasus/Pegasus1.PNG'
import Pegasus2 from '../assets/projects/Pegasus/Pegasus2.PNG'
import Pegasus3 from '../assets/projects/Pegasus/Pegasus3.PNG'

function Projects() {
  const techmakersImages = [Techmakers1, Techmakers2, Techmakers3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const farmsensImages = [FarmSens1, FarmSens2, FarmSens3, FarmSens4, FarmSens5];
  const [currentImageIndexFarmSens, setCurrentImageIndexFarmSens] = useState(0);

  const typingninjaImages = [TypingNinja1, TypingNinja2, TypingNinja3];
  const [currentImageIndexTypingNinja, setCurrentImageIndexTypingNinja] = useState(0);

  const edusImages = [EdUS1, EdUS2, EdUS3];
  const [currentImageIndexEdUS, setCurrentImageIndexEdUS] = useState(0);

  const pepsiImages = [Pepsi1, Pepsi2, Pepsi3];
  const [currentImageIndexPepsi, setCurrentImageIndexPepsi] = useState(0);

  const pegasusImages = [Pegasus1, Pegasus2, Pegasus3];
  const [currentImageIndexPegasus, setCurrentImageIndexPegasus] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexTypingNinja(prevIndex => (prevIndex + 1) % typingninjaImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexPepsi(prevIndex => (prevIndex + 1) % pepsiImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexPegasus(prevIndex => (prevIndex + 1) % pegasusImages.length);
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
    {
      title: 'Typing Ninja',
      imageUrl: typingninjaImages[currentImageIndexTypingNinja],
      description: 'Contributed to the development and design of core logic and code architecture for a desktop game and launched on Steam.',
      link: 'https://store.steampowered.com/app/2862700/Typing_Ninja/'
    },
        {
      title: 'Pepsi hydrate',
      imageUrl: pepsiImages[currentImageIndexPepsi],
      description: 'Developed "Pepsi HYDRATE," an interactive display featuring three screens at Dubai Marina Hotel.',
      link: 'https://www.youtube.com/watch?v=9h9r8ZvR1h8 '
    },
    {
      title: 'Pegasus',
      imageUrl: pegasusImages[currentImageIndexPegasus],
      description: 'I developed a full stack web application for logistics company, with full elements deployment and maintenance.',
      link: 'https://peglogistics.com/ '
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
