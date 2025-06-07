import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Home from './components/Home.tsx'
import AppLayout from './components/AppLayout.tsx'
import ColorModeProvider from "./context/ColorModeProvider.tsx";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <AppLayout>
        <Home/>
      </AppLayout>
    </ColorModeProvider>
  </StrictMode>,
)
