const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37643260-361b699785f368081cbff175a';

export const getImages = value => {
  return fetch(`${BASE_URL}?q=${value}&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
};

