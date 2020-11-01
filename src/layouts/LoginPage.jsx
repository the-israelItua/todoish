import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/images/todoistfavicon.ico";
import EmailAuth from "../components/EmailAuth";
import GoogleAuth from "../components/GoogleAuth";
import FacebookAuth from "../components/FacebookAuth";
import AppleAuth from "../components/AppleAuth";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <div className="navbar-logo">
          <Link to="/">
            <img src={navlogo} alt="logo" />
          </Link>
          <Link to="/">
            <h1>todo-ish</h1>
          </Link>
        </div>

        <div className="top">
          <h1>Login</h1>
          <GoogleAuth />
          <FacebookAuth />
          <AppleAuth />
          <h5>OR</h5>
        </div>
        <EmailAuth />
        <div className="bottom">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          <h5>Todoist Support </h5>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
