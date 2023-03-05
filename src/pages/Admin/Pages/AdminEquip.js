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
import AddIcon from "@mui/icons-material/Add";

import PageName from "../../PageName";
import Backdrop from "@mui/material/Backdrop";
import {
  Button,
  Tooltip,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
} from "@mui/material";
import AdminFooter from "../Components/AdminFooter";
import { equipts } from "../../../Data";
import AddEquipment from "./AddEquipment";

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

const AdminEquip = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

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
          height: "auto",
        }}
      >
        <PageName title={"Alat Berat"} />
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
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <DrawerHeader />

          <Box
            sx={{
              mt: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Tooltip title="Tambah Alat Berat" placement="top">
                <Button
                  sx={{
                    mr: 7,
                    bgcolor: "#FF6E31",
                    transition: "all 0.3s ease-out",

                    "&:hover": {
                      bgcolor: "#243763",
                    },
                  }}
                  onClick={() => setShowModal(true)}
                >
                  <AddIcon sx={{ color: "white" }} />
                </Button>
              </Tooltip>
            </Box>

            {equipts.map((item) => (
              <Card key={item.id} sx={{ width: 230, m: 2 }}>
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

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={showModal}
              onClose={() => setShowModal(false)}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <div ref={React.useRef(null)}>
                <AddEquipment
                  showModal={showModal}
                  close={() => setShowModal(false)}
                />
              </div>
            </Modal>
          </Box>
          <Box>
            <AdminFooter />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AdminEquip;
