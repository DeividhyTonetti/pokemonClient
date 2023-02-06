import React from 'react';

// Mui V5 
import {
  AppBar,
  Grid,
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
    width: 'auto',
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

    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// Models
import { PokemonList } from '../../../models/PokemonList'

// Component
import { PokemonListComponent } from '../pokemonList/PokemonListComponent';

type HomeProps = {
  pokemonList: PokemonList | null
  pokemonListIsFeching: boolean
}


export const Home = (props: HomeProps) => {

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
              MUI
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

      <Grid item xs={12} sx={{marginTop: 8, marginLeft: 2, marginRight: 1}}>
        <PokemonListComponent
          pokemonList={props.pokemonList}
          pokemonListIsFeching={props.pokemonListIsFeching}
        />
      </Grid>
    </Grid>
  );
}