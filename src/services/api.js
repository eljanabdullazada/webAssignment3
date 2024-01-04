import flashcardsData from '../data/flashcards.json'; 

export const fetchCards = () => {
  return flashcardsData.flashcards; 
};

export default {
  fetchCards,
};
