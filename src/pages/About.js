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
        <h2>I am a Research Engineer.</h2>
        <p>I create and ship products with an aim to engage people with their own vast and still growing personal data.</p>
        <p>My work in Human-Computer Interaction (HCI) focuses on <b>interaction design</b> and <b>personal informatics</b>. I commit to a <b>research philosophy</b> that advocates creating technologies for deep, holistic engagement, moving beyond mere function and efficiency.</p>
        <Link to="/projects" className="custom-button">View My Projects</Link>
      </div>
    </div>
  </div>
);

export default About;
