import React, { useState, useEffect, useRef } from 'react';
import Flashcard from './Flashcard';
import flashcardsData from '../data/flashcards.json';
import './Flashcard.css';

const FlashcardList = () => {
  const [visibleCards, setVisibleCards] = useState(14);
  const [allCards, setAllCards] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {

    setAllCards(flashcardsData.flashcards);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && visibleCards < allCards.length) {
          setVisibleCards((prevVisibleCards) =>
            Math.min(prevVisibleCards + 14, allCards.length)
          );
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const currentContainerRef = containerRef.current;

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  }, [allCards, visibleCards]);

  return (
    <div className="flashcard-list" ref={containerRef} style={{ minHeight: '100vh' }}>
      {allCards.slice(0, visibleCards).map((flashcard, index) => (
        <Flashcard
          key={index}
          english={flashcard.english}
          german={flashcard.german}
        />
      ))}
      <div style={{ height: '50px' }}></div> {}
    </div>
  );
};

export default FlashcardList;
