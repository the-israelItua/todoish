import React, { useState } from "react";
import { connect } from "react-redux";
import { setSidebar } from "../store/actions";
import {
  FaAlignJustify,
  FaHome,
  FaSearch,
  FaPlus,
  FaBell,
  FaExternalLinkAlt,
  FaCog,
  FaTimes,
} from "react-icons/fa";

const Header = (props) => {
  const [show, setShow] = useState(true);
  const onClickBtn = () => {
    const text = show ? "show" : "hide";
    props.setSidebar(text);
    setShow(!show);
  };
  return (
    <header>
      <nav>
        <div className="nav-left">
          <div onClick={onClickBtn}>
            {show ? <FaAlignJustify /> : <FaTimes />}
          </div>

          <FaHome />
          <div className="search">
            <input type="text" placeholder="Find" className="search-input" />
            <FaSearch />
          </div>
        </div>
        <div className="nav-right">
          <FaPlus />
          <FaExternalLinkAlt />
          0/5
          <FaBell />
          <FaCog />
        </div>
      </nav>
    </header>
  );
};

export default connect(null, { setSidebar })(Header);
