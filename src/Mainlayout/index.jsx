import React from "react";

import {  Outlet } from "react-router-dom";

import Navbar from "../components/navbar";

import SideBar from "../components/sidebar";


const MainLayout = () => {
  return (
    <>
      <div className="wrapper flex">
        <SideBar />
        <div className="main_side w-[90%]">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default MainLayout;
