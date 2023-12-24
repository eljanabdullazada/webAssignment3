import React from 'react';
import Flashcard from './components/Flashcard'; // Import your Flashcard component

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
