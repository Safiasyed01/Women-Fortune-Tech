

import React from 'react';
import './Contacts.css';
import image from '../../assets/img.png.png';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaUser, FaBook } from 'react-icons/fa';

const Contacts = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='contact'>

      {/* LEFT INFO PANEL */}
      <div className='contact-left'>

        <h1>
          Let’s <span>Connect</span>
        </h1>

        <p>
          Reach out to Women Fortune Tech and start your learning journey with us.
        </p>

        <img src={image} alt="Contact" />

        <div className='contact-info'>
          <div>
            <MdEmail  style={{ color: "#496f98" }}/>
            <span>womenfortune3@gmail.com</span>
          </div>

          <div>
            <MdPhone style={{ color: "#496f98" }} />
            <span>+92 315 9805714</span>
          </div>

          <div>
            <MdLocationOn  style={{ color: "#496f98" }}/>
            <span>Peshawar, Pakistan</span>
          </div>
        </div>

      </div>

      {/* RIGHT FORM CARD */}
      <div className='contact-right'>

        <form onSubmit={handleSubmit}>

          <h2>Send Message</h2>

          <div className="input-box">
            <FaUser style={{ color: "#496f98" }} />
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-box">
            <MdEmail style={{ color: "#496f98" }} />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-box">
            <FaBook style={{ color: "#496f98" }} />
            <input type="text" placeholder="Interested Course" />
          </div>

          <textarea placeholder="Write your message..." rows="6" />

          <button type="submit" className='btn'>
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contacts;