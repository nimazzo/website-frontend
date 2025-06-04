import React, {useMemo, useState} from 'react';
import {createTheme, CssBaseline, type PaletteMode, ThemeProvider,} from '@mui/material';
import { ColorModeContext } from './UseColorMode';

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
              background: {
                default: '#1e1e1e',
                paper: '#2a2a2a',
              },
              primary: {
                main: '#90caf9',
              },
              secondary: {
                main: '#f48fb1',
              },
              text: {
                primary: '#e0e0e0',
                secondary: '#b0b0b0',
              },
              divider: '#3c3c3c',
            }
            : {}),
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};