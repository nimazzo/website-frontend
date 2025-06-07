import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import ColorModeProvider from "./homepage/context/ColorModeProvider.tsx";
import AppLayout from './homepage/components/AppLayout.tsx'
import App from './lockscreen/App.tsx'
import Home from './homepage/components/Home.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ColorModeProvider>
  </StrictMode>,
)
