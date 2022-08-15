import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Contact from './Contact'

const Navigator = () => {
  const navigate = useNavigate()

  return (
    <div className="navigator">
      <div className="navigator__container">
        <div className="home">
          <a href="" onClick={() => {navigate(-1)}}>Back</a>
        </div>
        <div className="navigator__tabs">
          <Link to="/">
            <span className="navigator__tabs--button selected">Profile</span>
          </Link>
          <Link to="/project">
            <span className="navigator__tabs--button">Projects</span>
          </Link>
          <Link to="/resume">
            <span className="navigator__tabs--button">Resume</span>
          </Link>
          <Link to="/learnfrom">
            <span className="navigator__tabs--button">LearnFrom</span>
          </Link>
          <Link to="/interest">
            <span className="navigator__tabs--button">interest</span>
          </Link>
        </div>
        <Contact/>
      </div>
      <div className="base"></div>
    </div>
  )
}

export default Navigator;