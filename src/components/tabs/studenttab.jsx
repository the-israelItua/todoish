import React from "react";
import studentImg from "../../assets/images/students.jpg";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

const StudentTab = () => {
  return (
    <div className="testimony">
      <div className="card">
        <h1>"</h1>
        <h5>
          I kept track of all my school tasks in Todoist and, in 2016, I became
          the first one in my family to obtain a bachelor’s degree.
        </h5>
        <div className="card-bottom">
          <p>Samantha Houston</p>
          <div className="cta">
            <p>Software Engineer</p>
            <Link to="/">
              <FaPlayCircle />
              See the Video
            </Link>
          </div>
        </div>
      </div>
      <div className="testimony-img">
        <img src={studentImg} alt="student" />
      </div>
    </div>
  );
};

export default StudentTab;
