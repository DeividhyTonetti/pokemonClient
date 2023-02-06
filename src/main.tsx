// Libs
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import Home from './components/pokemon/home/Home'

// Styles MUI V5
import { ThemeProvider } from '@mui/material'
import { LightTheme } from './themes/light'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
