import { Avatar, Button, Fade, Input, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddInventory = ({ showModal, close }) => {
  const [preview, setPreview] = useState(
    "https://as1.ftcdn.net/v2/jpg/04/39/19/10/1000_F_439191022_EVi8u4GL82odnwscv4ojtx76cmK79lVD.jpg"
  );

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreview((oldArray) => [...oldArray, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const createHandler = () => {
    close(false);
  };

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
            <TextField
              name="name"
              label="Nama"
              variant="outlined"
              sx={{ m: 1 }}
            />
            <TextField
              name="qty"
              label="Jumlah Unit"
              variant="outlined"
              sx={{ m: 1 }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                m: 1,
              }}
            >
              <Avatar sx={{ mr: 1 }}>
                <img
                  src={preview}
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Avatar>
              <Input
                type="file"
                name="inventory"
                accept="images/*"
                onChange={onChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                m: 1,
              }}
            >
              <Button
                sx={{ width: "100px", color: "red", mr: 2 }}
                onClick={() => close(false)}
              >
                BATALKAN
              </Button>
              <Button sx={{ width: "100px" }} onClick={createHandler}>
                TAMBAHKAN
              </Button>
            </Box>
          </form>
        </Box>
      </Fade>
    </div>
  );
};

export default AddInventory;
