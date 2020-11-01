import React from "react";
import freelancerImg from "../../assets/images/freelancer.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const FreelancerTab = () => {
  return (
    <div className="testimony">
      <div className="card">
        <h1>"</h1>
        <h5>
          Todoist helps me organize all my writing projects. And that makes it
          an indispensable tool both in business and in life.
        </h5>
        <div className="card-bottom">
          <p>Jennifer Mattern</p>
          <div className="cta">
            <p>Freelancer Writer</p>
            <Link to="/">
              <FaArrowRight />
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="testimony-img">
        <img src={freelancerImg} alt="freelancer" />
      </div>
    </div>
  );
};

export default FreelancerTab;
