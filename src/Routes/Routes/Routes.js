import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Pages/Auth/Login/Login";
import Register from "../../Pages/Auth/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/Shared/Pages/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Faq from "../../Faq/Faq";
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
      {
        path: "/courses",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://sikkhayon-academy-server-sharminmoon.vercel.app/courses"
          ),
      },
      {
        path: "/courses/:id",
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(
            `https://sikkhayon-academy-server-sharminmoon.vercel.app/courses/${params.id}`
          ),
      },

      {
        path: "/checkout/:course_id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sikkhayon-academy-server-sharminmoon.vercel.app/courses/${params.course_id}`
          ),
      },
      {
        path: "/categories/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://sikkhayon-academy-server-sharminmoon.vercel.app/category-wise-course/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
