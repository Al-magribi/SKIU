import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { inventory } from "../Data";

const Inventory = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        {inventory.map((item) => (
          <Card key={item.id} sx={{ width: 330, m: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt="green iguana"
              />
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="#FF6E31">
                  {item.stock.toUpperCase()}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Footer sx={{ flexShrink: 0 }} />
    </Box>
  );
};

export default Inventory;
