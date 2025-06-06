import {useTheme} from '@mui/material/styles';
import {Box, CssBaseline} from '@mui/material';

function AppLayout({children}: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: theme.palette.mode === 'light'
            ? `
          radial-gradient(circle at 20% 30%, rgba(100, 181, 246, 0.3), transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 213, 79, 0.25), transparent 60%)
        `
            : `
          radial-gradient(circle at 20% 30%, rgba(33, 150, 243, 0.1), transparent 60%),
          radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05), transparent 70%)
        `,
          filter: 'blur(160px)',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        },
        '::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(grain-dark.png)',
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{position: 'relative', zIndex: 1}}>
        <CssBaseline/>
        {children}
      </Box>
    </Box>
  );
}


export default AppLayout;
