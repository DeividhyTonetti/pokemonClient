import React, { useState, useEffect } from 'react'

// API
import {
    createPokemon,
    createTeam,
    getListTeams,
    removePokemon,
    removeTeam,
} from '../../API/fetchLocalAPI'

import {
    fetchPokemonList,
    fetchPokemonListById,
    fetchPokemonColor
} from '../../API/fetchPokemonAPI'

// Models
import { PokemonData } from '../../models/PokemonData'
import { PokemonList } from '../../models/PokemonList'
import { TeamListProps } from '../../models/TeamList'

// Components
import { PokemonTeams } from './PokemonTeams'

type PokemonTeamsProps = {

}


// Prototypes
type PokemonInitialListProps = {
    name: string
    url: string
}

export const PokemonTeamsContainer = (props: PokemonTeamsProps) => {
    const [teamDialogOpened, setTeamDialogOpened] = useState<boolean>(false)
    const [pokemonDialogOpened, setPokemonDialogOpened] = useState<boolean>(false)

    const [isFetching, setIsFetching] = useState<boolean>(false)

    const [pokemonList, setPokemonList] = useState<PokemonList[] | null>(null)
    const [teamList, setTeamList] = useState<PokemonList[] | null>(null)

    const [pokemonName, setPokemonName] = useState<string | null>('')

    const loadingNotification = async (fn: Function): Promise<void> => {
        setIsFetching(true)
        await fn()
        setIsFetching(false)
    }

    // Close Dialogs 
    const handleCloseTeamDialog = (): void => setTeamDialogOpened(false)
    const handleClosePokemonDialog = (): void => setPokemonDialogOpened(false)

    // Handle Dialogs Changed
    const handleChangeTeamDialog = (): void => setTeamDialogOpened(!teamDialogOpened)
    const handleChangePokemonDialog = (pokemonTeamName: string | null): void => {
        !pokemonDialogOpened ?
            setPokemonName(pokemonTeamName) :
            setPokemonName(null)

        setPokemonDialogOpened(!pokemonDialogOpened)
    }

    // Handle Add Pokémon
    const handleAddPokemon = async (pokemonId: number | null): Promise<void> => {
        try {
            (await createPokemon(pokemonId, pokemonName)).data

            handleInitialLoading()
            handleClosePokemonDialog()
        } catch (error) {

        }
    }

    // Handle Add Team
    const handleAddTeam = async (teamName: string | null): Promise<void> => {
        try {
            (await createTeam(teamName)).data

            handleInitialLoading()
            handleCloseTeamDialog()
        } catch (error) {

        }
    }

    // Handle Remove Pokemon
    const handleRemovePokemon = async (teamId: string): Promise<void> => {
        try {
            (await removePokemon(teamId)).data

            handleInitialLoading()
            handleCloseTeamDialog()
        } catch (error) {

        }
    }

    // Handle Remove Team
    const handleRemoveTeam = async (teamId: string): Promise<void> => {
        try {
            (await removeTeam(teamId)).data

            handleInitialLoading()
            handleCloseTeamDialog()
        } catch (error) {

        }
    }

    const getAllteams = async (): Promise<TeamListProps[]> => {
        const allTeams: TeamListProps[] = (await getListTeams()).data

        return allTeams
    }

    const getPokemonImageUrl = (currentIdPokemon: number): string => {
        const baseUrlPokemonImage: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'

        return `${baseUrlPokemonImage}${currentIdPokemon}.png`
    }

    const getPokemonNameById = async (pokemonId: number): Promise<string> => {
        const pokemonList = (await fetchPokemonListById(pokemonId)).data

        return pokemonList?.name
    }

    const pokemonFirstLetterUpperCase = (pokemonName: string): string => {
        const firstLetterUpperCase = pokemonName?.replace(/^./, pokemonName[0].toUpperCase());

        return firstLetterUpperCase;
    }

    const findPokemonInformationsByTeamList = async (initialListPokemons: TeamListProps[] | []): Promise<PokemonList[]> => {
        const allPokemonInformation = await Promise.all(initialListPokemons?.map(async (team: TeamListProps) => {

            const newPokemonList = {
                id: team.id,
                pokemonId: team.pokemon_id,
                createdAt: team.created_at,
                teamName: team.name,
                pokemonName: pokemonFirstLetterUpperCase(await getPokemonNameById(team?.pokemon_id as number)) || '',
                imageUrl: getPokemonImageUrl(team?.pokemon_id as number),
            } as any

            return newPokemonList

        }))

        return allPokemonInformation
    }

    const getPokemonId = (url: string): number => {
        const currentUrlSplited = url.split('/');
        const currentIdPokemon = currentUrlSplited.slice(-2)[0];

        return Number(currentIdPokemon)
    }

    const getPokemonColorById = async (pokemonId: number): Promise<string> => {
        const _pokemonColor = (await fetchPokemonColor(pokemonId)).data

        return _pokemonColor?.color?.name || '';
    }

    const getPokemonDetails = async (pokemonId: number): Promise<PokemonList[]> => {
        const _pokemonList = (await fetchPokemonListById(pokemonId)).data

        return _pokemonList
    }

    const findPokemonInformationsByID = async (initialListPokemons: PokemonList[]) => {
        const allPokemonInformation = await Promise.all(initialListPokemons?.map(async (pokemonTeam: any, key: number) => {
            const pokemonId = getPokemonId(pokemonTeam?.url)

            const newPokemonList = {
                id: pokemonId,
                name: pokemonFirstLetterUpperCase(pokemonTeam?.name),
                url: pokemonTeam?.url,
                color: await getPokemonColorById(pokemonId),
                imageUrl: getPokemonImageUrl(pokemonId),
                ... await getPokemonDetails(pokemonId)
            } as PokemonList

            return newPokemonList
        }))

        return allPokemonInformation as PokemonList[]
    }

    const getPokemonList = async (): Promise<PokemonData | null> => {
        const _pokemonList = (await fetchPokemonList()).data

        return _pokemonList
    }

    const handleInitialLoading = async (): Promise<void> => {
        const allTeams: TeamListProps[] = await getAllteams()
        const pokemonInformations: PokemonList[] = await findPokemonInformationsByTeamList(allTeams)

        const allListPokemons: PokemonInitialListProps[] = (await getPokemonList())?.results || []
        const listPokemonColorsAndIds: PokemonList[] = await findPokemonInformationsByID(allListPokemons)

        setPokemonList(listPokemonColorsAndIds)
        setTeamList(pokemonInformations)
    }

    useEffect(() => {
        if (!pokemonList)
            loadingNotification(handleInitialLoading)
    }, [])

    return (
        <PokemonTeams
            teamDialogOpened={teamDialogOpened}
            pokemonDialogOpened={pokemonDialogOpened}

            pokemonList={pokemonList}
            teamList={teamList}

            pokemonName={pokemonName}

            handleAddTeam={handleAddTeam}
            handleAddPokemon={handleAddPokemon}

            handleChangeTeamDialog={handleChangeTeamDialog}
            handleChangePokemonDialog={handleChangePokemonDialog}

            handleRemovePokemon={handleRemovePokemon}
            handleRemoveTeam={handleRemoveTeam}

            handleClosePokemonDialog={handleClosePokemonDialog}
            handleCloseTeamDialog={handleCloseTeamDialog}
        />
    )
}