import './Navigator.scss';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { faUser, faDiagramProject, faFile, faBook } from '@fortawesome/free-solid-svg-icons';


const Navigator = () => {

  return (
    <div className="navigator">
      <div className="navigator__container">
        <div className="navigator__back"></div>
        <div className="navigator__tabs">
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faUser} />Profile
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/projects">
            <FontAwesomeIcon icon={faDiagramProject} />Projects
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/resume">
            <FontAwesomeIcon icon={faFile} />Resume
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/learnfrom">
            <FontAwesomeIcon icon={faBook} />LearnFrom
          </NavLink>
        </div>
        <div className="contacts">
          <a href="https://velog.io/@rmaomina" rel="noreferer" className="contacts__link--velog" title="@rmaomina velog">
            < FontAwesomeIcon icon={faVimeoV} />
          </a>
          <a href="https://github.com/rmaomina" rel="noreferer" className="contacts__link--github" title="@rmaomina github">
            < FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="navigator__base"></div>
    </div>
  )
}

export default Navigator;