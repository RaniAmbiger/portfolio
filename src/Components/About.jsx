import React from 'react';
import myImage from '../../public/last-day.jpg'; // Replace with your image path

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
              I am Rani, an MCA graduate who has been immersed in real-world software development with technologies like Java, Python, and React.
            </li>
            <li>
              My journey involves practical exposure to machine learning and full stack web/mobile applications that solve real user problems.
            </li>
            <li>
              With curiosity driving me, I continuously explore new frameworks and tools to evolve as a tech-savvy and adaptable developer.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
