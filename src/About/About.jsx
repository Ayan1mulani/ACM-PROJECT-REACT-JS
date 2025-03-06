import React from 'react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">ACM-W</h1>
        <p className="about-description">
          ACM-W supports, celebrates, and advocates for the full engagement of women in all aspects of the computing field. Through various events, workshops, and networking opportunities, we empower and encourage women to excel and make their mark in the tech industry.
        </p>

        <div className="social-links">
          <a href="https://www.instagram.com/acmw_mitsoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon">
            <AiFillInstagram size={40} />
          </a>
          <a href="https://chat.whatsapp.com/DStjyiU0SpX79m5DVNRsPc" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaWhatsapp size={40} />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
      </div>
  );
};

export default About;
