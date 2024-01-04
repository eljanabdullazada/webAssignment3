import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchCards = async () => {
  try {
    const response = await api.get('/cards');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Add more API functions as needed (create, update, delete)

export default api;
