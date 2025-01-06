import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContext);
}

export const DarkModeProvider = ( {children} ) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkmode") === "true";
        setIsDarkMode(savedMode);
        if (savedMode){
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
        if (!isDarkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkmode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkmode", "false");
        }
    };

    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};
