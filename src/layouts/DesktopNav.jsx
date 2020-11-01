import React, { useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/images/todoistfavicon.ico";
import { FaAngleDown } from "react-icons/fa";

const DeskTopNav = () => {
  const [expand, setExpand] = useState(false);
  const onExpand = () => {
    setExpand(!expand);
  };

  const display = expand ? "block" : "none";
  return (
    <div className="desktop-nav">
      <nav>
        <div className="navbar-logo">
          <img src={navlogo} alt="logo" />
          <h1>todo-ish</h1>
        </div>
        <ul className="nav-list">
          <li className="nav-item">Features</li>
          <li className="nav-item">Premium </li>
          <li className="nav-item">For Teams</li>
          <li className="nav-item" onMouseOver={onExpand}>
            Resources
            <FaAngleDown />
          </li>
        </ul>
        <div className="signin">
          <Link to="/login">
            <span className="login-btn">Login</span>
          </Link>
          <Link to="/signup">
            <span className="signup-btn">Signup</span>
          </Link>
        </div>
        <div
          className="dropdown"
          style={{ display: display }}
          onMouseOut={onExpand}
        >
          <div className="dropdown-item">
            <h5>Templates</h5>
            <p>
              Kickstart your next project with todo-ish templates for every
              occasion.{" "}
            </p>
          </div>
          <div className="dropdown-item">
            <h5>Getting started Guide.</h5>
            <p>
              Everything you need to know to get your todolist up and running
            </p>
          </div>
          <div className="dropdown-item">
            <h5>Productivity Methods + Quiz</h5>
            <p>
              Learn the most popular productivity methods and discover which one
              suits you best
            </p>
          </div>
          <div className="dropdown-item">
            <h5>Help Center</h5>
            <p>
              Find answers to your questions and tips on getting the most out of
              your todolist
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DeskTopNav;
