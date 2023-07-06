import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [isDarkMode,setDarkMode] = useState(localStorage.getItem('theme')=="dark"? true:false)




  useEffect(()=>{
    localStorage.getItem("theme" , isDarkMode? 'dark' :'light')
  },[isDarkMode])

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };
    return (
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;