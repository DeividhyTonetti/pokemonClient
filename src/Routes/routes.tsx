import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// Components
import { HomeContainer } from "../components/home/HomeContainer";
import { PokemonTeams } from "../components/pokemonTeams/PokemonTeams";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeContainer />,
    },
    {
        path: "/teams",
        element: <PokemonTeams />,
    },
]);