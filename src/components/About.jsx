import React from 'react';
import SectionWrapper from './SectionWrapper';

const About = () => {
  const technicalSkills = [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const softSkills = [
    {
      name: 'Research',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      )
    },
    {
      name: 'Teamwork',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><circle cx="17" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2"/><path d="M14 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2"/></svg>
      )
    },
    {
      name: 'Communication',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      )
    },
    {
      name: 'Problem Solving',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      )
    },
    {
      name: 'Time Management',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      )
    },
    {
      name: 'Adaptability',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M19 21a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M5 3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3"/></svg>
      )
    },
    {
      name: 'Creativity',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      )
    },
    {
      name: 'Leadership',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2l4 4-4 4-4-4z"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>
      )
    }
  ];

  return (
    <SectionWrapper delay={0.1}>
      <section id="about" className="about-section open-about-section">
        <div className="container open-about-container">
          <h2 className="section-title">About Me</h2>
          <div className="open-about-main">
            {/* Optional Avatar or Illustration */}
            {/* <div className="open-about-avatar">
              <img src="/avatar.png" alt="Avatar" />
            </div> */}
            <div className="open-about-bio">
              <div className="open-about-divider" style={{ marginTop: '0.5rem' }} />
              <div className="open-about-details">
                <div className="open-about-education">
                  <h3 className="open-about-subtitle">Education</h3>
                  <div className="education-list">
                    <div className="education-item">
                      <h4 className="education-degree">BSc (Hons) Computing</h4>
                      <div className="education-institution">Itahari International College</div>
                      <div className="education-period">2023 – Present</div>
                    </div>
                    <div className="education-item">
                      <h4 className="education-degree">Computer Science (High School)</h4>
                      <div className="education-institution">Sushma Godawari College</div>
                      <div className="education-period">2019 – 2021</div>
                    </div>
                  </div>
                </div>
                <div className="open-about-skills">
                  <h3 className="open-about-subtitle">Technical Skills</h3>
                  <div className="skills-grid">
                    {technicalSkills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-icon">
                          <img src={skill.icon} alt={skill.name} />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="open-about-subtitle" style={{ marginTop: '1.5rem' }}>Soft Skills</h3>
                  <div className="soft-skills">
                    {softSkills.map((skill, index) => (
                      <span key={index} className="soft-skill-badge">
                        <span className="soft-skill-icon">{skill.icon}</span>
                        <span className="soft-skill-name">{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default About;