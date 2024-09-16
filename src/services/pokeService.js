import { pokeApi } from '../utils/api';

// Consultar un Pokémon por nombre
export const getPokemonByName = async (name) => {
  try {
    const response = await pokeApi.get(`/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error fetching Pokémon by name');
  }
};

// Consultar un Pokémon por ID
export const getPokemonById = async (id) => {
  try {
    const response = await pokeApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error fetching Pokémon by ID');
  }
};

// Consultar todos los Pokémon (con paginación opcional)
export const getAllPokemon = async (limit = 20, offset = 0) => {
  try {
    const response = await pokeApi.get(`?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error fetching all Pokémon');
  }
};

// Consultar la descripción de un Pokémon por ID o nombre
export const getPokemonDescription = async (idOrName) => {
  try {
    const response = await pokeApi.get(`/${idOrName}`);
    return response.data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error fetching Pokémon description');
  }
};
// Consultar un Pokémon por nombre o ID
export const getPokemon = async (identifier) => {
    try {
      const response = await pokeApi.get(`/${identifier}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error fetching Pokémon');
    }
  };
  
  // Consultar una lista de Pokémon con paginación
  export const getPokemonList = async (limit = 20, offset = 0) => {
    try {
      const response = await pokeApi.get(`?limit=${limit}&offset=${offset}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error fetching Pokémon list');
    }
  };
  
  // Consultar tipos de Pokémon
  export const getPokemonTypes = async () => {
    try {
      const response = await pokeApi.get('/type');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error fetching Pokémon types');
    }
  };
  
  // Consultar habilidades de Pokémon
  export const getPokemonAbilities = async () => {
    try {
      const response = await pokeApi.get('/ability');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error fetching Pokémon abilities');
    }
  };