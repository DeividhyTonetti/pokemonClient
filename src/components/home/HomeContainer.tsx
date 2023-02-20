import React, { useState, useEffect } from 'react'

// Pokemon API oficial
// import { useFetch } from '../../../API/axiosPokemonAPI' // Via AXIOs

import {
    fetchPokemonList,
    fetchPokemonListById,
    fetchPokemonColor
} from '../../API/fetchPokemonAPI'

// Components
import { Home } from './HomeComponent'

// Models
import { PokemonData } from '../../models/PokemonData'
import { PokemonColor } from '../../models/PokemonColor'
import { PokemonList } from '../../models/PokemonList'

// Prototypes
type PokemonInitialListProps = {
    name: string
    url: string
}

type HomeContainerProps = {

}

export const HomeContainer = (props: HomeContainerProps) => {
    const [pokemonList, setPokemonList] = useState<PokemonList[] | null>(null)
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const loadingNotification = async (fn: Function): Promise<void> => {
        setIsFetching(true)
        await fn()
        setIsFetching(false)
    }

    const getPokemonList = async (): Promise<PokemonData | null> => {
        const _pokemonList: PokemonData | null = (await fetchPokemonList()).data
    
        return _pokemonList
    }

    const getPokemonDetails = async (pokemonId: number): Promise<PokemonList | null> => {
        const _pokemonList: PokemonList = (await fetchPokemonListById(pokemonId)).data

        return _pokemonList
    }

    const getPokemonColorById = async (pokemonId: number): Promise<string> => {
        const _pokemonColor: PokemonColor | null  = (await fetchPokemonColor(pokemonId)).data

        return _pokemonColor?.color?.name as string;
    }

    const getPokemonId = (url: string): number => {
        const currentUrlSplited = url.split('/');
        const currentIdPokemon = currentUrlSplited.slice(-2)[0];

        return Number(currentIdPokemon)
    }

    const getPokemonImageUrl = (currentIdPokemon: number): string => {
        const baseUrlPokemonImage: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'

        return `${baseUrlPokemonImage}${currentIdPokemon}.png`
    }

    const findPokemonInformationsByID = async (initialListPokemons: PokemonInitialListProps[]): Promise<PokemonList[]> => {

        const allPokemonInformation = await Promise.all(initialListPokemons?.map(async (pokemon: PokemonList) => {
            const pokemonId: number = getPokemonId(pokemon.url || '' )

            const newPokemonList = {
                id: pokemonId,
                name: pokemon?.name,
                url: pokemon?.url,
                color: await getPokemonColorById(pokemonId),
                imageUrl: getPokemonImageUrl(pokemonId),
                ... await getPokemonDetails(pokemonId)
            } 

            return newPokemonList
        }))

        return allPokemonInformation 
    }

    const handleInitialLoading = async (): Promise<void> => {
        const allListPokemons: PokemonInitialListProps[] = (await getPokemonList())?.results || []
        const listPokemonColorsAndIds: PokemonList[] = await findPokemonInformationsByID(allListPokemons)

        setPokemonList(listPokemonColorsAndIds)
    }

    useEffect(() => {
        if (!pokemonList)
            loadingNotification(handleInitialLoading)
    }, [])


    return (
        <Home
            pokemonList={pokemonList}
            pokemonListIsFeching={isFetching}
        />
    )
}