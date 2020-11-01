import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPlayCircle,
  FaStar,
  FaAmazon,
  FaFacebook,
  FaStripe,
  FaSpotify,
  FaSoundcloud,
} from "react-icons/fa";
import NavBar from "./NavBar";
import Footer from "./Footer";
import bannerImg from "../assets/images/banner_img.jpg";
import bannerImg2 from "../assets/images/banner-img2.jpg";
import bannerPhone from "../assets/images/banner-img-phone.jpg";
import video from "../assets/images/video.jpg";
import videobg from "../assets/images/videobg.jpg";
import TabsComp from "../components/tabComp";
import missionImg from "../assets/images/mission.jpg";
import peaceImg from "../assets/images/peace.jpg";

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <div className="banner">
        <div className="banner-text">Organize it all with Todo-ish</div>

        <div className="banner-btn">Get Started</div>
      </div>
      <div className="banner-img">
        <img src={bannerImg} alt="bannerImg" className="top" />
        <img src={bannerImg2} alt="bannerimg" className="desktop" />
        <img src={bannerPhone} className="phone" alt="bannerimg" />
      </div>
      <div className="banner-section">
        <h2>Free up your mental space</h2>
        <p>
          Regain clarity and calmness by getting all those tasks out of your
          head and onto your to-do list (no matter where you are or what device
          you use).
        </p>
        <div className="links">
          <div className="browse">
            <Link to="/" className="browse">
              <FaArrowRight />
              Browse Todo-ish features
            </Link>
          </div>
          <div className="action">
            <Link to="/" className="action">
              <FaPlayCircle />
              See Todo-ish in action
            </Link>
          </div>
        </div>
      </div>
      <div className="app-section">
        <div className="column">
          <p>Google Play</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h1>Editors Choice</h1>
          <h1>4.7 stars, 187k+ reviews</h1>
        </div>
        <div className="column">
          <p>App store</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h1>Featured App</h1>
          <h1>4.8 stars, 30k+ reviews</h1>
        </div>
        <div className="column">
          <p>The verge</p>
          <h1>9/10</h1>
          <h1>"The best todo-list app right now"</h1>
        </div>
      </div>
      <div className="video-section">
        <div className="text">
          <h5>
            Todo-ish has helped <br />
            millions of people complete
          </h5>
          <h1>
            over <strong>1.5</strong> billion tasks in <strong>150+</strong>{" "}
            million projects
          </h1>
          <div className="logos">
            <FaAmazon />
            <FaFacebook />
            <FaStripe />
            <FaSpotify />
            <FaSoundcloud />
          </div>
        </div>
        <div className="video">
          <img src={videobg} alt="videobg" className="videobg" />
          <img src={video} alt="video" className="vid" />
          <div className="play">
            <FaPlayCircle />
          </div>

          <div className="btn-text">
            <Link to="/">
              <FaArrowRight />
              Learn more about the todo-ish community
            </Link>
          </div>
        </div>
      </div>
      <TabsComp />
      <div className="mission">
        <div className="mission-text">
          <h1>A task manager you can trust for life</h1>
          <p>
            In the 13 years and 162 days that we’ve been building Todoist, we’ve
            never considered selling out or becoming acquired.
            <br />
            <br />
            Our team is committed to staying independent and earning your trust
            for as long as you need our apps.
          </p>
          <Link to="/">
            <FaArrowRight />
            Learn about our long term mission
          </Link>
        </div>
        <div className="mission-img">
          <img src={missionImg} alt="mission" />
        </div>
      </div>
      <div className="peace">
        <div className="peace-img">
          <img src={peaceImg} alt="peace" />
        </div>
        <div className="peace-text">
          Achieve peace of mind with Todoist
          <Link to="/login">
            <div className="peace-btn">Get Started</div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
