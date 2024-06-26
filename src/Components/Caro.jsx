import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import HeroSection from "./HeroSection";

const items = [
   {
    name: "Our Company Gallery",
    description: "Small description About Company ",
    imageUrl: "https://source.unsplash.com/800x600/?Software",
  },
  {
    name: "Software Developer",
    description: "Something About Our org Dev.",
    imageUrl: "https://source.unsplash.com/800x600/?developer",
  },
  {
    name: "Programmer",
    description: "Wellcome In Programming world",
    imageUrl: "https://source.unsplash.com/800x600/?error",
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
