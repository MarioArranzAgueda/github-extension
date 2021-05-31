// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';
import {ToggleContainer} from './Toggle.styled';
import {ReactComponent as Sun} from '../../assets/sun.svg'
import {ReactComponent as Moon} from '../../assets/moon.svg'

export const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <Sun/>
      <Moon/>
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
