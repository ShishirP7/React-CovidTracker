import React from "react";
import NavBar from "../Components/NavBar/Navbar";
import MainRoutes from "../Routes/Routes";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="w-100 p-0 m-0">
        <MainRoutes />
      </div>
    </>
  );
}
