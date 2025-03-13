import React from 'react';
import { useContext } from "react"; // Import useContext for theme management
import { GlobalThemeContext } from '../../providers/models/theme/theme.jsx'; // Import the context

import Header from '../../components/header/header';
import { Container, RecipesContainer } from "./homeStyle.js";
import StyledButton from '../../components/StyledButton'; 
import { FilterArea } from "../../components/filterArea/filterArea";
import { RecipeCard } from "../../components/recipeCard/recipeCard";
const Home = () => {

  const { getOpositeTheme } = useContext(GlobalThemeContext); // Use context to get theme switch function

  return (
    <>

      <Container>
        <StyledButton onClick={getOpositeTheme}>TEMA</StyledButton>
        <Header />
        <FilterArea />
        <RecipesContainer>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          
        </RecipesContainer>
      </Container>

    </>
  );
};

export default Home;
