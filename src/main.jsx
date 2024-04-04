import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom"

import './style/css/style.css'

import Home from './modules/Home';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />
  },

  {
    path: "/Reservas",
    element: ''
  },

  {
    path: "/Contactanos",
    element: ''
  },

  {
    path: "/Login",
    element: ''
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>,
)
