import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Home.css";


const Home = () => {
  

const socialLinks = [
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jayaram-akula-3178bb241/" },
    { icon: <FaGithub />, link: "https://github.com/JayaramHarry" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/harry__jay_/#" },
    { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100008507824239" },
];

  return (
    <div className="hero-section section-dark-blue-bg">
      <div className="hero-wrapper">
        <div className="container-heading">
              <div className="hero-content">
                <h3 className="title-big">Hello! I’m</h3>
                <h2 className="title-large">
                  Jayaram <span className="shape-mark">Akula</span>
                </h2>
                <p>UI/UX Designer specializing in Shopify &amp; Webflow.</p>

                <a href="#" className="btn btn-xl btn-outline-one icon-space-left">
                  Get Resume <i className="icofont-download"></i>
                </a>

                <div className="video-link">
                  <a
                    className="wave-btn vbox-item"
                    href="https://youtu.be/MKjhBO2xQzg"
                    data-autoplay="true"
                    data-vbtype="video"
                  >
                    <div className="ripple">
                      <i className="icofont-ui-play"></i>
                    </div>
                  </a>
                  {/* <span className="video-text"> Watch Video</span> ------------> to add profile Video */}
                </div>
              </div>
        </div>

        
        <div className="hero-portrait">
          <div className="image">
            <img className="img-fluid" src="/profile-pic-1.png" alt="Portrait" />

            <div className="image-half-round-shape"></div>

            <div className="social-link">
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
      </div>
      {/* I added below code from 139 line */}
      <div className="hero-shape hero-top-shape">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hero-shape hero-bottom-shape">
          <span></span>
          <span></span>
          <span></span>
        </div>

    </div>
  );
};

export default Home;
