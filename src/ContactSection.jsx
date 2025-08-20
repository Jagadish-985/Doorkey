import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

export const ContactSection = () => {
  const footerLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f6fff4",
        borderTop: "1px solid",
        borderColor: "grey.300",
        py: 5,
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: 2,
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography
            sx={{
              fontFamily: "Inter-Regular, Helvetica",
              fontSize: "14px",
              fontWeight: 400,
              color: "#60a5fa",
              textAlign: "center",
              lineHeight: "20px",
            }}
          >
            © 2023 DoorKey. All rights reserved. Made with{" "}
            <span style={{ color: "#3b82f6" }}>♥</span> for innovators.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter-Regular, Helvetica",
              fontSize: "14px",
              fontWeight: 400,
              color: "#60a5fa",
              textAlign: "center",
              lineHeight: "20px",
            }}
          >
            {"{}"}
          </Typography>

          <Stack direction="row" spacing={3} alignItems="center">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{
                  fontFamily: "Inter-Regular, Helvetica",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#60a5fa",
                  textDecoration: "none",
                  lineHeight: "20px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {link.text}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Box>
      
    </Box>
  );
};
