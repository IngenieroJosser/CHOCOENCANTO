import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom"

import './style/css/style.css'

import Home from './modules/Home';
import Reservas from './modules/Reservas';
import LogSign from './modules/LogSign';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />
  },

  {
    path: '/Reservas',
    element: <Reservas />
  },

  {
    path: "/Registro",
    element: <LogSign />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>,
)
