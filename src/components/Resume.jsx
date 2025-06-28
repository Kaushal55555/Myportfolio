import React from 'react';
import { skills } from '../data/skills';
import kaushalCV from '../assets/KaushalKhadkaResume.pdf';
import SectionWrapper from './SectionWrapper';
import { FaBriefcase, FaLaptopCode, FaCode, FaDownload } from 'react-icons/fa';

const Resume = () => (
  <SectionWrapper delay={0.4}>
    <section id="resume" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-title">Resume</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 transform transition-all duration-300 hover:shadow-xl">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full text-purple-600 mt-1">
                <FaBriefcase className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">1+ years (student & real-world projects)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-full text-pink-600 mt-1">
                <FaLaptopCode className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Areas of Interest</h3>
                <p className="text-gray-600">Full Stack Web Development, UI/UX, Databases</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mt-1">
                <FaCode className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Key Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={kaushalCV}
              download="Kaushal_Khadka_CV.pdf"
              className="download-cv-btn"
            >
              <FaDownload className="mr-2" />
              Download My CV
            </a>
            <p className="mt-2 text-sm text-gray-500">Get my latest professional CV</p>
          </div>
        </div>
      </div>
    </section>
  </SectionWrapper>
);

export default Resume;