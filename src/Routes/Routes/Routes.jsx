import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../../Layout/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: '',
      children: [
 
      ]
    },
  ]);

  export default router;