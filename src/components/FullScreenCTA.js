import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styles from './FullScreenCTA.module.css';

const FullScreenCTA = () => {
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const pixelsFromBottom = documentHeight - (window.scrollY + windowHeight);

      // Start increasing opacity when there are only 200px left to the bottom
      if (pixelsFromBottom <= 200) {
        const opacityAdjust = (200 - pixelsFromBottom) / 200; // Normalize to a 0-1 scale
        setOpacity(Math.min(opacityAdjust, 1)); // Ensure the opacity does not exceed 1
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.fullScreenCTA} style={{ opacity: opacity }}>
      <button onClick={() => navigate('/more')}>contact me for collaboration 😃</button>
      <button onClick={() => navigate('/projects')}>not yet amy — let me view more projects first 🤔</button>
    </div>
  );
};

export default FullScreenCTA;
