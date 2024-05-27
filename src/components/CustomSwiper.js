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
      }, 1000); // Adjust the duration as needed (e.g., 1000ms for 1 second)
    }
  };

  const prevSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
      setTimeout(() => {
        setTransitioning(false);
      }, 1000); // Adjust the duration as needed (e.g., 1000ms for 1 second)
    }
  };

  const handleThumbnailClick = (index) => {
    if (!transitioning && index !== currentSlide) {
      setTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => {
        setTransitioning(false);
      }, 1000); // Adjust the duration as needed (e.g., 1000ms for 1 second)
    }
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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
              transition: transitioning ? 'transform 1s ease-in-out' : '',
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
        src={images[currentSlide].src}
        alt={`Slide ${currentSlide + 1}`}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default CustomSwiper;
