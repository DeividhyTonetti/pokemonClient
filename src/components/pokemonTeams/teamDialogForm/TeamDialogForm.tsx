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

}

export const TeamDialogForm = (props: TeamDialogFormProps) => {
    // const [pokemonInformations, setPokemonInformations] = useState<PokemonListProps | null>(null)


    return (
        <Dialog open={true} onClose={() => {}} fullWidth>
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
                <Button onClick={() => {}}> Cancelar </Button>
                <Button onClick={() => {}}> Adicionar </Button>
            </DialogActions>
        </Dialog>
    )
}