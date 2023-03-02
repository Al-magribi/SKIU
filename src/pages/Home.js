import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import Header from "../component/Header/Header";
import PageName from "./PageName";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { projects, equipts } from "../Data";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "../component/Footer/Footer";

const Home = () => {
  const number = "6287835026611";

  const sendMessage = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=${number}&text=Hello%2C+saya+admin+&type=phone_number&app_absent=0`
    );
  };

  return (
    <div>
      <PageName title={"SKIU - GROUP"} />
      <Box>
        <Header />
        <Box
          sx={{
            height: {
              xs: "400px",
              md: "780px",
              width: "100%",
              position: "relative",
            },
          }}
        >
          <img
            src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="home"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bgcolor: "rgba(0, 0, 0, 0.5)",
            height: { xs: "400px", md: "780px" },
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box textAlign="center">
            <Typography
              variant="h1"
              fontFamily="nunito"
              color="#ffff"
              fontWeight="600"
              sx={{
                fontSize: { xs: "40px", md: "120px" },
              }}
            >
              SKIU GROUP
            </Typography>
            <Typography
              variant="h5"
              fontFamily="nunito"
              color="#ffff"
              sx={{ fontSize: { xs: "20px", md: "30px" } }}
            >
              Keandalan dan Efisiensi di Setiap Proyek Konstruksi dengan Layanan
              Sewa Alat Berat Kami
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#E8E2E2", pt: 4, pb: 4 }}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h1"
              fontFamily="nunito"
              sx={{ fontSize: "32px", fontWeight: "bold" }}
            >
              OUR LATES PROJECTS
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {projects.slice(0, 4).map((item) => (
              <Card key={item.id} sx={{ width: 300, m: 2 }}>
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
                      {item.project.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="#FF6E31">
                      {item.lokasi.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="#FF6E31">
                      {item.waktu.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="#FF6E31">
                      {item.progress.toUpperCase()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#F5F5F5", pt: 4, pb: 4 }}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h1"
              fontFamily="nunito"
              sx={{ fontSize: "32px", fontWeight: "bold" }}
            >
              OUR EQUIPMENTS
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {equipts.slice(0, 4).map((item) => (
              <Card key={item.id} sx={{ width: 300, m: 2 }}>
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
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "300px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "100%",
            width: "100%",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="phone"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              width: "260px",
            }}
          >
            <Avatar sx={{ bgcolor: "#FF6E31", mr: 2 }}>
              <FmdGoodOutlinedIcon />
            </Avatar>
            <Typography sx={{ width: "200px" }}>
              Jl. Merbabu No. 32 Jetis, Sukoharjo
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              width: "260px",
            }}
          >
            <Avatar sx={{ bgcolor: "#FF6E31", mr: 2 }}>
              <AttachEmailOutlinedIcon />
            </Avatar>
            <Typography sx={{ width: "200px" }}>
              merbabu_skiu@yahoo.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              width: "250px",
              cursor: "pointer",
            }}
            onClick={sendMessage}
          >
            <Avatar sx={{ bgcolor: "#FF6E31", mr: 2 }}>
              <WhatsAppIcon />
            </Avatar>
            <Typography sx={{ width: "200px" }}>{number}</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
