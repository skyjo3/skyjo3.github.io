import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={`${process.env.PUBLIC_URL}/website-icon.png`} alt="Logo" className="logo-image" />
          <div className="logo-text">Amy Y. Chen</div>
        </div>
        <div>
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <img src={`${process.env.PUBLIC_URL}/menu.png`} alt="Menu" className="hamburger-image" />
          </div>

          <nav className={isOpen ? "nav-open" : ""}>
            <ul className="nav-links">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)} 
                  className={isActive('/') ? 'active' : ''}
                >
                  WORK
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={() => setIsOpen(false)} 
                  className={isActive('/about') ? 'active' : ''}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link 
                  to="/more" 
                  onClick={() => setIsOpen(false)} 
                  className={isActive('/more') ? 'active' : ''}
                >
                  PUBLICATION
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;