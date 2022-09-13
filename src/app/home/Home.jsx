import "./home.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Dashboard from "../dashboard";
import Folder from "../folder";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/folder/:folderId" element={<Folder />} />
          <Route
            path="/folder/:folderId/:subFolderId"
            element={<Folder />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
