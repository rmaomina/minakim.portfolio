import './App.scss';

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigator from './pages/Navigator'
import Profile from './pages/Profile'
import Resume from './pages/Resume'
import Learnfrom from './pages/Learnfrom'
import Projects from './pages/Projects'

function App() {

  return (
    <div className="app">
      <div className="fullpage">
        <Navigator />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/learnfrom" element={<Learnfrom />} />
        </Routes>
        <div className="fullpage__base"></div>
      </div>
      <Projects />
      <div className="footer">
        Footer
      </div>
    </div>
  );
}

export default App;
