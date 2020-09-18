import axios from 'axios';

// ! You need an API KEY
export const API_TOKEN = "";

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr-FR',
});

export const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
