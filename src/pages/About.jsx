import React from "react";
import { Element } from "react-scroll";
import "./About.css";

const About = () => (
  <Element name="about" className="section about">
    <h2>About Me</h2>
    <p>
      Hello! I'm <strong>Vijaya Kumar Pantnala</strong>, a passionate full-stack developer with a strong foundation in both <strong>MERN</strong> and <strong>Java Spring Boot</strong> ecosystems. I hold a degree in <em>B.Sc. Computer Science with Cognitive Systems</em> from P.B. Siddhartha College, where I graduated in 2024 with 72%.
    </p>
    <p>
      I’ve worked as a <strong>Frontend Developer at 2LYP Computations</strong>, where I built scalable React.js applications and integrated REST APIs to deliver real-world business solutions. I enjoy solving problems and continuously improving my skills in building secure, performant, and maintainable web applications.
    </p>
    <p>
      My expertise spans from backend development with Spring Boot and Redis to frontend frameworks like React.js. I also have experience with Docker, CI/CD pipelines, and Kafka — making me confident across the full development lifecycle.
    </p>

    <div className="about-tech">
      <h3>Technologies I Work With:</h3>
      <ul>
        <li>React.js, Node.js, Express.js</li>
        <li>Spring Boot, Java, MySQL</li>
        <li>MongoDB, Redis</li>
        <li>Kafka, Docker</li>
      </ul>
    </div>
  </Element>
);

export default About;
