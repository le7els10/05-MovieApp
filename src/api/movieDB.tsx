import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '3e5b839d53ae848e4fed23c307bf67aa',
    language: 'es-ES',
  },
});

export default movieDB;
