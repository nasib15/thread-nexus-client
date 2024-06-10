import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const Dashboard = () => {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
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
