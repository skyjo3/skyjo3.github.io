import React, { useState } from 'react';
import Lightbox from './Lightbox'; // Assuming Lightbox is in the same directory
import styles from './Gallery.module.css';

const Gallery = ({ images, rows, columns }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (image) => {
    setSelectedImage(image);
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
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={isOpen}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Gallery;
