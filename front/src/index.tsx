import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/TopPage';
import reportWebVitals from './reportWebVitals';
import { useState, useEffect, StrictMode } from 'react';
import { RouterProvider, Link } from 'react-router-dom';
import { router } from './components/AppRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
