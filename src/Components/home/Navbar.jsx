
// import React from 'react'
// import logo from '../../assets/WFT-logo_page-0001.png';
// import { Link } from "react-router-dom";
// import './Navbar.css';
// import { useState } from 'react';

// function Navbar() {
//     const [active, setActive] = useState('Home');
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [Aboutopen, setAboutOpen] = useState(false);
//     const handleNav = (name) => {
//         setActive(name);
//         setAboutOpen(false);
//         setMenuOpen(false);
//     }

//     return (
//         <nav className='navbar'>
//             <div className='logo'>
//                 <img src={logo} alt="Women Fortune Tech" />
//             </div>
//             <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
//                 ☰
//             </div>
//             <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//                 <li className={active === "Home" ? "active" : ""} onClick={() => handleNav("Home")}>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li className="about-dd"
//           onMouseEnter={() => setAboutOpen(true)}
//           onMouseLeave={() => setAboutOpen(false)} className={active === "About Us" ? "active" : ""} onClick={() => handleNav("About Us")}>
//                     <Link to="/about">

//           {aboutOpen && (
//             <div className="dropdown">

//               <a href="/about#mission">Mission</a>

//               <a href="/about#team">Team</a>

//             </div>
//           )}
//                     About Us</Link>
//                 </li>
//                 <li className={active === "Services" ? "active" : ""} onClick={() => handleNav("Services")}>
//                     <Link to="/services">Services</Link>
//                 </li>
//                 <li className={active === "Contact" ? "active" : ""} onClick={() => handleNav("Contact")}>
//                     <Link to="/contact">Contact</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default Navbar
import React, { useState } from 'react';
import logo from '../../assets/WFT-logo_page-0001.png';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {

  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleNav = (name) => {
    setActive(name);
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className='navbar'>

      <div className='logo'>
        <img src={logo} alt="Women Fortune Tech" />
      </div>

      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

        <li className={active === "Home" ? "active" : ""}>
          <Link to="/" onClick={() => handleNav("Home")}>Home</Link>
        </li>

        {/* ABOUT DROPDOWN */}
        <li
          className="about-dd"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >

          <span
            className={active === "About Us" ? "active" : ""}
            onClick={() => handleNav("About Us")}
          >
            About Us
          </span>

          {aboutOpen && (
            <div className="dropdown">

              <a href="/about#mission" onClick={() => handleNav("About Us")}>
                Mission
              </a>

              <a href="/about#team" onClick={() => handleNav("About Us")}>
                Team
              </a>

            </div>
          )}

        </li>

        <li className={active === "Services" ? "active" : ""}>
          <Link to="/services" onClick={() => handleNav("Services")}>
            Services
          </Link>
        </li>

        <li className={active === "Contact" ? "active" : ""}>
          <Link to="/contact" onClick={() => handleNav("Contact")}>
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;