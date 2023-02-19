import React from 'react';

// Mui V5 
import {
    AppBar,
    Button,
    Toolbar,
    Typography
} from '@mui/material';

// React Router Dom V6
import { Link } from 'react-router-dom'

// Logo SVG
import pokemonLogo from '../../assets/pokemon.svg'

// Components
import { PokemonSearch } from './pokemonSearch/PokemonSearch';

// Protorypes
type tabBarProps = {
    routeName: string
    routeLink: string
    searchEnable: boolean
    buttonTeamIsEnabled: boolean
    handleChangeTeamDialog?: () => void
}

export const TabBar = (props: tabBarProps) => {

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <img src={pokemonLogo} alt='Logo' height={110} width={150} style={{ marginLeft: 5, margin: '-1em' }} />
                </Typography>

                {
                    props.buttonTeamIsEnabled &&
                    <Button 
                        variant='contained' 
                        sx={{ 
                            borderRadius: 15, 
                            marginRight: '1em', 
                            backgroundColor: '#14A8FF'
                        }}
                        onClick={props.handleChangeTeamDialog}
                    >
                        Adicionar Time
                    </Button>
                }

                <Button color='secondary' variant='contained' sx={{ borderRadius: 15 }}>
                    <Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to={props?.routeLink}> { props?.routeName } </Link>
                </Button>
                {
                    props.searchEnable &&
                    <PokemonSearch />  
                }
            </Toolbar>
        </AppBar>
    )
}