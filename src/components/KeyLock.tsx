import {useState} from "react";
import {Box, Button, Typography} from "@mui/material";

import darkMosaic from '../assets/dark-mosaic.png';

const KeyLock = () => {

  const [display, setDisplay] = useState(['_', '_', '_', '_', '_', '_', '_', '_']);
  const [cursor, setCursor] = useState(0);
  const [wrongCode, setWrongCode] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const handleNumberClick = (number: string) => {
    if (wrongCode) {
      const newDisplay = ['_', '_', '_', '_', '_', '_', '_', '_'];
      newDisplay[0] = number;
      setDisplay(newDisplay);
      setWrongCode(false);
      setCursor(1);
    } else {
      if (cursor < display.length) {
        const newDisplay = [...display];
        newDisplay[cursor] = number;
        setDisplay(newDisplay);
        setCursor(cursor + 1);
      }
    }
  };

  const handleLeftArrow = () => {
    if (wrongCode) {
      const newDisplay = ['_', '_', '_', '_', '_', '_', '_', '_'];
      setDisplay(newDisplay);
      setWrongCode(false);
      setCursor(0);
      return;
    }

    if (cursor > 0) {
      const newDisplay = [...display];
      newDisplay[cursor - 1] = '_';
      setDisplay(newDisplay);
      setCursor(cursor - 1);
    }
  };

  interface AuthResponse {
    status: string;
    reason: string;
    message: string;
  }

  const handleSubmit = async () => {
    try {
      const code = display.join('');
      const response = await fetch(`/authenticate?code=${encodeURIComponent(code)}`, {
        method: 'POST',
        credentials: "same-origin"
      });

      const result: AuthResponse = await response.json();

      if (response.ok) {
        window.location.href = '/';
      } else if (response.status === 401) {
        setDisplay(`WRONG CODE`.split(''));
        setWrongCode(true);

        if (result.reason === 'blocked') {
          setBlocked(true);
        }

      } else {
        console.error(`Unexpected response status: ${response.status}`);
        setDisplay(`ERROR`.split(''));
        setWrongCode(true);
      }
    } catch (err) {
      console.error('Error during authentication:', err);
      setDisplay(`ERROR`.split(''));
      setWrongCode(true);
    }
  };

  return (
    <>
      <Box sx={{
        height: '100%',
        width: '100%',
        backgroundImage: `
      linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 10, 0, 0.95)),
      url(${darkMosaic})
    `,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundBlendMode: 'overlay',
        color: '#00ff00',
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{
            backgroundColor: '#1f1f1f',
            padding: 2,
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1.5,
            border: blocked ? '2px solid rgba(255, 0, 0, 0.6)' : '2px solid rgba(0, 255, 0, 0.6)',
            boxShadow: blocked ? '0 0 10px 5px rgba(255, 0, 0, 1)' : '0 0 10px 5px rgba(0, 255, 0, 1)',
          }}>
            <Typography
              variant="h4"
              sx={{
                backgroundColor: blocked ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)',
                border: blocked ? '2px solid rgba(255, 0, 0, 0.6)' : '2px solid rgba(0, 255, 0, 0.6)',
                color: blocked ? '#ff0000' : '#00ff00',
                borderRadius: 2,
                fontFamily: 'monospace',
                fontSize: '2rem',
                letterSpacing: '0.2rem',
                textShadow: blocked ? '0 0 5px #ff0000' : '0 0 5px #00ff00',
                width: '100%',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
                minHeight: '4rem',
                minWidth: '18rem',
                marginBottom: '0.5rem',
              }}
            >
              {blocked ? "ACCESS DENIED" : display.join('')}
            </Typography>
            {/* Number rows */}
            {[
              ['1', '2', '3'],
              ['4', '5', '6'],
              ['7', '8', '9'],
              ['←', '0', '→'],
            ].map((row, rowIndex) => (
              <Box
                key={rowIndex}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 1.5,
                  width: '100%',
                }}
              >
                {row.map((val) => {
                  if (val === '←') {
                    return (
                      <Button
                        key={val}
                        variant="contained"
                        onClick={handleLeftArrow}
                        disabled={blocked || cursor === 0}
                        sx={{
                          backgroundColor: '#ed2020',
                          color: '#000',
                          fontSize: '2rem',
                          borderRadius: 4,
                          width: '100%',
                          '&:hover': {
                            backgroundColor: 'rgb(255,2,2)',
                          },
                        }}
                      >
                        {val}
                      </Button>
                    );
                  }

                  if (val === '→') {
                    return (
                      <Button
                        key={val}
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={blocked || wrongCode || cursor < display.length}
                        sx={{
                          backgroundColor: '#148705',
                          color: '#000',
                          fontSize: '2rem',
                          borderRadius: 4,
                          width: '100%',
                          '&:hover': {
                            backgroundColor: 'rgb(10,96,0)',
                          },
                        }}
                      >
                        {val}
                      </Button>
                    );
                  }

                  return (
                    <Button
                      key={val}
                      variant="outlined"
                      onClick={() => handleNumberClick(val)}
                      disabled={blocked}
                      sx={{
                        borderColor: '#00ff00',
                        color: '#00ff00',
                        fontSize: '2rem',
                        fontFamily: 'monospace',
                        textShadow: blocked ? 'none' : '0 0 5px #00ff00',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 0, 0.2)',
                        },
                        borderRadius: 4,
                        width: '100%',
                        '&.Mui-disabled': {
                          borderColor: '#ff0000',  // force green border even disabled
                          color: '#ff0000',        // keep text color green too
                          opacity: 0.5,              // optionally prevent opacity dimming
                          textShadow: 'none',      // optionally remove glow on disabled
                        },
                      }}
                    >
                      {val}
                    </Button>
                  );
                })}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{
          padding: 2,
          border: '2px dashed #00ff00',
          backgroundColor: 'rgba(0, 255, 0, 0.05)',
          borderRadius: 2,
          fontSize: '1rem',
          color: '#00ff00',
          maxWidth: '400px',
          // textShadow: '0 0 3px #00ff00',

          boxShadow: 2,
          px: 3,
          py: 2,
          textAlign: 'center',
          userSelect: 'none',
        }}>
          <Typography variant="body2" gutterBottom>
            Use the number pad to enter the code.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Press the left arrow to delete the last digit.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Press the right arrow to submit the code.
          </Typography>
          <Typography variant="body2">
            But be <strong style={{color: '#e57373'}}>careful</strong>, you only have <strong>3 attempts</strong>!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default KeyLock;