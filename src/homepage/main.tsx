import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Home from './Home.tsx'
import AppLayout from './AppLayout.tsx'
import {ColorModeProvider} from "./ColorModeContext.tsx";
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
