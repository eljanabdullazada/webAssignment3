import React from 'react';
import ProjectList from './ProjectList';
import FlashCard from './FlashCard'; 

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Projects</h1>
      <ProjectList />
      <hr />
      <h2>Flashcard Example</h2>
      <FlashCard /> {}
    </div>
  );
}

export default App;
