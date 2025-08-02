import { createTheme, type Theme } from "@mui/material/styles";

// --- Light Mode Palette ---
const lightPalette = {
  mode: "light" as const,
  primary: {
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#dc004e",
    light: "#ff3c7b",
    dark: "#9a0036",
    contrastText: "#ffffff"
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#ffffff"
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#ffffff"
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#ffffff"
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#ffffff"
  },
  background: {
    default: "#f4f6f8",
    paper: "#ffffff"
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)"
};

// --- Dark Mode Palette ---
const darkPalette = {
  mode: "dark" as const,
  primary: {
    main: "#90caf9",
    light: "#e3f2fd",
    dark: "#42a5f5",
    contrastText: "rgba(0, 0, 0, 0.87)"
  },
  secondary: {
    main: "#f48fb1",
    light: "#ffc1e3",
    dark: "#f06292",
    contrastText: "rgba(0, 0, 0, 0.87)"
  },
  error: {
    main: "#ef5350",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: "#ffffff"
  },
  warning: {
    main: "#ff9800",
    light: "#ffb74d",
    dark: "#f57c00",
    contrastText: "#ffffff"
  },
  info: {
    main: "#29b6f6",
    light: "#4fc3f7",
    dark: "#0288d1",
    contrastText: "#ffffff"
  },
  success: {
    main: "#66bb6a",
    light: "#81c784",
    dark: "#388e3c",
    contrastText: "#ffffff"
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e"
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)"
};

// --- Theme Objects ---
export const lightTheme: Theme = createTheme({
  palette: lightPalette
});

export const darkTheme: Theme = createTheme({
  palette: darkPalette
});
