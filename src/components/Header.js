import './Header.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <h1 className='title'><span className='greeting'>반갑습니다.</span>
        <div className='title__wrapper'>
          <span className='title__flip'>책임감있는 개발자, 김민아</span>
          {/* 꾸준히 성장하는 개발자, 김민아 */}
          {/* 매일 업데이트되는 개발자, 김민아*/}
          <i></i>
        </div>입니다.
      </h1>
      <nav className='nav'>
        <ul className='nav__container'>
          <li className='nav__item'>
            <Link className="active" to="/">PORTFOLIOS</Link>
          </li>
          <li className='nav__item'>
            <Link className="" to="/">ABOUT</Link>
          </li>
          <li className='nav__item'>
            <Link className="" to="/">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;