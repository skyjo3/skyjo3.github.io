import React, { useState } from 'react';
import Lightbox from './Lightbox';
import styles from './Gallery.module.css';

const Gallery = ({ images, rows, columns }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const getGridTemplate = () => {
    return {
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`
    };
  };

  return (
    <div>
      <div className={styles.gallery} style={getGridTemplate()}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageContainer}
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          images={images}
          currentIndex={selectedImageIndex}
          isOpen={isOpen}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Gallery;
