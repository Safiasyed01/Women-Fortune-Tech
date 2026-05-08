import React from 'react'
import logo from '../../assets/WFT-logo_page-0001.png';
import { FaLinkedin , FaInstagram , FaFacebook , FaYoutube} from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div className='footer-left'>
                <img src= {logo} alt="WFT Logo" />
                 <p>Empowering women through technology.</p>

                 <div className='social-links'>
                    <a href="https://www.linkedin.com/company/women-fortune-tech" target="_blank" rel="noreferrer">
                    <FaLinkedin/>
                     </a>

                     <a href="https://www.instagram.com/womenfortunetech?igsh=c2UyaDhxZ21wcHYz" target="_blank" rel="noreferrer">
                        <FaInstagram />
                     </a>

                     <a href="https://www.facebook.com/profile.php?id=61555944514154&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                        <FaFacebook />
                     </a>

                     <a href="https://youtube.com/@womenfortunetech?si=MG2debnErJGp-rWK" target="_blank" rel="noreferrer">
                        <FaYoutube />
                     </a>


                 </div>
            </div>

               <div className='footer-right'>
                <div className='col'>
                        <h4>Company</h4>
                        <p>Privately Held</p>
                        <p>Founded in 2023</p>
                </div>
                        <div className='footer-col'>
                         <h4>Location</h4>
                         <p>University Road</p>
                         <p>Peshawar, Pakistan</p>
                         </div>
               </div>
                     <div className='footer-bottom'>
                    <p>©  Women Fortune Tech. All rights reserved.</p>
                     </div> 

        </footer>
    </div>
  )
}

export default Footer