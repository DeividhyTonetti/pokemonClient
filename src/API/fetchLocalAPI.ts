// Load environment variables
const BASE_URL: string = import.meta.env.MODE === 'production' ?
    import.meta.env.VITE_REACT_APP_API_URL_PRODUCTION :
    import.meta.env.VITE_REACT_APP_API_DEVELOPMENT

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

export const removePokemon = async (teamId: string) => {

    let response
    let data: any | null
    let error

    try {
        response = await fetch(`${BASE_URL}/removePokemon/${teamId}`, {
            method: 'DELETE'
        })
        data = await response.json()
        error = false
    } catch {
        data = null
        error = true
    }

    return { response, data, error }
}

export const removeTeam = async (teamName: string) => {

    let response
    let data: any | null
    let error

    try {
        response = await fetch(`${BASE_URL}/removeTeam/${teamName}`, {
            method: 'DELETE'
        })
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
