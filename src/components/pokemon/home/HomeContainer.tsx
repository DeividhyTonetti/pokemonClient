import React, { useState, useEffect, useMemo } from 'react'


// Pokemon API oficial
// import { useFetch } from '../../../API/axiosPokemonAPI' // Via AXIOs

import { 
    fetchPokemonList, 
    fetchPokemonColor 
} from '../../../API/fetchPokemonAPI'

// Components
import { Home } from './HomeComponent'

// Models
import { PokemonList } from '../../../models/PokemonList'
import { PokemonColor } from '../../../models/PokemonColor'


type PokemonListProps = {
    id?: number
    name?: string
    color?: string
    url?: string
    imageUrl?: string
} 

type HomeContainerProps = {

}

export const HomeContainer = (props: HomeContainerProps) => {
    const [pokemonList, setPokemonList] = useState<PokemonListProps[] | null>(null)
    const [isFetching, setIsFetching] = useState<any>(null)

    const loadingNotification = async (fn: Function): Promise<void> => {
        setIsFetching(true)
        await fn()
        setIsFetching(false)
    }

    const getPokemonList = async(): Promise<PokemonList |null> => {
        const _pokemonList = (await fetchPokemonList()).data
        // setPokemonList(_pokemonList);

        return _pokemonList
    }
    
    const getPokemonDetails = () => {

    }

    const getPokemonColorById = async(pokemonId: number) => {
        const _pokemonColor = (await fetchPokemonColor(pokemonId)).data
        
       return _pokemonColor?.color?.name;
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

    // tenho que muydar essa função depois
    const findPokemonColorByID =  async (teste: any) => {
        const teste2 =  await Promise.all(teste.map( async( item: any, key: number) => {

            const pokemonId = getPokemonId(item?.url)

            const newPokemonList = {
                id: pokemonId,
                name: item?.name,
                color:  await getPokemonColorById(pokemonId),
                url: item?.url,
                imageUrl: getPokemonImageUrl(pokemonId)
            } as PokemonListProps

            return newPokemonList
        }))

        return  teste2 as PokemonListProps[]
    }

    const handleInitialLoading = async () => {
        const allListPokemons = (await getPokemonList())?.results
        const listPokemonColorsAndIds  = await findPokemonColorByID(allListPokemons)


        setPokemonList(listPokemonColorsAndIds)

    }

    useEffect(() => {
        if(!pokemonList)
            loadingNotification(handleInitialLoading)
    }, []);
    

    return (
       
        <Home
            pokemonList={pokemonList}
            // pokemonColor={pokemonColor}
            // handlePokemonColor={getPokemonColor}
            // pokemonDetails={}
            pokemonListIsFeching={isFetching}
        />
    )
}