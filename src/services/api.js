import axios from 'axios';

// ! You need an API KEY
const API_TOKEN = "";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr-FR',
});

export default api;
