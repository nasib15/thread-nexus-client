import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-[260px] min-h-[80vh] mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
