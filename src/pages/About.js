// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import image from '../assets/img/about.jpg';

const About = () => (
  <div className="container">
    <div className="about-container">
      <div className="about-image">
        <img src={image} alt="Amy Yo Sue Chen" />
      </div>
      <div className="about-content">
        <h6>HELLO !</h6>
        <h2>My name is Amy. I am a Design Researcher focused on Visual Media.</h2>
        <p>I design, develop, and ship products with an aim to engage people with their own <b>vast and still growing digital possessions</b>.</p>
        <p>My work in Human-Computer Interaction (HCI) focuses on <b>interaction design</b>, <b>research product</b>, and <b>data wayfaring</b>.</p>
        <Link to="/projects" className="custom-button">View My Projects</Link>
      </div>
    </div>
  </div>
);

export default About;
