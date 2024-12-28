import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from './components/context/appContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppContextProvider>
    <App />
    </AppContextProvider>
    </BrowserRouter>
  </StrictMode>,
)