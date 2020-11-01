import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import { FaEyeSlash } from "react-icons/fa";

const EmailAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (evt) => {
    evt.preventDefault();
    db.collection("users").add({
      email: email,
      password: password,
    });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        >
          Password
        </label>
        <input type="password" required />
        <span>
          <FaEyeSlash />
        </span>
      </div>
      <div className="form-group">
        <div className="submit-btn" onClick={signInHandler}>
          Log in
        </div>
      </div>
      <div className="check">
        <input type="checkbox" defaultChecked />
        Keep me logged in
      </div>
      <Link to="/">Forgot your password?</Link>
    </form>
  );
};

export default EmailAuth;
