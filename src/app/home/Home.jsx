import "./home.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Dashboard from "../dashboard";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
