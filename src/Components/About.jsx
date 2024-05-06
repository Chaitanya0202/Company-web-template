import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "@mui/material/Button";

const AboutUsSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      role: "COO",
      bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Alex Johnson",
      role: "CTO",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Client A",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Client B",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Client C",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const companyValues = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Innovation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      imageUrl: "https://plus.unsplash.com/premium_photo-1661486971635-b79537d79d97?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Quality",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Customer Satisfaction",
      description: "Ut enim ad minim veniam, quis nostrud exer commodo .",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat
          metus nec est consequat, quis tincidunt velit dignissim. Integer vitae
          mi sed massa dictum vehicula. Sed ac tristique erat.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton
            color="primary"
            aria-label="View All"
            sx={{ fontSize: "18px" }}
          >
            View All <KeyboardDoubleArrowRightIcon />
          </IconButton>
        </Box>
        <Grid container spacing={3}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.imageUrl}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2">{member.bio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" align="center" gutterBottom sx={{ mt: 6 }}>
          Company Values
        </Typography>
        <Grid container spacing={3}>
          {companyValues.map((value) => (
            <Grid item xs={12} sm={6} md={4} key={value.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={value.imageUrl}
                  alt={value.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2">{value.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button variant="contained" color="primary">
            See More
          </Button>
        </Box>
        <Typography variant="h5" align="center" gutterBottom sx={{ mt: 6 }}>
        Testimonials
      </Typography>
      {testimonials.map((testimonial, index) => (
        <Box key={index} sx={{ my: 3, background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          <Typography variant="body1" paragraph style={{ fontSize: "18px", fontStyle: "italic" }}>
            "{testimonial.quote}"
          </Typography>
          <Typography variant="subtitle1" align="right">
            - {testimonial.name}
          </Typography>
        </Box>
      ))}
      </Box>
    </Box>
  );
};

export default AboutUsSection;
