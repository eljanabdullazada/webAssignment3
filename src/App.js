import React from 'react';
import Flashcard from './components/Flashcard'; // Import your Flashcard component
import './App.css'; // Import global styles or additional CSS if needed

function App() {
  return (
    <div className="App">
      <header>
        <h1>Flashcards App</h1>
      </header>
      <main>
        {/* Render the Flashcard component */}
        <Flashcard />
      </main>
      <footer>
        <p>Created with React</p>
      </footer>
    </div>
  );
}

export default App;
