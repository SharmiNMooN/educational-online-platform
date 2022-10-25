import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () =>
      fetch(
        "https://sikkhayon-academy-server-sharminmoon.vercel.app/course-categories"
      ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://sikkhayon-academy-server-sharminmoon.vercel.app/courses"
          ),
      },
    ],
  },
]);
