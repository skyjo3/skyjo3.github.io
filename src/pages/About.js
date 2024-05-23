// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import image from '../assets/img/about.jpg';

const About = () => (
  <div className="container">
    <div className="about-container">
      <div className="about-content">
        <h6>HELLO !</h6>
        <h1>My name is Amy.</h1>
        <h2>I am a HCI design researcher.</h2>
        <p>I draw wireframes and write codes to create reflective technologies.</p>
        <p>My work is centered on <b>digital photography</b>, <b>personal informatics</b>, and <b>memory studies</b>. I create mobile apps, websites, and domestic artifacts with an aim to support people to live and engage with their vast and still growing digital possessions.</p>
        <p>
          I commit to a <b>research philosophy</b> that advocates creating technologies for <b>deep, holistic reflection</b> rather than just for function and efficiency.
        </p>
        <Link to="/projects" className="custom-button">View My Projects</Link>
      </div>
      <div className="about-image">
        <img src={image} alt="Amy Yo Sue Chen" />
      </div>
    </div>
  </div>
);

export default About;
