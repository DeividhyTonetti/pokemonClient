import React from 'react'

// MUI V5
import {
    Avatar,
    Card,
    CardHeader,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Paper,
    Typography,
} from '@mui/material'



// Prototypes
type TeamListProps = {

}

import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import Tooltip from '@mui/material/Tooltip'

export const TeamList = (props: TeamListProps) => {
    // const [pokemonInformations, setPokemonInformations] = useState<PokemonListProps | null>(null)


    return (

        <Card
            sx={{
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(1.1px)',
                '-webkit-backdrop-filter': 'blur(1.1px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
        >

            <CardHeader
                title="Time 1"
                subheader=" Adicionado em September 14, 2016"
            />

            <Grid container spacing={1}>
                <Grid
                    item
                    direction="column"
                    sx={{ margin: 2 }}
                >
                    <Grid item xs={2}>

                        <Avatar
                            alt="Remy Sharp"
                            src="https://cdn.esawebb.org/archives/images/screen/weic2216b.jpg"
                            sx={{ width: 200, height: 200 }}
                        />

                    </Grid>
                    <Grid item xs={5}>
                        <Paper
                            elevation={1}
                            sx={{
                                margin: '1em',
                                padding: '1em',
                                maxWidth: '20em',
                                display: "flex",
                                justifyContent: "center",
                                background: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '16px',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(1.1px)',
                                '-webkit-backdrop-filter': 'blur(1.1px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            <Typography
                                variant='h6'
                                noWrap
                                component='div'
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: '5px'
                                }}
                            >
                                Olá mundo
                            </Typography>
                            <IconButton aria-label="delete" size="large" >
                                <Tooltip title="Remover Pokémon">
                                    <DeleteIcon fontSize="inherit" />
                                </Tooltip>
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={2} sx={{ marginTop: '5em' }}>
                    <Tooltip title="Adicionar Novo Pokémon">
                        <IconButton aria-label="addPokemon" size="large" >
                            <AddIcon fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Card>


    )
}