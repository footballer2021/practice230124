import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';

const ROUTER_BASENAME = process.env.NODE_ENV === 'development' ? '/' : '/practice230124';

const App:React.FC = () => {
  return (
    <BrowserRouter basename={ROUTER_BASENAME}>
      <Router />
    </BrowserRouter>
  );
}

export default App;