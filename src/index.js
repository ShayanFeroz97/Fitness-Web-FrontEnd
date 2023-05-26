import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Notfound from "./Notfound";

const Token = localStorage.getItem('Token') 


export const routes1 = createBrowserRouter([
  // { path: "/", element: <Home /> },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/exercises",
  //   element: <Exercise />,
  // },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export const routes2 = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "*",
    element: <Notfound />,
  },
]);






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={ Token ? routes2 : routes1} />
  </React.StrictMode>
);
