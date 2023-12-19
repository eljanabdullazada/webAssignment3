import React, { useState } from 'react';

const FlashCard = () => {
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const [lastModified, setLastModified] = useState('');
  const [status, setStatus] = useState('Want to Learn'); 


  const handleModification = () => {
    const currentDate = new Date().toLocaleString();
    setLastModified(currentDate);
  };

  return (
    <div>
      <h2>Flash Card</h2>
      <div>
        <label>Front Text:</label>
        <input
          type="text"
          value={frontText}
          onChange={(e) => setFrontText(e.target.value)}
        />
      </div>
      <div>
        <label>Back Text (Answer):</label>
        <input
          type="text"
          value={backText}
          onChange={(e) => setBackText(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Learned">Learned</option>
          <option value="Want to Learn">Want to Learn</option>
          <option value="Noted">Noted</option>
        </select>
      </div>
      <button onClick={handleModification}>Update Last Modified</button>
      <p>Last Modified: {lastModified}</p>
    </div>
  );
};

export default FlashCard;
