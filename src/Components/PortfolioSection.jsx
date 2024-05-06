import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const PortfolioSection = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));

  const gridSpacing = isSmallDevice ? 1 : 3;
  const gridPaddingX = isSmallDevice ? 1 : 5;

  const projects = [
    
      {
        id: 1,
        title: 'Online Learning Platform',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlIOb9BFyQmIOzX3QIegE0hYufYkcKXfmtlnDbYQWbw&s',
        description: 'A comprehensive online learning platform for students and educators.',
      },
      {
        id: 2,
        title: 'Health & Fitness App',
        imageUrl: 'https://i.pinimg.com/originals/0d/44/cd/0d44cd11c906b69c91dbd2a4f9aec223.gif',
        description: 'A mobile app to track fitness activities and provide health tips.',
      },
      {
        id: 3,
        title: 'Travel Booking Website',
        imageUrl: 'https://i.pinimg.com/originals/41/df/cc/41dfcc8c774f6689ceeb6998f56db70c.gif',
        description: 'An intuitive platform for booking flights, hotels, and tours.',
      },
      {
        id: 4,
        title: 'Real Estate Management System',
        imageUrl: 'https://tranetech.com/wp-content/uploads/2021/02/property-gif.gif',
        description: 'A web application for managing real estate properties and listings.',
      },
      {
        id: 5,
        title: 'E-Commerce Marketplace',
        imageUrl: 'https://blog.cdn.cmarix.com/blog/wp-content/uploads/2021/03/Frozen-Food-Ordering-Apps.gif',
        description: 'A multi-vendor e-commerce platform with advanced shopping features.',
      },
      {
        id: 6,
        title: 'Restaurant Ordering App',
        imageUrl: 'https://www.clounote.com/assets_new/img/online-ordering-app.gif',
        description: 'An app for customers to browse menus and place orders from restaurants.',
      },
    ];
  

  return (
    <Grid container spacing={gridSpacing} sx={{ py: 8, pl: gridPaddingX, pr: gridPaddingX }}>
    {projects.map((project) => (
      <Grid item xs={12} sm={6} md={4} key={project.id}>
        <Card elevation={10}> {/* Set elevation to 10 for a stronger shadow */}
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={project.imageUrl}
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
    <Grid item xs={12} sx={{ textAlign: 'center', mt: 4 }}>
      <Link href="#" color="primary" variant="button">
        View More Projects
      </Link>
    </Grid>
  </Grid>
);
};

export default PortfolioSection;
