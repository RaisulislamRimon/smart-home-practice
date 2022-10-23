import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Root from "../components/Root";
import Shop from "../components/Shop";
import getCartAndProductsData from "../loaders/getCartAndProductsData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getCartAndProductsData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
