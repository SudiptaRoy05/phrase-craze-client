import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Letslearn from "../Components/Letslearn/Letslearn";
import Banner from "../Components/Banner/Banner";
import Lessonpage from "../Components/Lessonpage/Lessonpage";
import Tutorials from "../Components/Tutorials/Tutorials";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AboutUs from "../Components/Aboutus/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
        children:[
          {
            path:'/',
            element:<AboutUs></AboutUs>
          }
        ]

      },
      {
        path: "/letslearn",
        element: <Letslearn></Letslearn>,
      },
      {
        path: "/lesson/:lesson_on",
        element: <Lessonpage></Lessonpage>,
        loader: () => fetch("/german_vocabulary.json"),
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
    ],
  },
]);

export default router;
