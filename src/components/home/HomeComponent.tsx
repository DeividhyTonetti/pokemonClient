import React, { useState } from 'react';

// Mui V5 
import {
  Grid,
} from '@mui/material';

// Models
import { PokemonList } from '../../models/PokemonList'
import { PokemonColor } from '../../models/PokemonColor';

// Component
import { PokemonDialogInformations } from './pokemonDialogInformations/PokemonDialogInformations';
import { PokemonListComponent } from './pokemonList/PokemonListComponent'
import { TabBar } from '../tabBar/TabBar';

// Prototypes
type PokemonListProps = {
  id?: number
  name?: string
  color?: string
  url?: string
  imageUrl?: string
  stats?: any
}

type HomeProps = {
  pokemonList: PokemonListProps[] | null
  pokemonListIsFeching: boolean
}


export const Home = (props: HomeProps) => {
  const [pokemonSelected, setPokemonSelected] = useState<number | null>(null)

  const handlePokemonSelected = (pokemonId: number): void => setPokemonSelected(pokemonId)
  const handleDialogClose = (): void => setPokemonSelected(null)

  return (
    <Grid
      container
      spacing={1}
    >
      <Grid item xs={12}>
        <TabBar
          routeName={'Times'}
          routeLink={'/teams'}
          searchEnable={true}
          buttonTeamIsEnabled={false}
        />
      </Grid>

      <Grid item xs={12} sx={{ marginTop: 10, marginLeft: 2, marginRight: 1, marginBottom: 2 }}>
        <PokemonListComponent
          pokemonList={props.pokemonList}
          pokemonListIsFeching={props.pokemonListIsFeching}
          handlePokemonSelected={handlePokemonSelected}
        />
        <PokemonDialogInformations
          pokemonId={pokemonSelected}
          pokemonList={props.pokemonList}
          handleDialogClose={handleDialogClose}
        />
      </Grid>
    </Grid>
  );
}