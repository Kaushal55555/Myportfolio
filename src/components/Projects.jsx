import React, { useState } from 'react';
import { projectsData, techFilters } from '../data/projects';
import SectionWrapper from './SectionWrapper';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.stack.includes(filter));

  return (
    <SectionWrapper delay={0.2}>
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          
          <div className="projects-filters">
            {techFilters.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`filter-btn ${filter === tech ? 'active' : ''}`}
              >
                {tech}
              </button>
            ))}
          </div>
          
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                {project.banner && (
                  <div className="project-banner-container">
                    <img 
                      src={project.banner} 
                      alt={`${project.title} banner`} 
                      className="project-banner-img"
                    />
                  </div>
                )}

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Projects;