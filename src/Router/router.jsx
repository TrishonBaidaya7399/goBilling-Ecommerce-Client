import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Payment from "../Pages/PaymentPage/Payment";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <AllProducts/>
        },
        {
            path: "/payment",
            element: <Payment/>
        },
      ]
    },
  ]);