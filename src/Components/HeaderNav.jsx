// import React from 'react'
// import { useState } from 'react'
import "../Style/HeaderStyle.css"

// const HeaderNav = () =>{

//   const [isToggled, setToggled] = useState(false);

//   return (
//     <>
//       <div className="navTitle">
//         <div className='logo'>
//           <a href="/"><h1>J<span>son</span></h1></a>
//         </div>
        // <ul>
        //   <li>
        //     <a href="#about">About</a>
        //   </li>
        //   <li>
        //     <a href="#services">Services</a>
        //   </li>
        //   <li>
        //     <a href="#Mywork">Portfolio</a>
        //   </li>
        //   <li>
        //     <a href="#contact">Contact</a>
        //   </li>
        // </ul>
//         <div className='for-mobile'>
//         {isToggled ? (
//                 <i className="fas fa-bars" onClick={() => setToggled(false)}></i>
//             ) : (
//                 <i className="fas fa-times" onClick={() => setToggled(true)}></i>
//             )}
//         </div>
//       </div>
//     </>
//   )
// }

// export default HeaderNav


import React, { useState } from 'react';

function Navbar() {
    // Declare a new state variable, which we'll call "isMenuOpen"
    // Set its initial value to false
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Declare a new state variable, which we'll call "screenWidth"
    // Set its initial value to the current screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Function to handle screen resize
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    // Add event listener to detect screen resize
    window.addEventListener("resize", handleResize);

    return (
        <>
            <div className="navTitle">
        <div className='logo'>
          <a href="/"><h1>J<span>son</span></h1></a>
         </div>
            {screenWidth < 768 ? (
                <i className="menu-button" onClick={() => setMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </i>
            ) : (
              <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#Mywork">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            )}
            {isMenuOpen && screenWidth < 768 && (
                // <ul className="dropdown-menu">
                //     <li className="menu-item">
                //         <a href="#">Home</a>
                //     </li>
                //     <li className="menu-item">
                //         <a href="#">About</a>
                //     </li>
                //     <li className="menu-item">
                //         <a href="#">Contact</a>
                //     </li>
                // </ul>

                <ul className="dropdown-menu">
          <li className="menu-item">
            <a href="#about">About</a>
          </li>
          <li className="menu-item">
            <a href="#services">Services</a>
          </li>
          <li className="menu-item">
            <a href="#Mywork">Portfolio</a>
          </li>
          <li className="menu-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
            )}
            </div>
        </>
    );
}

export default Navbar;
