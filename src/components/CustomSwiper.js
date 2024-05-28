import React, { useState } from 'react';
import './CustomSwiper.css';
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
      }, 300); // Adjust the duration as needed (e.g., 300ms for quicker transition)
    }
  };

  const prevSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
      setTimeout(() => {
        setTransitioning(false);
      }, 300); // Adjust the duration as needed (e.g., 300ms for quicker transition)
    }
  };

  const handleThumbnailClick = (index) => {
    if (!transitioning && index !== currentSlide) {
      setTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => {
        setTransitioning(false);
      }, 300); // Adjust the duration as needed (e.g., 300ms for quicker transition)
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
    <div className="custom-swiper">
      <div className="slider" onClick={openLightbox}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
              transition: transitioning ? 'transform 0.3s ease-in-out' : '',
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          ></div>
        ))}
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image.src} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide} disabled={transitioning}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide} disabled={transitioning}>
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
