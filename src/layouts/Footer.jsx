import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGlobe,
  FaCaretDown,
} from "react-icons/fa";
import logo from "../assets/images/todoistfavicon.ico";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot-notes">
          <div className="header">
            <img src={logo} alt="logo" />
            <p>
              Join millions of people who organize work and life with Todo-ish.
            </p>
          </div>
          <div className="icons">
            <FaFacebook /> <FaTwitter /> <FaYoutube /> <FaInstagram />
          </div>
        </div>
        <div className="col">
          <p>Features</p>
          <ul>
            <li>
              <Link to="/">How It Works</Link>
            </li>
            <li>
              <Link to="/">Premium</Link>
            </li>
            <li>
              <Link to="/">For Teams</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Templates</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <p>Resources</p>
          <ul>
            <li>
              <Link to="/">Download Apps</Link>
            </li>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Productivity Methods</Link>
            </li>
            <li>
              <Link to="/">Refer a friend</Link>
            </li>
            <li>
              <Link to="/">Integrations</Link>
            </li>
            <li>
              <Link to="/">Ambassadors</Link>
            </li>
            <li>
              <Link to="/">Developer API</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <p>Company</p>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">We are hiring!</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Press</Link>
            </li>
            <li>
              <Link to="/">Twist</Link>
              <strong>New</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li>
            <Link to="/">Security</Link>
          </li>
          <li>
            <Link to="/">Privacy</Link>
          </li>
          <li>
            <Link to="/">Terms</Link>
          </li>
        </ul>
        <h5>&copy; israelItua</h5>
        <div className="footer-btn">
          <FaGlobe />
          &nbsp; English
          <FaCaretDown />
        </div>
      </div>
    </>
  );
};

export default Footer;
