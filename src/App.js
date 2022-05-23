import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
          <Header />
        <Routes>
            <Route path="https://sdseney508.github.io/React-Port/" element={<Home />} />
            <Route path="https://sdseney508.github.io/React-Port/about" element={<AboutMe />} />
            <Route path="https://sdseney508.github.io/React-Port/portfolio" element={<Portfolio />} />
            <Route path="https://sdseney508.github.io/React-Port/resume" element={<Resume />} />
            <Route path="https://sdseney508.github.io/React-Port/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
