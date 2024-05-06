import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ServiceSection = () => {
  const services = [
    {
      title: 'Website Design',
      description: 'Create stunning and user-friendly website designs tailored to your brand.',
      image: 'https://i.pinimg.com/originals/f4/7f/d8/f47fd896add554744b4114d964b61b41.gif', // Demo image
    },
    {
      title: 'Website Development',
      description: 'Build fully functional and responsive websites using the latest technologies.',
      image: 'https://cdn.dribbble.com/users/1233499/screenshots/3850691/web-development.gif', // Demo image
    },
    {
      title: 'UI/UX Design',
      description: 'Design intuitive and engaging user interfaces with a focus on user experience.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce963767817393.5b472244e81a7.gif', // Demo image
    },
    {
      title: 'E-commerce Solutions',
      description: 'Develop custom e-commerce solutions to drive sales and enhance customer experience.',
      image: 'https://i.pinimg.com/originals/f2/00/eb/f200eb6203aba005f6bb8c46ac157274.gif', // Demo image
    },
    {
      title: 'Mobile App Development',
      description: 'Create innovative and feature-rich mobile applications for iOS and Android platforms.',
      image: 'https://cdn.dribbble.com/users/795597/screenshots/6081444/mobile_development2.gif', // Demo image
    },
    {
      title: 'Cloud Computing',
      description: 'Leverage cloud technologies for scalable and secure data storage and processing.',
      image: 'https://cdn.dribbble.com/users/1912990/screenshots/6129020/media/5de7b1748ffb5977fc77840b16f939c5.gif',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Our Services
    </Typography>
    <Box sx={{ maxWidth: 800, margin: 'auto' }}>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={10}> {/* Set elevation to 6 for a darker shadow */}
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
); 
};

export default ServiceSection;






