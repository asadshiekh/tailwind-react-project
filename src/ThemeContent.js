import React, { createContext, useEffect, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Simple one
  // const [isLoggedIn, setIsLoggedIn] = useState(0);

  // With local-storage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize isLoggedIn state from localStorage or default to 0
    return localStorage.getItem('isLoggedIn') || 0;
  });


  // Simple one
  // const login = () => {
  //   // Your login logic here...
  //   setIsLoggedIn(1);
  // };

    // With local-storage
  const login = () => {
    // Your login logic here...
    localStorage.setItem('isLoggedIn', 1);
    setIsLoggedIn(1);
  };



  // SImple one
  // const logout = () => {
  //   // Your logout logic here...
  //   setIsLoggedIn(0);
  // };


  // With local-storage
  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('fullName');
    setIsLoggedIn(0);
  };
 
  useEffect(() => {
    document.body.classList.toggle('bg-black', isDarkMode);
    document.body.classList.toggle('bg-white', !isDarkMode);
  },[isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode,toggleDarkMode,isLoggedIn, login, logout,setIsLoggedIn}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

