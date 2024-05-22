// src/pages/Projects.js
import React from 'react';
import './Projects.css';

import { useLocation } from 'react-router-dom';
import ScrollIndicator from '../components/ScrollIndicator';

import backgroundImage from '../assets/img/project_background.png';
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
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: image1,
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: image2,
  }
];

const Projects = () => {
  // Get the current location using react-router-dom's useLocation hook
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects'; // Change '/projects' to your actual Projects page route

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }}>
      <ScrollIndicator />
      <div className="projects-container">
        <div className="project intro">
          <h5>↳  8 FEATURED PROJECTS</h5>
          <p>We specialize in a wide range of design development, including UI/UX, Graphic Design, 2D/3D Illustration & Animation, Logo & Brand Identity Design, Motion Graphics and more.</p>
        </div>
        {/* Display the first project separately */}
        <div className="project project-1">
          <div className="project-card">
            <img src={projects[0].imageUrl} alt={projects[0].title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{projects[0].title}</h2>
              <p className="project-description">{projects[0].description}</p>
            </div>
          </div>
        </div>
        {/* Map through the rest of the projects */}
        {projects.slice(1).map((project, index) => (
          <div key={index} className={`project ${index % 2 === 0 ? 'projectL' : 'projectR'}`}>
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
