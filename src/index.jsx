import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ContactSection } from "./ContactSection";
import { ExploreSection } from "./ExploreSection";
import { ProfileSection } from "./ProfileSection";
import { ThemeProvider } from "./ThemeProvider";

const navigationItems = [
  { label: "Home", active: true },
  { label: "Investment", active: false },
  { label: "About Us", active: false },
  { label: "Contact Us", active: false },
];

const entrepreneursData = [
  {
    id: 1,
    name: "Name",
    industry: "Industry",
    image: "https://via.placeholder.com/331x331",
  },
  {
    id: 2,
    name: "Name",
    industry: "Industry",
    image: "https://via.placeholder.com/383x383",
  },
];

const investorsData = [
  {
    id: 1,
    name: "Name",
    industry: "Industry",
    image: "https://via.placeholder.com/331x331",
  },
  {
    id: 2,
    name: "Name",
    industry: "Industry",
    image: "https://via.placeholder.com/383x383",
  },
  {
    id: 3,
    name: "Name",
    industry: "Industry",
    image: "https://via.placeholder.com/331x331",
  },
];

export const Frame = () => {
  return (
    <ThemeProvider>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#f6fff4",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "1015px",
            background:
              "linear-gradient(180deg, rgba(4,27,75,1) 22%, rgba(9,71,205,1) 50%, rgba(246,255,244,1) 85%)",
            border: "1px solid black",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="doorkey-app/src/assets/doorkey copy 1.png"
            alt="Doorkey copy"
            sx={{
              position: "absolute",
              width: "254px",
              height: "254px",
              top: 0,
              left: 0,
            }}
          />

          <Stack
            direction="row"
            spacing={4}
            sx={{
              position: "absolute",
              top: "77px",
              left: "461px",
              width: "1114px",
              height: "108px",
            }}
          >
            {navigationItems.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "Kadwa-Bold, Helvetica",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "50px",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "4px 16px",
                  borderRadius: "40px",
                  ...(item.active && {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }),
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>

          <Box
            component="img"
            src="https://via.placeholder.com/87x125"
            alt="Vector"
            sx={{
              position: "absolute",
              width: "87px",
              height: "125px",
              top: "108px",
              right: "73px",
            }}
          />
        </Box>

        <ProfileSection />

        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            component="img"
            src="https://via.placeholder.com/1882x1641"
            alt="Group"
            sx={{
              position: "absolute",
              width: "1882px",
              height: "1641px",
              top: "131px",
              left: "87px",
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1, pt: "200px" }}>
            <Stack spacing={2} alignItems="center" sx={{ mb: 8 }}>
              <Box
                component="img"
                src="https://via.placeholder.com/1089x6"
                alt="Line"
                sx={{ width: "1089px", height: "6px" }}
              />
              <Typography
                sx={{
                  fontFamily: "Kadwa-Bold, Helvetica",
                  fontWeight: "bold",
                  color: "#28569c",
                  fontSize: "96px",
                  textAlign: "center",
                }}
              >
                Explore Entrepreneurs
              </Typography>
              <Box
                component="img"
                src="https://via.placeholder.com/1089x6"
                alt="Line"
                sx={{ width: "1089px", height: "6px" }}
              />
            </Stack>

            <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
              {entrepreneursData.map((entrepreneur) => (
                <Grid item key={entrepreneur.id}>
                  <Card
                    sx={{
                      width: "732px",
                      height: "863px",
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
                        width: entrepreneur.id === 1 ? "331px" : "383px",
                        height: entrepreneur.id === 1 ? "331px" : "383px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        mt: 2,
                      }}
                    />
                    <CardContent sx={{ textAlign: "center", p: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: "Kadwa-Bold, Helvetica",
                          fontWeight: "bold",
                          color: "black",
                          fontSize: "64px",
                          textAlign: "center",
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
                        width: "451px",
                        height: "116px",
                        backgroundColor: "#142c50",
                        borderRadius: "70px",
                        fontFamily: "Kadwa-Bold, Helvetica",
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "64px",
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
              spacing={4}
              sx={{ mb: 8 }}
            >
              <Box
                sx={{
                  width: "125px",
                  height: "114px",
                  backgroundColor: "#d9d9d9",
                  borderRadius: "62.5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowBackIos sx={{ fontSize: "40px", color: "#666" }} />
              </Box>
              <Box
                sx={{
                  width: "125px",
                  height: "114px",
                  backgroundColor: "#d9d9d9",
                  borderRadius: "62.5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIos sx={{ fontSize: "40px", color: "#666" }} />
              </Box>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ position: "relative", width: "100%", mb: 8 }}>
          <Box
            component="img"
            src="https://via.placeholder.com/2052x1812"
            alt="Group"
            sx={{
              position: "absolute",
              width: "2052px",
              height: "1812px",
              top: 0,
              left: "2px",
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1, pt: "100px" }}>
            <Stack spacing={2} alignItems="center" sx={{ mb: 8 }}>
              <Box
                component="img"
                src="https://via.placeholder.com/1089x6"
                alt="Line"
                sx={{ width: "1089px", height: "6px" }}
              />
              <Typography
                sx={{
                  fontFamily: "Kadwa-Bold, Helvetica",
                  fontWeight: "bold",
                  color: "#28569c",
                  fontSize: "96px",
                  textAlign: "center",
                }}
              >
                Explore Investors
              </Typography>
              <Box
                component="img"
                src="https://via.placeholder.com/1089x6"
                alt="Line"
                sx={{ width: "1089px", height: "6px" }}
              />
            </Stack>

            <Grid container spacing={4} justifyContent="center">
              {investorsData.map((investor) => (
                <Grid item key={investor.id}>
                  <Card
                    sx={{
                      width: "565px",
                      height: "671px",
                      backgroundColor: "#fbfbfb",
                      borderRadius: "50px",
                      border: "4px solid #0c44b8",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={investor.image}
                      alt="Profile"
                      sx={{
                        width: investor.id === 2 ? "383px" : "331px",
                        height: investor.id === 2 ? "383px" : "331px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        mt: 2,
                      }}
                    />
                    <CardContent sx={{ textAlign: "center", p: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: "Kadwa-Bold, Helvetica",
                          fontWeight: "bold",
                          color: "black",
                          fontSize: "64px",
                          textAlign: "center",
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
                        width: "451px",
                        height: "116px",
                        backgroundColor: "#142c50",
                        borderRadius: "70px",
                        fontFamily: "Kadwa-Bold, Helvetica",
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "64px",
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
          </Box>
        </Box>

        <ExploreSection />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
};

export default Frame;
