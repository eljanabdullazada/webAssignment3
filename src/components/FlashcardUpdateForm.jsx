const FlashcardUpdateForm = ({ flashcard }) => {
    const [englishWord, setEnglishWord] = useState(flashcard.english);
    const [germanWord, setGermanWord] = useState(flashcard.german);
    const [status, setStatus] = useState(flashcard.status);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.put(`http://localhost:3000/flashcards/${flashcard.id}`, {
          english: englishWord,
          german: germanWord,
          status: status,
          lastModified: new Date().toISOString()
        });
        console.log('Flashcard updated:', response.data);

      } catch (error) {
        console.error('Failed to update flashcard:', error);

      }
    };
  

  };
  