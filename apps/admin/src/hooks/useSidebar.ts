import { SidebarContext } from "@/context/NavbarContext";
import { use } from "react";

export const useSidebar = () => {
  const context = use(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within SidebarProvider");

  return context;
};
