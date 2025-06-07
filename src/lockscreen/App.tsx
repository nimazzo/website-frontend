import {Box} from "@mui/material"

import KeyLock from "./components/KeyLock.tsx";

const App = () => {
  return (
    <Box sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <KeyLock/>
    </Box>
  )
}

export default App
