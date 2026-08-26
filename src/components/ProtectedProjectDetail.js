import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { debounce } from '../utils/debounce';
import { useProjectUnlock } from './PasswordProtectedRoute';
import { getCachedUrlMap, getAssetUrl } from '../utils/s3Assets';
import ProjectBottomCTA from './ProjectBottomCTA';
import styles from '../pages/projects/ai-roadmap/AIRoadmapDetail.module.css';

function ContentBlock({ block, urlMap }) {
  switch (block.type) {
    case 'text':
      return <p>{block.value}</p>;
    case 'heading':
      return <h3>{block.value}</h3>;
    case 'list':
      return (
        <ul>
          {(block.items || []).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'image': {
      const src = getAssetUrl(urlMap, block.key);
      if (!src) return null;
      return <img src={src} alt={block.alt || ''} className={styles.projectContentImage} loading="lazy" />;
    }
    default:
      return null;
  }
}

const ProtectedProjectDetail = ({ slug }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { urlMap: contextUrlMap } = useProjectUnlock() || {};

  const [urlMap, setUrlMap]     = useState(contextUrlMap || null);
  const [content, setContent]   = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef({});

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        let map = urlMap || getCachedUrlMap(slug);
        if (!map) throw new Error('Session expired — please re-enter the password.');
        if (!cancelled) setUrlMap(map);

        const contentUrl = getAssetUrl(map, 'content.json');
        if (!contentUrl) throw new Error('content.json not found.');

        const resp = await fetch(contentUrl);
        if (!resp.ok) throw new Error(`Failed to load content (${resp.status})`);
        const json = await resp.json();
        if (!cancelled) setContent(json);
      } catch (err) {
        if (!cancelled) setLoadError(err.message);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!content) return;
    const hash = location.hash.replace('#', '');
    if (hash && sectionRefs.current[hash]) {
      sectionRefs.current[hash].scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, content]);

  useEffect(() => {
    if (!content) return;

    const debounceCallback = debounce((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, 300);

    const observer = new IntersectionObserver(debounceCallback, {
      rootMargin: '-20% 0px',
      threshold: 0.1,
    });

    Object.values(sectionRefs.current).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    navigate('#' + sectionId);
  };

  if (loadError) {
    return (
      <div className="container">
        <div className={styles.projectContainer}>
          <div className={styles.content}>
            <p>{loadError}</p>
            <button onClick={() => navigate(-1)}>Go back</button>
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="container">
        <div className={styles.projectContainer}>
          <div className={styles.content}>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  const nav = content.nav || [];
  const sections = content.sections || [];

  return (
    <div className="container">
      <ProjectBottomCTA />
      <div className={styles.projectContainer}>
        <div className={styles.sidebar}>
          <ul>
            {nav.map(item => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={activeSection === item.id ? styles.active : ''}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.project}>
            {sections.map((section, si) => (
              <section
                key={section.id}
                id={section.id}
                ref={el => { sectionRefs.current[section.id] = el; }}
              >
                {si === 0 ? (
                  <div className={styles.overviewContainer}>
                    <div>
                      {(section.blocks || []).map((block, bi) => (
                        <ContentBlock key={bi} block={block} urlMap={urlMap} />
                      ))}
                    </div>
                  </div>
                ) : (
                  (section.blocks || []).map((block, bi) => (
                    <ContentBlock key={bi} block={block} urlMap={urlMap} />
                  ))
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedProjectDetail;
