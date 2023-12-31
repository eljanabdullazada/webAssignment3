import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FlashcardList from './components/FlashcardList';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import OtherProjectsPage from './components/OtherProjectsPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/flashcards">Flashcards</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
            <li>
              <Link to="/other-projects">Other Projects</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={HomePage} />
        <Route path="/flashcards" component={FlashcardList} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/other-projects" component={OtherProjectsPage} />
      </div>
    </Router>
  );
};

export default App;
