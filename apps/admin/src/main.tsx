import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeContextProvider from "@/providers/ThemeSwitcher.tsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/index";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/800.css";
import "@fontsource/roboto/900.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>
);
