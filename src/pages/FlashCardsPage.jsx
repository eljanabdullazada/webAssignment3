// FlashCardsPage.jsx
import React, { useState, useEffect } from 'react';
import FlashCard from '../components/Flashcard';
import { fetchCards } from '../services/api';
import Navbar from '../components/Navbar';
import './FlashCardsPage.css'; 

const FlashCardsPage = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const cards = fetchCards();
    setFlashcards(cards);
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Flash Cards</h1>
  
      <div className="flashcards-container">
        {flashcards.map((card) => (
          <div key={card.id} className="flashcard-item">
            <FlashCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCardsPage;
