import React, { useState, useEffect, useMemo } from 'react'


// Pokemon API oficial

import { useFetch } from '../../../API/pokemonAPI'

// Components
import { Home } from './HomeComponent'

// Models
import { PokemonList } from '../../../models/PokemonList'


type HomeContainerProps = {

}


export const HomeContainer = (props: HomeContainerProps) => {

    const { data: pokemonList, isFetching } = useFetch<PokemonList>('/pokemon/')
    
    // const getPokemonDetails
    
    return (
        <Home
            pokemonList={pokemonList}
            pokemonListIsFeching={isFetching}
        />
    )
}