// src/pages/Projects.js
import React from 'react';
import './Projects.css';

import image1 from '../assets/img/about.jpg';
import image2 from '../assets/img/about.jpg';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: image1,
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: image2,
  },
  // Add more projects as needed
];

const Projects = () => (
  <div className="container">
    <div className="projects-container">
      <h1>8 featured projects</h1>
      <p>We specialize in a wide range of design development, including UI/UX, Graphic Design, 2D/3D Illustration & Animation, Logo & Brand Identity Design, Motion Graphics and more.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
