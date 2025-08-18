import Face from "@mui/icons-material/Face";
import LinkIcon from "@mui/icons-material/Link";
import LocationOn from "@mui/icons-material/LocationOn";
import Psychology from "@mui/icons-material/Psychology";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import Send from "@mui/icons-material/Send";
import WorkHistory from "@mui/icons-material/WorkHistory";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const statsData = [
  { value: "2", label: "STARTUPS FOUNDED" },
  { value: "10+", label: "YEARS EXPERIENCE" },
  { value: "50+", label: "TEAM MEMBERS LED" },
];

const skillsData = [
  "Artificial Intelligence",
  "SaaS Development",
  "Product Management",
  "Startup Growth",
  "Strategic Planning",
  "Team Leadership",
  "Sustainable Technology",
  "EdTech",
  "Venture Capital",
];

const experienceData = [
  {
    title: "Co-founder & CEO, Innovatech Solutions",
    period: "2018 - Present",
    description:
      "Led the development and launch of an AI-powered analytics platform, securing Series A funding and growing the team from 3 to 50 employees.",
  },
  {
    title: "Product Lead, TechGen Inc.",
    period: "2015 - 2018",
    description:
      "Managed the product lifecycle for a suite of enterprise software, significantly increasing user engagement and revenue.",
  },
];

