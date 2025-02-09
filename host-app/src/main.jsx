import React from 'react';
import * as ReactDOM from 'react-dom/client'; // ✅ Use react-dom/client for React 18+
import { StrictMode } from 'react';
import App from './App.jsx';

// ✅ Expose the correct version of ReactDOM (from react-dom/client)
window.React = React;
window.ReactDOM = ReactDOM;

console.log('React is now exposed on window:', window.React);
console.log('ReactDOM is now exposed on window:', window.ReactDOM);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
