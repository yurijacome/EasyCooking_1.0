import React from 'react';
import { useContext } from "react"; // Import useContext for theme management
import { GlobalThemeContext } from '../../providers/models/theme/theme.jsx'; // Import the context

import { StyledThemeButton } from "./themeButtonStyled"
import { GiCampfire } from "react-icons/gi"; // Fogo aceso
import { GoPrimitiveDot } from "react-icons/go"; // Boca apagada
import { Circle } from "lucide-react"; // Boca apagada

export const ThemeButton = () => {
   const { getOpositeTheme } = useContext(GlobalThemeContext); // Use context to get theme switch function
 const {currentTheme} = useContext(GlobalThemeContext);
 
    return (
    <>
    <StyledThemeButton onClick={getOpositeTheme}>
    {currentTheme === "light" ? <GiCampfire className='FireIcon' /> : <Circle />}
    </StyledThemeButton>
    </>
    )
}