import React from 'react';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/contact">
        <button>Contact Me</button>
      </Link>
      <Link to="/flashcards">
        <button>Flashcards</button>
      </Link>
    </div>
  );
};

export default HomePage;
