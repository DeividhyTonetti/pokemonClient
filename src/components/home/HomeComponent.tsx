import React, { useState } from 'react';

// Mui V5 
import {
  AppBar,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography
} from '@mui/material';

import { styled, alpha } from '@mui/material/styles';


// Icons
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 100,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '20em',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('xs')]: {
      width: '100%',
      '&:focus': {
        width: '20em',
      },
    },
  },
}));

// Models
import { PokemonList } from '../../models/PokemonList'
import { PokemonColor } from '../../models/PokemonColor';

// Component
import { PokemonListComponent } from '../pokemonList/PokemonListComponent'


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

import ReactLogo from '../../assets/pokemon.svg'
import { PokemonDialogInformations } from '../pokemonDialogInformations/PokemonDialogInformations';

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
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >

              <img src={ReactLogo} alt="Logo" height={110} width={150} style={{ marginLeft: 5, margin: '-1em' }} />
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar Pokémon"
                inputProps={{ 'aria-label': 'Buscar' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
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