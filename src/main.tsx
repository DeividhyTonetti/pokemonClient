// Libs
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import { HomeContainer } from './components/pokemon/home/HomeContainer'

// Styles MUI V5
import { ThemeProvider } from '@mui/material'
import { LightTheme } from './themes/light'
import { CssBaseline } from '@mui/material/'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <CssBaseline/>
      <HomeContainer />
    </ThemeProvider>
  </React.StrictMode>,
)
