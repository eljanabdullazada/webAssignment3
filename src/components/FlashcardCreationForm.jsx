import React, { useState } from 'react';
import axios from 'axios';

const FlashcardCreationForm = () => {
  const [englishWord, setEnglishWord] = useState('');
  const [germanWord, setGermanWord] = useState('');
  const [status, setStatus] = useState('Want to Learn'); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/flashcards', {
        english: englishWord,
        german: germanWord,
        status: status,
        lastModified: new Date().toISOString()
      });
      console.log('Flashcard created:', response.data);

    } catch (error) {
      console.error('Failed to create flashcard:', error);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={englishWord}
        onChange={(e) => setEnglishWord(e.target.value)}
        placeholder="English word"
      />
      <input
        type="text"
        value={germanWord}
        onChange={(e) => setGermanWord(e.target.value)}
        placeholder="German translation"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Want to Learn">Want to Learn</option>
        <option value="Learned">Learned</option>
        <option value="Noted">Noted</option>
      </select>
      <button type="submit">Create Flashcard</button>
    </form>
  );
};

export default FlashcardCreationForm;
