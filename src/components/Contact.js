import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Keep these from 'fa'
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6"; // Import 'X' from 'fa6'
import "./Contact.css";


const Contact = () => {
  const socialLinks = [
    { icon: <FaXTwitter />, link: "https://twitter.com" }, // Updated to X logo
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
  ];

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Let's Connect</h2>
      <p className="contact-description">
        We're just a message away. Get in touch for collaborations or inquiries.
      </p>

      <div className="contact-container">
        {/* Contact Information in Row */}
        <div className="contact-info">
          <div className="info-box">
            <span className="contact-icon"><FaPhone /></span>
            <p>+91 7893747727</p>
          </div>
          <div className="info-box">
            <span className="contact-icon"><FaEnvelope /></span>
            <p>akulajayaram96@gmail.com</p>
          </div>
          <div className="info-box">
            <span className="contact-icon"><FaMapMarkerAlt /></span>
            <p>Hyderabad, India</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="follow-me-container">
          <h1>Follow Me</h1>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
