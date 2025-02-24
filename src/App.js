import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import TrustedCompanies from "./components/TrustedCompanies";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <section id="home"><Home /></section>
        <section id="services"><Services /></section>
        <section id="skills"><Skills /></section>
        <section id="stats"><Stats /></section>
        <section id="projects"><Projects /></section>
        {/* <section id="testimonials"><Testimonials /></section> */}
        {/* <section id="trusted-companies"><TrustedCompanies /></section> */}
        <section id="contact"><Contact /></section>
      </div>
      
      {/* React Router Pages */}
      <Routes>
        <Route path="/blog" element={<h1>Blog Page</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
