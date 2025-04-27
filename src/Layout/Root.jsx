import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
