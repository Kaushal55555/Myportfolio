import React from 'react';
import { certificates } from '../data/certificates';
import SectionWrapper from './SectionWrapper';

const Certificates = () => (
  <SectionWrapper delay={0.3}>
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-card"
            >
              <div className="certificate-badge">
                <img src={cert.badge} alt={cert.title} />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="certificate-issuer">AWS Academy</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  </SectionWrapper>
);

export default Certificates;