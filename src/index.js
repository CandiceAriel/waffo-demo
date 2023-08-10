import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/js/i18next';
import { BrowserRouter } from 'react-router-dom';

import './assets/scss/style.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </BrowserRouter>
);