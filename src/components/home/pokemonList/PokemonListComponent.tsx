import React, { Component, FC, Fragment, ReactElement } from 'react';

// MUI V5
import {
    Button,
    Card,
    CardMedia,
    Chip,
    Grid,
    Typography,
    Skeleton,
} from '@mui/material/';

import { SvgIconProps } from '@mui/material';

// External Libs
import hexRgb from 'hex-rgb';
import * as convert from 'color-convert';

// Models
import { PokemonList } from '../../../models/PokemonList';

// Icons 
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

// Prototypes
type PokemonListComponentProps = {
    pokemonList: PokemonList[] | null
    pokemonListIsFeching: boolean
    handlePokemonSelected: (pokemonId: number) => void
}

type PokemonType = {
    color: string
    icon: SvgIconProps
}


// Styles
const skeletonStyles = { bgcolor: 'grey.400' }
const iconsColorStyles = { color: '#FFFFFF' }
const buttonStyles = {
    padding: 0,
    borderRadius: '50% 50% 0% 0%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
}

// Compoents
const SkeletonComponent: FC<undefined[]> = (data: undefined[]): ReactElement => (
    <Fragment>
        {
            data?.map((dataItem: undefined, key: number) => (
                <Grid item key={key}>
                    <Skeleton
                        sx={skeletonStyles}
                        variant='rectangular'
                        width={210}
                        height={118}
                        animation='wave'
                    />
                </Grid>
            ))
        }
    </Fragment>
)

const pokemonType = (type: string): PokemonType => {
    const pokemonTypes: { [key: string]: any } = {
        bug: { color: '#7BCF00', icon: <PestControlIcon style={iconsColorStyles} /> },
        dark: { color: '#5A566A', icon: <NightsStayIcon style={iconsColorStyles} /> },
        dragon: { color: '#0076FF', icon: <NightsStayIcon style={iconsColorStyles} /> },
        eletric: { color: '#FFDE00', icon: <BoltIcon style={iconsColorStyles} /> },
        fairy: { color: '#FF76FF', icon: <AutoAwesomeIcon style={iconsColorStyles} /> },
        fighting: { color: '#FF215B', icon: <SportsMmaIcon style={iconsColorStyles} /> },
        fire: { color: '#FF9900', icon: <LocalFireDepartmentIcon style={iconsColorStyles} /> },
        flying: { color: '#89BDFF', icon: <AirIcon style={iconsColorStyles} /> },
        ghost: { color: '#4E6AFF', icon: <NightsStayIcon style={iconsColorStyles} /> },
        grass: { color: '#1CD80E', icon: <SpaIcon style={iconsColorStyles} /> },
        ground: { color: '#FF6B0D', icon: <VolcanoIcon style={iconsColorStyles} /> },
        ice: { color: '#2EE4C6', icon: <AcUnitIcon style={iconsColorStyles} /> },
        normal: { color: '#9fa39d', icon: <AdjustIcon style={iconsColorStyles} /> },
        poison: { color: '#F149FF', icon: <CoronavirusIcon style={iconsColorStyles} /> },
        psychic: { color: '#FF6C64', icon: <PsychologyIcon style={iconsColorStyles} /> },
        rock: { color: '#D8BC5A', icon: <LandslideIcon style={iconsColorStyles} /> },
        steel: { color: '#23A1BD', icon: <SettingsSuggestIcon style={iconsColorStyles} /> },
        water: { color: '#14a8ff', icon: <TsunamiIcon style={iconsColorStyles} /> },
    }

    return pokemonTypes[type] as PokemonType
}

const CardListComponent: FC<any> = (pokemonList: PokemonList[] | null, handlePokemonSelected: Function): ReactElement => {

    const getPokemonImageUrl = (url: string): string => {
        const baseUrlPokemonImage: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'

        const currentUrlSplited = url.split('/');
        const CurrentIdPokemon = currentUrlSplited.slice(-2)[0];

        return `${baseUrlPokemonImage}${CurrentIdPokemon}.png`
    }

    const pokemonFirstLetterUpperCase = (pokemonName: string): string => {
        const firstLetterUpperCase = pokemonName.replace(/^./, pokemonName[0].toUpperCase());

        return firstLetterUpperCase;
    }

    const formatCardsBackgroundColors = (color: any): string => {
        const convertColorNameToHex: string = convert.keyword.hex(color)
        const convertColorHexToRGB: string = hexRgb(convertColorNameToHex, { format: 'css', alpha: 0.1 })

        return convertColorHexToRGB
    }

    return (
        <Fragment>
            {
                pokemonList?.map((pokemon: PokemonList, key: number) => (
                    <Grid item xs={2} key={key}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                background: formatCardsBackgroundColors(pokemon?.color),
                                fontWeight: 900,
                                fontSize: '20px',
                                color: pokemon?.color === 'white' || pokemon?.color === 'yellow' ? '#000000' : '#ffffff',
                                borderRadius: '16px',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(1.5px)',
                                webkitBackdropFilter: 'blur(1.5px)',
                            }}>

                            <Grid container sx={{ marginTop: 2 }} spacing={1}>
                                <Grid item xs={5}>
                                    <CardMedia
                                        component='img'
                                        image={getPokemonImageUrl(pokemon?.url as string)}
                                        alt={pokemon.name}
                                    />

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography component="div" variant="h5">
                                        {pokemonFirstLetterUpperCase(pokemon?.name as string)}
                                    </Typography>

                                    {
                                        pokemon?.types?.map((typeItem: any) => {

                                            const { color, icon } = pokemonType(typeItem.type.name)

                                            return (
                                                <Chip
                                                    icon={icon as any}
                                                    label={pokemonFirstLetterUpperCase(typeItem.type?.name)}
                                                    sx={{ backgroundColor: color, color: '#ffffff' }}
                                                />
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>


                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => handlePokemonSelected(pokemon?.id)}
                                sx={buttonStyles}
                            > Mais Detalhes
                            </Button>

                        </Card>
                    </Grid>

                ))
            }
        </Fragment>

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
