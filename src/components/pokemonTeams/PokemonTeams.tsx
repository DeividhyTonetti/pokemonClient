import React from 'react';

// MUI V5
import {
    Grid,
} from '@mui/material';

// Models
import { PokemonList } from '../../models/PokemonList'
import { PokemonColor } from '../../models/PokemonColor';

// Components
import { TabBar } from '../tabBar/TabBar';
import { TeamList } from './teamList/TeamList';
import { TeamDialogForm } from './teamDialogForm/TeamDialogForm';

// Prototypes
type PokemonTeamsProps = {

}

export const PokemonTeams = (props: PokemonTeamsProps) => {
    // const [pokemonInformations, setPokemonInformations] = useState<PokemonListProps | null>(null)


    return (
        <Grid
            container
            spacing={1}
        >
            <Grid item xs={12}>
                <TabBar
                    routeName={'Home'}
                    routeLink={'/'}
                    searchEnable={false} 
                    buttonTeamIsEnabled={true}
                />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: 10, marginLeft: 2, marginRight: 1, marginBottom: 2 }}>
                <TeamList />
            </Grid>
            <Grid item>
                <TeamDialogForm />
            </Grid>
        </Grid>
    )
}