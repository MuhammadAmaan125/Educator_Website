import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './Config/Navigation';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
    </BrowserRouter>
    
  </React.StrictMode>
);

