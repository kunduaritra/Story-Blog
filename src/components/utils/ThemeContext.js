import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme === "true" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const themeContextValues = {
    isDark: isDark,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValues}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
