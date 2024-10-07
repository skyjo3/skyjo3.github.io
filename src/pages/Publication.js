// src/pages/Publication.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Publication.css';
import image1 from '../assets/img/google-scholar-laptop.png';
import image2 from '../assets/img/google-scholar-mobile.png';

const Publication = () => (
  <div className="container">
    <div className="publication-container">
        {/* Desktop Image */}
        <a href="https://scholar.google.ca/citations?hl=en&user=7oOu3FgAAAAJ&view_op=list_works" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Google Scholar Profile Image - Desktop" className="desktop-image" />
        </a>

        {/* Mobile Image */}
        <a href="https://scholar.google.ca/citations?hl=en&user=7oOu3FgAAAAJ&view_op=list_works" target="_blank" rel="noopener noreferrer">
          <img src={image2} alt="Google Scholar Profile Image - Mobile" className="mobile-image" />
        </a>
        <p></p>
    </div>
  </div>
);

export default Publication;
