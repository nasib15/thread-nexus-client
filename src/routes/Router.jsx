import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import PostDetails from "../pages/PostDetails";
import Membership from "../pages/Membership";
import Dashboard from "../layout/Dashboard";
import AddPost from "../pages/AddPost";
import MyPosts from "../pages/MyPosts";
import UserProfile from "../pages/UserProfile";
import AdminProfile from "../pages/AdminProfile";
import ManageUsers from "../pages/ManageUsers";
import ReportedComments from "../pages/ReportedComments";
import Announcements from "../pages/Announcements";

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
      {
        path: "my-posts",
        element: <MyPosts />,
      },
      {
        path: "admin-profile",
        element: <AdminProfile />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "reported-comments",
        element: <ReportedComments />,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
    ],
  },
]);

export default Router;
