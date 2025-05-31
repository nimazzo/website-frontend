import {Box} from '@mui/material'

import "./App.css"
import KeyLock from "./components/KeyLock.tsx";

function App() {
  return (
    <Box sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <KeyLock/>
    </Box>
  )
}

export default App
