import React from 'react'
import App from './App_page.jsx'
import UsoDomestico from './Usodomestico_page'
import Usocomercial from './Usocomercial_page'
import Login_page from './Login_page'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/domestico",
    element: <UsoDomestico />,
  },
  {
    path: "/comercial",
    element: <Usocomercial />,
  },
  {
    path: "/login",
    element: <Login_page />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
