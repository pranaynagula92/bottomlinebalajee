import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from 'pages/components/AppBar';
import Hero from 'pages/components/Hero';
import LogoCollection from 'pages/components/LogoCollection';
import Highlights from 'pages/components/Highlights';
import Pricing from 'pages/components/Pricing';
import Features from 'pages/components/Features';
import Testimonials from 'pages/components/Testimonials';
import FAQ from 'pages/components/FAQ';
import Footer from 'pages/components/Footer';
import loadSLPTheme from 'theme';
import "./index.css";

export default function App() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const SLPBoxTheme = createTheme(loadSLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={SLPBoxTheme}>
      <CssBaseline />
      <AppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        {/* <Testimonials /> */}
        <Divider />
        <Highlights />
        <Divider />
        {/* <Pricing /> */}
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}