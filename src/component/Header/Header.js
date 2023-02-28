import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = React.useState(false);

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#243763" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              width: "100%",
            }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                height: "100%",
                width: { xs: "50%", md: "13%" },
                textDecoration: "none",
              }}
            >
              <img
                src="./assets/SKIU.png"
                alt="logo"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <Typography
                sx={{
                  variant: "h5",
                  fontFamily: "nunito",
                  ml: 2,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                SKIU GROUP
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "space-evenly",
                height: "100%",
                width: "85%",
              }}
            >
              <Button
                component={Link}
                to="/project"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50px",
                  width: "100px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontFamily: "nunito",
                    letterSpacing: 1.5,
                    color: "white",
                    transition: "all 0.3s ease-out",

                    "&:hover": {
                      color: "#FF6E31",
                    },
                  }}
                >
                  PROJECTS
                </Typography>
              </Button>

              <Button
                component={Link}
                to="/team"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50px",
                  width: "100px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontFamily: "nunito",
                    letterSpacing: 1.5,
                    color: "white",
                    transition: "all 0.3s ease-out",

                    "&:hover": {
                      color: "#FF6E31",
                    },
                  }}
                >
                  TEAM
                </Typography>
              </Button>
              <Button
                component={Link}
                to="/inventaris"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50px",
                  width: "100px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontFamily: "nunito",
                    letterSpacing: 1.5,
                    color: "white",
                    transition: "all 0.3s ease-out",

                    "&:hover": {
                      color: "#FF6E31",
                    },
                  }}
                >
                  INVENTORY
                </Typography>
              </Button>

              <Button
                component={Link}
                to="/alat-berat"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50px",
                  width: "150px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontFamily: "nunito",
                    letterSpacing: 1.5,
                    color: "white",
                    transition: "all 0.3s ease-out",

                    "&:hover": {
                      color: "#FF6E31",
                    },
                  }}
                >
                  ALAT BERAT
                </Typography>
              </Button>
            </Box>
            <Box
              component={Link}
              to="/login"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                height: "100%",
                width: { xs: "50%", md: "13%" },
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontFamily: "nunito",
                  letterSpacing: 1.5,
                  color: "white",
                  transition: "all 0.3s ease-out",

                  "&:hover": {
                    color: "#FF6E31",
                  },
                }}
              >
                LOGIN
              </Typography>
            </Box>
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setShow(true)}
                color="inherit"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Drawer open={show} onClose={() => setShow(false)}>
              <Box sx={{ width: "200px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    mt: 1,
                    mr: 2,
                  }}
                  onClick={() => setShow(false)}
                >
                  <CloseIcon />
                </Box>
                <List>
                  <ListItem>
                    <ListItemButton
                      component={Link}
                      to="/project"
                      onClick={() => setShow(false)}
                    >
                      <ListItemIcon>
                        <AccountTreeIcon sx={{ color: "#FF6E31" }} />
                      </ListItemIcon>
                      <ListItemText primary="Project" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      component={Link}
                      to="/team"
                      onClick={() => setShow(false)}
                    >
                      <ListItemIcon>
                        <EngineeringIcon sx={{ color: "#FF6E31" }} />
                      </ListItemIcon>
                      <ListItemText primary="Team" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      component={Link}
                      to="/inventaris"
                      onClick={() => setShow(false)}
                    >
                      <ListItemIcon>
                        <WarehouseIcon sx={{ color: "#FF6E31" }} />
                      </ListItemIcon>
                      <ListItemText primary="Inventory" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component={Link} to="/alat-berat">
                      <ListItemIcon>
                        <PrecisionManufacturingIcon sx={{ color: "#FF6E31" }} />
                      </ListItemIcon>
                      <ListItemText primary="Alat Berat" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      component={Link}
                      to="/Login"
                      onClick={() => setShow(false)}
                    >
                      <ListItemIcon>
                        <LoginIcon sx={{ color: "#FF6E31" }} />
                      </ListItemIcon>
                      <ListItemText primary="LogIn" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
