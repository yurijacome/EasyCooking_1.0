import styled from "styled-components";

export const RecipeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColorTwo};
  border-radius: 30px;
  border: none;
  width: 30%;
  height: 340px;
  padding: 15px;
  justify-content: space-between;
  margin-top: 30px;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) => props.theme.boxShadow};

  &:hover {    
  box-shadow: ${(props) => props.theme.boxShadowHover};
  transform: translateY(-15px);
  }













`;