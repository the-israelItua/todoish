import React from "react";
import { connect } from "react-redux";
import { setIndexSidebar } from "../store/actions";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import navlogo from "../assets/images/todoistfavicon.ico";
import { Link } from "react-router-dom";

const MobileNav = (props) => {
  const style = props.sidebar ? "0" : "-500px";
  return (
    <div className="mobile-nav">
      <nav>
        <div className="navbar-logo">
          <img src={navlogo} alt="logo" />
        </div>
        <div className="align-btn" onClick={() => props.setIndexSidebar()}>
          {props.sidebar ? <FaTimes /> : <FaAlignJustify />}
        </div>
      </nav>
      <div className="index-sidebar" style={{ right: style }}>
        <ul>
          <li>Features</li>
          <li>Premium</li>
          <li>For Teams</li>
        </ul>
        <div className="buttons">
          <Link to="/login" className="login-btn">
            {" "}
            <span>Login</span>
          </Link>
          <Link to="/signin" className="signin-btn">
            {" "}
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sidebar: state.indexSidebar,
  };
};
export default connect(mapStateToProps, { setIndexSidebar })(MobileNav);
