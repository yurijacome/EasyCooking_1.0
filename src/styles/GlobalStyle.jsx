import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: rgb(30, 201, 67);
  }


  body, input, button, p {
    font-family: inherit, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #015ea0;
  }

`;