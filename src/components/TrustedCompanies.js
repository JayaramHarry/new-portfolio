import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrustedCompanies.css";

const companies = [
  { name: "Google", logo: "https://dummyimage.com/150x150/000/fff&text=Google" },
  { name: "Microsoft", logo: "https://dummyimage.com/150x150/000/fff&text=Microsoft" },
  { name: "Amazon", logo: "https://dummyimage.com/150x150/000/fff&text=Amazon" },
  { name: "Facebook", logo: "https://dummyimage.com/150x150/000/fff&text=Facebook" },
  { name: "Tesla", logo: "https://dummyimage.com/150x150/000/fff&text=Tesla" },
  { name: "Netflix", logo: "https://dummyimage.com/150x150/000/fff&text=Netflix" },
];


const TrustedCompanies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjusted speed for continuous scrolling effect
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    cssEase: "linear", // Smooth continuous scroll
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="trusted-companies-section">
      <p className="trusted-para">|| Fevourite companies</p>
      <h2 className="trusted-heading">Work With Trusted Companies</h2>
      <div className="companies-slider">
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <img src={company.logo} alt={company.name} className="company-logo" />
              <p className="company-name">{company.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedCompanies;
