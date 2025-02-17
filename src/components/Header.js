// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header-section">
//       <div className="header-wrapper">
//         <div  className="header-logo">
//           <h2>AJ</h2>
//         </div>
//         <nav>
//           <ul className="header-nav">
//             <li><Link to="/">Home</Link></li>
//             <li className="has-dropdown">
//               <Link to="/services">Service</Link>
//               <ul className="submenu">
//                 <li><Link to="/services">Services</Link></li>
//                 <li><Link to="/service-details">Service Details</Link></li>
//               </ul>
//             </li>
//             <li className="has-dropdown">
//               <Link to="/blog">Blog</Link>
//               <ul className="submenu">
//                 <li><Link to="/blog">Blog List</Link></li>
//                 <li><Link to="/blog-details">Blog Details</Link></li>
//               </ul>
//             </li>
//             <li className="has-dropdown">
//               <Link to="#">Pages</Link>
//               <ul className="submenu">
//                 <li><Link to="/about">About Us</Link></li>
//                 <li><Link to="/faq">FAQ</Link></li>
//                 <li><Link to="/404">404 Page</Link></li>
//               </ul>
//             </li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//         <div className="header-btn-link">
//           <Link to="/contact" className="btn">Hire Me</Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import smooth scroll
import { Link as RouterLink } from "react-router-dom"; // Keep for external pages
import "./Header.css";

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-wrapper">
        <div className="header-logo">
          <h2>AJ</h2>
        </div>
        <nav>
          <ul className="header-nav">
            <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
            <li className="has-dropdown">
              <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
              <ul className="submenu">
                <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
                <li><RouterLink to="/service-details">Service Details</RouterLink></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <RouterLink to="/blog">Blog</RouterLink>
              <ul className="submenu">
                <li><RouterLink to="/blog">Blog List</RouterLink></li>
                <li><RouterLink to="/blog-details">Blog Details</RouterLink></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <RouterLink to="#">Pages</RouterLink>
              <ul className="submenu">
                <li><ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink></li>
                <li><RouterLink to="/faq">FAQ</RouterLink></li>
                <li><RouterLink to="/404">404 Page</RouterLink></li>
              </ul>
            </li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
          </ul>
        </nav>
        <div className="header-btn-link">
          <RouterLink to="/contact" className="btn">Hire Me</RouterLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
