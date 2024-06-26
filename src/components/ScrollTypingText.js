import React, { useEffect, useRef, useState } from 'react';
import LazyLoadImage from './LazyLoadImage';
import TypeWriterText from './TypeWriterText';
import styles from './ScrollTypingText.module.css';

const ScrollTypingText = ({ src, alt, text }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0);

  const checkVisibility = () => {
    const rect = ref.current.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isInViewport !== isVisible) {
      setIsVisible(isInViewport);
      if (isInViewport) {
        setKey(prevKey => prevKey + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div className={styles.scrolltypingtext}>
      <div ref={ref} className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <LazyLoadImage src={src} alt={alt} className={styles.image} />
        <TypeWriterText key={key} text={text} />
      </div>
    </div>
  );
};

export default ScrollTypingText;
