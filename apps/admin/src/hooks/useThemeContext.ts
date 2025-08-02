import { use } from "react";
import { ThemeContext } from "@/context/ThemContext";

export const useThemeContext = () => {
  return use(ThemeContext);
};
