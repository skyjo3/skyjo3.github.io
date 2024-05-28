import React from 'react';
import styles from './LightboxSingle.module.css';

const LightboxSingle = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.lightbox}>
      <span className={styles.closeBtn} onClick={onClose}>&times;</span>
      <img src={src} alt={alt} className={styles.fullscreenImage} />
    </div>
  );
};

export default LightboxSingle;
