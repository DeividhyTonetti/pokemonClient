import React, { useState, useEffect } from 'react'
import { createPokemon, createTeam, getListTeams, removePokemon, removeTeam } from '../../API/fetchLocalAPI'

import {
    fetchPokemonList,
    fetchPokemonListById,
    fetchPokemonColor
} from '../../API/fetchPokemonAPI'
import { PokemonList } from '../../models/PokemonList'

import { TeamListProps } from '../../models/TeamList'

// Components
import { PokemonTeams } from './PokemonTeams'

type PokemonTeamsProps = {

}

type PokemonListProps = {
    id?: number
    name?: string
    color?: string
    url?: string
    imageUrl?: string
    types?: any
}

export const PokemonTeamsContainer = (props: PokemonTeamsProps) => {
    const [teamDialogOpened, setTeamDialogOpened] = useState<boolean>(false)
    const [pokemonDialogOpened, setPokemonDialogOpened] = useState<boolean>(false)

    const [isFetching, setIsFetching] = useState<any>(null)

    const [pokemonList, setPokemonList] = useState<PokemonListProps[] | null>(null)
    const [teamList, setTeamList] = useState<TeamListProps[] | null>(null)

    const [pokemonName, setPokemonName] = useState<string | null >('')

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
        !pokemonDialogOpened?
            setPokemonName(pokemonTeamName) :
            setPokemonName(null)

        setPokemonDialogOpened(!pokemonDialogOpened)
    }

    // Handle Add
    const handleAddPokemon = async (pokemonId: number | null): Promise<void> => {
        try { 
            (await createPokemon(pokemonId, pokemonName)).data
            
            handleInitialLoading()
            handleClosePokemonDialog()
        } catch (error) {
            
        }
    }

    const handleAddTeam = async (teamName: string | null): Promise<void> => {
        try {
            (await createTeam(teamName)).data
            
            handleInitialLoading()
            handleCloseTeamDialog()
        } catch (error) {
            
        }
    }

    // Handle Remove
    const handleRemovePokemon = async (teamId: string): Promise<void> => {
        try {
            (await removePokemon(teamId)).data
            
            handleInitialLoading()
            handleCloseTeamDialog()
        } catch (error) {
            
        }
    }
   
    const handleRemoveTeam = async (teamId: string): Promise<void> => {
        try {
            (await removeTeam(teamId)).data
            
            handleInitialLoading()
            handleCloseTeamDialog()
        } catch (error) {
            
        }
    }

    const getAllteams = async(): Promise<TeamListProps> => {
        const allTeams = (await getListTeams()).data

        return allTeams
    }

    const getPokemonImageUrl = (currentIdPokemon: number): string => {
        const baseUrlPokemonImage: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'

        return `${baseUrlPokemonImage}${currentIdPokemon}.png`
    }

    const getPokemonNameById = async (pokemonId: number) => {
        const pokemonList = (await fetchPokemonListById(pokemonId)).data

        return pokemonList?.name
    }
    
    const pokemonFirstLetterUpperCase = (pokemonName: string) => {
        const firstLetterUpperCase = pokemonName?.replace(/^./, pokemonName[0].toUpperCase());

        return firstLetterUpperCase;
    }

    const findPokemonInformationsByID = async (teste: any) => {
        const allPokemonInformation = await Promise.all(teste.map(async (item: any, key: number) => {
            const newPokemonList = {
                id: item.id,
                pokemonId: item.pokemon_id,
                createdAt: item.created_at,
                teamName: item.name,
                pokemonName: pokemonFirstLetterUpperCase(await getPokemonNameById(item.pokemon_id)) || '',
                imageUrl: getPokemonImageUrl(item.pokemon_id),
            } as any

            return newPokemonList
        }))

        return allPokemonInformation as any
    }

    const getPokemonId = (url: string): number => {
        const currentUrlSplited = url.split('/');
        const currentIdPokemon = currentUrlSplited.slice(-2)[0];

        return Number(currentIdPokemon)
    }

    const getPokemonColorById = async (pokemonId: number) => {
        const _pokemonColor = (await fetchPokemonColor(pokemonId)).data

        return _pokemonColor?.color?.name;
    }

    const getPokemonDetails = async (pokemonId: number) => {
        const _pokemonList = (await fetchPokemonListById(pokemonId)).data

        return _pokemonList
    }

    const findPokemonInformationsByID2 = async (teste: any) => {
        const allPokemonInformation = await Promise.all(teste.map(async (item: any, key: number) => {
            const pokemonId = getPokemonId(item?.url)

            const newPokemonList = {
                id: pokemonId,
                name: pokemonFirstLetterUpperCase(item?.name),
                url: item?.url,
                color: await getPokemonColorById(pokemonId),
                imageUrl: getPokemonImageUrl(pokemonId),
                ... await getPokemonDetails(pokemonId)
            } as PokemonListProps

            return newPokemonList
        }))

        return allPokemonInformation as PokemonListProps[]
    }

    const getPokemonList = async (): Promise<PokemonList | null> => {
        const _pokemonList = (await fetchPokemonList()).data
    
        return _pokemonList
    }

    const handleInitialLoading = async () => {
        const allTeams = await getAllteams() as TeamListProps[]
        const pokemonInformations = await findPokemonInformationsByID(allTeams)

        const allListPokemons = (await getPokemonList())?.results
        const listPokemonColorsAndIds = await findPokemonInformationsByID2(allListPokemons)

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