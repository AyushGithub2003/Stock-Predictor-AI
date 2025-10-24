import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ENTRY POINT: Initialize React app and render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
