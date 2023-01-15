import React from 'react'
import "../Style/Contact.css"
import Me from "../Images/Me.jpg"

const Contact = () => {
  return (  
            <div className='contact'>
                <div className='contactRow' id='contact'>
                <div className='contact-left'>
                <h1 className='contact-title'>Contact Me</h1>
                    <div className='contactMargin'>
                    <p><i class='bx bxl-gmail'>     jersonbolambot@gmail.com</i></p>
                    <p><i class="fa-solid fa-phone">    09123456789</i></p>
                    <div className='social-icon'>
                        <a href=""><i class='bx bxl-facebook-circle'></i></a>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                        <a href=""><i class='bx bxl-linkedin'></i></a>
                        <a href=""><i class='bx bxl-github' ></i></a>
                    </div>
                    </div>
                </div>
                <div className='contact-right'>
                    <form>
                        <input type="text" name='Name' placeholder='Your Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="Message" rows="6" placeholder='Your Message'></textarea>
                        <button className='btn'>Submit</button>
                    </form>
                </div>
            </div>
            </div>
  )
}

export default Contact