import React from 'react';
import myImage from '../../public/last-day.jpg';
import { FaServer, FaCode, FaRobot } from 'react-icons/fa'; // Importing icons

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={myImage} alt="Rani" className="about-image-rectangle" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Who Am I?</h2>
          <ul className="about-points">
            <li>
              <FaServer className="about-icon" />
              <strong> Backend Developer:</strong> I specialize in building robust server-side logic using Java and Python, ensuring efficient data flow and security.
            </li>
            <li>
              <FaCode className="about-icon" />
              <strong> Full Stack Developer:</strong> I craft seamless end-to-end web experiences, integrating front-end interfaces with scalable backend services.
            </li>
            <li>
              <FaRobot className="about-icon" />
              <strong> Machine Learning Enthusiast:</strong> I enjoy exploring data-driven solutions with ML models, turning raw data into meaningful predictions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