export const ProfileSection = () => {
  return (
    <Box
      sx={{
        width: "70%",
        backgroundColor: "transparent",
        alignItems: "center",
        borderRadius: 2,
        border: "3px solid",
        borderColor: "grey.300",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        position: "relative",
      }}
    >
      {/* Header Section with Gradient Background */}
      <Box
        sx={{
          height: 434,
          borderRadius: "16px 16px 0px 0px",
          background:
            "linear-gradient(188deg, rgba(75,85,99,1) 18%, rgba(6,48,136,1) 50%)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter-Bold, Helvetica",
            fontWeight: "bold",
            color: "#f5fff3",
            fontSize: "72px",
            lineHeight: "36px",
            textAlign: "center",
            mb: 2,
          }}
        >
          Aria Montgomery
        </Typography>

        <Typography
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontWeight: "normal",
            color: "#f5fff3",
            fontSize: "32px",
            lineHeight: "34px",
            textAlign: "center",
          }}
        >
          Visionary Entrepreneur & Innovator
        </Typography>

        <Avatar
          sx={{
            width: 294,
            height: 294,
            position: "absolute",
            left: "50%",
            bottom: -146,
            transform: "translateX(-50%)",
            backgroundColor: "#f6fff4",
            border: "4px solid #f6fff4",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          }}
          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
          alt="Aria Montgomery"
        />
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          backgroundColor: "#dbeafe",
          borderRadius: "0px 0px 12px 12px",
          border: "1px solid black",
          pt: 20,
          pb: 4,
          px: 4,
        }}
      >
        {/* Location and Website Info */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOn sx={{ color: "#3b82f6", fontSize: 18 }} />
            <Typography
              sx={{
                fontFamily: "Inter-Regular, Helvetica",
                fontWeight: "normal",
                color: "#4b5563",
                fontSize: "24px",
                lineHeight: "20px",
              }}
            >
              San Francisco, CA
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontFamily: "Inter-Regular, Helvetica",
              fontWeight: "normal",
              color: "#d1d5db",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            |
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <LinkIcon sx={{ color: "#3b82f6", fontSize: 17 }} />
            <Typography
              sx={{
                fontFamily: "Inter-Regular, Helvetica",
                fontWeight: "normal",
                color: "#3b82f6",
                fontSize: "24px",
                lineHeight: "20px",
              }}
            >
              ariamontgomery.io
            </Typography>
          </Stack>
        </Stack>

        {/* About Me Section */}
        <Box sx={{ mb: 6 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 4 }}>
            <Face sx={{ color: "#3b82f6", fontSize: 32 }} />
            <Typography
              sx={{
                fontFamily: "Inter-Bold, Helvetica",
                fontWeight: "bold",
                color: "#1f2937",
                fontSize: "28px",
                lineHeight: "36px",
              }}
            >
              About Me
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontFamily: "Inter-Regular, Helvetica",
              fontWeight: "normal",
              color: "#4b5563",
              fontSize: "24px",
              lineHeight: "33px",
              maxWidth: 929,
            }}
          >
            Hello! I'm Aria, a passionate entrepreneur dedicated to building
            solutions that address real-world problems through innovative
            technology. With over 10 years of experience in the tech industry,
            I've co-founded two successful startups, focusing on AI-driven SaaS
            platforms. My expertise lies in product development, strategic
            growth, and fostering collaborative team environments.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box
          sx={{
            borderTop: "1px solid #f3f4f6",
            borderBottom: "1px solid #f3f4f6",
            py: 3,
            mb: 6,
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            {statsData.map((stat, index) => (
              <Grid item key={index}>
                <Card
                  sx={{
                    width: 255,
                    height: 99,
                    backgroundColor: "#f8fafc",
                    border: "1px solid #f3f4f6",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardContent sx={{ textAlign: "center", py: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter-Bold, Helvetica",
                        fontWeight: "bold",
                        color: "#3b82f6",
                        fontSize: "24px",
                        lineHeight: "32px",
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter-Regular, Helvetica",
                        fontWeight: "normal",
                        color: "#4b5563",
                        fontSize: "12px",
                        letterSpacing: "0.30px",
                        lineHeight: "16px",
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Connect and Follow Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          <Button
            variant="contained"
            startIcon={<Send />}
            sx={{
              backgroundColor: "#3b82f6",
              color: "#f6fff4",
              borderRadius: 1,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              fontFamily: "Inter-SemiBold, Helvetica",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "24px",
              px: 3,
              py: 1.5,
              textTransform: "none",
            }}
          >
            Connect
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#3b82f6",
              color: "#3b82f6",
              borderRadius: 1,
              borderWidth: 2,
              fontFamily: "Inter-SemiBold, Helvetica",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "24px",
              px: 3,
              py: 1.5,
              textTransform: "none",
              "&:hover": {
                borderWidth: 2,
              },
            }}
          >
            Follow
          </Button>
        </Stack>

        {/* Skills & Interests Section */}
        <Box sx={{ mb: 6 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 4 }}>
            <Psychology sx={{ color: "#3b82f6", fontSize: 32 }} />
            <Typography
              sx={{
                fontFamily: "Inter-Bold, Helvetica",
                fontWeight: "bold",
                color: "#1f2937",
                fontSize: "28px",
                lineHeight: "36px",
              }}
            >
              Skills & Interests
            </Typography>
          </Stack>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {skillsData.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                sx={{
                  backgroundColor: "#dbeafe",
                  color: "#3b82f6",
                  border: "1px solid #3b82f6",
                  borderRadius: "9999px",
                  fontFamily: "Inter-Medium, Helvetica",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "21px",
                  px: 2,
                  py: 0.75,
                  height: 35,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Experience Section */}
        <Box sx={{ mb: 6 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 4 }}>
            <WorkHistory sx={{ color: "#3b82f6", fontSize: 32 }} />
            <Typography
              sx={{
                fontFamily: "Inter-Bold, Helvetica",
                fontWeight: "bold",
                color: "#1f2937",
                fontSize: "28px",
                lineHeight: "36px",
              }}
            >
              Experience
            </Typography>
          </Stack>

          <Stack spacing={2}>
            {experienceData.map((experience, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: "#dbeafe",
                  border: "3px solid #0c44b8",
                  borderRadius: 1,
                  p: 2,
                }}
              >
                <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter-SemiBold, Helvetica",
                      fontWeight: 600,
                      color: "#042671",
                      fontSize: "32px",
                      lineHeight: "30px",
                      mb: 1,
                    }}
                  >
                    {experience.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter-Regular, Helvetica",
                      fontWeight: "normal",
                      color: "#0c44b8",
                      fontSize: "24px",
                      lineHeight: "34px",
                      mb: 2,
                    }}
                  >
                    {experience.period}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter-Regular, Helvetica",
                      fontWeight: "normal",
                      color: "#4b5563",
                      fontSize: "32px",
                      lineHeight: "30px",
                    }}
                  >
                    {experience.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* Current Ventures Section */}
        <Box>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 4 }}>
            <RocketLaunch sx={{ color: "#3b82f6", fontSize: 32 }} />
            <Typography
              sx={{
                fontFamily: "Inter-Bold, Helvetica",
                fontWeight: "bold",
                color: "#1f2937",
                fontSize: "28px",
                lineHeight: "36px",
              }}
            >
              Current Ventures
            </Typography>
          </Stack>

          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Box
                component="img"
                src="https://static.vecteezy.com/system/resources/previews/020/336/044/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg"
                alt="Vector"
                sx={{
                  width: 441,
                  height: 611,
                }}
              />
            </Grid>
            <Grid item>
              <Box
                component="img"
                src="https://i.pinimg.com/originals/d4/a1/37/d4a1375bf0781ce0810a7ad7e5e252db.jpg"
                alt="Image"
                sx={{
                  width: 441,
                  height: 611,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        boxAlign: "center",
        alignItems: "center",
        backgroundColor: "#f6fff4",
      }}
    >
      <ProfileSection />
    </Box>
  );
};

export default App;
