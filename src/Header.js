import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={`${process.env.PUBLIC_URL}/website-icon.png`} alt="Logo" className="logo-image" />
          <div className="logo-text">Amy Yo Sue Chen</div>
        </div>

        <nav>
          <ul className="nav-links">
            <li><Link to="/">ABOUT</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/more">MORE</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;