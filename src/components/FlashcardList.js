import React from 'react';
import Flashcard from './Flashcard'; 
import flashcardsData from '../data/flashcards.json'; 
import './Flashcard.css'; 

const FlashcardList = () => {
  return (
    <div className="flashcard-list">
      {flashcardsData.flashcards.map((flashcard, index) => (
        <Flashcard
          key={index} 
          english={flashcard.english} 
          german={flashcard.german} 
        />
      ))}
    </div>
  );
};

export default FlashcardList;
