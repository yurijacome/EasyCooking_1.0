import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColorOne};
    color: ${props => props.theme.colorOne};





`;

export const RecipesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;


`;
