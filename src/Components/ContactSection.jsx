import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add logic to handle form submission here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ p: { xs: 6, md: 8 } }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Reach Out
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginLeft: { xs: 'none', md: '2px solid #ccc' }, pl: { xs: 0, md: 4 } }}>
          <Box
            sx={{
              backgroundImage: `url('https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37943.jpg?t=st=1715056689~exp=1715060289~hmac=f1b9641f37c0be2037a7e467ab8d76365a00b83e4a7362bff86a39d166a9de03&w=900')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: { xs: 2, md: 4 },
              borderRadius: 4,
              color: 'white',
              
            }}
          >
            <Typography variant="h6" gutterBottom color='primary'sx={{fontWeight:'bold'}}>
              Contact Information
            </Typography>
            <Typography variant="body1" gutterBottom color='greenyellow'  sx={{ fontWeight: 800,fontSize:20 }}>
              Phone: +1 123-456-7890
            </Typography>
            <Typography variant="body1" gutterBottom color='greenyellow' sx={{fontWeight:'800'}}>
              Email: info@example.com
            </Typography>
            <Typography variant="body1" gutterBottom color='greenyellow' sx={{fontWeight:'bold'}}>
              Address: 123 Street, City, Country
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom color='white' sx={{fontWeight:'bold'}}>
              Connect with Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                color="primary"
                startIcon={<Facebook />}
                href="https://www.facebook.com/"
                target="_blank"
              >
                Facebook
              </Button>
              <Button
                color="primary"
                startIcon={<Twitter />}
                href="https://twitter.com/"
                target="_blank"
              >
                Twitter
              </Button>
              <Button
                color="primary"
                startIcon={<LinkedIn />}
                href="https://www.linkedin.com/"
                target="_blank"
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
