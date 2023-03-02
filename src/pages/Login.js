import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import PageName from "./PageName";

const Login = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PageName title={"LOGIN"} />
      <Box
        sx={{
          height: "380px",
          width: { xs: "400px", md: "500px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src="https://images.pexels.com/photos/4930018/pexels-photo-4930018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="office"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      </Box>
      <Box
        sx={{
          height: "380px",
          width: { xs: "400px", md: "500px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "5px",
        }}
      >
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Username"
            sx={{
              "& label": {
                color: "white",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& .MuiOutlinedInput-input": {
                color: "white",
              },

              m: 2,
            }}
          />

          <TextField
            label="Password"
            sx={{
              "& label": {
                color: "white",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
            }}
          />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              m: 2,
            }}
          >
            <Button
              sx={{
                ml: 2,
                color: "white",
                "&:hover": {
                  color: "#FF6E31",
                },
              }}
              onClick={goBack}
            >
              <KeyboardBackspaceIcon />
            </Button>

            <Button
              sx={{
                mr: 2,
                color: "white",
                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
