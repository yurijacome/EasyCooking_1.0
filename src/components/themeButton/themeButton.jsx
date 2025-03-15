import React from 'react';
import { useContext } from "react"; // Import useContext for theme management
import { GlobalThemeContext } from '../../providers/models/theme/theme.jsx'; // Import the context


import {SwitchStyled} from "./themeButtonStyled"

export const ThemeButton = () => {
   const { getOpositeTheme } = useContext(GlobalThemeContext); 

   return (
   <>
      <SwitchStyled onClick={getOpositeTheme} className='switch'/>
   </>
   )
}