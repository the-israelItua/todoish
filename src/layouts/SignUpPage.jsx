import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/images/todoistfavicon.ico";
import GoogleAuth from "../components/GoogleAuth";
import FacebookAuth from "../components/FacebookAuth";
import AppleAuth from "../components/AppleAuth";

const SignUpPage = () => {
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
          <h1>Sign Up</h1>
          <GoogleAuth />
          <FacebookAuth />
          <AppleAuth />
          <h5>OR</h5>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" required />
          </div>

          <div className="form-group">
            <div className="submit-btn">Sign up with E-mail</div>
          </div>
          <p className="tandc">
            By continuing with Google, Apple or Email, you agree to Todo-ish{" "}
            <Link to="/terms">Terms of service</Link> and{" "}
            <Link to="/privacy">Privacy Policies</Link>
          </p>
        </form>
        <div className="bottom">
          <p>
            Already signed up? <Link to="/login">Go to login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
