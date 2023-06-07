import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: '',
      children: [
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

  export default router;