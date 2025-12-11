import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { getCompanyProfile } from './api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


console.log(getCompanyProfile("tsla"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

