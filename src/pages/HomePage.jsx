import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const projects = [
    // Replace with your actual projects
    { name: 'Project 1', url: 'https://github.com/user/project1' },
    { name: 'Project 2', url: 'https://github.com/user/project2' },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Here you will find a list of all the projects I have worked on.</p>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={{ pathname: project.url }} target="_blank">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
