import React from 'react'
import { ceo, coFounders, mentors, interns } from './TeamData'
import './Team.css'

const Team = () => {
  return (
    <div className='team'>

      <h1>Our Team</h1>

      {/* CEO */}
      <div className="section">
        <h2>Founder & CEO</h2>

        <div className='team-members'>
          <div className='member'>
            <img src={ceo.img} alt={ceo.name} />
            <h4>{ceo.name}</h4>
            <p>{ceo.role}</p>
          </div>
        </div>
      </div>

      {/* Co-Founders */}
      <div className="section">
        <h2>Co-Founders</h2>

        <div className='team-members'>
          {coFounders.map((member, index) => (
            <div className='member' key={index}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mentors */}
      <div className="section">
        <h2>Mentors</h2>

        <div className='team-members'>
          {mentors.map((mentor, index) => (
            <div className='member' key={index}>
              <img src={mentor.img} alt={mentor.name} />
              <h4>{mentor.name}</h4>
              <p>{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interns */}
      <div className="section">
        <h2>Our Growing Team</h2>

        <div className='intern-members'>
          {interns.map((intern, index) => (
            <div className='intern' key={index}>
              <img src={intern.img} alt={intern.name} />
              <h4>{intern.name}</h4>
              <p>{intern.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Team