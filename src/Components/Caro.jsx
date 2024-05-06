import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import HeroSection from "./HeroSection";

const items = [
  {
    name: "Mountain View",
    description: "Beautiful mountain landscape",
    imageUrl: "https://source.unsplash.com/800x600/?mountains",
  },
  {
    name: "Beach View",
    description: "Sunny beach day",
    imageUrl: "https://source.unsplash.com/800x600/?beach",
  },
  {
    name: "Cityscape",
    description: "Urban city skyline",
    imageUrl: "https://source.unsplash.com/800x600/?city",
  },
];

const Caro = () => {
  return (
    <>
    
    
    <Carousel>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
    <HeroSection/>
    </>
  );
};

const Item = ({ item }) => {
  const { name, description, imageUrl } = item;

  const paperStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "400px", // Set a minimum height to ensure the content is visible
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <>
      <Paper sx={paperStyle}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button className="CheckButton" variant="contained" color="primary">
          Check it out!
        </Button>
      </Paper>
      
    </>
  );
};

export default Caro;
