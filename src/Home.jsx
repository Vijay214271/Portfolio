import React from "react";
import { Link, Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homee.css";

const Home = () => (
  <Element name="home" className="section home d-flex align-items-center">
    <div className="container-fluid">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 text-section text-white text-center text-md-start px-5">
          <h1 className="display-4">Hi, I'm Vijaya Kumar Patnala 👋</h1>
          <h2 className="lead">MERN Stack & Spring Boot Developer</h2>
          <p className="mb-4">
            I specialize in building scalable web applications using{" "}
            <strong>React.js, Node.js, MongoDB, and Spring Boot</strong>.
          </p>
          <div className="home-btns">
            <Link to="projects" className="btn btn-primary btn-lg m-2">
              See My Work
            </Link>
            <Link to="about" className="btn btn-outline-light btn-lg m-2">
              Learn More About Me
            </Link>
          </div>
          <div className="scroll-down mt-4">
            <Link to="contact" smooth={true} duration={800} className="scroll-button">
              Contact me
              <span className="arrow">⬇</span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 image-section d-flex justify-content-center">
          <img
            src={`${import.meta.env.BASE_URL}/images/Vija.png`}
            alt="Patnala Vijaya Kumar"
            className="img-fluid profile-hero-img"/>
        </div>
      </div>
    </div>
  </Element>
);

export default Home;
