import { useSidebar } from "@/hooks/useSidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import VerticalNavbar from "@/components/navbars/VerticalNavbar";
import TopNavbar from "../navbars/TopNavbar";

const MainLayout = () => {
  const { collapsed, COLLAPSE_WIDTH, DRAWER_WIDTH } = useSidebar();
  return (
    <>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <VerticalNavbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: `calc(100%-${collapsed ? COLLAPSE_WIDTH : DRAWER_WIDTH}px)`,
            transition: "width 0.3s"
          }}
        >
          <TopNavbar />
          <Box sx={{ paddingLeft: 2, paddingTop: 2 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
