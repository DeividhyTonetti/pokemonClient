// Libs
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import { HomeContainer } from './components/pokemon/home/HomeContainer'

// Styles MUI V5
import { ThemeProvider } from '@mui/material'
import { LightTheme } from './themes/light'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <HomeContainer />
    </ThemeProvider>
  </React.StrictMode>,
)
