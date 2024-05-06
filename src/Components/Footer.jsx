import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        mt: '50px',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Additional Links
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Terms of Service
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Contact Us
        </Link>
      </Box>
      <Typography variant="body2" gutterBottom>
        Copyright © {new Date().getFullYear()} Your Company
      </Typography>
      <Typography variant="body2" gutterBottom>
        All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
