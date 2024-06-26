import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom"

import './style/css/style.css'

import Home from './modules/Home';
import Reservas from './modules/Reservas';
import LogSign from './modules/LogSign';
import Experiences from './components/experiences/Experiences';
import Error404 from './components/error/Error404-';
import CreateAccount from './components/log/module/CreateAccount';
import Dashboard from './modules/Dashboard';

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
  },

  {
    path: "/Unete",
    element: <CreateAccount />
  },

  {
    path: "/Experiencias",
    element: <Experiences />
  },

  {
    path: '/Admin',
    element: <Dashboard />
  },

  {
    path: "*",
    element: <Error404 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>,
)
