import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-button-left">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-button-left">
            Contact
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/flash-cards" className="navbar-button-left"> 
            Flashcards
          </Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="navbar-button">Search</button>
        <button className="navbar-button">Filter by Status</button>
      </div>
    </nav>
  );
};

export default Navbar;
