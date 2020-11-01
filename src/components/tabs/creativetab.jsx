import React from "react";
import creativesImg from "../../assets/images/creatives.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CreativeTab = () => {
  return (
    <div className="testimony">
      <div className="card">
        <h1>"</h1>
        <h5>
          I literally couldn’t do my job or even manage all the business of
          being a fully functioning parent and spouse without Todoist.
        </h5>
        <div className="card-bottom">
          <p>Khoi Vinh</p>
          <div className="cta">
            <p>Principal Designer at Adobe</p>
            <Link to="/">
              <FaArrowRight />
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="testimony-img">
        <img src={creativesImg} alt="creatives" />
      </div>
    </div>
  );
};

export default CreativeTab;
