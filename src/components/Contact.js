import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const socialLinks = [
      { icon: <FaFacebookF />, link: "https://facebook.com" },
      { icon: <FaTwitter />, link: "https://twitter.com" },
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
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-box">
            <FaPhone className="contact-icon" />
            <p>+91 7893747727</p>
          </div>
          <div className="info-box">
            <FaEnvelope className="contact-icon" />
            <p>akulajayaram96@gamil.com</p>
          </div>
          <div className="info-box">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Hyderabad, India</p>
          </div>
          <div className="follow-me-conatiner">
          <h1>Follow Me</h1>
          <div className="social-icons">
            
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
