import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlashCardsPage from './pages/FlashCardsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/flash-cards" component={FlashCardsPage} />
        <Route path="/contact" component={ContactPage} />
        {/* Add additional Routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
