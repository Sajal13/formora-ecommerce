import { useState, type PropsWithChildren } from "react";
import { SidebarContext } from "@/context/NavbarContext";

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [collapsed, setCollapse] = useState(false);
  const DRAWER_WIDTH = 240;
  const COLLAPSE_WIDTH = 80;

  const toggleSidebar = () => setCollapse((prev) => !prev);

  return (
    <SidebarContext
      value={{ collapsed, toggleSidebar, DRAWER_WIDTH, COLLAPSE_WIDTH }}
    >
      {children}
    </SidebarContext>
  );
};
