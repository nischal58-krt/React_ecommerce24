import React from 'react'
import RootElement from "./components/home/RootElement";
import Home from './pages/Home';
import Login from './pages/Login';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Signup from './pages/Signup';

function App() {
    const router = createBrowserRouter([
      {
        path: "",
        element: <RootElement/>,
        children:[
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "login",
            element: <Login/>,
          },
        ],
      },
    ]);
  
    return (
      <>
        <div>
          <RouterProvider router={router} />
        </div>
       
      </>
    );
}
export default App