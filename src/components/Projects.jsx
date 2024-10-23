import React from 'react';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import SparklesText from "./ui/sparkles-text";
import { RainbowButton } from "./ui/rainbow-button";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2><SparklesText text="My Project" /></h2>
      <div className="project-list">
        <div className="project-card">
          <img src={project1} alt="Project 1" className="project-image" />
          <h3>Project 1</h3>
          <p>This one is Technoshop we work at this in second year, using figma and we code it from visual code to as html and css.</p>
          <a href="https://www.figma.com/design/6ufxES81TTQzzaGs6hEjSp/Website-Wirefram?node-id=1-197&node-type=canvas&t=KSO9jGGYxXpxQN0Z-0" target="_blank" rel="noopener noreferrer"><RainbowButton>View Project</RainbowButton>;</a>
        </div>
        <div className="project-card">
          <img src={project2} alt="Project 2" className="project-image" />
          <h3>Project 2</h3>
          <p>This project is awesometodo it's kinda hard, we use a mongodb for database, and render and github for deployment.</p>
          <a href="https://awesomesisir.onrender.com" target="_blank" rel="noopener noreferrer"><RainbowButton>View Project</RainbowButton>;</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
