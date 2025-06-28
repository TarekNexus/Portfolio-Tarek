import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="relative ">




      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-150px)] relative">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Root;
