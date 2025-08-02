import { type PropsWithChildren, useCallback, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "../theme/CustomTheme";
import { ThemeContext } from "@/context/ThemContext";

type Mode = "light" | "dark";
const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<Mode>("light");

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleColorMode,
      theme
    }),
    [mode, toggleColorMode, theme]
  );

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
};

export default ThemeContextProvider;
