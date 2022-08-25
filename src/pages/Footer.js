import React from 'react';
import './Footer.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faVimeoV } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <footer>
      <ul className='links'>
        <li className='links__item'>
          <a href="https://velog.io/@rmaomina" rel="noreferer" className="links__item--velog" title="@rmaomina velog">
            < FontAwesomeIcon icon={faVimeoV} />
          </a>
        </li>
        <li className='links__item'>
          <a href="https://github.com/rmaomina" rel="noreferer" className="links__item--github" title="@rmaomina github">
            < FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <div className='copyright'>
        포트폴리오의 폰트는 <a href="https://cactus.tistory.com/306">pretendard</a>를 사용하였습니다.
      </div>
    </footer>
  )
}

export default Footer;