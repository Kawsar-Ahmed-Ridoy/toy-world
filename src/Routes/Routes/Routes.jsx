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
import AddAToy from "../../Pages/AddAToy/AddAToy";
import MyToys from "../../Pages/MyToys/MyToys";
import Update from "../../Pages/Update/Update";

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
        path: 'addAToy',
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: 'myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path:'allToys',
        element: <AllToys></AllToys>,
        loader: ()=> fetch('https://toy-world-server-kawsar-ahmed-ridoy.vercel.app//addAToy')
      },
      {
        path: 'toy/:id',
        element: <PrivateRoute><SIngleToy></SIngleToy></PrivateRoute>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "singleToyPageDetails/:id",
        element: <PrivateRoute><SingleToyDetailsPage></SingleToyDetailsPage></PrivateRoute>,     
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://toy-world-server-kawsar-ahmed-ridoy.vercel.app//myToys/${params.id}`)
      }
    ]
  }
]);

export default router;
