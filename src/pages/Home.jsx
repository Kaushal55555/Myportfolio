import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default Home; 