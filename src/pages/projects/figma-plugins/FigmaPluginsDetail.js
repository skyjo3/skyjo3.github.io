import React, { useState, useEffect, useRef } from 'react';
import { debounce } from '../../../utils/debounce';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './FigmaPluginsDetail.module.css';

import ProjectBottomCTA from '../../../components/ProjectBottomCTA';

const FigmaPluginsDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  const sectionRefs = useRef({
    overview: useRef(null),
    context: useRef(null),
    approach: useRef(null),
    outcomes: useRef(null),
  });

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && sectionRefs.current[hash] && sectionRefs.current[hash].current) {
      sectionRefs.current[hash].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const debounceObserverCallback = debounce((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, 300);

    const observer = new IntersectionObserver(debounceObserverCallback, {
      rootMargin: '-20% 0px',
      threshold: 0.1,
    });

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    navigate('#' + section);
  };

  return (
    <div className="container">
      <ProjectBottomCTA />
      <div className={styles.projectContainer}>
        <div className={styles.sidebar}>
          <ul>
            <li onClick={() => handleNavClick('overview')} className={activeSection === 'overview' ? styles.active : ''}>0 - overview</li>
            <li onClick={() => handleNavClick('context')} className={activeSection === 'context' ? styles.active : ''}>1 - context</li>
            <li onClick={() => handleNavClick('approach')} className={activeSection === 'approach' ? styles.active : ''}>2 - approach</li>
            <li onClick={() => handleNavClick('outcomes')} className={activeSection === 'outcomes' ? styles.active : ''}>3 - outcomes</li>
          </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.project}>
            <section id="overview" ref={sectionRefs.current.overview}>
              <div className={styles.overviewContainer}>
                <div>
                  <h2>Overview</h2>
                  <p>Coming soon.</p>
                </div>
              </div>
            </section>
            <section id="context" ref={sectionRefs.current.context}>
              <h2>1 - Context</h2>
              <p>Coming soon.</p>
            </section>
            <section id="approach" ref={sectionRefs.current.approach}>
              <h2>2 - Approach</h2>
              <p>Coming soon.</p>
            </section>
            <section id="outcomes" ref={sectionRefs.current.outcomes}>
              <h2>3 - Outcomes</h2>
              <p>Coming soon.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaPluginsDetail;
