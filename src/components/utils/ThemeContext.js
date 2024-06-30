import { createContext } from "react";

const ThemeContext = createContext({
  isDark: false,
  setIsDark: () => {},
});

export default ThemeContext;
