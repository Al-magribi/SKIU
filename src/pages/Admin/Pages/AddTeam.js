import { Avatar, Button, Fade, Input, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddTeam = ({ showModal, close }) => {
  const [preview, setPreview] = useState(
    "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
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
            <TextField label="Nama" variant="outlined" sx={{ m: 1 }} />
            <TextField label="Jabatan" variant="outlined" sx={{ m: 1 }} />

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
                name="avatar"
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

export default AddTeam;
