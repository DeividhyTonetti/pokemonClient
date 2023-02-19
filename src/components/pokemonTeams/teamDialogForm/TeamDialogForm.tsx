import React, { useState } from 'react'

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
    handleAddTeam: (teamName: string | null) => void
    handleChangeTeamDialog: () => void
    handleCloseTeamDialog: () => void
}

export const TeamDialogForm = (props: TeamDialogFormProps) => {
    const [teamName, setTeamName] = useState<string | null>(null)

    const handleFormCanceled = () => {
        setTeamName(null)
      
        props.handleCloseTeamDialog()
    }

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
                    onChange={(e) =>  setTeamName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleFormCanceled}> Cancelar </Button>
                <Button onClick={() => props.handleAddTeam(teamName)}> Adicionar </Button>
            </DialogActions>
        </Dialog>
    )
}