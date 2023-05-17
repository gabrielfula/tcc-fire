import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

export default function MainPage() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
