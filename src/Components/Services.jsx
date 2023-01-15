import React from 'react'
import "../Style/Services.css"

const Services = () => {
  return (
    <div className='services' id='services'>
        <div className='servicesContainer'>
            <h1>My Services</h1>
            <div className='servicesList'>
                <div>
                    <i class="fa-solid fa-code"></i>
                    <h2>Web Development</h2>
                    <p>As a web developer, I have ample years of experience in the core areas of the web to build the website that you need.</p>
                    <a href="">Learn More</a>
                </div>
                <div>
                    <i class="fa-solid fa-crop-simple"></i>
                    <h2>UX/UI Design</h2>
                    <p>In terms of design, I have so many ideas that will fit your needs for your website to have a better user interface.</p>
                    <a href="">Learn More</a>
                </div>
                <div>
                    <i class="fa-solid fa-chart-simple"></i>
                    <h2>Marketing</h2>
                    <p>With researched digital marketing, I will ensure that new customer and clients are able to find your business.</p>
                    <a href="">Learn More</a> 
                </div>

            </div>

        </div>
 
    </div>
  )
}

export default Services