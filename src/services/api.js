import axios from 'axios';

// ! You need an API KEY
export const API_TOKEN = "5680147cecbb840007ab48535ca4d12d";

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr-FR',
});

export const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});



