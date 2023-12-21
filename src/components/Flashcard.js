import React, { useState } from 'react';
import flashcardsData from './flashcards.json';
import './Flashcard.css'; // Your CSS file for styling

const Flashcard = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const handleNextCard = () => {
    setFlipped(false);
    setCurrentCard(currentCard === flashcardsData.flashcards.length - 1 ? 0 : currentCard + 1);
  };

  const flashcard = flashcardsData.flashcards[currentCard];

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <h2>{flipped ? flashcard.german : flashcard.english}</h2>
          <button onClick={handleNextCard}>Next</button>
        </div>
        <div className="card-back">
          <h2>{flipped ? flashcard.english : flashcard.german}</h2>
          <button onClick={handleNextCard}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
