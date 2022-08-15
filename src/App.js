import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigator from './components/Navigator'
import Profile from './components/Profile'
import Resume from './components/Resume.js'
import Learnfrom from './components/Learnfrom.js'
import Interest from './components/Interest.js'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [currNavMenu, setCurrNavMenu] = useState('profile');

  return (
    <BrowserRouter>
      <div className="app">
        <Navigator />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/#project" />
          <Route path="/resume" element={<Resume />} />
          <Route path="/learnfrom" element={<Learnfrom />} />
          <Route path="/interest" element={<Interest />} />
        </Routes>
        <Projects />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
