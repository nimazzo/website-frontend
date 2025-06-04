import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import AppLayout from '../shared/AppLayout.tsx'
import './index.css'
import {ColorModeProvider} from "../shared/ColorModeContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <AppLayout>
        <App/>
      </AppLayout>
    </ColorModeProvider>
  </StrictMode>,
)
