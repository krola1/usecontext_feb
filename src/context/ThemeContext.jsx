/* eslint-disable react-refresh/only-export-components */
/// imports
import { useContext, createContext, useState } from "react";

// initialize context
const ThemeContext = createContext();

// hook
export const useTheme = () => useContext(ThemeContext);

//provider.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("red");

  /// theme toggler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "red" ? "blue" : "red"));
  };

  const providerObj = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={providerObj}>
      {children}
    </ThemeContext.Provider>
  );
};
