import { useSidebar } from "@/hooks/useSidebar";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  useTheme
} from "@mui/material";
import { useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";

const VerticalNavbar = () => {
  const theme = useTheme();
  const { collapsed, toggleSidebar, DRAWER_WIDTH, COLLAPSE_WIDTH } =
    useSidebar();

  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? COLLAPSE_WIDTH : DRAWER_WIDTH,
        "& .MuiDrawer-paper": {
          width: collapsed ? COLLAPSE_WIDTH : DRAWER_WIDTH,
          boxSizing: "border-box",
          overflow: "hidden",
          transition: "all 0.3s",
          backgroundColor: theme.palette.background.paper
        },
        transition: "all 0.3s",
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Toolbar>
        <IconButton disableRipple onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default VerticalNavbar;
