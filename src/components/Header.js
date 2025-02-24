
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import smooth scroll
import { Link as RouterLink } from "react-router-dom"; // Keep for external pages
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-section">
      <div className="header-wrapper">
        <div className="header-logo">
          <h2>AJ</h2>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </div>

        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <ul className="header-nav">
            <li>
              <ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</ScrollLink>
            </li>
            <li className="has-dropdown">
              <ScrollLink to="services" smooth={true} duration={500} onClick={toggleMenu}>Services</ScrollLink>
              
              {/* blow Un order list is drop down of nav bar option use it when it need */}
              {/* <ul className="submenu">
                <li><ScrollLink to="services" smooth={true} duration={500} onClick={toggleMenu}>Services</ScrollLink></li>
                <li><RouterLink to="/service-details" onClick={toggleMenu}>Service Details</RouterLink></li>
              </ul> */}

            </li>

            {/* these are the other nav option of Blog & Pages right now I dont need them, use it when need */}

            {/* <li className="has-dropdown">
              <RouterLink to="/blog" onClick={toggleMenu}>Blog</RouterLink>
              <ul className="submenu">
                <li><RouterLink to="/blog" onClick={toggleMenu}>Blog List</RouterLink></li>
                <li><RouterLink to="/blog-details" onClick={toggleMenu}>Blog Details</RouterLink></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <RouterLink to="#" onClick={toggleMenu}>Pages</RouterLink>
              <ul className="submenu">
                <li><ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About Us</ScrollLink></li>
                <li><RouterLink to="/faq" onClick={toggleMenu}>FAQ</RouterLink></li>
                <li><RouterLink to="/404" onClick={toggleMenu}>404 Page</RouterLink></li>
              </ul>
            </li> */}

            <li>
              <ScrollLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</ScrollLink>
            </li>
          </ul>
        </nav>

        <div className="header-btn-link">
          <RouterLink to="/contact" className="btn" onClick={toggleMenu}>Hire Me</RouterLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
