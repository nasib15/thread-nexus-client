import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <ScrollRestoration />
        <Navbar></Navbar>
        <div className="min-h-[80vh] px-4">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
