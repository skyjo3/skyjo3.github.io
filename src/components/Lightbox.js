import React, { useEffect, useState } from 'react';
import styles from './Lightbox.module.css';

const Lightbox = ({ images, currentIndex, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  if (!isOpen) {
    return null;
  }

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.lightbox}>
      <span className={styles.closeBtn} onClick={onClose}>&times;</span>
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className={styles.fullscreenImage}
      />
      <button className={styles.prev} onClick={handlePrev}>&#10094;</button>
      <button className={styles.next} onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default Lightbox;
