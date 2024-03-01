import React, { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import logo2 from '../../assets/clients/2.jpg';
import logo3 from '../../assets/clients/3.jpg';
import logo5 from '../../assets/clients/5.jpg';
import logo6 from '../../assets/clients/6.jpg';
// import logo7 from '../../assets/clients/7.png';
import logo8 from '../../assets/clients/8.jpg';
import logo11 from '../../assets/clients/11.png';
import logo12 from '../../assets/clients/12.jpg';
import logo13 from '../../assets/clients/13.jpg';
import '../../banner_logo.css';
import { Container } from '@mui/material';
import styled, { keyframes, css } from "styled-components";
import Marquee from "react-fast-marquee";

const whiteLogos = [
  'https://bottom-line.onrender.com/assets/img/clients/3.jpg',
  'https://bottom-line.onrender.com/assets/img/clients/5.jpg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [

  logo2,
  logo3,
  // logo5,
  logo6,
  // logo7,
  logo8,
  logo11,
  logo12,
  logo13,
];


export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;



  return (

    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="h5"
        align="center"
        lineHeight={3.5}
        color="text.secondary"
      >
        Work Experience & Companies Associated
      </Typography>
      <Container maxWidth="lg">
        <Marquee pauseOnHover gradient={false}>
          {darkLogos.map((logo, index) => (
            <Box
              key={index}
              mr={10}
              p={1}
              sx={{
                width: 120, // Set the desired fixed width
                height: 120, // Set the desired fixed height
                backgroundColor: '#fff',
                border: '1px solid #f4f5f9',
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden', // Hide overflow if the image is larger than the box

              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            </Box>
          ))}
        </Marquee>
      </Container>

    </Box>
  );
}
