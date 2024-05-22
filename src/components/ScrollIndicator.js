// ScrollIndicator.js

import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (window.scrollY / scrollableHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator" style={{ height: `${scrollProgress}%` }}>
      <div className="scroll-indicator-line"></div>
    </div>
  );
};

export default ScrollIndicator;
