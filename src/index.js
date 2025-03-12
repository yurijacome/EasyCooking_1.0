import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalTheme } from './providers/models/theme/theme.jsx'; // Import the GlobalTheme provider


ReactDOM.render(
  <React.StrictMode>
    <GlobalTheme> {/* Wrap App with GlobalTheme provider */}
        <App />
    </GlobalTheme>

  </React.StrictMode>,
  document.getElementById('root')
);
