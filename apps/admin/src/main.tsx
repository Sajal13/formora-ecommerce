import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeContextProvider from "@/providers/ThemeSwitcher.tsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>
);
