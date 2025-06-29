import React from 'react';
import SectionWrapper from './SectionWrapper';

const Hero = () => {
  return (
    <SectionWrapper>
      <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-image-container">
              <img 
                src="/assets/kaushal.jpg" 
                alt="Kaushal Khadka" 
                className="hero-image" 
              />
            </div>
            
            <div className="hero-text">
              <h1 className="hero-title">Kaushal Khadka</h1>
              <h2 className="hero-subtitle">
                Aspiring Full Stack Developer | React & Java Enthusiast
              </h2>
              
              <p className="hero-description">
              I'm Kaushal Khadka, a passionate web developer pursuing a BSc (Hons) in Computing at Itahari International College.
I specialize in building responsive, user-focused web apps using HTML, CSS, JavaScript, and React.js.
I'm also expanding my backend skills with Laravel, MySQL, and modern development tools.
I have built projects like an Online Bookstore and a Wildlife Safari Reservation System.
These experiences honed my skills in real-world problem solving and full-stack development.
I enjoy working in collaborative, fast-paced environments that push me to grow.
From UI design to backend logic, I focus on building clean and scalable solutions.
I am always exploring, learning, and excited to contribute to impactful digital products.
            </p>
              
              {/* AWS Badges */}
              <div className="aws-badges">
                <p className="tech-stack-label">Tech Stack:</p>
                <div className="aws-logos">
                  <div className="aws-logo-container" title="AWS">
                    <svg viewBox="0 0 48 32" className="aws-logo">
                      <path fill="#FF9900" d="M44.6 15.4c0-2.3-1.5-3.4-4.6-4.2-2.2-.6-2.7-1-2.7-1.7 0-.7.6-1.2 1.8-1.2 1.3 0 3.1.4 4.7 1.3l.8-4.3c-1.4-.6-3.6-1.3-6.5-1.3-3.4 0-5.8 1.6-5.8 4.3 0 2.1 1.3 3.2 4.3 4 2.2.6 2.9 1 2.9 1.8 0 1-.9 1.5-2.4 1.5-1.6 0-3.8-.6-5.8-1.8l-.8 4.5c1.5.8 4 1.5 6.7 1.5 3.6 0 6.1-1.6 6.1-4.4zM29.7 2.3l-5.2 25.5h-5.5l5.2-25.5h5.5zm-8.5 0l-4.7 10.1-1.3-10.1h-7.2l-3.7 25.5h5.4l2.9-18.1 1.3 18.1h5.5l3.5-18.1 1.3 18.1h5.4l4.3-25.5h-11.1z"/>
                    </svg>
                  </div>
                  <div className="aws-logo-container" title="Amazon S3">
                    <svg viewBox="0 0 24 24" className="aws-logo">
                      <path fill="#FF9900" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.5 3.7-7.5 3.8-7.5-3.8L12 4.2zm0 8.3l7.5-3.8v7.5l-7.5 3.8-7.5-3.8V8.7l7.5 3.8z"/>
                    </svg>
                  </div>
                  <div className="aws-logo-container" title="AWS Lambda">
                    <svg viewBox="0 0 24 24" className="aws-logo">
                      <path fill="#FF9900" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.5 3.7-7.5 3.8-7.5-3.8L12 4.2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="hero-buttons">
                <a 
                  href="#projects" 
                  className="btn btn-primary"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-outline"
                >
                  Contact Me
                </a>
              </div>
              
              <div className="social-links">
                <a 
                  href="https://github.com/Kaushal55555" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="GitHub"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/kaushal-khadka-073a0b347" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
      </section>
    </SectionWrapper>
  );
};

export default Hero;