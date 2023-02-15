import React, { useState, useEffect } from 'react';

// MUI V5
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import hexRgb from 'hex-rgb';
import convertCssColorNameToHex from 'convert-css-color-name-to-hex';

// Icons 
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


// Models
import { PokemonList } from '../../../models/PokemonList'
import { PokemonColor } from '../../../models/PokemonColor';
import { Button, Chip } from '@mui/material';

type PokemonListComponentProps = {
    pokemonList: PokemonListProps[] | null
    pokemonListIsFeching: boolean
    handlePokemonSelected: (pokemonId: number) => void
}

type PokemonProps = {
    id?: number
    name: string
    url: string
    color: string
    types: any
}

type PokemonListProps = {
    id?: number
    name?: string
    color?: string
    url?: string
    imageUrl?: string
}

const SkeletonComponent = (data: undefined[]) => (
    data?.map((dataItem: undefined, key: number) => (
        <Grid item key={key}>
            <Skeleton
                sx={{ bgcolor: 'grey.400' }}
                variant='rectangular'
                width={210}
                height={118}
                animation='wave'
            />
        </Grid>
    ))
)


import PestControlIcon from '@mui/icons-material/PestControl';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import BoltIcon from '@mui/icons-material/Bolt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AirIcon from '@mui/icons-material/Air';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpaIcon from '@mui/icons-material/Spa';
import VolcanoIcon from '@mui/icons-material/Volcano';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AdjustIcon from '@mui/icons-material/Adjust';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import LandslideIcon from '@mui/icons-material/Landslide';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


const pokemonType = (type: string) => {
    const pokemonTypes = { 
        bug: { color: '#7BCF00', icon: <PestControlIcon style={{color: '#FFFFFF' }} />}, 
        dark: { color: '#5A566A', icon: <NightsStayIcon style={{color: '#FFFFFF' }} />}, 
        dragon: { color: '#0076FF', icon: ''}, 
        eletric: { color: '#FFDE00', icon: <BoltIcon  style={{color: '#FFFFFF' }} />}, 
        fairy: { color: '#FF76FF', icon: <AutoAwesomeIcon  style={{color: '#FFFFFF' }} />}, 
        fighting: { color: '#FF215B', icon: <SportsMmaIcon  style={{color: '#FFFFFF' }} />}, 
        fire: { color: '#FF9900', icon: <LocalFireDepartmentIcon  style={{color: '#FFFFFF' }} />}, 
        flying: { color: '#89BDFF', icon: <AirIcon  style={{color: '#FFFFFF' }} />}, 
        ghost: { color: '#4E6AFF', icon: ''}, 
        grass: { color: '#1CD80E', icon: <SpaIcon  style={{color: '#FFFFFF' }} />}, 
        ground: { color: '#FF6B0D', icon: <VolcanoIcon  style={{color: '#FFFFFF' }} />}, 
        ice: { color: '#2EE4C6', icon: <AcUnitIcon  style={{color: '#FFFFFF' }} />}, 
        normal: { color: '#9fa39d', icon: <AdjustIcon  style={{color: '#FFFFFF' }} />}, 
        poison: { color: '#F149FF', icon: <CoronavirusIcon  style={{color: '#FFFFFF' }} />}, 
        psychic: { color: '#FF6C64', icon: <PsychologyIcon  style={{color: '#FFFFFF' }} />}, 
        rock: { color: '#D8BC5A', icon: <LandslideIcon  style={{color: '#FFFFFF' }} />}, 
        steel: { color: '#23A1BD', icon: <SettingsSuggestIcon  style={{color: '#FFFFFF' }} />}, 
        water: { color: '#14a8ff', icon: <TsunamiIcon  style={{color: '#FFFFFF' }} />}, 
    } as any

    return pokemonTypes[type]
} 

const CardListComponent = (data: any, handlePokemonSelected: Function) => {

    const getPokemonImageUrl = (url: string): string => {
        const baseUrlPokemonImage: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'

        const currentUrlSplited = url.split('/');
        const CurrentIdPokemon = currentUrlSplited.slice(-2)[0];

        return `${baseUrlPokemonImage}${CurrentIdPokemon}.png`
    }

    const pokemonFirstLetterUpperCase = (pokemonName: string) => {
        const firstLetterUpperCase = pokemonName.replace(/^./, pokemonName[0].toUpperCase());

        return firstLetterUpperCase;
    }

    return (
        data?.map((dataItem: PokemonProps, key: number) => (
            <Grid item xs={2} key={key}>
                <Card
                    sx={{
                        maxWidth: 345,
                        background: hexRgb(convertCssColorNameToHex(dataItem?.color), { format: 'css', alpha: 0.1 }),
                        fontWeight: 900,
                        fontSize: '20px',
                        color: dataItem?.color === 'white' || dataItem?.color === 'yellow' ? '#000000' : '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(1.5px)',
                        webkitBackdropFilter: 'blur(1.5px)',
                    }}>

                    <Grid container sx={{marginTop: 2}} spacing={1}>
                        <Grid item xs={5}>
                            <CardMedia
                                component='img'
                                image={getPokemonImageUrl(dataItem?.url)}
                                alt={dataItem.name}
                            />

                        </Grid>
                        <Grid item xs={6}>
                            <Typography component="div" variant="h5">
                                {pokemonFirstLetterUpperCase(dataItem?.name)}
                            </Typography>

                            {
                                dataItem?.types.map( (value: any) => {
                                    
                                    const {color, icon} = pokemonType(value.type.name)    
                                 
                                    return  (
                                    
                                        <Chip 
                                            icon={icon} 
                                            label={pokemonFirstLetterUpperCase(value.type?.name)} 
                                            sx={{backgroundColor: color, color: '#ffffff'}} 
                                        /> 
                                    )
                                })
                            }
                        </Grid>
                    </Grid>


                    <Button
                        variant="contained"
                        fullWidth
                        onClick={ () => handlePokemonSelected(dataItem?.id)}
                        sx={{
                            padding: 0,
                            borderRadius: '50% 50% 0% 0%',
                            flexWrap: 'nowrap',
                            flexDirection: 'row',
                        }}
                    > Mais Detalhes
                    </Button>

                </Card>
            </Grid>

        ))

    )
}

export const PokemonListComponent = (props: PokemonListComponentProps) => {

    const skeletonMock: undefined[] = Array.from(new Array(20))

    return (
        <Grid
            container
            alignContent='center'
            alignItems='center'
            spacing={1}
        >
            {
                props.pokemonListIsFeching ?
                    SkeletonComponent(skeletonMock) :
                    CardListComponent(props.pokemonList, props.handlePokemonSelected)
            }
        </Grid>
    )


}
