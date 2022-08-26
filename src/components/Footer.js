import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <ul className='links'>
        <li className='links__item'>
          <a href="https://velog.io/@rmaomina" rel="noreferer" className="links__item--velog" title="@rmaomina velog">
          </a>
        </li>
        <li className='links__item'>
          <a href="https://github.com/rmaomina" rel="noreferer" className="links__item--github" title="@rmaomina github">
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