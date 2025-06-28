import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
 <div className="absolute inset-0 -z-10 h-full w-full bg-white 
  bg-[linear-gradient(to_right,#0039340d_1px,transparent_1px),linear-gradient(to_bottom,#0039340d_1px,transparent_1px)] 
  bg-[size:6rem_4rem]"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#00393433,transparent)]"></div>
</div>

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
