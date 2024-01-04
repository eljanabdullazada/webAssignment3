import React from 'react';
import Navbar from '../components/Navbar';
const HomePage = () => {
  const projects = [
    // Replace with your actual projects
    { name: 'Project 1', url: 'https://eljanabdullazada.github.io/AssignmentTwo/' },
    { name: 'Project 2', url: 'https://github.com/eljanabdullazada/web/settings' },
    // Add more projects as needed
  ];

  return (
    <div>
        <Navbar />
      <h1>Welcome to My Portfolio</h1>
      <p>Here you will find a list of all the projects I have worked on.</p>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
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
