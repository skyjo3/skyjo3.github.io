import React, { useRef, useEffect, useState } from 'react';

const LazyLoadImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }  // Trigger when 10% of the image is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isLoaded ? src : ''}
      alt={alt}
      className={className}
      onClick={onClick}
      loading="lazy"
    />
  );
};

export default LazyLoadImage;
