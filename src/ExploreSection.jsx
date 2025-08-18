import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const footerLinks = [
  { left: "About", right: "Privacy Policy" },
  { left: "Careers", right: "Terms Of Service" },
  { left: "Press", right: "Cookie Policy" },
];

export const ExploreSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    address: "",
    note: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        position: "relative",
        py: 4,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "1800px",
          mx: "auto",
          position: "relative",
        }}
      >
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* ✨ ITEM 1 (LEFT SIDE): Contact Info ✨ */}
          {/* This block comes first, so it will be on the left. */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ pt: 12 }}>
              <Typography
                sx={{
                  fontFamily: "Inter-Light, Helvetica",
                  fontWeight: 300,
                  color: "white",
                  fontSize: "64px",
                  textAlign: "center",
                  lineHeight: "20px",
                }}
              >
                CONTACT US
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Inter-Medium, Helvetica",
                  fontWeight: 500,
                  color: "white",
                  fontSize: "20px",
                  lineHeight: "normal",
                  maxWidth: "412px",
                }}
              >
                Some fluff about please reach out to us and stuff
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <IconButton
                  sx={{
                    color: "white",
                    width: 58,
                    height: 58,
                  }}
                >
                  <LinkedIn sx={{ fontSize: 58 }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: "white",
                    width: 48,
                    height: 48,
                  }}
                >
                  <Twitter sx={{ fontSize: 48 }} />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* ✨ ITEM 2 (RIGHT SIDE): The Form ✨ */}
          {/* This block comes second, so it will be on the right. */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#f5fff3",
                borderRadius: "48px",
                p: 4,
                maxWidth: "722px",
                ml: "500px", // Changed from ml: "500px" to 'auto' for better responsiveness
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter-SemiBold, Helvetica",
                  fontWeight: 600,
                  color: "#0c44b8",
                  fontSize: "40px",
                  textAlign: "center",
                  lineHeight: "20px",
                  mb: 4,
                  mt: 2,
                }}
              >
                GET IN TOUCH WITH US!
              </Typography>

              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Inter-Light, Helvetica",
                        fontWeight: 300,
                        color: "black",
                        fontSize: "20px",
                        textAlign: "center",
                        lineHeight: "20px",
                        mb: 1,
                      }}
                    >
                      Full name
                    </Typography>
                    <TextField
                      fullWidth
                      value={formData.fullName}
                      onChange={handleInputChange("fullName")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "rgba(217, 217, 217, 0.4)",
                          borderRadius: "11px",
                          border: "1px solid #28569c",
                          height: "57px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Inter-Light, Helvetica",
                        fontWeight: 300,
                        color: "black",
                        fontSize: "20px",
                        textAlign: "center",
                        lineHeight: "20px",
                        mb: 1,
                      }}
                    >
                      Company
                    </Typography>
                    <TextField
                      fullWidth
                      value={formData.company}
                      onChange={handleInputChange("company")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "rgba(217, 217, 217, 0.4)",
                          borderRadius: "11px",
                          border: "1px solid #28569c",
                          height: "57px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter-Light, Helvetica",
                      fontWeight: 300,
                      color: "black",
                      fontSize: "20px",
                      textAlign: "center",
                      lineHeight: "20px",
                      mb: 1,
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "rgba(217, 217, 217, 0.4)",
                        borderRadius: "11px",
                        border: "1px solid #28569c",
                        height: "57px",
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter-Light, Helvetica",
                      fontWeight: 300,
                      color: "black",
                      fontSize: "20px",
                      textAlign: "center",
                      lineHeight: "20px",
                      mb: 1,
                    }}
                  >
                    Address
                  </Typography>
                  <TextField
                    fullWidth
                    value={formData.address}
                    onChange={handleInputChange("address")}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "rgba(217, 217, 217, 0.4)",
                        borderRadius: "11px",
                        border: "1px solid #28569c",
                        height: "57px",
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter-Light, Helvetica",
                      fontWeight: 300,
                      color: "black",
                      fontSize: "20px",
                      textAlign: "center",
                      lineHeight: "20px",
                      mb: 1,
                    }}
                  >
                    Note
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.note}
                    onChange={handleInputChange("note")}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "rgba(217, 217, 217, 0.4)",
                        borderRadius: "11px",
                        border: "1px solid #28569c",
                        minHeight: "117px",
                      },
                    }}
                  />
                </Box>

                <Button
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: "#06235d",
                    color: "white",
                    borderRadius: "16px",
                    width: "179px",
                    height: "32px",
                    fontFamily: "Inter-Bold, Helvetica",
                    fontWeight: 700,
                    fontSize: "14px",
                    textAlign: "center",
                    lineHeight: "20px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#042671",
                    },
                  }}
                >
                  SEND MESSAGE
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "white", height: "1px", mb: 4 }} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              {footerLinks.map((link, index) => (
                <Typography
                  key={`left-${index}`}
                  sx={{
                    fontFamily: "Inter-Light, Helvetica",
                    fontWeight: 300,
                    color: "#f6fff4",
                    fontSize: "32px",
                    lineHeight: "80px",
                    cursor: "pointer",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  {link.left}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* ✨ CHANGE IS HERE ✨ */}
            {/* I've added padding-right (pr) to this Stack to move the text from the right edge. */}
            <Stack spacing={2} sx={{ textAlign: "right", pl: { md: 20 } }}>
              {footerLinks.map((link, index) => (
                <Typography
                  key={`right-${index}`}
                  sx={{
                    fontFamily: "Inter-Light, Helvetica",
                    fontWeight: 300,
                    color: "#f6fff4",
                    fontSize: "32px",
                    textAlign: "left",
                    lineHeight: "80px",
                    cursor: "pointer",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  {link.right}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};