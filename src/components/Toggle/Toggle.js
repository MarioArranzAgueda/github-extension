import React, {useState} from "react";
import { ToggleContainer } from "./Toggle.styled";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";

export const Toggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };
  return (
    <ToggleContainer lightTheme={theme === "light"} onClick={toggleTheme}>
      <Sun />
      <Moon />
    </ToggleContainer>
  );
};