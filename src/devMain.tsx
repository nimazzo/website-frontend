import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './lockscreen/App.tsx'
import AppLayout from './shared/AppLayout.tsx'
import './index.css'
import {ColorModeProvider} from "./shared/ColorModeContext.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './homepage/Home.tsx'

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
