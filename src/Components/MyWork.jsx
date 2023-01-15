import React from 'react'
import '../Style/MyWork.css'
import img1 from '../Images/Me.jpg'
import calculator from '../Images/calculator.png'
import loginsignin from '../Images/login-signin.png'
import minipro2 from '../Images/mini-pro2.png'
import RPS from '../Images/rock-paper-scissor.png'

const MyWork = () => {
  return (
    <div className="Mywork" id="Mywork">
      <div className="MyWorkContainer">
        <h1 className="MyWork-title">My Work</h1>
        <div className="workList">
          <div className="workDiv">
            <img src={calculator} />
            <div className="MyWork-layer">
              <h3>Calculator</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium, debitis.
              </p>
              <a href="https://github.com/KhexrsXn/Calculator.git">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="workDiv">
            <img src={loginsignin} />
            <div className="MyWork-layer">
              <h3>Login and Sign In</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium, debitis.
              </p>
              <a href="https://github.com/KhexrsXn/LoginSingin.git">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="workDiv">
            <img src={minipro2} />
            <div className="MyWork-layer">
              <h3>Mini Project 2</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium, debitis.
              </p>
              <a href="https://github.com/KhexrsXn/MiniProject2.git">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="workDiv">
            <img src={RPS} />
            <div className="MyWork-layer">
              <h3>Rock-Paper-and-Scissor</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium, debitis.
              </p>
              <a href="https://github.com/KhexrsXn/Rock-Paper-and-Scissor.git">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork
