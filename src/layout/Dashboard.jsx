import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
