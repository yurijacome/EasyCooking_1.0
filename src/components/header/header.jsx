import React from 'react';
import { useContext } from "react"; // Import useContext for theme management
import { GlobalThemeContext } from '../../providers/models/theme/theme.jsx'; // Import the context
import { useHistory } from 'react-router-dom';

import { HeaderContainer } from "./styleHeader";
import { UserButton } from '../userButton/userButton.jsx';

import LogoBlack from '../../assets/logoBlack.svg';
import LogoWhite from '../../assets/logoWhite.svg'; // Import LogoWhite for dark theme


const Header = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push('/');
  };


  const { currentTheme } = useContext(GlobalThemeContext); // Use context to get theme switch function


  return (

    <HeaderContainer className="header-container">
      <img className="imgLogo" 
      src={currentTheme === 'light' ? LogoBlack : LogoWhite} alt="Logo" 
      onClick={handleHome} />
      <UserButton/>
    </HeaderContainer>

  );

};

export default Header;
