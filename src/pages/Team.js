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
import { team } from "../Data";

const Team = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
          height: "auto",
        }}
      >
        {team.map((user) => (
          <Card key={user.id} sx={{ width: 340, m: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={user.img}
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
                <Typography gutterBottom variant="h6" component="div">
                  {user.nama.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="#FF6E31">
                  {user.jabatan.toUpperCase()}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default Team;
