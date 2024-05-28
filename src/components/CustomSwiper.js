import React, { useState } from 'react';
import styles from './CustomSwiper.module.css';
import Lightbox from './Lightbox';

const CustomSwiper = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      setTimeout(() => {
        setTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
      setTimeout(() => {
        setTransitioning(false);
      }, 300);
    }
  };

  const handleThumbnailClick = (index) => {
    if (!transitioning && index !== currentSlide) {
      setTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => {
        setTransitioning(false);
      }, 300);
    }
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrevImage = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const showNextImage = () => {
    setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.customSwiper}>
      <div className={styles.slider} onClick={openLightbox}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
              transition: transitioning ? 'transform 0.3s ease-in-out' : '',
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          ></div>
        ))}
      </div>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image.src} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide} disabled={transitioning}>
        &#10094;
      </button>
      <button className={styles.next} onClick={nextSlide} disabled={transitioning}>
        &#10095;
      </button>
      <Lightbox
        images={images}
        currentIndex={currentSlide}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={showPrevImage}
        onNext={showNextImage}
      />
    </div>
  );
};

export default CustomSwiper;