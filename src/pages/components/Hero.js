import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        // backgroundImage:
        //   theme.palette.mode === 'light'
        //     ? 'linear-gradient(180deg, #efece8, #FFF)'
        //     : 'linear-gradient(#02294F, #f4f5f9)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
        <Typography
            component="h1"
            variant="h2"
            fontWeight={400}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
          Bottomtline Solutions & Services

          </Typography>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Our Core&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Mission

            </Typography>
            
          </Typography>
          <Typography variant="subtitle2" textAlign="center" color="text.secondary">
          To help, anybody we deal with, take informed financial life decisions and create smiles everywhere around.

          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >

            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Stack>
        </Stack>
        <Box
  id="video"
  sx={{
    position: 'relative',
    mt: { xs: 8, sm: 10 },
    alignSelf: 'center',
    height: { xs: 200, sm: 700 },
    width: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
    '& iframe': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  }}
>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/OgbnHw36KBs?autoplay=1&loop=1&playlist=OgbnHw36KBs"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</Box>

      </Container>
    </Box>
  );
}