import { createContext } from "react";

interface SidebarContextType {
  collapsed: boolean;
  toggleSidebar: () => void;
  DRAWER_WIDTH: number;
  COLLAPSE_WIDTH: number;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
