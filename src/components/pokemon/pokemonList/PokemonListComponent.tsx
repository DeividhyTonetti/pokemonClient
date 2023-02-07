import React, { useState, useEffect } from 'react';

// MUI V5
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

// Icons 
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


// Models
import { PokemonList } from '../../../models/PokemonList'
import { PokemonColor } from '../../../models/PokemonColor';

type PokemonListComponentProps = {
    pokemonList: PokemonListProps[] | null
    pokemonListIsFeching: boolean
    // pokemonColor: PokemonColor | null
    // handlePokemonColor: (pokemonName: string) => void
}

type PokemonProps = {
    name: string
    url: string
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

const CardListComponent = (data: any) => {
    
    const getPokemonImageUrl = (url: string): string => {
        const baseUrlPokemonImage: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'
        
        const currentUrlSplited = url.split('/');
        const CurrentIdPokemon = currentUrlSplited.slice(-2)[0];

        return `${baseUrlPokemonImage}${CurrentIdPokemon}.png`
    }

    const pokemonNameFirstLetterUpperCase = (pokemonName: string) => {
        const firstLetterUpperCase = pokemonName.replace(/^./, pokemonName[0].toUpperCase());
    
        return firstLetterUpperCase;
    }
    
    return (
        data?.map((dataItem: PokemonProps, key: number) => (
            <Grid item key={key}>
                <Card sx={{ maxWidth: 345, borderRadius: 10, backgroundColor: dataItem?.color, fontWeight: 700, color: dataItem?.color === 'white' || dataItem?.color === 'yellow'? '#000000' : '#ffffff' }}>
                    
                    <CardHeader
                        style={{ textAlign: 'center' }}
                        title={pokemonNameFirstLetterUpperCase(dataItem?.name)}
                    />
                    <CardMedia
                        component='img'
                        height='200'
                        image={getPokemonImageUrl(dataItem?.url)}
                        alt={dataItem.name}
                        />
        
                    <CardActions disableSpacing>
                        <IconButton aria-label='add to favorites'>
                            <FavoriteIcon />
                        </IconButton>
        
                    </CardActions>
                </Card>
            </Grid>
        
        ))

    )
}




export const PokemonListComponent = (props: PokemonListComponentProps) => {

    const skeletonMock: undefined[] = Array.from(new Array(20))

    // console.log(props)
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
                    CardListComponent(props.pokemonList)
            }
        </Grid>
    )


}
