import React from 'react';
import { useContext } from "react"; // Import useContext for theme management
import { GlobalThemeContext } from '../../providers/models/theme/theme.jsx'; // Import the context

import Header from '../../components/header/header';
import { Container } from "./homeStyle.js";
import StyledButton from '../../components/StyledButton'; 

const Home = () => {

  const { currentTheme, getOpositeTheme } = useContext(GlobalThemeContext); // Use context to get theme switch function

  return (

    <div>

      <Header />
      <StyledButton onClick={getOpositeTheme}>TEMA</StyledButton>

      <Container>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the application.</p>
      </Container>

    </div>

  );

};

export default Home;
