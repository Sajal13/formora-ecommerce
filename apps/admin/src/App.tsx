import { useThemeContext } from "@/hooks/useThemeContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";
import { SidebarProvider } from "@/providers/NavbarToggleProvider";
import "@/App.css";

function App() {
  const { theme } = useThemeContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <SidebarProvider>
          <CssBaseline />
          <Outlet />
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
