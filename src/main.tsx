// Libs
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import { HomeContainer } from './components/home/HomeContainer'

// Styles MUI V5
import { ThemeProvider } from '@mui/material'
import { LightTheme } from './themes/light'
import { CssBaseline } from '@mui/material/'

// React Dom V6
import {
  RouterProvider,
} from "react-router-dom";

//  Routes 
import { router } from './Routes/routes' 


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <CssBaseline/>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
