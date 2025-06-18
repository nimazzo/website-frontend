import {type ReactNode} from "react";
import {Box, CircularProgress,} from "@mui/material";

interface BlurredOverlayProps {
  loading: boolean;
  children?: ReactNode;
}

const BlurredOverlay = (props: BlurredOverlayProps) => {
  const {loading, children} = props;

  return (
    <Box sx={{position: 'relative'}}>
      <Box
        sx={{
          '& > *': {
            filter: loading ? 'blur(5px)' : 'none',
            pointerEvents: loading ? 'none' : 'auto',
            transition: 'filter 0.3s ease',
          },
        }}
      >
        {children}
      </Box>
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <CircularProgress/>
        </Box>
      )}
    </Box>
  );
};

export default BlurredOverlay;