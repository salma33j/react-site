
// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pagesPReact/style1.css';
import logo from './logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logoduclub" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/">Accueil</Link>
          <Link to="/page2">À propos</Link>
          <Link to="/page4">Activité</Link>
          <Link to="/page6">Membres</Link>
          <Link to="/page5">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
