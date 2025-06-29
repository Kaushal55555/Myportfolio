import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Helmet } from 'react-helmet';
import './index.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Kaushal Khadka | Aspiring Full Stack Developer</title>
        <meta name="description" content="Portfolio of Kaushal Khadka, aspiring full stack developer and React & Java enthusiast. Explore projects, skills, certificates, and contact info." />
        <meta property="og:title" content="Kaushal Khadka | Aspiring Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Kaushal Khadka, aspiring full stack developer and React & Java enthusiast. Explore projects, skills, certificates, and contact info." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kaushalportfolios.netlify.app" />
        <meta property="og:image" content="/assets/kaushal.jpg" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
