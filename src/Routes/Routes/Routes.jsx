import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SingleToyDetailsPage from "../../Pages/SingleToyDetailsPage/SingleToyDetailsPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllToys from "../../Pages/AllToys/AllToys";
import SIngleToy from "../../Pages/SIngleToy/SIngleToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path:'allToys',
        element: <AllToys></AllToys>
      },
      {
        path: 'toy/:id',
        element: <SIngleToy></SIngleToy>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "singleToyPageDetails/:id",
        element: <PrivateRoute><SingleToyDetailsPage></SingleToyDetailsPage></PrivateRoute>,
        
      }
    ]
  }
]);

export default router;
