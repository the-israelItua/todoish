import React, { useState } from "react";
import { connect } from "react-redux";
import { loadComp, setSidebar } from "../store/actions";
import {
  FaInbox,
  FaCalendarDay,
  FaRegCalendar,
  FaChevronDown,
  FaChevronRight,
  FaPlus,
  FaRegSave,
} from "react-icons/fa";

const Sidebar = (props) => {
  const [current, setCurrent] = useState("inbox");
  const onCompChange = (text) => {
    props.loadComp(text);
    setCurrent(text);
    props.setSidebar("hide");
  };

  return (
    <div className={`sidebar ${props.sidebar === "hide" ? "hide" : "show"}`}>
      <ul className="sidebar-top">
        <li
          className={`inbox ${current === "inbox" ? "active" : null}`}
          onClick={() => onCompChange("inbox")}
        >
          <FaInbox />
          Inbox
        </li>
        <li
          className={`today ${current === "today" ? "active" : null}`}
          onClick={() => onCompChange("today")}
        >
          <FaCalendarDay />
          Today
        </li>
        <li
          className={`upcoming ${current === "upcoming" ? "active" : null}`}
          onClick={() => onCompChange("upcoming")}
        >
          <FaRegCalendar />
          Upcoming
        </li>
        <li
          className={`upcoming ${current === "archives" ? "active" : null}`}
          onClick={() => onCompChange("archives")}
        >
          <FaRegSave /> Archive
        </li>
      </ul>
      <div className="sidebar-middle">
        <div className="header">
          <FaChevronDown />
          <h5>Projects</h5>
        </div>

        <div className="projects">
          <ul>
            <li>Welcome</li>
          </ul>
          <FaPlus /> Add Project
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="header">Archived Projects</div>
        <h5>
          <FaChevronRight /> Labels
        </h5>
        <h5>
          <FaChevronRight /> Filters
        </h5>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

export default connect(mapStateToProps, { loadComp, setSidebar })(Sidebar);
