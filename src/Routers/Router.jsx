import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Letslearn from "../Components/Letslearn/Letslearn";
import Banner from "../Components/Banner/Banner";
import Lessonpage from "../Components/Lessonpage/Lessonpage";
import Tutorials from "../Components/Tutorials/Tutorials";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AboutUs from "../Components/Aboutus/AboutUs";
import AuthLayout from "../Components/AuthLayout/AuthLayout";
import Login from "../Components/AuthLayout/Login/Login";
import Register from "../Components/AuthLayout/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../Components/MyProfile/MyProfile";
import ProfileUpdate from "../Components/ProfileUpdate/ProfileUpdate";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import Success from "../Components/Success/Success";
import Statistics from "../Components/Statistics/Statistics";
import Testimonials from "../Components/Testimonials/Testimonials";
import Partners from "../Components/Partners/Partners";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
        children: [
          {
            path: "/",
            element: <AboutUs></AboutUs>,
            children: [
              {
                path: "/",
                element: <Success></Success>,
                children:[
                  {
                    path:'/',
                    element:<Testimonials></Testimonials>,
                    children:[
                      {
                        path:'/',
                        element:<Partners></Partners>
                      }
                    ]
                  }
                ]
              },
            ],
          },
        ],
      },
      {
        path: "/letslearn",
        element: <Letslearn></Letslearn>,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myprofile/updateprofile",
        element: <ProfileUpdate></ProfileUpdate>,
      },

      {
        path: "/lesson/:lesson_on",
        element: (
          <PrivateRoutes>
            <Lessonpage></Lessonpage>
          </PrivateRoutes>
        ),
        loader: () => fetch("/german_vocabulary.json"),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoutes>
            <Tutorials></Tutorials>
          </PrivateRoutes>
        ),
      },
      {
        path: "/statistics",
        element: (
          <PrivateRoutes>
            <Statistics></Statistics>
          </PrivateRoutes>
        ),
        loader: () => fetch("/german_vocabulary.json"),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgotpassword",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);

export default router;
