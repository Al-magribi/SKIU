import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HomeIcon from "@mui/icons-material/Home";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import DashboardIcon from "@mui/icons-material/Dashboard";

const MenuDashboard = ({ open }) => {
  return (
    <Fragment>
      <List>
        {/* DASHBOARD */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            component={Link}
            to="/admin"
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <DashboardIcon sx={{ color: "#FF6E31" }} />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              sx={{
                opacity: open ? 1 : 0,
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* HOME */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            component={Link}
            to="/"
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <HomeIcon sx={{ color: "#FF6E31" }} />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{
                opacity: open ? 1 : 0,
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* HOME SETTING */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            component={Link}
            to="/home-setting"
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SettingsSuggestIcon sx={{ color: "#FF6E31" }} />
            </ListItemIcon>
            <ListItemText
              primary="Setting"
              sx={{
                opacity: open ? 1 : 0,
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* TEAM */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <EngineeringIcon sx={{ color: "#FF6E31" }} />
            </ListItemIcon>
            <ListItemText
              primary="Team"
              sx={{
                opacity: open ? 1 : 0,
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* PROJECTS */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AccountTreeIcon sx={{ color: "#FF6E31" }} />
            </ListItemIcon>
            <ListItemText
              primary="Projects"
              sx={{
                opacity: open ? 1 : 0,
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* INVENTORY */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <WarehouseIcon sx={{ color: "#FF6E31" }} />
            </ListItemIcon>
            <ListItemText
              primary="Inventories"
              sx={{
                opacity: open ? 1 : 0,
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* EQUIPMENTS */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <PrecisionManufacturingIcon sx={{ color: "#FF6E31" }} />
            </ListItemIcon>
            <ListItemText
              primary="Alat Berat"
              sx={{
                opacity: open ? 1 : 0,
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Fragment>
  );
};

export default MenuDashboard;
