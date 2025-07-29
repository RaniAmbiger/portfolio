import React from 'react';
import thyroidImg from '../../public/thyroid.png';
import plantImg from '../../public/plant.png';


const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-heading">Projects</h2>
    <div className="projects-container">

      <div className="project-card">
        <img src={thyroidImg} alt="Thyroid Project" className="project-image" />
        <div className="project-overlay">
          <h3>Thyroid Disease Detection</h3>
          <p>
            Machine learning model to detect thyroid disease using various classification algorithms.
          </p>
          <a href="https://github.com/raniambiger" target="_blank" rel="noopener noreferrer">
            <button className="read-more">Read More</button>
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src={plantImg} alt="Plant Bubble Project" className="project-image" />
        <div className="project-overlay">
          <h3>Plant Bubble</h3>
          <p>
            ASP.Net-based web app to manage plant inventory for online plant sales.
          </p>
          <a href="https://github.com/raniambiger" target="_blank" rel="noopener noreferrer">
            <button className="read-more">Read More</button>
          </a>
        </div>
      </div>

    </div>
  </section>
);

export default Projects;
