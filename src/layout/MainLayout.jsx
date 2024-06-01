import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-7xl w-[95%] mx-auto px-4">
        <Navbar></Navbar>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
