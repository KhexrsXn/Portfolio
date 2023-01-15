import React from 'react'
import "../Style/Hero.css"
import Me from "../Images/Me.jpg"

const Hero = () => {
  return (
    <div className='i'>
    <div className='i-left'>
    <div className='i-left-wrapper'>
        <h2 className='i-intro'>Hello, My Name is</h2>
        <h1 className='i-name'>Jerson Bolambot</h1>
        <div className='i-title'>
          <div className='i-title-wrapper'>
            <div className='i-title-item'>Web Developer</div>
            <div className='i-title-item'>UX/UI Designer</div>
            <div className='i-title-item'>Marketing</div>
          </div>
        </div>
        <div className="i-desc">
              <p>I <b>design and develop</b> services for customers 
              of all sizes,
              specializing in creating stylish, modern 
              websites, web services and
              online stores.</p>
        </div>
      <div className='DLBtn'>
        <a href={Me} download className='btn'>Download CV</a>
      </div>
    </div>
    </div>
    <div className='i-right'>
      <div className="i-bg">
      <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  </div>
  )
}

export default Hero