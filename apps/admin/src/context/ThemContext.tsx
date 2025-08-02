import type { Theme } from "@mui/material";
import { createContext } from "react";
import { lightTheme } from "../theme/CustomTheme";

interface Context {
  mode: "light" | "dark";
  toggleColorMode: () => void;
  theme: Theme;
}
export const ThemeContext = createContext<Context>({
  mode: "light",
  toggleColorMode: () => {},
  theme: lightTheme
});
