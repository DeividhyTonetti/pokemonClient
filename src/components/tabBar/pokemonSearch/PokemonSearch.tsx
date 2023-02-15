import React from 'react';

// Mui V5 
import {
    InputBase,
} from '@mui/material';

// Mui Styles
import { styled, alpha } from '@mui/material/styles';

// Icons
import SearchIcon from '@mui/icons-material/Search';

// Prototypes
type PokemonSearchProps = {

}

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

export const PokemonSearch = (props: PokemonSearchProps) => {

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder='Buscar Pokémon'
                inputProps={{ 'aria-label': 'Buscar' }}
            />
        </Search>
    )
}