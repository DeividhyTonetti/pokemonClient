import {
    createBrowserRouter
} from 'react-router-dom'

// Components
import { HomeContainer } from '../components/home/HomeContainer'
import { PokemonTeamsContainer } from '../components/pokemonTeams/PokemonTeamsContainer'

// Create Routes
export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeContainer />,
    },
    {
        path: '/teams',
        element: <PokemonTeamsContainer />,
    },
])