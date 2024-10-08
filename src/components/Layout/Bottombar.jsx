import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Bottombar = () => {
  return (
    <div className="wrapperBtmNav">
      <ul className="list1">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About Us</li>
        </Link>
        <Link to={"/services"}>
          <li>Service</li>
        </Link>

        <Link to={"/contact"}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Bottombar;
