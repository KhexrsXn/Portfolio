import React from 'react'
import './Style/Intro.css'
import Navbar from './Components/HeaderNav'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'

const Intro = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <div className="footer">
        <p>© 2022.Jerson Bolambot</p>
      </div>
    </main>
  )
}
export default Intro
