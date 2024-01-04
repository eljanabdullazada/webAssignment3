import React, { useState, useEffect } from 'react';
import FlashCard from '../components/Flashcard';
import Navbar from '../components/Navbar';
import './FlashCardsPage.css';
import flashcardsData from '../data/flashcards.json';

const FlashCardsPage = () => {
  const [flashcards, setFlashcards] = useState(flashcardsData.flashcards);
  const [filteredCards, setFilteredCards] = useState(flashcardsData.flashcards);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    let filtered = flashcards.filter(card =>
      (filterStatus === 'all' || card.status === filterStatus) &&
      (card.english.toLowerCase().includes(searchTerm.toLowerCase()) || card.german.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (!sortAscending) {
      filtered = filtered.reverse(); 
    }

    setFilteredCards(filtered);
  }, [flashcards, filterStatus, searchTerm, sortAscending]);

  const updateStatus = (cardId, newStatus) => {
    const updatedFlashcards = flashcards.map(card =>
      card.id === cardId ? { ...card, status: newStatus, lastModified: new Date().toISOString() } : card
    );
    setFlashcards(updatedFlashcards);
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleSortOrder = () => {
    setSortAscending(!sortAscending);
  };

  const updateCard = (cardId) => {
    const cardToUpdate = flashcards.find(card => card.id === cardId);
    if (cardToUpdate) {
      const newEnglish = prompt('Update English word:', cardToUpdate.english);
      const newGerman = prompt('Update German word:', cardToUpdate.german);
  
      if (newEnglish != null && newGerman != null) {
        setFlashcards(currentCards => currentCards.map(card =>
          card.id === cardId ? { ...card, english: newEnglish, german: newGerman, lastModified: new Date().toISOString() } : card
        ));
      }
    }
  };

  const deleteCard = (cardId) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      setFlashcards(currentCards => currentCards.filter(card => card.id !== cardId));
    }
  };

  const addNewCard = () => {
    const newCard = {
      id: Math.max(...flashcards.map(card => card.id), 0) + 1, 
      english: '',
      german: '',
      status: 'Noted',
      lastModified: new Date().toISOString()
    };

    setFlashcards(currentCards => [...currentCards, newCard]);
  };

  return (
    <div>
      <Navbar />
      <div className="controls">
        <div className="filter-status-select">
          <select value={filterStatus} onChange={handleFilterChange}>
            <option value="all">All Statuses</option>
            <option value="Learned">Learned</option>
            <option value="Want to Learn">Want to Learn</option>
            <option value="Noted">Noted</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={toggleSortOrder}>
          Sort: {sortAscending ? 'Ascending' : 'Descending'}
        </button>
        <button onClick={addNewCard}>Create New Card</button>
      </div>
      <h1>Flash Cards</h1>
      <div className="flashcards-container">
        {filteredCards.map(card => (
          <FlashCard
            key={card.id}
            {...card}
            updateStatus={updateStatus}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
      </div>
    </div>
  );
  
};

export default FlashCardsPage;
