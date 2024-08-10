import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import PostDetails from "../pages/PostDetails";
import Membership from "../pages/Membership";
import AddPost from "../pages/AddPost";
import MyPosts from "../pages/MyPosts";
import UserProfile from "../pages/UserProfile";
import AdminProfile from "../pages/AdminProfile";
import ManageUsers from "../pages/ManageUsers";
import ReportedComments from "../pages/ReportedComments";
import Announcements from "../pages/Announcements";
import Comments from "../pages/Comments";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Dashboard from "./../layout/Dashboard";

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
        element: (
          <PrivateRoute>
            <Membership />
          </PrivateRoute>
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
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
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
        path: "comments/:postId",
        element: <Comments />,
      },

      // Admin Routes
      {
        path: "admin-profile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "reported-comments",
        element: (
          <AdminRoute>
            <ReportedComments />
          </AdminRoute>
        ),
      },
      {
        path: "announcements",
        element: (
          <AdminRoute>
            <Announcements />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Router;
