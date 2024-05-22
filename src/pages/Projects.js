// src/pages/Projects.js
import React from 'react';
import './Projects.css';

import { useLocation } from 'react-router-dom';
import ScrollIndicator from '../components/ScrollIndicator';

import backgroundImage from '../assets/img/project_background.png';

import { Link } from 'react-router-dom';
import projects from './projectData';

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
          <Link to={projects[0].linkPath} className="project-link">
            <div className="project-card">
              <img src={projects[0].imageUrl} alt={projects[0].title} className="project-image" />
              <div className="project-content">
                <h2 className="project-title">{projects[0].title}</h2>
                <div className="project-description">{projects[0].description}</div>
              </div>
            </div>
          </Link>
        </div>
        {/* Map through the rest of the projects */}
        {projects.slice(1).map((project, index) => (
          <div key={index} className={`project ${index % 2 === 0 ? 'projectL' : 'projectR'}`}>
            <Link to={project.linkPath} className="project-link">
              <div key={index} className="project-card">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <div className="project-description">{project.description}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
