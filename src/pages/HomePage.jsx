import React from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css'; // This is the correct import statement

const HomePage = () => {
  const projects = [
    { name: 'Project 1', url: 'https://eljanabdullazada.github.io/AssignmentTwo/' },
    { name: 'Project 2', url: 'https://github.com/eljanabdullazada/web/settings' },
  ];

  return (
    <div className="home-container"> 
      <Navbar />
      <h1 className="home-title">Welcome to My Portfolio</h1> 
      <p className="home-description"> 
        Here you will find a list of all the projects I have worked on.
      </p>
      <ul className="home-projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
