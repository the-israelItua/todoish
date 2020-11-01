import React from "react";
import businessImg from "../../assets/images/small-business.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const SmallbizTab = () => {
  return (
    <div className="testimony">
      <div className="card">
        <h1>"</h1>
        <h5>
          Todoist has revolutionized the way we run our small business by
          helping us simplify projects and coordinate tons of details.
        </h5>
        <div className="card-bottom">
          <p>Trevor Stephens</p>
          <div className="cta">
            <p>General Manager at Topline Builders</p>
            <Link to="/">
              <FaArrowRight />
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="testimony-img">
        <img src={businessImg} alt="business" />
      </div>
    </div>
  );
};

export default SmallbizTab;
