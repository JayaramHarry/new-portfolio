import React from "react";
import Slider from "react-slick";
import { FaCode, FaPaintBrush, FaChartLine, FaMobileAlt, FaCloud, FaShieldAlt, FaLaptopCode,FaShoppingCart, FaDatabase, FaServer,
  FaDesktop, FaBolt, FaSearch, FaTools,
  } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css"; // Custom styles

// this is first servious section ------------->
// const servicesData = [
//   { icon: <FaCode />, title: "Web Development", items: ["Frontend", "Backend", "Full Stack"] },
//   { icon: <FaPaintBrush />, title: "UI/UX Design", items: ["Wireframing", "Prototyping", "Branding"] },
//   { icon: <FaChartLine />, title: "SEO Optimization", items: ["Keyword Research", "On-page SEO", "Link Building"] },
//   { icon: <FaMobileAlt />, title: "App Development", items: ["iOS", "Android", "Hybrid Apps"] },
//   { icon: <FaCloud />, title: "Cloud Services", items: ["AWS", "Google Cloud", "Azure"] },
//   { icon: <FaShieldAlt />, title: "Cyber Security", items: ["Pen Testing", "Data Protection", "Threat Analysis"] },
// ];

const servicesData = [
  { icon: <FaCode />, title: "Web Development", items: ["Frontend", "Backend", "Full Stack"] },
  { icon: <FaLaptopCode />, title: "Custom Web Applications", items: ["Business Solutions", "Dynamic Web Apps", "API Integrations"] },
  { icon: <FaShoppingCart />, title: "E-commerce Development", items: ["Online Stores", "Payment Integration", "Shopping Carts"] },
  { icon: <FaDatabase />, title: "Backend Development", items: ["PHP", "Database Design", "REST API Development"] },
  { icon: <FaServer />, title: "API Development & Integration", items: ["Custom APIs", "Third-party Integrations", "Secure Data Exchange"] },
  { icon: <FaDesktop />, title: "CMS Development", items: ["WordPress", "Custom Themes", "Plugin Development"] },
  { icon: <FaBolt />, title: "Performance Optimization", items: ["Speed Improvements", "Caching Strategies", "Code Optimization"] },
  { icon: <FaSearch />, title: "SEO Optimization", items: ["Technical SEO", "Site Performance", "Mobile SEO"] },
  { icon: <FaTools />, title: "Website Maintenance", items: ["Bug Fixing", "Security Updates", "Feature Enhancements"] },
  { icon: <FaShieldAlt />, title: "Web Security", items: ["SSL Implementation", "Vulnerability Fixes", "Data Protection"] },
  
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="services-section">
      <p className="services-description">|| My services</p>
      <h2 className="services-heading">Services provided for my clients</h2>
      <div className="services-slider">
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
