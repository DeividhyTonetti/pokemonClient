import React, { useState } from 'react';

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
    teamDialog: boolean
    handleChangeTeamDialog: () => void
    handleAddTeam: () => void
    handleAddPokemon: () => void
    handleRemovePokemon: () => void
    handleRemoveTeam: () => void
}

export const PokemonTeams = (props: PokemonTeamsProps) => {

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
                    handleChangeTeamDialog={props.handleChangeTeamDialog}
                />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: 10, marginLeft: 2, marginRight: 1, marginBottom: 2 }}>
                <TeamList />
            </Grid>
            <Grid item>
                <TeamDialogForm
                    teamDialog={props.teamDialog}
                    handleAddTeam={props.handleAddTeam}
                    handleAddPokemon={props.handleAddPokemon}
                    handleChangeTeamDialog={props.handleChangeTeamDialog}
                    handleRemovePokemon={props.handleRemovePokemon}
                    handleRemoveTeam={props.handleRemoveTeam}
                />
            </Grid>
        </Grid>
    )
}