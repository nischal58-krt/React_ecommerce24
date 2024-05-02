import React from 'react'
import RootElement from "./components/home/common/RootElement";
import Home from './pages/Home';
import Login from './pages/Login';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Signup from './pages/Signup';
import Products from './pages/products/Products';
import Slug from './pages/products/Slug';
import Cart from './pages/Cart';

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
            path: "cart",
            element: <Cart/>,
          },
          {
            path: "login",
            children:[
              {
                path:"",
                element: <Login/>,
              },
              {
                path: "signup",
                element: <Signup/>,
              },
              
            ]
          },
         
          {
            path: "products",
            children:[
              {
                path: "",
                element: <Products />,
              },
              {
                path: ":slug",
                element: <Slug />,
              },
            ]
    
          },
        ],
      },
    ]);
  
    return (
      <>
        <div className=''>
          <RouterProvider router={router} />
        </div>
       
      </>
    );
}
export default App