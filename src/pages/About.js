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
        <h1>My name is Amy.</h1>
        <h2>I am a Design Researcher.</h2>
        <p>I design, develop, and ship products with an aim to engage people with their own <b>vast and still growing personal data</b>, such as digital photos, music listening history, and ebook reading metadata.</p>
        <p>My work in Human-Computer Interaction (HCI) focuses on <b>interaction design</b>, <b>design prototyping</b>, and <b>data visualization</b>.</p>
        <Link to="/projects" className="custom-button">View My Projects</Link>
      </div>
    </div>
  </div>
);

export default About;
