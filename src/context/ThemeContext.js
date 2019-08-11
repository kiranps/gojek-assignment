import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export const useTheme = () => ({ theme: useContext(ThemeContext) });
