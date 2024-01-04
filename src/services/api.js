// If you want to keep using the fetchCards function
import flashcardsData from '../data/flashcards.json'; // Adjust the path if necessary

export const fetchCards = () => {
  return flashcardsData.flashcards; // Assuming the JSON structure has a 'flashcards' key
};

export default {
  fetchCards,
  // ... any other exported methods
};
