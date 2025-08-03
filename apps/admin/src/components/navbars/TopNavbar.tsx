import { useThemeContext } from "@/hooks/useThemeContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSidebar } from "@/hooks/useSidebar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState, type MouseEvent } from "react";
import Avatar1 from "@/assets/images/avatar/avatar-1.png";
import Settings from "@mui/icons-material/Settings";
import PasswordIcon from "@mui/icons-material/Password";
import Logout from "@mui/icons-material/Logout";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    height: 20,
    width: 20,
    fontSize: "0.6rem",
    backgroundColor: theme.palette.error.main,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 0
  }
}));

const TopNavbar = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useThemeContext();
  const { toggleSidebar, collapsed } = useSidebar();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: 2
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton
            disableRipple
            onClick={toggleSidebar}
            sx={{
              paddingLeft: 0,
              transition: "all 0.3s",
              color: theme.palette.text.primary
            }}
          >
            {collapsed ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6">Formora Admin</Typography>
        </Stack>

        <Box>
          <IconButton onClick={toggleColorMode}>
            {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              badgeContent={4}
            >
              <NotificationsIcon />
            </StyledBadge>
          </IconButton>
          <Tooltip title="Account Setting">
            <IconButton
              onClick={handleClick}
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: theme.palette.primary.light
                }}
                alt="avatar2"
                src={Avatar1}
              />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0
                  }
                }
              }
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar alt="avatar" src={Avatar1} /> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PasswordIcon fontSize="small" />
              </ListItemIcon>
              Change Password
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default TopNavbar;
