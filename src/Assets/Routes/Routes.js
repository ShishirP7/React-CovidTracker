import { Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "../Pages/LandingPage";
import Precaution from "../Pages/Precaution/Precaution";
import News from "../Pages/News/News";
import About from "../Pages/About/About";

export default function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Precaution" element={<Precaution />} />
        <Route path="/News" element={<News />} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </div>
  );
}
