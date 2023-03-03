import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuDashboard from "../Components/MenuDashboard";
import AdminFooter from "../Components/AdminFooter";

import PageName from "../../PageName";
import { Button, TextField } from "@mui/material";

const drawerWidth = 160;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Setting = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [preview, setPreview] = React.useState([]);

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#F1EEE9",
          height: "100vh",
        }}
      >
        <PageName title={"Setting"} />
        <CssBaseline />
        <AppBar position="fixed" sx={{ bgcolor: "#243763" }} open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ letterSpacing: 2 }}
            >
              ADMINISTRATOR
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <MenuDashboard open={open} />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <form style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: { xs: "auto", md: "620px" },
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: 2,
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      m: 3,
                      p: 1,
                      height: { xs: "200px", md: "500px" },
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "nunito", fontWeight: "800" }}
                    >
                      Slider
                    </Typography>
                    {preview.map((img) => (
                      <img
                        src={img}
                        alt="Preview"
                        style={{
                          width: "200px",
                          height: "140px",
                          objectFit: "cover",
                          margin: "5px",
                        }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <input
                      id="slider"
                      type="file"
                      name="slider"
                      accept="images/* "
                      onChange={onChange}
                      multiple
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <TextField
                      label="Nama Web"
                      variant="outlined"
                      placeholder="Masukan nama web"
                      sx={{ m: { xs: 1, md: 2 }, width: "80%" }}
                    />

                    <TextField
                      name="tagline"
                      label="Tagline"
                      sx={{ m: { xs: 1, md: 2 }, width: "80%" }}
                    />

                    <TextField
                      name="address"
                      label="Alamat"
                      sx={{ m: { xs: 1, md: 2 }, width: "80%" }}
                    />

                    <TextField
                      name="email"
                      label="Email"
                      sx={{ m: { xs: 1, md: 2 }, width: "80%" }}
                    />

                    <TextField
                      name="phone"
                      label="Phone"
                      sx={{ m: { xs: 1, md: 2 }, width: "80%" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      width: "80%",
                      mt: 1,
                    }}
                  >
                    <Button>Buat</Button>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
          <Box>
            <AdminFooter />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Setting;
