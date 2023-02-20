import React, { useState } from 'react';

// MUI V5
import {
    Grid,
} from '@mui/material';

// Models
import { PokemonList } from '../../models/PokemonData'
import { PokemonColor } from '../../models/PokemonColor';
import { TeamListProps } from '../../models/TeamList';

// Components
import { TabBar } from '../tabBar/TabBar';
import { TeamList } from './teamList/TeamList';
import { TeamDialogForm } from './teamDialogForm/TeamDialogForm';
import { PokemonDialogForm } from './pokemonDialogForm/PokemonDialogForm';

//  Styles 
const gridTeamItemStyle = {
    marginTop: 10, marginLeft: 2, marginRight: 1, marginBottom: 2
}

// Prototypes
type PokemonListProps = {
    id?: number
    name?: string
    color?: string
    url?: string
    imageUrl?: string
    stats?: any
}

type PokemonTeamsProps = {
    teamDialogOpened: boolean
    pokemonDialogOpened: boolean
    pokemonName: string | null
    pokemonList: PokemonListProps[] | null
    teamList: TeamListProps[] | null
  
    // change
    handleChangeTeamDialog: () => void
    handleChangePokemonDialog: (teamName: string | null) => void
    
    // add
    handleAddTeam: (teamName: string | null) => void
    handleAddPokemon: (pokemonId: number | null) => void
    
    // remove
    handleRemoveTeam: (teamName: string) => void
    handleRemovePokemon: (teamId: string) => void
    
    // close dialog
    handleClosePokemonDialog: () => void
    handleCloseTeamDialog: () => void
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

            <Grid item xs={12} sx={gridTeamItemStyle}>
                <TeamList
                    teamList={props.teamList}
                    pokemonDialogOpened={props.pokemonDialogOpened}
                    handleChangePokemonDialog={props.handleChangePokemonDialog}
                    handleRemovePokemon={props.handleRemovePokemon}
                    handleRemoveTeam={props.handleRemoveTeam}
                />
            </Grid>
            <Grid item>
                <TeamDialogForm
                    teamDialog={props.teamDialogOpened}
                    handleAddTeam={props.handleAddTeam}
                    handleChangeTeamDialog={props.handleChangeTeamDialog}
                    handleCloseTeamDialog={props.handleCloseTeamDialog}
                />
                <PokemonDialogForm
                    pokemonDialogOpened={props.pokemonDialogOpened}
                    pokemonList={props.pokemonList}
                    handleAddPokemon={props.handleAddPokemon}
                    handleClosePokemonDialog={props.handleClosePokemonDialog}
                />
            </Grid>
        </Grid>
    )
}