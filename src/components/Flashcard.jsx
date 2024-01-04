import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ english, german, status, lastModified }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <h2>{english}</h2>
        </div>
        <div className="card-back">
          <h2>{german}</h2>
        </div>
        <div className="card-info">
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Last Modified:</strong> {lastModified}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
