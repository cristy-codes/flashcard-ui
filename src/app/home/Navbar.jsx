import "./navbar.css";
import React from "react";
import Title from "../../assets/images/title.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <img src={Title} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
