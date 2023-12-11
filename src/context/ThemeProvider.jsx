import React, { useState, createContext } from "react";

const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }
    const ejemplo = "Valor x"

    return (
        <ThemeContext.Provider value={
            {
                darkMode,
                setDarkMode,
                toggleDarkMode,
                ejemplo
            }
        }>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
