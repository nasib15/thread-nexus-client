/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import useUser from "../hooks/useUser";
import Loading from "../components/Loading";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { userData = {}, isLoading } = useUser();
  const location = useLocation();
  const { user_role } = userData;
  const isAdmin = user_role === "admin";

  if (isLoading) return <Loading />;

  if (user && isAdmin) return children;

  return (
    <Navigate
      to={"/login"}
      state={location?.pathname}
      replace={true}
    ></Navigate>
  );
};

export default AdminRoute;
