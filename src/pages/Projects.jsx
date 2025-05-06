import { Element } from 'react-scroll';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Projects.css';

const projectData = [
  {
    name: 'Smart Expense Tracker',
    github: 'https://github.com/Vijay214271/smart-expense-tracker',
    images: [
      `${import.meta.env.BASE_URL}/images/expense-tracker-dashboard.png`,
      `${import.meta.env.BASE_URL}/images/expense-tracker-report.png`,
      `${import.meta.env.BASE_URL}/images/expense-tracker-form.png`,
    ],
  },
  {
    name: 'URL Shortener with Analytics',
    github: 'https://github.com/Vijay214271/url-shortener-analytics',
    images: [
      `${import.meta.env.BASE_URL}/images/url-shortener-landing.png`,
      `${import.meta.env.BASE_URL}/images/url-shortener-dashboard.PNG`,
      `${import.meta.env.BASE_URL}/images/url-shortener-stats.png`,
      `${import.meta.env.BASE_URL}/images/url-shortener-create.png`,
    ],
  },
  {
    name: 'Headline CMS Project',
    github: 'https://github.com/Vijay214271/react-frontend',
    images: [
      `${import.meta.env.BASE_URL}/images/headline-cms-dashboard.png`,
      `${import.meta.env.BASE_URL}/images/headline-cms-form.png`,
    ],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('fullstack');

  return (
    <Element name="projects" className="section projects">
      <h2 className="section-title">My Projects</h2>

      <div className="tab-buttons">
        <button onClick={() => setActiveTab('fullstack')} className={activeTab === 'fullstack' ? 'active' : ''}>
          Frontend + Backend
        </button>
        <button onClick={() => setActiveTab('backend')} className={activeTab === 'backend' ? 'active' : ''}>
          Backend Only
        </button>
      </div>

      {activeTab === 'fullstack' && (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          className="projects-slider"
        >
          {projectData.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="project-card">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={10}
                  slidesPerView={1}
                  className="inner-slider"
                >
                  {project.images.map((imgSrc, i) => (
                    <SwiperSlide key={i}>
                      <img src={imgSrc} alt={`${project.name} Screenshot ${i + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <p className="project-name-link"  onClick={() => window.open(project.github, '_blank')}>{project.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {activeTab === 'backend' && (
        <div className="backend-projects">
          <div className="backend-card">
            <h3>Microservices Food Delivery System</h3>
            <p>Backend-only project built with Spring Boot, Eureka, API Gateway, Kafka, and MySQL.</p>
            <a href="https://github.com/Vijay214271/online-food-service" target="_blank" rel="noopener noreferrer">
              View Code on GitHub
            </a>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Projects;
