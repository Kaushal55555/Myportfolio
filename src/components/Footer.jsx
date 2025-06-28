import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-copyright">&copy; {new Date().getFullYear()} Kaushal Khadka. All rights reserved.</div>
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#certificates" className="footer-link">Certificates</a>
          <a href="#resume" className="footer-link">Resume</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <div>
          <a href="mailto:kaushalkhadka789@gmail.com" className="footer-email">kaushalkhadka789@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 