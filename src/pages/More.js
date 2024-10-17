// src/pages/More.js
import React from 'react';
import styles from './More.css';

import image1 from '../assets/img/google-scholar-laptop.png';
import image2 from '../assets/img/google-scholar-mobile.png';

const More = () => {

  return (
    <div className="container">
      <div className="publication-container">
          <a href="https://scholar.google.ca/citations?hl=en&user=7oOu3FgAAAAJ&view_op=list_works" target="_blank" rel="noopener noreferrer" className="image-container">
            <img src={image1} alt="Google Scholar Profile Image - Desktop" className="desktop-image" />
            <img src={image2} alt="Google Scholar Profile Image - Mobile" className="mobile-image" />
            <span className="hover-text">View on Google Scholar</span>
          </a>
          <p></p>
      </div>
    </div>
  );
};

export default More;
