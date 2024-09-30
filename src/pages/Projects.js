// src/pages/Projects.js
import React, { useState, useEffect, useCallback } from 'react';
import styles from './Projects.module.css';

import { tagSelection } from '../utils/gtag';

import { useLocation } from 'react-router-dom';
import ScrollIndicator from '../components/ScrollIndicator';

import backgroundImage from '../assets/img/project_background.png';

import { Link } from 'react-router-dom';
import data from './projectListData';
import { debounce } from '../utils/debounce';

const Projects = () => {

  // display custom scroller if it's on desktop
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get the current location using react-router-dom's useLocation hook
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects'; 

  // get unique tags
  const getUniqueTags = (projects) => {
    const allTags = projects.reduce((acc, project) => [...acc, ...project.tags], []);
    const uniqueTags = new Set(allTags);
    uniqueTags.delete('all');
    return [...uniqueTags];
  };

  // Project data and tag filtering
  const [projects, setProjects] = useState(data); 
  const [tags, setTags] = useState(['all', ...getUniqueTags(data)]);
  const [selectedTags, setSelectedTags] = useState(() => {
    // Initialize selected tags from localStorage if available, otherwise default to ['all']
    const storedTags = localStorage.getItem('selectedTags');
    return storedTags ? JSON.parse(storedTags) : ['all'];
  });

  // This effect runs when selectedTags changes
  useEffect(() => {
    // Update localStorage when selectedTags change
    localStorage.setItem('selectedTags', JSON.stringify(selectedTags));

    const filteredProjects = selectedTags.includes('all') || selectedTags.length === 0
      ? data
      : data.filter(project =>
          selectedTags.some(tag => project.tags.includes(tag))
        );
    setProjects(filteredProjects);
  }, [selectedTags]); 

  const handleTagClick = (tag) => {
    setSelectedTags([tag]);
    tagSelection(tag);
  };

  // debounce & cleanup
  const handleMouseEnter = useCallback(debounce((tag) => {
    // Perform actions on mouse enter, if necessary
    console.log(`Mouse entered tag: ${tag}`);
  }, 300), []);

  const handleMouseLeave = useCallback(debounce((tag) => {
    // Perform actions on mouse leave, if necessary
    console.log(`Mouse left tag: ${tag}`);
  }, 300), []);

  useEffect(() => {
    // Cleanup function to clear the debounced functions
    return () => {
      handleMouseEnter.cancel();
      handleMouseLeave.cancel();
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <div className={styles["container"]}>
      <div className={styles["projects-background-container"]}>
        {isDesktop && <ScrollIndicator />}
        <div className={styles["projects-container"]}>
          <div className={`${styles.project} ${styles.intro}`}>
            <h5>↳  {data.length} FEATURED PROJECTS</h5>
            <p>My recent projects and activities involve integrating <b>AI models</b> to foster more <b>enriched interactions with personal data</b>.</p>
            <p>Wearing multiple hats as needed, I commit to a <b>pioneering philosophy</b> that advocates creating technologies for <b>deep, holistic engagement</b>, moving beyond mere function and efficiency.</p>
            {/* Tags section */}
            <div className={styles["tags-container"]}>
              {tags.map(tag => (
                <div
                  key={tag}
                  className={[styles.tag, selectedTags.includes(tag) && styles.selected].filter(Boolean).join(' ')}
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
            <div key={index} className={styles[`project${index % 2 === 0 ? 'R' : 'L'}`]}>
              <Link to={project.linkPath} className={styles["project-link"]}>
                <div key={index} className={styles["project-card"]}>
                  <img src={project.imageUrl} alt={project.title} className={styles["project-image"]} />
                  <div className={styles["project-content"]}>
                    <h2 className={styles["project-title"]}>{project.title}</h2>
                    <div className={styles["project-description"]}>{project.description}</div>
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
