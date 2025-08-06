import { useState, type PropsWithChildren } from "react";
import { SidebarContext } from "@/context/NavbarContext";
import { useTheme, useMediaQuery } from "@mui/material";

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [collapsed, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);
  const DRAWER_WIDTH = 240;
  const COLLAPSE_WIDTH = 80;

  const toggleSidebar = () => {
    isSmallScreen ? setOpen((prev) => !prev) : setCollapse((prev) => !prev);
  };

  return (
    <SidebarContext
      value={{
        collapsed,
        toggleSidebar,
        isSmallScreen,
        open,
        DRAWER_WIDTH,
        COLLAPSE_WIDTH
      }}
    >
      {children}
    </SidebarContext>
  );
};
