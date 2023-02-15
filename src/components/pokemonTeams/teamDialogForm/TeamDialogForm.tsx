import React from 'react'

// MUI V5
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    TextField,
} from '@mui/material'

// Prototypes
type TeamDialogFormProps = {
    teamDialog: boolean
    handleChangeTeamDialog: () => void
    handleAddTeam: () => void
    handleAddPokemon: () => void
    handleRemovePokemon: () => void
    handleRemoveTeam: () => void
}

export const TeamDialogForm = (props: TeamDialogFormProps) => {
    // const [pokemonInformations, setPokemonInformations] = useState<PokemonListProps | null>(null)


    return (
        <Dialog open={props.teamDialog} fullWidth>
            <DialogTitle> Adicionar um Novo Time </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nome do time"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleChangeTeamDialog}> Cancelar </Button>
                <Button onClick={() => props.handleChangeTeamDialog()}> Adicionar </Button>
            </DialogActions>
        </Dialog>
    )
}