import { useSidebar } from "@/hooks/useSidebar";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import Avatar1 from "@/assets/images/avatar/avatar-1.png";
import routes from "@/routes/siteMaps";
import { Fragment, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const VerticalNavbar = () => {
  const theme = useTheme();
  const { collapsed, DRAWER_WIDTH, COLLAPSE_WIDTH } = useSidebar();

  const navigate = useNavigate();
  const location = useLocation();
  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({
    1: true
  });

  const handleSectionClick = (id: number) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isRouteActive = (path: string) => location.pathname === path;

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
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              bgcolor: theme.palette.primary.light
            }}
            alt="avatar-1"
            src={Avatar1}
          />
          <Box>
            <Typography
              variant="body1"
              color={theme.palette.text.primary}
              fontWeight={600}
              sx={{ textWrap: "nowrap" }}
            >
              Jane Doe
            </Typography>
            <Typography variant="body2">Admin</Typography>
          </Box>
        </Stack>
      </Toolbar>
      <Divider />
      <List>
        {routes.map((routeItem, index) => (
          <Fragment key={routeItem.id}>
            <ListItemButton
              onClick={() => handleSectionClick(routeItem.id)}
              sx={{
                justifyContent: collapsed ? "center" : "initial",
                padding: collapsed ? theme.spacing(1) : theme.spacing(1, 2),
                mt: index !== 0 ? 2 : 0
              }}
            >
              {!collapsed && (
                <ListItemText
                  primary={routeItem.label}
                  sx={{
                    textWrap: "nowrap",
                    opacity: collapsed ? 0 : 1,
                    transition: "opacity 0.3s"
                  }}
                />
              )}
              {!collapsed &&
                routeItem.pages &&
                (openSections[routeItem.id] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse
              in={openSections[routeItem.id]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {routeItem.pages &&
                  routeItem.pages.map((page) => (
                    <ListItemButton
                      key={page.id}
                      sx={{
                        pl: collapsed ? theme.spacing(1) : theme.spacing(4),
                        justifyContent: collapsed ? "center" : "initial",
                        backgroundColor: isRouteActive(page.path)
                          ? "action.selected"
                          : "transparent",
                        "&:hover": {
                          backgroundColor: isRouteActive(page.path)
                            ? "action.selected"
                            : "action.hover"
                        },
                        color:
                          page.active === false ? "text.disabled" : "inherit",
                        "&.Mui-disabled": {
                          color: theme.palette.text.disabled
                        }
                      }}
                      onClick={() => navigate(page.path)}
                      disabled={page.active === false}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          justifyContent: collapsed ? "center" : "initial"
                        }}
                      >
                        {page.icon}
                      </ListItemIcon>
                      {!collapsed && (
                        <ListItemText
                          primary={page.name}
                          sx={{
                            textWrap: "nowrap",
                            opacity: collapsed ? 0 : 1,
                            transition: "opacity 0.3s"
                          }}
                        />
                      )}
                    </ListItemButton>
                  ))}
              </List>
            </Collapse>
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default VerticalNavbar;
