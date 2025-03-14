import React from 'react';

import Header from '../../components/header/header';
import { Container, RecipesContainer } from "./homeStyle.js";

import { ThemeButton } from '../../components/themeButton/themeButton.jsx';
import { FilterArea } from "../../components/filterArea/filterArea";
import { RecipeCard } from "../../components/recipeCard/recipeCard";


const Home = () => {


  return (
    <>

      <Container>
        <ThemeButton/>
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
