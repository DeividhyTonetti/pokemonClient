import React, { useState, useEffect, FC, ReactElement, Fragment } from 'react'

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
import { PokemonList } from '../../../models/PokemonList'

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

type TeamsProps = {
    id: string
    createdAt: string
    imageUrl: string
    pokemonId: number
    pokemonName: string
}

type TeamListFormated = {
    [key: string]: any
}

type TeamListComponentProps = {
    teamList: PokemonList[] | null
    pokemonDialogOpened: boolean
    handleChangePokemonDialog: (teamName: string | null) => void
    handleRemovePokemon: (teamId: string) => void
    handleRemoveTeam: (teamName: string) => void
}

export const TeamList = (props: TeamListComponentProps) => {
    const [teamListFormated, setTeamListFormated] = useState<TeamListFormated[]>([])

    const CardPokemonComponent: FC<TeamsProps> = (team: TeamsProps): ReactElement => (
        <Fragment>
            {
                team.pokemonId &&
                <Grid
                    item
                    direction='column'
                    sx={{ margin: 2 }}
                >
                    <Grid item xs={2}>
                        <Avatar
                            alt='imagePokemon'
                            src={team.imageUrl}
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

                                {team.pokemonName}

                            </Typography>
                            <IconButton
                                aria-label='deletePokemon'
                                size='large'
                                onClick={() => props.handleRemovePokemon(team.id)}
                            >
                                <Tooltip title='Remover Pokémon'>
                                    <DeleteIcon fontSize='inherit' />
                                </Tooltip>
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            }
        </Fragment>
    )

    const formatTeamList = (): TeamListFormated[] => {
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
        const _listFormated: TeamListFormated[] = formatTeamList()

        setTeamListFormated(_listFormated)
    }

    const filterTeamsNulls = (teamName: string): TeamsProps[] => teamListFormated[teamName as any]?.filter((value: any) => value.pokemonId !== null) as any

    
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
                                    .map((team: TeamsProps, key: number) => CardPokemonComponent(team))
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