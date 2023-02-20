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

// Styles
const typographyStyles = { 
    flexGrow: 1, 
    display: { 
        xs: 'none', 
        sm: 'block' 
    } 
}

const imageLogoStyles = { 
    marginLeft: 5, 
    margin: '-1em' 
}

const buttonAddStyles = { 
    borderRadius: 15, 
    marginRight: '1em', 
    backgroundColor: '#14A8FF'
}

const buttonLinkStyles = { 
    borderRadius: 15
}

const linStyles = { 
    textDecoration: 'none',
     color: '#FFFFFF' 
}

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
                    sx={typographyStyles}
                >
                    <img src={pokemonLogo} alt='Logo' height={110} width={150} style={imageLogoStyles} />
                </Typography>

                {
                    props.buttonTeamIsEnabled &&
                    <Button 
                        variant='contained' 
                        sx={buttonAddStyles}
                        onClick={props.handleChangeTeamDialog}
                    >
                        Adicionar Time
                    </Button>
                }

                <Button color='secondary' variant='contained' sx={buttonLinkStyles}>
                    <Link style={linStyles} to={props?.routeLink}> { props?.routeName } </Link>
                </Button>
                {
                    props.searchEnable &&
                    <PokemonSearch />  
                }
            </Toolbar>
        </AppBar>
    )
}