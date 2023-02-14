import { createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[800],
            dark: yellow[900],
            light: yellow[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: cyan[800],
            dark: cyan[900],
            light: cyan[500],
            contrastText: '#ffffff',
        },
        background: {
            default: '#EEE8AA',
            paper: '#F0F8FF',
        },
    }
})