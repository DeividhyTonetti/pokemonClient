import { PokemonColor } from "../models/PokemonColor";
import { PokemonData } from "../models/PokemonData";


const BASE_POKEMON_URL: string =  import.meta.env.VITE_REACT_APP_POKE_API_URL

export const fetchPokemonList = async () => {
  const URL = `${BASE_POKEMON_URL}/pokemon/`;

  let response;
  let data: PokemonData | null;
  let error;

  try {
    response = await fetch(URL);
    data = await response.json();
    error = false;
  } catch {
    data = null;
    error = true;
  }

  return { response, data, error };
};

export const fetchPokemonListById = async (pokemonId: number) => {
  const URL = `${BASE_POKEMON_URL}/pokemon/${pokemonId}/`;

  let response;
  let data: any | null;
  let error;

  try {
    response = await fetch(URL);
    data = await response.json();
    error = false;
  } catch {
    data = null;
    error = true;
  }

  return { response, data, error };
};


export const fetchPokemonColor = async (pokemonId: number) => {
    const URL = `${BASE_POKEMON_URL}/pokemon-species/${pokemonId}/`;

    let response;
    let data: PokemonColor | null;
    let error;
  
    try {
      response = await fetch(URL);
      data = await response.json();
      error = false;
    } catch {
      data = null;
      error = true;
    }
  
    return { response, data, error };
  };