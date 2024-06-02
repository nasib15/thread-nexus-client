import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import PostDetails from "../pages/PostDetails";
import Membership from "../pages/Membership";
import Dashboard from "../layout/Dashboard";
import UserProfile from "./../pages/UserProfile";
import AddPost from "../pages/AddPost";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/post-details/:id",
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "add-post",
        element: <AddPost />,
      },
    ],
  },
]);

export default Router;
