import React, { useState, useEffect } from 'react'


import {
    fetchPokemonList,
    fetchPokemonListById,
    fetchPokemonColor
} from '../../API/fetchPokemonAPI'

// Components
import { PokemonTeams } from './PokemonTeams'

type PokemonTeamsProps = {

}

export const PokemonTeamsContainer = (props: PokemonTeamsProps) => {
    const [teamDialog, setTeamDialog] = useState<boolean>(false)

    const handleChangeTeamDialog = () => setTeamDialog(!teamDialog)
    
    const handleAddPokemon = () => {

    }

    const handleAddTeam = () => {

    }

    const handleRemovePokemon = () => {

    }

    const handleRemoveTeam= () => {

    }

    return (

        <PokemonTeams
            teamDialog={teamDialog}
            handleAddTeam={handleAddTeam}
            handleAddPokemon={handleAddPokemon}
            handleChangeTeamDialog={handleChangeTeamDialog}
            handleRemovePokemon={handleRemovePokemon}
            handleRemoveTeam={handleRemoveTeam}
        />
    )
}