import { Fade, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AddTeam = ({ showModal }) => {
  return (
    <div>
      <Fade in={showModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#ffff",
            boxShadow: 24,
            p: 4,
          }}
        >
          <form
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <TextField label="Nama" variant="outlined" />
            <TextField label="Jabata" variant="outlined" />
          </form>
        </Box>
      </Fade>
    </div>
  );
};

export default AddTeam;
