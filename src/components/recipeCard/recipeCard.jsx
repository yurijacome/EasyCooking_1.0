import { RecipeCardContainer } from "./recipeCardStyle";

export const RecipeCard = () => {

    return (
    <>  
    <RecipeCardContainer>
        <h2 className="RecipeName">Recipe Name</h2>
        <p className="RecipeDescription">Recipe Description</p>
        <p className="RecipeIngredients">Recipe Ingredients</p>
        

    </RecipeCardContainer>
    </>
    );
};


