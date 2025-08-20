import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3b82f6", // blue-500
      light: "#dbeafe", // blue-50
      dark: "#1d4ed8", // blue-700
    },
    secondary: {
      main: "#28569c", // custom blue from design
      light: "#6c91df", // lighter blue variant
      dark: "#142c50", // darker blue variant
    },
    error: {
      main: "#ef4444", // red-500
    },
    warning: {
      main: "#f59e0b", // amber-500
    },
    info: {
      main: "#06b6d4", // cyan-500
    },
    success: {
      main: "#10b981", // emerald-500
    },
    grey: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    background: {
      default: "#f6fff4", // custom light green background
      paper: "#ffffff",
    },
    text: {
      primary: "#111827", // gray-900
      secondary: "#4b5563", // gray-600
    },
    // Custom colors from the design
    customBlue: {
      main: "#0c44b8",
      light: "#6c91df80",
      dark: "#042671",
    },
    customGreen: {
      main: "#f6fff4",
      light: "#f5fff3",
    },
    customGray: {
      main: "#d9d9d9",
      light: "#fbfbfb",
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "96px",
      fontWeight: "bold",
      letterSpacing: "0",
      lineHeight: "normal",
      fontFamily: "Kadwa-Bold, Helvetica",
    },
    h2: {
      fontSize: "64px",
      fontWeight: "bold",
      letterSpacing: "0",
      lineHeight: "normal",
      fontFamily: "Kadwa-Bold, Helvetica",
    },
    h3: {
      fontSize: "50px",
      fontWeight: "bold",
      letterSpacing: "0",
      lineHeight: "normal",
      fontFamily: "Kadwa-Bold, Helvetica",
    },
    h4: {
      fontSize: "40px",
      fontWeight: 600,
      letterSpacing: "0",
      lineHeight: "20px",
      fontFamily: "Inter-SemiBold, Helvetica",
    },
    h5: {
      fontSize: "32px",
      fontWeight: "bold",
      letterSpacing: "0",
      lineHeight: "32px",
      fontFamily: "Inter-Bold, Helvetica",
    },
    h6: {
      fontSize: "28px",
      fontWeight: "bold",
      letterSpacing: "0",
      lineHeight: "36px",
      fontFamily: "Inter-Bold, Helvetica",
    },
    subtitle1: {
      fontSize: "24px",
      fontWeight: 600,
      letterSpacing: "0",
      lineHeight: "21px",
      fontFamily: "Inter-SemiBold, Helvetica",
    },
    subtitle2: {
      fontSize: "20px",
      fontWeight: 300,
      letterSpacing: "0",
      lineHeight: "20px",
      fontFamily: "Inter-Light, Helvetica",
    },
    body1: {
      fontSize: "24px",
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: "20px",
      fontFamily: "Inter-Regular, Helvetica",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "0.10000000149011612px",
      lineHeight: "20px",
      fontFamily: "Roboto, Helvetica",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      letterSpacing: "0.30px",
      lineHeight: "16px",
      fontFamily: "Inter-Regular, Helvetica",
    },
    overline: {
      fontSize: "32px",
      fontWeight: 300,
      letterSpacing: "0",
      lineHeight: "100px",
      fontFamily: "Inter-Light, Helvetica",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "70px",
          fontSize: "64px",
          fontWeight: "bold",
          fontFamily: "Kadwa-Bold, Helvetica",
          padding: "16px 32px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          border: "4px solid #0c44b8",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          border: "1px solid #3b82f6",
          backgroundColor: "#dbeafe",
          color: "#3b82f6",
          fontSize: "24px",
          fontWeight: 500,
          fontFamily: "Inter-Medium, Helvetica",
          padding: "6px 15px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "11px",
            backgroundColor: "rgba(217, 217, 217, 0.4)",
            border: "1px solid #28569c",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
