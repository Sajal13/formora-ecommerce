import { createContext } from "react";

interface SidebarContextType {
  collapsed: boolean;
  open: boolean; // New state for small screens
  isSmallScreen: boolean; // New state to detect screen size
  toggleSidebar: () => void;
  DRAWER_WIDTH: number;
  COLLAPSE_WIDTH: number;
  handleDrawerToggle: () => void;
  handleCollapseToggle: () => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
