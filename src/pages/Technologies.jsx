import React from "react";
import { Element } from "react-scroll";
import "./Technologies.css";

const Technologies = () => (
  <Element name="technologies" className="section technologies">
    <h2>Technologies & Tools</h2>
    <p>Here are the languages, frameworks, and tools I use:</p>
    
    <div className="tech-stack">
      <div className="tech-category">
        <h3>Frontend</h3>
        <ul>
          <li>React.js, TypeScript, JavaScript (ES6+)</li>
          <li>HTML5, CSS3, SASS, Bootstrap</li>
          <li>Redux, Context API</li>
          <li>Vite, Webpack, NPM</li>
        </ul>
      </div>
      
      <div className="tech-category">
        <h3>Backend & APIs</h3>
        <ul>
          <li>Java, Spring Boot, Spring MVC</li>
          <li>Spring Security (JWT Authentication)</li>
          <li>Microservices: Eureka, Config Server, API Gateway</li>
          <li>Redis, Kafka Messaging</li>
          <li>MySQL, MongoDB</li>
        </ul>
      </div>

      <div className="tech-category">
        <h3>Testing & DevOps</h3>
        <ul>
          <li>Jest, React Testing Library</li>
          <li>Unit & Integration Testing</li>
          <li>Docker, GitHub Actions</li>
          <li>Git, GitHub</li>
          <li>Postman, Swagger</li>
        </ul>
      </div>

      <div className="tech-category">
        <h3>Performance Optimization</h3>
        <ul>
          <li>Lazy Loading, Memoization</li>
          <li>Webpack Bundle Optimization</li>
          <li>Code Splitting & Tree Shaking</li>
        </ul>
      </div>
    </div>
  </Element>
);

export default Technologies;
