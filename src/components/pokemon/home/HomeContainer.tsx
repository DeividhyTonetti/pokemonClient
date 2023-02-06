import React, { useState, useEffect, useMemo } from 'react'


// Pokemon API oficial

import { useFetch } from '../../../API/pokemonAPI'


// Components
import Home from './Home'

type HomeContainerProps = {

}

type ListContainerProps = {
    count: number
    next: string | null
    previus: string | null
    results?: {
        name: string
        url: string
    }[]
}

export const HomeContainer = (props: HomeContainerProps) => {

    const [pokemonList, setPokemonList] = useState<ListContainerProps | null>(null)


    const getPokemonList = (): void => {
        const data = useFetch('/pokemon/')

        // console.log(_pokemonList)
        if(!data.isFetching)
            setPokemonList(pokemonList)
    }


    useEffect( () => {
        getPokemonList()
    }, [])


    console.log(pokemonList)

    return (
        <Home

        />
    )
}