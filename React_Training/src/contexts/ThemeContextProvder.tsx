import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  themeMode: string;
  darkTheme: () => void;
  lightTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

const useTheme = () => {
  return useContext(ThemeContext);
}

export default useTheme;
