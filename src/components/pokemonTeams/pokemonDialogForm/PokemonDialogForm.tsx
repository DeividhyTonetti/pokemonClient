import React, { useEffect, useState } from 'react'

// MUI V5
import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
} from '@mui/material'

import Select, { SelectChangeEvent } from '@mui/material/Select';

// import ScaleIcon from '@mui/icons-material/Scale';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';

// Prototypes
type PokemonListProps = {
    id?: number
    name?: string
    color?: string
    url?: string
    imageUrl?: string
    stats?: any
}

type PokemonDialogFormProps = {
    pokemonDialogOpened: boolean
    pokemonList: PokemonListProps[] | null
    // handleChangeTeamDialog: () => void
    // handleAddTeam: (teamName: string | null) => void
    handleAddPokemon: (pokemonId: number | null) => void
    handleClosePokemonDialog: () => void
    // handleRemovePokemon: () => void
    // handleRemoveTeam: () => void
}

export const PokemonDialogForm = (props: PokemonDialogFormProps) => {
    const [pokemonSelected, setPokemonSelected] = useState<string | null>(null)
    const [pokemonInformation, setPokemonInformation] = useState<PokemonListProps | null | undefined>(null)

    const handleChange = (event: SelectChangeEvent) => setPokemonSelected(event.target.value)

    const handleFormCanceled = (): void => {
        setPokemonSelected(null)
        setPokemonInformation(null)

        props.handleClosePokemonDialog()
    }

    const handlePokemonFormAdd = (): void => {
        setPokemonSelected(null)
        setPokemonInformation(null)

        props.handleAddPokemon(Number(pokemonSelected))
    }

    const findPokemonInformation = (pokemonSelected: number): PokemonListProps | undefined  => props.pokemonList?.find( pokemon => pokemon.id === pokemonSelected )

    useEffect( () => {
        if(pokemonSelected) {
            const _pokemonInformation = findPokemonInformation(Number(pokemonSelected))

            setPokemonInformation(_pokemonInformation)
        }
    }, [pokemonSelected])

    return (
        <Dialog open={props.pokemonDialogOpened} fullWidth>
            <DialogTitle> Adicionar um Novo Pokémon </DialogTitle>
            <DialogContent>
                <Grid container alignContent={'center'} alignItems={'center'} spacing={1}>
                    <Grid item xs={7}>
                        <FormControl sx={{ m: 1 }} fullWidth>
                            <InputLabel id="demo-simple-select-helper-label"> Pokémon </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={pokemonSelected || ''}
                                label="Pokémon"
                                // fullWidth
                                onChange={handleChange}
                            >
                                {
                                    props?.pokemonList?.map((pokemon) => (
                                        <MenuItem value={pokemon.id}>
                                            { pokemon.name }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                    </Grid>

                    {
                        pokemonInformation &&
                            <Grid item xs={5} sx={{height: 150,}}>
                                <Avatar
                                    alt="Remy Sharp"
                                    variant="square"
                                    src={pokemonInformation.imageUrl}
                                    sx={{
                                        width: 100, height: 100,
                                       
                                    }}
                                />
                                {/* <SquareFootIcon fontSize="large" />
                                <ScaleIcon fontSize="large" /> */}
                            </Grid>
                    }
                </Grid>
            </DialogContent>
            <DialogActions sx={{marginTop: '-2em'}}>
                <Button onClick={handleFormCanceled}> Cancelar </Button>
                <Button onClick={handlePokemonFormAdd}> Adicionar </Button>
            </DialogActions>
        </Dialog>
    )
}