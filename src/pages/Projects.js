// src/pages/Projects.js
import React, { useState, useEffect, useCallback } from 'react';
import './Projects.css';

import { useLocation } from 'react-router-dom';
import ScrollIndicator from '../components/ScrollIndicator';

import backgroundImage from '../assets/img/project_background.png';

import { Link } from 'react-router-dom';
import projectsData from './projectData';
import { debounce } from '../utils/debounce';

const Projects = () => {
  // Get the current location using react-router-dom's useLocation hook
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects'; 

  // Project data and tag filtering
  const [projects, setProjects] = useState(projectsData); 
  const [selectedTags, setSelectedTags] = useState(() => {
    // Initialize selected tags from localStorage if available, otherwise default to ['all']
    const storedTags = localStorage.getItem('selectedTags');
    console.log('stored tages: '+storedTags);
    return storedTags ? JSON.parse(storedTags) : ['all'];
  });

  // This effect runs when selectedTags changes
  useEffect(() => {
    // Update localStorage when selectedTags change
    localStorage.setItem('selectedTags', JSON.stringify(selectedTags));

    const filteredProjects = selectedTags.includes('all') || selectedTags.length === 0
      ? projectsData
      : projectsData.filter(project =>
          selectedTags.some(tag => project.tags.includes(tag))
        );
    setProjects(filteredProjects);
  }, [selectedTags]); 

  const handleTagClick = (tag) => {
    setSelectedTags(prev => {
        // If "all" is clicked, reset to only include "all"
        if (tag === 'all') {
            return ['all'];
        }

        // Remove "all" from selected tags if any other tag is clicked
        const filteredTags = prev.filter(t => t !== 'all');

        // Toggle the clicked tag
        if (filteredTags.includes(tag)) {
            return filteredTags.filter(t => t !== tag);
        } else {
            return [...filteredTags, tag];
        }
    });
  };

  const handleMouseEnter = useCallback(debounce((tag) => {
    // Perform actions on mouse enter, if necessary
    console.log(`Mouse entered tag: ${tag}`);
  }, 300), []);

  const handleMouseLeave = useCallback(debounce((tag) => {
    // Perform actions on mouse leave, if necessary
    console.log(`Mouse left tag: ${tag}`);
  }, 300), []);

  return (
    <div className="container">
      <div className="projects-background-container">
        <ScrollIndicator />
        <div className="projects-container">
          <div className="project intro">
            <h5>↳  8 FEATURED PROJECTS</h5>
            <p>My works surrounds <b>human-photo interaction</b>, <b>UX design</b>, and <b>domestic artifacts</b>.</p>
            <p>Recently, I have started to incorporate <b>generative AI</b> to foster more <b>enriched and meaningful interactions</b> with personal data.</p>
            {/* Tags section */}
            <div className="tags-container">
              {['all', 'mobile', 'tangible', 'website', 'photos', 'audio', 'reading'].map(tag => (
                <div
                  key={tag}
                  className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
                  onClick={() => handleTagClick(tag)}
                  onMouseEnter={() => handleMouseEnter(tag)}
                  onMouseLeave={() => handleMouseLeave(tag)}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </div>
              ))}
            </div>
          </div>

          {/* Filtered projects */}
          {projects.map((project, index) => (
            <div key={index} className={`project ${index % 2 === 0 ? 'projectR' : 'projectL'}`}>
              <Link to={project.linkPath} className="project-link">
                <div key={index} className="project-card">
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                  <div className="project-content">
                    <h2 className="project-title">{project.title}</h2>
                    <div className="project-description">{project.description}</div>
                    <ul>
                      {project.tags.filter(tag => tag !== 'all').map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
