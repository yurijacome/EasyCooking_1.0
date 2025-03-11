import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from "./styleHeader";
import logo from '../../assets/logoBlack.svg';

const Header = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push('/');
  };

  const handleLogin = () => {
    history.push('/login');
  };


  return (

    <HeaderContainer className="header-container">
      <img className="imgLogo" src={logo} alt="logo" onClick={handleHome} />
      <button className="button" onClick={handleLogin}>Login</button>
    </HeaderContainer>

  );

};

export default Header;
