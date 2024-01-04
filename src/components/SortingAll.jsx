import React, { useState, useEffect } from 'react';
import './SortingAll.css'; 

const SortingAll = ({ cards, setFilteredCards }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortAttribute, setSortAttribute] = useState('english');
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    function applySortingAndFiltering() {
        let filtered = [...cards];

      if (statusFilter !== 'all') {
        filtered = filtered.filter(card => card.status === statusFilter);
      }

      // Search functionality
      if (searchTerm) {
        filtered = filtered.filter(card =>
          card.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.german.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Sort functionality
      filtered.sort((a, b) => {
        const aValue = a[sortAttribute].toLowerCase();
        const bValue = b[sortAttribute].toLowerCase();
        if (aValue < bValue) {
          return isAscending ? -1 : 1;
        }
        if (aValue > bValue) {
          return isAscending ? 1 : -1;
        }
        return 0;
      });

      setFilteredCards(filtered);
    }

    applySortingAndFiltering();
  }, [searchTerm, statusFilter, sortAttribute, isAscending, cards]);

  return (
    <div className="sorting-all-container">
      <input
        type="text"
        placeholder="Search by English or German"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="all">All Statuses</option>
        <option value="Want to Learn">Want to Learn</option>
        {/* Add more options if there are other statuses */}
      </select>
      <select value={sortAttribute} onChange={(e) => setSortAttribute(e.target.value)}>
        <option value="english">English</option>
        <option value="german">German</option>
        {/* Add other sort options if needed */}
      </select>
      <button onClick={() => setIsAscending(!isAscending)}>
        Sort Direction: {isAscending ? 'Ascending' : 'Descending'}
      </button>
    </div>
  );
};

export default SortingAll;
