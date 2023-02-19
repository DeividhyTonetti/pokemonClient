import React, { useState, useEffect } from 'react'

// MUI V5
import {
    Avatar,
    Card,
    CardHeader,
    Grid,
    IconButton,
    Paper,
    Typography,
} from '@mui/material'

// Models
import { TeamListProps } from '../../../models/TeamList'

// Icons
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import Tooltip from '@mui/material/Tooltip'

// Styles
const cardStyle = {
    marginTop: '1em',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(1.1px)',
    '-webkit-backdrop-filter': 'blur(1.1px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
}

const avatarStyles = {
    width: 200,
    height: 200
}

const paperStyle = {
    margin: '1em',
    padding: '1em',
    maxWidth: '20em',
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(1.1px)',
    '-webkit-backdrop-filter': 'blur(1.1px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
}

const typographyStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px'
}

// Prototypes
type TeamListComponentProps = {
    teamList: TeamListProps[] | null
    pokemonDialogOpened: boolean
    handleChangePokemonDialog: (teamName: string | null) => void
    handleRemovePokemon: (teamId: string) => void
    handleRemoveTeam: (teamName: string) => void
}


export const TeamList = (props: TeamListComponentProps) => {
    const [teamListFormated, setTeamListFormated] = useState<any>([])

    const CardPokemonComponent = (value: any, key: number) => (
        <>
            {
                value.pokemonId &&
                <Grid
                    item
                    direction='column'
                    sx={{ margin: 2 }}
                >
                    <Grid item xs={2}>
                        <Avatar
                            alt='imagePokemon'
                            src={value.imageUrl}
                            sx={avatarStyles}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Paper
                            elevation={1}
                            sx={paperStyle}
                        >
                            <Typography
                                variant='h6'
                                noWrap
                                component='div'
                                sx={typographyStyle}
                            >

                                {value.pokemonName}

                            </Typography>
                            <IconButton
                                aria-label='deletePokemon'
                                size='large'
                                onClick={() => props.handleRemovePokemon(value.id)}
                            >
                                <Tooltip title='Remover Pokémon'>
                                    <DeleteIcon fontSize='inherit' />
                                </Tooltip>
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            }
        </>
    )

    const formatTeamList = () => {
        const formatedList = props?.teamList?.reduce((acc: any, cur: any) => {
            !acc[cur.teamName] ?
                acc[cur.teamName] = [{
                    id: cur.id,
                    pokemonId: cur.pokemonId,
                    pokemonName: cur.pokemonName,
                    createdAt: cur.createdAt,
                    imageUrl: cur.imageUrl,
                }] :
                acc[cur.teamName].push({
                    id: cur.id,
                    pokemonId: cur.pokemonId,
                    pokemonName: cur.pokemonName,
                    createdAt: cur.createdAt,
                    imageUrl: cur.imageUrl,
                })

            return acc
        }, {})

        return formatedList
    }

    const handleTeamListChaged = (): void => {
        const _listFormated = formatTeamList()

        setTeamListFormated(_listFormated)
    }

    const filterTeamsNulls = (teamName: string) => teamListFormated[teamName].filter((value: any, key: number) => value.pokemonId !== null)

    useEffect(() => {
        if (props.teamList)
            handleTeamListChaged()
    }, [props.teamList])

    return (
        <>
            {
                Object.keys(teamListFormated)?.map((teamName: string) => (

                    <Card sx={cardStyle}>
                        <CardHeader
                            title={teamName}
                            subheader=' Adicionado em September 14, 2016'
                            action={
                                <IconButton
                                    aria-label='deletePokemon'
                                    size='large'
                                    onClick={() => props.handleRemoveTeam(teamName)}
                                    sx={{ ml: 'auto' }}
                                >
                                    <Tooltip title='Remover Time'>
                                        <DeleteIcon fontSize='inherit' />
                                    </Tooltip>
                                </IconButton>
                            }
                        />
                        <Grid container spacing={1} alignContent={'center'} alignItems={'center'}>

                            {
                                filterTeamsNulls(teamName)
                                    .map((value: any, key: number) => CardPokemonComponent(value, key))
                            }

                            {
                                filterTeamsNulls(teamName).length < 6 &&
                                <Grid item xs={2} ml={2} >
                                    <Tooltip title='Adicionar Novo Pokémon'>
                                        <IconButton
                                            aria-label='addPokemon'
                                            size='large'
                                            onClick={() => props.handleChangePokemonDialog(teamName)}
                                        >
                                            <AddIcon fontSize='inherit' />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            }
                            {
                                filterTeamsNulls(teamName).length === 0 &&
                                <Grid item xs={2} ml={0} >
                                    <Typography
                                        variant='h6'
                                        component='div'
                                    >
                                        Adicione Pokemóns 😀
                                    </Typography>
                                </Grid>
                            }


                        </Grid>


                    </Card>
                ))
            }
        </>




    )
}