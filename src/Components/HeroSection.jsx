import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: 'calc(100vh - 64px)', // Adjust for app bar height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
        
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*AG7EnMV_K4H0twt_"
        alt="Background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />

      {/* Decorative Element */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          zIndex: 1,
          maxWidth: '800px',
          width: '90%',
          padding: '2rem',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Company
        </Typography>
        <Typography variant="h5" gutterBottom>
          We are dedicated to providing top-notch services to our clients and
          helping them achieve their goals.
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
