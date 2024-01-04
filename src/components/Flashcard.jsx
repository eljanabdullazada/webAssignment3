import React, { useState } from 'react';
import './Flashcard.css'; // Ensure this is correctly linked

const Flashcard = ({ id, english, german, initialStatus, lastModified }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-header">
            <span className="status">{initialStatus}</span>
          </div>
          <h2>{english}</h2>
          <div className="card-footer">
            <span className="last-modified">{lastModified}</span>
          </div>
        </div>
        <div className="card-back">
          <h2>{german}</h2>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
