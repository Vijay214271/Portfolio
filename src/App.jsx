import React from "react";
import { Link, Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import About from "./pages/About";
import Home from "./Home";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">My Portfolio</a>
      <div className="nav-links">
        <Link to="home" smooth={true} className="nav-link">Home</Link>
        <Link to="about" smooth={true} className="nav-link">About</Link>
        <Link to="technologies" smooth={true} className="nav-link">Technologies</Link>
        <Link to="projects" smooth={true} className="nav-link">Projects</Link>
        <Link to="contact" smooth={true} className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="sections-wrapper">
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
