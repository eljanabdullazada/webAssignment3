import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({
  id,
  english,
  german,
  status,
  lastModified,
  updateStatus,
  deleteCard,
  updateCard,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const handleStatusChange = (event) => {
    updateStatus(id, event.target.value);
  };

  const handleUpdate = (e) => {
    e.stopPropagation();
    updateCard(id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteCard(id);
  };

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card-last-modified">Last Modified: {lastModified}</div>
      <div className="card-inner">
        <div className="card-front">
          <h2>{english}</h2>
          <div className="card-status-select">
            <select value={status} onChange={handleStatusChange}>
              <option value="Learned">Learned</option>
              <option value="Want to Learn">Want to Learn</option>
              <option value="Noted">Noted</option>
            </select>
          </div>
        </div>
        <div className="card-back">
          <h2>{german}</h2>
        </div>
      </div>
      <div className="card-options">
        <button
          className="update"
          onClick={(e) => {
            e.stopPropagation();
            updateCard(id);
          }}
        >
          Update
        </button>
        <button
          className="delete"
          onClick={(e) => {
            e.stopPropagation();
            deleteCard(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
