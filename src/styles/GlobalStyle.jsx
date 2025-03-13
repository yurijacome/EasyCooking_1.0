import { createGlobalStyle } from "styled-components";

const lightTheme = {

  backgroundColorOne: "rgb(255, 255, 255)",
  backgroundColorTwo: "rgb(241, 241, 241)",

  colorOne: "rgb(0, 0, 0)",
  colorTwo: "rgb(255, 255, 255)",

  pallet1: "rgb(255, 0, 0)", 
  pallet2: "rgb(255, 61, 0)",
  pallet3: "rgb(255, 136, 0)",
  pallet4: "rgb(255, 174, 0)",
  pallet5: "rgb(233, 198, 1)",

  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.21)",
  boxShadowHover: "0 8px 12px rgba(0, 0, 0, 0.25)",
  
  
  inputColor: "#E2E2E2", 
  inputColorFilter: "#E2E2E2",
  
  colorIcon: "#252525",
  rating: "#f68f11",
  title: "#ea1d2cff",



};

const darkTheme = {  

  backgroundColorOne: "rgb(20, 20, 20)",
  backgroundColorTwo: "rgb(39, 39, 39)",

  colorOne: "rgb(255, 255, 255)",
  colorTwo: "rgb(0, 0, 0)",

  pallet1: "rgb(255, 0, 0)", 
  pallet2: "rgb(255, 61, 0)",
  pallet3: "rgb(255, 136, 0)",
  pallet4: "rgb(255, 174, 0)",
  pallet5: "rgb(233, 198, 1)",

  boxShadow: "0 4px 6px rgba(255, 255, 255, 0.12)",
  boxShadowHover: "0 8px 12px rgba(255, 255, 255, 0.14)",

  inputColor:"rgb(48, 48, 48)",
  inputColorFilter: "rgb(20, 20, 20)",

  colorIcon: "#E2E2E2",
  rating: "#ffc60a",
  title: "#cd131fff",

  

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
  }


  body, input, button, p {
    font-family: inherit, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    cursor: pointer;
    font-weight: 600;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
  }

  a {
    text-decoration: none;
  }

`;