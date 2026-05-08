

import React from 'react'
import logo from '../../assets/WFT-logo_page-0001.png';
import { Link } from "react-router-dom";
import './Navbar.css';
import { useState } from 'react';

function Navbar() {
    const [active, setActive] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = (name) => {
        setActive(name);
        setMenuOpen(false);
    }

    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Women Fortune Tech" />
            </div>
            <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li className={active === "Home" ? "active" : ""} onClick={() => handleNav("Home")}>
                    <Link to="/">Home</Link>
                </li>
                <li className={active === "About Us" ? "active" : ""} onClick={() => handleNav("About Us")}>
                    <Link to="/about">About Us</Link>
                </li>
                <li className={active === "Services" ? "active" : ""} onClick={() => handleNav("Services")}>
                    <Link to="/services">Services</Link>
                </li>
                <li className={active === "Contact" ? "active" : ""} onClick={() => handleNav("Contact")}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar