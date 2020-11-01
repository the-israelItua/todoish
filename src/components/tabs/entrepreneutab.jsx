import React from "react";
import entrepreneursImg from "../../assets/images/entrepreneurs.jpg";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

const EnterpreneurTab = () => {
  return (
    <div className="testimony">
      <div className="card">
        <h1>"</h1>
        <h5>
          Todoist gave us the focus to scale our company from 2 to 75 employees,
          $12M in VC financing, and 350+ happy enterprise customers.
        </h5>
        <div className="card-bottom">
          <p>Andrew Montalenti</p>
          <div className="cta">
            <p>CTO at Parse.ly</p>
            <Link to="/">
              <FaPlayCircle />
              See the video
            </Link>
          </div>
        </div>
      </div>
      <div className="testimony-img">
        <img src={entrepreneursImg} alt="entrepreneurs" />
      </div>
    </div>
  );
};

export default EnterpreneurTab;
