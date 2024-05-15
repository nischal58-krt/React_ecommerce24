import React, { useEffect, useState } from "react";
import RootElement from "./components/home/common/RootElement";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Products from "./pages/products/Products";
import Slug from "./pages/products/Slug";
import Cart from "./pages/Cart";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUser } from "./redux/slice/userSlice";
import SellerProduct from "./pages/seller/SellerProduct";
import AddProduct from "./pages/seller/AddProduct";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootElement />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "sellers",
          children: [
            {
              path: "products",
              children: [
                {
                  path: "",
                  element: <SellerProduct />,
                },
                {
                  path: "add",
                  element: <AddProduct />,
                },
              ],
            },
          ],
        },

        {
          path: "login",
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "signup",
              element: <Signup />,
            },
          ],
        },

        {
          path: "products",
          children: [
            {
              path: "",
              element: <Products />,
            },
            {
              path: ":slug",
              element: <Slug />,
            },
          ],
        },
      ],
    },
  ]);
  const dispatch = useDispatch;
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setReduxUser(res.data));
          setisLoading(false);
        })
        .catch((err) => {
          setisLoading(false);
        });
    } else {
      setisLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className=" flex h-screen items-center justify-center">
          is loading....
        </div>
      ) : (
        <div className="font-lato">
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
}
export default App;
