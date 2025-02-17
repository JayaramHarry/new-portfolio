// import React, { useState } from "react";
// import "./Testimonials.css";

// const testimonialsData = [
//   {
//     name: "John Doe",
//     position: "CEO, TechCorp",
//     image: "https://via.placeholder.com/80",
//     review: "Excellent developer! Delivered the project on time with outstanding quality.",
//   },
//   {
//     name: "Sarah Smith",
//     position: "Product Manager, WebApp Co.",
//     image: "https://via.placeholder.com/80",
//     review: "A highly skilled professional with a great eye for detail. Highly recommended!",
//   },
//   {
//     name: "Michael Brown",
//     position: "CTO, StartupX",
//     image: "https://via.placeholder.com/80",
//     review: "Fantastic work! Created a seamless user experience with clean and efficient code.",
//   },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
//     );
//   };

//   return (
//     <section className="testimonials-section">
//       {/* Part 1: First Comment */}
//       <div className="testimonial-part-1">
//         <div className="testimonial-card">
//           <img
//             src={testimonialsData[currentIndex].name[0]}
//             alt={testimonialsData[currentIndex].name}
//             className="testimonial-image"
//           />
//           <p className="testimonial-review">"{testimonialsData[currentIndex].review}"</p>
//         </div>
//       </div>

//       {/* Part 2: Heading and Subheading */}
//       <div className="testimonial-part-2">
//         <p className="testimonials-heading">|| Testimonial</p>
//         <h2 className="testimonials-subheading">Satisfied Client Says</h2>
//       </div>

//       {/* Part 3: Navigation Buttons */}
//       <div className="testimonial-part-3">
//         <button onClick={handlePrev} className="testimonial-nav-button">
//           Previous
//         </button>
//         <button onClick={handleNext} className="testimonial-nav-button">
//           Next
//         </button>
//       </div>

//       {/* Part 4: Second Comment */}
//       <div className="testimonial-part-4">
//         <div className="testimonial-card">
//           <img
//             src={testimonialsData[(currentIndex + 1) % testimonialsData.length].image}
//             alt={testimonialsData[(currentIndex + 1) % testimonialsData.length].name}
//             className="testimonial-image"
//           />
//           <p className="testimonial-review">
//             "{testimonialsData[(currentIndex + 1) % testimonialsData.length].review}"
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    review: "Excellent developer! Delivered the project on time with outstanding quality.",
  },
  {
    name: "Sarah Smith",
    position: "Product Manager, WebApp Co.",
    review: "A highly skilled professional with a great eye for detail. Highly recommended!",
  },
  {
    name: "Michael Brown",
    position: "CTO, StartupX",
    review: "Fantastic work! Created a seamless user experience with clean and efficient code.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section className="testimonials-section">
      {/* Part 1: First Comment */}
      <div className="testimonial-part-1">
        <div className="testimonial-card">
          <div className="testimonial-image">
            {testimonialsData[currentIndex].name[0].toUpperCase()}
          </div>
          <p className="testimonial-review">"{testimonialsData[currentIndex].review}"</p>
        </div>
      </div>

      {/* Part 2: Heading and Subheading */}
      <div className="testimonial-part-2">
        <p className="testimonials-heading">|| Testimonial</p>
        <h2 className="testimonials-subheading">Satisfied Client Says</h2>
      </div>

      {/* Part 3: Navigation Buttons */}
      <div className="testimonial-part-3">
        <button onClick={handlePrev} className="testimonial-nav-button">
          {`<<`}
        </button>
        <button onClick={handleNext} className="testimonial-nav-button">
          {`>>`}
        </button>
      </div>

      {/* Part 4: Second Comment */}
      <div className="testimonial-part-4">
        <div className="testimonial-card">
          <div className="testimonial-image">
            {testimonialsData[(currentIndex + 1) % testimonialsData.length].name[0].toUpperCase()}
          </div>
          <p className="testimonial-review">
            "{testimonialsData[(currentIndex + 1) % testimonialsData.length].review}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
