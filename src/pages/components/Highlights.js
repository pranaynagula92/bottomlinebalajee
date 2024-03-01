import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { List, ListItemText, ListItem } from '@mui/material';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: 'https://bottom-line.onrender.com/assets/img/portfolio/portfolio-2.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://bottom-line.onrender.com/assets/img/portfolio/portfolio-3.jpg',
    title: 'Camera',
  },
  {
    img: 'https://bottom-line.onrender.com/assets/img/portfolio/portfolio-4.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://bottom-line.onrender.com/assets/img/portfolio/portfolio-5.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://bottom-line.onrender.com/assets/img/portfolio/portfolio-6.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://bottom-line.onrender.com/assets/img/portfolio/portfolio-10.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://bottom-line.onrender.com/assets/img/portfolio/portfolio-11.jpg',
    title: 'Fern',
  },
  {
    img: 'https://bottom-line.onrender.com/assets/img/portfolio/portfolio-12.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
];

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Insurace',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Built to last',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Great user experience',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Innovative functionality',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Reliable support',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precision in every detail',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 12 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '100%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' } }}>
            <Typography
              component="span"
              textAlign='center'

              variant="h3"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              fontWeight={400}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              {/* Founder & Managing Director at Bottomline Solutions and Services Pvt Ltd.,Chennai. */}


            </Typography>
          </Stack>
        </Box>

        {/* <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
          <Typography
            component="h4"
            variant="h4"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Dr. B.R.Balajee&nbsp;
         
          </Typography>
          <Typography
              component="span"
              variant="h6"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'success.light' : 'primary.light',
              }}
            >
              MA, MBA, CLISP, AFP, RLP, CFGP, CTEP, Ph.D.,


            </Typography>
          <List dense  
          disablePadding
      //     sx={{
      //   color: (theme) =>
      //     theme.palette.mode === 'dark' ? 'primary.light' : 'primary.contrastText',
      // }}
      >
   <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Personal Finance Expert, Money Coach, Succession Planner.</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Visiting Professor at the School of Management & Commerce, BIHER - Chennai, India</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Fellow of American Academy of Financial Management - USA</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Member - Board of Trustees, Crown University Int'l Chartered Inc, Delaware, USA</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Fellow of The Society of Innovative Educationalists & Scientific Research Professionals - India</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Hony. Editorial Board Member - Consulting Editor for Journal of Engg. Tech. & Mgt. - Malaysia</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Percussionist - Travelled across India, USA & Canada to perform, accompanying leading Bharathanatyam dancers.</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Produced and Directed Youtube Videos.</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Writes lyrics and short scripts.</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Has travelled to 16 countries.</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Travelled to USA and Canada - sponsored by ICCR - Government of India.</Typography>} />
  </ListItem>
  <ListItem>
    <ListItemText primary={<Typography component="h2" variant="subtitle2">Speaker at Faculty Development Programme in Universities, Guest Lectures in Educational Institutions and Corporates.</Typography>} />
  </ListItem>
</List>


          </Grid>

          <Grid item xs={12} lg={6}>
          <ImageList sx={{width: '100%', height: '100%'}} cols={3} rowHeight={'auto'}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
          </Grid>
        </Grid> */}

      </Container>
    </Box>
  );
}
