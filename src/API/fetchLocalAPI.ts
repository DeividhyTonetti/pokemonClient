import { PokemonColor } from '../models/PokemonColor'
import { PokemonList } from '../models/PokemonList'

const BASE_URL = 'http://localhost:3000'

export const createTeam = async (values: any) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: values
        })
    }

    let response
    let data
    let error

    try {
        response = await fetch(`${BASE_URL}/createTeam/`, requestOptions)
        data = await response.json()
        error = false
    } catch {
        data = null
        error = true
    }

    return { response, data, error }
}

export const createPokemon = async (pokemonId: number | null, teamName: string | null) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            pokemonId,
            teamName,
        })
    }

    let response
    let data
    let error

    try {
        response = await fetch(`${BASE_URL}/addPokemon/`, requestOptions)
        data = await response.json()
        error = false
    } catch {
        data = null
        error = true
    }

    return { response, data, error }
}

export const getListTeams = async () => {

    let response
    let data: any | null
    let error

    try {
        response = await fetch(`${BASE_URL}/getAllTeams/`)
        data = await response.json()
        error = false
    } catch {
        data = null
        error = true
    }

    return { response, data, error }
}

export const removePokemon = async (teamId: number) => {

    let response
    let data: any | null
    let error

    try {
        response = await fetch(`${BASE_URL}/getAllTeams/`)
        data = await response.json()
        error = false
    } catch {
        data = null
        error = true
    }

    return { response, data, error }
}


export const deleteTeam = async () => {

    let response;
    let data: any | null;
    let error;

    try {
        response = await fetch(`${BASE_URL}/getAllTeams/`);
        data = await response.json();
        error = false;
    } catch {
        data = null;
        error = true;
    }

    return { response, data, error };
};
