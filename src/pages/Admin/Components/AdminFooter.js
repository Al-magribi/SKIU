import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AdminFooter = () => {
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={chatMe}
    >
      <Typography
        sx={{
          color: "#243763",
          fontFamily: "nunito",
          fontWeight: "900",
        }}
      >
        &copy; {year} almagribi
      </Typography>
    </Box>
  );
};

export default AdminFooter;
