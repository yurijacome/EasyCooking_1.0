import { createGlobalStyle } from "styled-components";

const lightTheme = {
  colorHeader: "#ECECEC",
  backgroundColorOne: "#ffffff",
  backgroundColorTwo: "#EA1D2C",
  colorOne: "#rgb(0, 0, 0)",
  colorTwo: "rgb(255, 255, 255)",
  catOne: "#FFEB0A",
  catTwo: "#ffc60a",
  catTree: "#f68f11",
  catFour: "#F64F11",
  inputColor: "#E2E2E2", 
  colorIcon: "#252525",
  rating: "#f68f11",
  title: "#ea1d2cff",


  button: {
      textColor: "#ffffff",
      backgroundColor: "#ea1d2cff",
  },
};

const darkTheme = {
  colorOne: "#ffffff",
  colorTwo: "#000000",
  colorHeader: "#121212",
  backgroundColorOne: "#252525",
  backgroundColorTwo: "#5D090E",
  catOne: "#FFEB0A",
  catTwo: "#ffc60a",
  catTree: "#f68f11",
  catFour: "#F64F11",
  inputColor:"#333333",
  colorIcon: "#E2E2E2",
  rating: "#ffc60a",
  title: "#cd131fff",

  
  button: {
    textColor: "#ffffff",
    backgroundColor: "#800000",
  },
};

export const themes = {
light: lightTheme,
dark: darkTheme,

};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
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