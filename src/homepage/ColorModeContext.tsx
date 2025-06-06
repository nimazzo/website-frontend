import React, {useMemo, useState} from 'react';
import {createTheme, CssBaseline, type PaletteMode, ThemeProvider,} from '@mui/material';
import {ColorModeContext} from './UseColorMode';

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  // Initialize from localStorage or default to 'light'
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem('preferredColorMode');
    return savedMode === 'dark' ? 'dark' : 'light';
  });

  // Wrap toggleColorMode to save to localStorage
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const nextMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('preferredColorMode', nextMode);
          return nextMode;
        });
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
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};