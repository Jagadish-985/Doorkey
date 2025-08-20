// src/App.jsx

//import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import React, { useState } from "react";
import { ContactSection } from "./ContactSection";
import { ExploreSection } from "./ExploreSection";
import { ProfileSection } from "./ProfileSection";
import { ThemeProvider } from "./ThemeProvider";
import logo from "./assets/doorkey copy 1.png";
import bgImage from "./Group 74.png"; // Your background image

// Entrepreneurs data for cards
const entrepreneursData = [
  {
    id: 1,
    name: "Name",
    industry: "Industry",
    image: "https://cdn-icons-png.flaticon.com/512/147/147137.png",
  },
  {
    id: 2,
    name: "Name",
    industry: "Industry",
    image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
  },
];

// Investors data for cards
const investorsData = [
  {
    id: 1,
    name: "Name",
    industry: "Industry",
    image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
  },
  {
    id: 2,
    name: "Name",
    industry: "Industry",
    image: "https://cdn-icons-png.flaticon.com/512/147/147137.png",
  },
];

// ✨ Global styles for the entire page background
const globalStyles = {
  body: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    // These styles size and position the image as requested
    backgroundPosition: "top center",
    backgroundSize: "contain",
    
    backgroundAttachment: "fill",
    minHeight: "100vh",
    // Fallback color for any empty space
    //backgroundColor: "#142c50", 
  },
};


