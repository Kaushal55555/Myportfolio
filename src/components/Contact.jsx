import React from 'react';
import SectionWrapper from './SectionWrapper';

const Contact = () => (
  <SectionWrapper delay={0.5}>
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <form 
          action="https://formsubmit.co/kaushalkhadka789@gmail.com"
          method="POST"
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        
        <div className="contact-alternative">
          <p>Or reach out directly at <a href="mailto:kaushalkhadka789@gmail.com">kaushalkhadka789@gmail.com</a></p>
          <p>📞 +977 9827008295</p>
          <p>📍 Barahakshetra-5, Sunsari</p>
        </div>
      </div>
    </section>
  </SectionWrapper>
);

export default Contact; 