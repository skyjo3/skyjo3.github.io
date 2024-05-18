import React from 'react';
import './Header.css'; // We'll create this CSS file next

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={`${process.env.PUBLIC_URL}/website-icon-32x32.png`} alt="Logo" className="logo-image" />
          <h1 className="logo-text">Amy Yo Sue Chen</h1>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#more">MORE</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;