function App() {
  const [activeNav, setActiveNav] = useState(0);

  const navigationItems = [
    { label: "Home" },
    { label: "Investment" },
    { label: "About Us" },
    { label: "Contact Us" },
  ];

  return (
    <ThemeProvider>
      <CssBaseline />
      {/* Apply the global styles to the body */}
      <GlobalStyles styles={globalStyles} />

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        
        {/* Header section */}
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            position: "relative",
            background: "transparent", 
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Company Logo"
            sx={{
              position: "absolute",
              width: { xs: "50px", sm: "80px", md: "150px", lg: "180px" },
              height: { xs: "50px", sm: "80px", md: "150px", lg: "180px" },
              top: 0,
              left: 0,
            }}
          />

          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            sx={{
              position: "absolute",
              top: { xs: "10px", sm: "30px", md: "50px", lg: "60px" },
              left: { xs: "10%", sm: "20%", md: "30%", lg: "420px" },
              flexWrap: "wrap",
            }}
          >
            {navigationItems.map((item, index) => (
              <Typography
                key={index}
                onClick={() => setActiveNav(index)}
                sx={{
                  fontFamily: "Kadwa-Bold, Helvetica",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: {
                    xs: "20px",
                    sm: "28px",
                    md: "36px",
                    lg: "50px",
                  },
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "30px 16px",
                  borderRadius: "40px",
                  backgroundColor:
                    activeNav === index ? "rgba(255,255,255,0.1)" : "transparent",
                  transition: "background 0.2s",
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Profile section with a semi-transparent background */}
        <Box
          sx={{
            mt: { xs: -20, sm: -20, md: -20, lg: -100 },
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <ProfileSection />
        </Box>
        <Divider sx={{ my: { xs: 4, sm: 6, md: 8 }, borderColor: "#0c44b8", borderBottomWidth: 2 }} />

        {/* Entrepreneurs Section */}
        <Box sx={{ position: "relative", width: "100%", mt: -20, backgroundColor: 'transparent' }}>
          <Box sx={{ position: "relative", zIndex: 1, pt: { xs: 6, sm: 10, md: 16, lg: 25 } }}>
            <Stack spacing={2} alignItems="center" sx={{ mb: 8 }}>
              <Typography
                sx={{
                  fontFamily: "Kadwa-Bold, Helvetica",
                  fontWeight: "bold",
                  color: "#28569c",
                  fontSize: { xs: "30px", sm: "45px", md: "60px", lg: "90px" },
                  textAlign: "center",
                }}
              >
                Explore Entrepreneurs
              </Typography>
            </Stack>
            <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
              {entrepreneursData.map((entrepreneur) => (
                <Grid item key={entrepreneur.id}>
                  <Card
                    sx={{
                      width: { xs: "70vw", sm: "300px", md: "450px", lg: "532px" },
                      height: "auto",
                      backgroundColor:
                        entrepreneur.id === 1 ? "white" : "#fbfbfb",
                      borderRadius: "50px",
                      border: "4px solid #0c44b8",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 4,
                    }}
                  >
                    <Box
                      component="img"
                      src={entrepreneur.image}
                      alt="Profile"
                      sx={{
                        width: { xs: "150px", sm: "200px", md: "280px", lg: "331px" },
                        height: { xs: "150px", sm: "200px", md: "280px", lg: "331px" },
                        borderRadius: "50%",
                        objectFit: "cover",
                        mt: 2,
                      }}
                    />
                    <CardContent sx={{ textAlign: "center", p: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontWeight: "bold",
                          color: "black",
                          fontSize: { xs: "20px", sm: "30px", md: "45px", lg: "60px" },
                          lineHeight: 1.2,
                        }}
                      >
                        {entrepreneur.name}
                        <br />
                        {entrepreneur.industry}
                      </Typography>
                    </CardContent>
                    <Button
                      sx={{
                        width: { xs: "70%", sm: "250px", md: "350px", lg: "350px" },
                        height: { xs: "60px", sm: "80px", md: "100px", lg: "100px" },
                        backgroundColor: "#142c50",
                        borderRadius: "70px",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: "bold",
                        color: "white",
                        fontSize: { xs: "20px", sm: "28px", md: "48px", lg: "64px" },
                        "&:hover": {
                          backgroundColor: "#1a3660",
                        },
                      }}
                    >
                      Connect
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={{ xs: 2, sm: 4 }}
              sx={{ mb: 8 }}
            >
              {[ArrowBackIos, ArrowForwardIos].map((Icon, i) => (
                <Box
                  key={i}
                  sx={{
                    width: { xs: "60px", sm: "80px", md: "100px", lg: "125px" },
                    height: { xs: "60px", sm: "80px", md: "100px", lg: "114px" },
                    backgroundColor: "#d9d9d9",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Icon sx={{ fontSize: { xs: "20px", sm: "28px", md: "36px", lg: "40px" }, color: "#666" }} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: { xs: 4, sm: 6, md: 8 }, borderColor: "#0c44b8", borderBottomWidth: 2 }} />

        {/* Investors Section */}
        <Box sx={{ position: "relative", width: "100%", mt: -20, backgroundColor: 'transparent' }}>
          <Box sx={{ position: "relative", zIndex: 1, pt: { xs: 6, sm: 10, md: 16, lg: 25 } }}>
            <Stack spacing={2} alignItems="center" sx={{ mb: 8 }}>
              <Typography
                sx={{
                  fontFamily: "Kadwa-Bold, Helvetica",
                  fontWeight: "bold",
                  color: "#28569c",
                  fontSize: { xs: "30px", sm: "45px", md: "60px", lg: "90px" },
                  textAlign: "center",
                }}
              >
                Explore Investors
              </Typography>
            </Stack>
            <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
              {investorsData.map((investor) => (
                <Grid item key={investor.id}>
                  <Card
                    sx={{
                      width: { xs: "70vw", sm: "300px", md: "450px", lg: "532px" },
                      height: "auto",
                      backgroundColor:
                        investor.id === 1 ? "white" : "#fbfbfb",
                      borderRadius: "50px",
                      border: "4px solid #0c44b8",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 4,
                    }}
                  >
                    <Box
                      component="img"
                      src={investor.image}
                      alt="Profile"
                      sx={{
                        width: { xs: "150px", sm: "200px", md: "280px", lg: "331px" },
                        height: { xs: "150px", sm: "200px", md: "280px", lg: "331px" },
                        borderRadius: "50%",
                        objectFit: "cover",
                        mt: 2,
                      }}
                    />
                    <CardContent sx={{ textAlign: "center", p: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontWeight: "bold",
                          color: "black",
                          fontSize: { xs: "20px", sm: "30px", md: "45px", lg: "60px" },
                          lineHeight: 1.2,
                        }}
                      >
                        {investor.name}
                        <br />
                        {investor.industry}
                      </Typography>
                    </CardContent>
                    <Button
                      sx={{
                        width: { xs: "80%", sm: "300px", md: "380px", lg: "451px" },
                        height: { xs: "60px", sm: "80px", md: "100px", lg: "116px" },
                        backgroundColor: "#142c50",
                        borderRadius: "70px",
                        fontFamily: "Kadwa-Bold, Helvetica",
                        fontWeight: "bold",
                        color: "white",
                        fontSize: { xs: "20px", sm: "28px", md: "48px", lg: "64px" },
                        "&:hover": {
                          backgroundColor: "#1a3660",
                        },
                      }}
                    >
                      Connect
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={{ xs: 2, sm: 4 }}
              sx={{ mb: 8 }}
            >
              {[ArrowBackIos, ArrowForwardIos].map((Icon, i) => (
                <Box
                  key={i}
                  sx={{
                    width: { xs: "60px", sm: "80px", md: "100px", lg: "125px" },
                    height: { xs: "60px", sm: "80px", md: "100px", lg: "114px" },
                    backgroundColor: "#d9d9d9",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Icon sx={{ fontSize: { xs: "20px", sm: "28px", md: "36px", lg: "40px" }, color: "#666" }} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        <ExploreSection />
      </Box>
      <ContactSection />
    </ThemeProvider>
  );
}

export default App;