import React, { useState, useEffect, forwardRef, ReactElement, Ref } from 'react';

// MUI V5
import {
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    IconButton,
    Slide
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BorderLinearProgress = styled(LinearProgress)(({ theme, value }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: value ? value > 50 ? '#1CD80E' : '#ff364e' : '#1CD80E',
    },
}));


// Models
import { PokemonList } from '../../../models/PokemonList'
import { PokemonColor } from '../../../models/PokemonColor';
import zIndex from '@mui/material/styles/zIndex';
import { Box } from '@mui/system';

type PokemonListProps = {
    id?: number
    name?: string
    color?: string
    url?: string
    imageUrl?: string
    stats?: any
    types?: any
}


type PokemonDialogInformationsProps = {
    pokemonId: number | null
    pokemonList: PokemonListProps[] | null
    handleDialogClose: () => void
}

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

export const PokemonDialogInformations = (props: PokemonDialogInformationsProps) => {
    const [pokemonInformations, setPokemonInformations] = useState<PokemonListProps | null>(null)

    const findPokemonInListById = (pokemonId: number): any => props?.pokemonList?.find((item) => item.id === pokemonId) || null

    const handlePokemonIdChaged = (pokemonId: number) => {
        const pokemonFiltered: PokemonListProps = findPokemonInListById(pokemonId)

        setPokemonInformations(pokemonFiltered)
    }

    const pokemonFirstLetterUpperCase = (pokemonName: string) => {
        const firstLetterUpperCase = pokemonName?.replace(/^./, pokemonName[0].toUpperCase());

        return firstLetterUpperCase;
    }

    const getPokemonImageUrl = (url: string): string => {
        const baseUrlPokemonImage: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'

        const currentUrlSplited = url?.split('/');
        const currentIdPokemon = currentUrlSplited?.slice(-2)[0];

        return `${baseUrlPokemonImage}${currentIdPokemon}.png`
    }

    useEffect(() => {
        if (props.pokemonId)
            handlePokemonIdChaged(props.pokemonId)
    }, [props.pokemonId])

    return (
        <Dialog
            open={props.pokemonId ? true : false}
            TransitionComponent={Transition}
            keepMounted
            maxWidth='md'
            fullWidth
            onClose={() => false}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
                sx: {
                    overflow: "visible",
                    background: 'rgba( 255, 255, 255, 0.3 )',
                    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                    backdropFilter: 'blur( 4px )',
                    borderRadius: 15,
                    border: '1px solid rgba( 255, 255, 255, 0.18 )',
                    paddingTop: '3em'
                },
            }}
            sx={{
                backdropFilter: 'blur( 4px )',
            }}
        >

            <img
                src={getPokemonImageUrl(pokemonInformations?.url as string)}
                alt={pokemonInformations?.name}
                style={{
                    maxWidth: '20rem',
                    position: 'absolute',
                    top: '-15rem',
                    left: '18rem',
                }}
            />

            <DialogContent>

                <Grid 
                    container 
                    alignContent={'center'} 
                    alignItems={'center'}
                    spacing={0}
                >
                    <Grid item xs={3}>
                        <Typography variant="h4" gutterBottom>
                            {pokemonFirstLetterUpperCase(pokemonInformations?.name as string)}
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{marginLeft: '-3em'}}>
                    {
                                pokemonInformations?.types.map( (value: any) => {
                                    
                                    const {color, icon} = pokemonType(value.type.name)    
                                 
                                    return  (
                                    
                                        <Chip 
                                            icon={icon} 
                                            label={pokemonFirstLetterUpperCase(value.type?.name)} 
                                            sx={{backgroundColor: color, color: '#ffffff', marginBottom: '5px', marginRight: '5px'}} 
                                        /> 
                                    )
                                })
                            }
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton aria-label="close"  onClick={() => props.handleDialogClose()} sx={{marginLeft: '3.5em'}}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                
                    {
                        pokemonInformations?.stats?.map((value: any, key: number) => (
                            <>
                                <Grid item xs={3}>
                                    <Typography variant="h6" gutterBottom>
                                        { pokemonFirstLetterUpperCase(value?.stat?.name) } 
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography variant="h6" gutterBottom>
                                        { value.base_stat } 
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <BorderLinearProgress
                                        key={key}
                                        variant="determinate"
                                        value={value.base_stat > 100? 100 : value.base_stat}
                                    />
                                </Grid>
                            </>
                        ))
                    }
                </Grid>
           
            </DialogContent>
        </Dialog>
    )
}