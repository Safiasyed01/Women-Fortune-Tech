import React from 'react'
import logo from '../../assets/WFT-logo_page-0001.png';
import './Navbar.css';
import { FaBars } from "react-icons/fa"
import { useState } from 'react';
function Navbar() {
    const [active, setActive] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Women Fortune Tech" />
            </div>
            <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li className={active === "Home" ? "active " : ""} onClick={()=>setActive("Home")}>Home</li>
                <li className={active === "About Us" ? "active": ""} onClick={()=>setActive("About Us")}>About Us</li>
                <li className={active === "Services" ? "active": ""} onClick={()=>setActive("Services")}>Services</li>
                <li className={active === "Team" ? "active": ""} onClick={()=>setActive("Team")}>Team</li>
                <li className={active === "Contact" ? "active": ""} onClick={()=>setActive("Contact")}>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar