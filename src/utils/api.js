import axios from 'axios';

// Conexión al backend local
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Cambia el puerto según sea necesario
  timeout: 1000,
});

// Conexión a la PokeAPI
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 1000, // Puedes ajustar el tiempo de espera según tus necesidades
});

export { api, pokeApi };

