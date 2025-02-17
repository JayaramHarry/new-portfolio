import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Jobby App",
    description: "A job search platform with authentication and job bookmarking.",
    image: `${process.env.PUBLIC_URL}/jobby-app-pic.png`,
    link: "https://jayaramjobby.ccbp.tech/",
  },
  {
    title: "Movies App",
    description: "A Netflix/Amazon Prime clone with API-based movie browsing.",
    image: `${process.env.PUBLIC_URL}/movies-app-pic.png`,
    link: "https://jayarammovieapp.ccbp.tech/login",
  },
  {
    title: "IPL Dashboard",
    description: "A dynamic IPL stats dashboard with team and match details.",
    image: `${process.env.PUBLIC_URL}/IPL-dashboard-pic.png`,
    link: "https://jayaramakula.ccbp.tech",
  },
  {
    title: "E-Commars",
    description: "Developed a feature-rich e-commerce platform with secure authentication, seamless product browsing, and a smooth checkout experience.",
    image: `${process.env.PUBLIC_URL}/e-commarce.png`,
    link: "https://shop-ping-website.netlify.app/",
  },
  {
    title: "courses",
    description: "Built an interactive education platform with course listings, user authentication, and progress tracking for seamless learning.",
    image: `${process.env.PUBLIC_URL}/education-app-pic.png`,
    link: "https://medi-assist.netlify.app/",
  },
  {
    title: "hotel & shows",
    description: "Developed a ticket booking platform for popular hotel shows, enabling seamless reservations and secure payments.",
    image: `${process.env.PUBLIC_URL}/showbookings-app.png`,
    link: "https://gyan-grove.netlify.app/",
  },
  {
    title: "Weather notification",
    description: "Created a dynamic weather app that provides real-time forecasts, location-based updates, and an intuitive user interface.",
    image: `${process.env.PUBLIC_URL}/weather-app-pic.png`,
    link: "https://kraftshalaweatherinfo.netlify.app/",
  },
  {
    title: "Post Managements",
    description: "Developed a post management system with CRUD functionality, user authentication, and seamless content organization.",
    image: `${process.env.PUBLIC_URL}/post-management.png`,
    link: "https://postmanagement.netlify.app/",
  },
  {
    title: "Todo",
    description: "Built a user-friendly To-Do app with task management, real-time updates, and local storage support.",
    image: `${process.env.PUBLIC_URL}/todo-app-pic.png`,
    link: "https://shanturetodo.netlify.app/",
  },
];


const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">|| My Projects</h2>
      <p className="projects-description">Some of the projects I have worked on</p>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
