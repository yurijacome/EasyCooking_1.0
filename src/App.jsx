import React, { useContext } from 'react';
import AppRoutes from './routes/AppRoutes';
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/GlobalStyle';
import { GlobalThemeContext } from './providers/models/theme/theme.jsx'; // Import the context

const App = () => {
  const { currentTheme } = useContext(GlobalThemeContext); // Use context to get current theme

  console.log("Current Theme:", currentTheme); // Log the current theme for debugging

  return (
    <ThemeProvider theme={themes[currentTheme] || themes.light}> {/* Fallback to light theme if currentTheme is undefined */}
      <div className="App">
        <GlobalStyle />
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
