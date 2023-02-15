import { createTheme } from '@mui/material'
import { cyan, yellow, red } from '@mui/material/colors'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[800],
            dark: yellow[900],
            light: yellow[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: red[800],
            dark: red[900],
            light: red[500],
            contrastText: '#ffffff',
        },
        background: {
            default: '#EEE8AA',
            paper: '#F0F8FF',
        },
    }
})