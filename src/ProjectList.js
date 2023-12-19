import React from 'react';

const projects = [
  {
    title: 'Project 1: Flashcard App',
    description: 'A flashcard app for learning languages.',
    link: 'https://github.com/yourusername/flashcard-app'
  },
  {
    title: 'Project 2: ToDo List App',
    description: 'An app for managing daily tasks.',
    link: 'https://github.com/yourusername/todo-list'
  },
  // Add more projects as needed
];

const ProjectList = () => {
  return (
    <div>
      <h2>General Introduction</h2>
      <p>
        This is a collection of projects I've worked on. Each project is aimed at different purposes, from language learning to task management.
      </p>
      <h2>List of Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Check it out!
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
