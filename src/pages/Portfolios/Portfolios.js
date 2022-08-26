import React from 'react';
import './Portfolios.css'

const Portfolios = () => {

  return (
    <div className="portfolios">
      <div className="say">
        <ul className="say__container">
          <li className="say__item">
            소프트웨어로 문제를 해결하는 것이 <br/>
            <i className="bold">세상을 이롭게 한다고</i> 믿습니다.
          </li>
          <li className="say__item">
            그 과정의 일원으로 자부심을 느낍니다.
          </li>
          <li className="say__item">
            <i className="bold">자주적으로 일하고 의견을 잘 교환합니다.</i> <br/>
            팀 문화를 존중하고 동료를 신뢰합니다.
          </li>
          <li className="say__item">
            작은 것을 사소하게 생각하지 않는 것으로부터 <br/>
            <i className="bold">지속가능한 성장이 가능하다고</i> 믿습니다.
          </li> 
        </ul>
      </div>
      <ul className="grid">
        <li className="grid__item">
          <a href="">
            <div className="grid__item--inner">
              <div className="grid__item--image"></div>
              <div className="grid__item--overlay">
                <p>description</p>
              </div>
            </div>
          </a>
        </li>
        <li className="grid__item">
          <a href="">
            <div className="grid__item--inner">
              <div className="grid__item--image"></div>
              <div className="grid__item--overlay">
                <p>description</p>
              </div>
            </div>
          </a>
        </li>
        <li className="grid__item">
          <a href="">
            <div className="grid__item--inner">
              <div className="grid__item--image"></div>
              <div className="grid__item--overlay">
                <p>description</p>
              </div>
            </div>
          </a>
        </li>
        <li className="grid__item">
          <a href="">
            <div className="grid__item--inner">
              <div className="grid__item--image"></div>
              <div className="grid__item--overlay">
                <p>description</p>
              </div>
            </div>
          </a>
        </li>
        <li className="grid__item">
          <a href="">
            <div className="grid__item--inner">
              <div className="grid__item--image"></div>
              <div className="grid__item--overlay">
                <p>description</p>
              </div>
            </div>
          </a>
        </li>
        <li className="grid__item">
          <a href="">
            <div className="grid__item--inner">
              <div className="grid__item--image"></div>
              <div className="grid__item--overlay">
                <p>description</p>
              </div>
            </div>
          </a>
        </li>
        <li className="grid__item">
          <a href="">
            <div className="grid__item--inner">
              <div className="grid__item--image"></div>
              <div className="grid__item--overlay">
                <p>description</p>
              </div>
            </div>
          </a>
        </li>
        <li className="grid__item">
          <a href="">
            <div className="grid__item--inner">
              <div className="grid__item--image"></div>
              <div className="grid__item--overlay">
                <p>description</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolios;
