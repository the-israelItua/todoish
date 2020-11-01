import React from "react";
import developersImg from "../../assets/images/developers.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const DevTab = () => {
  return (
    <div className="testimony">
      <div className="card">
        <h1>"</h1>
        <h5>
          As a software engineer, it’s useful to break down big projects into
          smaller tasks, and Todoist is perfect for that purpose.
        </h5>
        <div className="card-bottom">
          <p>Tigran Hakobyan</p>
          <div className="cta">
            <p>Senior Product Engineer at Buffer</p>
            <Link to="/">
              <FaArrowRight />
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="testimony-img">
        <img src={developersImg} alt="developers" />
      </div>
    </div>
  );
};

export default DevTab;
