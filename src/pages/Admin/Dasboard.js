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
import ListDashboard from "./Components/ListDashboard";
import MenuDashboard from "./Components/MenuDashboard";
import { team, projects, equipts, inventory } from "../../Data";
import { Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PageName from "../PageName";
import AdminFooter from "./Components/AdminFooter";

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

const Dasboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // TEAM
  const teams = [
    {
      field: "nama",
      headerName: "TEAM",
      headerAlign: "center",
      width: 280,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 1 }}>
              <img
                src={params.row.img}
                alt={params.row.nama}
                style={{
                  height: "50px",
                  width: "50px",

                  objectFit: "cover",
                }}
              />
            </Avatar>
            {params.row.nama}
          </>
        );
      },
    },
  ];

  // PROJECT
  const projectsData = [
    {
      field: "nama",
      headerName: "PROJECT",
      headerAlign: "center",
      width: 280,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 1 }}>
              <img
                src={params.row.img}
                alt={params.row.project}
                style={{
                  height: "50px",
                  width: "50px",

                  objectFit: "cover",
                }}
              />
            </Avatar>
            {params.row.project}
          </>
        );
      },
    },
  ];

  // EQUIPMENT
  const equipData = [
    {
      field: "nama",
      headerName: "EQUIPMENT",
      headerAlign: "center",
      width: 280,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 1 }}>
              <img
                src={params.row.img}
                alt={params.row.name}
                style={{
                  height: "50px",
                  width: "50px",

                  objectFit: "cover",
                }}
              />
            </Avatar>
            {params.row.name}
          </>
        );
      },
    },
  ];

  // INVENTORIES
  const inventoryData = [
    {
      field: "nama",
      headerName: "INVENTORIES",
      headerAlign: "center",
      width: 280,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 1 }}>
              <img
                src={params.row.img}
                alt={params.row.name}
                style={{
                  height: "50px",
                  width: "50px",

                  objectFit: "cover",
                }}
              />
            </Avatar>
            {params.row.name}
          </>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#F1EEE9",
          height: { xs: "auto", md: "100vh" },
        }}
      >
        <PageName title={"Dashboard"} />
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

          <ListDashboard
            team={team}
            project={projects}
            inventory={inventory}
            equip={equipts}
          />

          <Box
            sx={{
              mt: 3,
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* TEAM */}
            <Box
              sx={{
                flex: 1,
                p: 1,
                m: 1,
                width: "280px",
              }}
            >
              <DataGrid
                rows={team}
                getRowId={(row) => row.id}
                columns={teams}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                autoHeight
                style={{ width: "100%" }}
              />
            </Box>

            {/* PROJECT */}
            <Box
              s
              sx={{
                flex: 1,
                p: 1,
                m: 1,
                width: "280px",
              }}
            >
              <DataGrid
                rows={projects}
                getRowId={(row) => row.id}
                columns={projectsData}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                autoHeight
                style={{ width: "100%" }}
              />
            </Box>

            {/* INVENTORY */}
            <Box
              sx={{
                flex: 1,
                p: 1,
                m: 1,
                width: "280px",
              }}
            >
              <DataGrid
                rows={inventory}
                getRowId={(row) => row.id}
                columns={inventoryData}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                autoHeight
                style={{ width: "100%" }}
              />
            </Box>

            {/* EQUIPMENT */}
            <Box
              sx={{
                flex: 1,
                p: 1,
                m: 1,
                width: "280px",
              }}
            >
              <DataGrid
                rows={equipts}
                getRowId={(row) => row.id}
                columns={equipData}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                autoHeight
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 7.5 }}>
            <AdminFooter />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Dasboard;
