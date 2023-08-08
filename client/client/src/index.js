import * as React from "react"
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "./Style.css"
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Explore from "./Pages/Explore";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "App",
        element: <App />,
    },
    {
        path: "Explore",
        element: <App />,
    },
    {
        path: "Create",
        element: <App />,
    },



]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <RouterProvider router={router} />
    </>
);
reportWebVitals();

