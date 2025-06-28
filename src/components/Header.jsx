import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a href="#home" className="logo" onClick={closeMobileMenu}>
            Kaushal Khadka
          </a>
          
          {/* Mobile menu button */}
          <button 
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="hamburger"></span>
          </button>
          
          {/* Navigation links */}
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={closeMobileMenu}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#certificates" className="nav-link" onClick={closeMobileMenu}>
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link" onClick={closeMobileMenu}>
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
            <li className="nav-item mobile-only">
              <DarkModeToggle />
            </li>
          </ul>
          
          {/* Theme toggle for desktop */}
          <div className="theme-toggle desktop-only">
            <DarkModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 