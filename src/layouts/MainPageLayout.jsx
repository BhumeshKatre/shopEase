import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainPageLayout = () => {
  return (
    <>
      <Navbar />
      <main className="w-screen">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default MainPageLayout;
