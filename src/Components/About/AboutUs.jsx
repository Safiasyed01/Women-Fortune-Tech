import React, { useState } from 'react'
import './AboutUs.css'
import Team from './Team'        // add this
import Mission from './Mission'  // add this
const AboutUs = () => {

  const [tab, setTab] = useState('mission')
  return (
    <section className="about">
      <h2>About Us</h2>

      <div className="about-grid">
        <div className="about-card">
          <h3>Who We Are</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="about-card">
          <h3>What We Do</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
            <div id="mission">
        <Mission />
      </div>

      <div id="team">
        <Team />
      </div>


     
    </section>
  )
}

export default AboutUs