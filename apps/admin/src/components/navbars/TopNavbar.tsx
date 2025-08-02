// import { useSidebar } from "@/hooks/useSidebar";
import { useThemeContext } from "@/hooks/useThemeContext";
import {
  AppBar,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const TopNavbar = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useThemeContext();
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        transition: "all 0.3s",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        backgroundImage: "none"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">Top Navbar</Typography>

        <IconButton onClick={toggleColorMode}>
          {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default TopNavbar;
