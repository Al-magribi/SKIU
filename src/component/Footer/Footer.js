import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  const chatMe = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=6287720776871&text=Hello%2C+saya+admin+&type=phone_number&app_absent=0`
    );
  };

  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        height: "60px",
        width: "100%",
        bgcolor: "#243763",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={chatMe}
    >
      <Typography sx={{ color: "white", fontFamily: "nunito" }}>
        &copy; {year} Almagribi
      </Typography>
    </Box>
  );
};

export default Footer;
