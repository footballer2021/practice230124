import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Router } from './routes/Router';

const ROUTER_BASENAME = process.env.NODE_ENV === 'development' ? '/' : '/practice230124';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: "Noto Sans", sans-serif;
}
`;

const App:React.FC = () => {
  return (
    <BrowserRouter basename={ROUTER_BASENAME}>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;