import React from 'react';
import './Lightbox.css'; // Assume styling is moved to Lightbox.css

const Lightbox = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="lightbox">
      <span className="close-btn" onClick={onClose}>&times;</span>
      <img src={src} alt={alt} className="fullscreen-image" />
    </div>
  );
};

export default Lightbox;
