import React, { createContext } from 'react'

// creating context with 3 properties in an object
export const ThemeContext = createContext({
    theme: "light",
    ligthtMode: () => {},
    darkMode: () => {},
});

// creating themecontextprovider
export const ThemeContextProvider = ThemeContext.Provider;