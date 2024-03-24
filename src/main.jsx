import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom"

import Home from './modules/Home';
import Reservas from './modules/Reservas';
import ContactForm from './components/home/ContactForm'
import Login from './components/home/Login';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />
  },

  {
    path: "/Reservas",
    element: <Reservas />
  },

  {
    path: "/Contactanos",
    element: <ContactForm />
  },

  {
    path: "/Login",
    element: <Login />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>,
)
