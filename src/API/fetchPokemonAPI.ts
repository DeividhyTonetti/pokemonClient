import { PokemonColor } from "../models/PokemonColor";
import { PokemonList } from "../models/PokemonList";

export const fetchPokemonList = async () => {
  const URL = `https://pokeapi.co/api/v2/pokemon/`;

  let response;
  let data: PokemonList | null;
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
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

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
    const URL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;

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