import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const ListDashboard = ({ team, project, inventory, equip }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {/* TEAM */}
      <Card
        sx={{
          m: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "110px", md: "250px" },
            height: { xs: "70px", md: "120px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EngineeringIcon
              sx={{
                fontSize: { xs: "50px", md: "100px" },
                color: "#243763",
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="#FF6E31"
              sx={{ fontWeight: "600", fontSize: { xs: "30px", md: "60px" } }}
            >
              {team.length}
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* PROJECTS */}
      <Card sx={{ m: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "110px", md: "250px" },
            height: { xs: "70px", md: "120px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccountTreeIcon
              sx={{
                fontSize: { xs: "50px", md: "100px" },
                color: "#243763",
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="#FF6E31"
              sx={{ fontWeight: "600", fontSize: { xs: "30px", md: "60px" } }}
            >
              {project.length}
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* INVENTORY */}
      <Card sx={{ m: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "110px", md: "250px" },
            height: { xs: "70px", md: "120px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WarehouseIcon
              sx={{
                fontSize: { xs: "50px", md: "100px" },
                color: "#243763",
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="#FF6E31"
              sx={{ fontWeight: "600", fontSize: { xs: "30px", md: "60px" } }}
            >
              {inventory.length}
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* EQUIPMENT */}
      <Card sx={{ m: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "110px", md: "250px" },
            height: { xs: "70px", md: "120px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PrecisionManufacturingIcon
              sx={{
                fontSize: { xs: "50px", md: "100px" },
                color: "#243763",
                transition: "all 0.3s ease-out",

                "&:hover": {
                  color: "#FF6E31",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="#FF6E31"
              sx={{ fontWeight: "600", fontSize: { xs: "30px", md: "60px" } }}
            >
              {equip.length}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ListDashboard;
